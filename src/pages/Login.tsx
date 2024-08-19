/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance, axiosLogin } from "@/api/base";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useStore from "@/store/store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
  const navigate = useNavigate();
  const setToken = useStore((state: any) => state.setToken);

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const response = await axiosLogin.post("/auth/login/", login);

      const data = await response.data;
      setResponse(data);
      setToken(data.Token);

      localStorage.setItem("token", data.Token);

      // Update axiosInstance with the new token
      axiosInstance.defaults.headers["Authorization"] = `Token ${data.Token}`;

      navigate("/home");

      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  console.log(response);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              onChange={(e) => setLogin({ ...login, username: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              required
              onChange={(e) => setLogin({ ...login, password: e.target.value })}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            disabled={loading}
            className="w-full"
            onClick={handleClick}
          >
            Sign in
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
