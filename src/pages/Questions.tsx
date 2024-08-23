/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { axiosInstance } from "@/api/base";

function Questions() {
  const [questions, setQuestions] = useState([]);
  const [section, setSection] = useState([]);
  const [questionPost, setQuestionPost] = useState({
    text: "",
    question_type: "input",
    section: "",
    options: "",
    subsection: "",
    subsubsection: "",
  });
  const [selectData, setSelectData] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [subSections, setSubSections] = useState({
    id: "",
    title: "",
  });
  const [subSubSections, setSubSubSections] = useState({
    id: "",
    title: "",
  });

  const rowsPerPage = 4;
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);

  useEffect(() => {
    // fetch question from django localhost
    // const fetchQuestions = async () => {
    //   const response = await fetch(
    //     "http://127.0.0.1:8000/api/question/questions/"
    //   );
    //   const data = await response.json();
    //   setQuestions(data);
    //   console.log(data, "questions");
    // };
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("question/questions/");

        const data = await response.data;
        setQuestions(data);
        console.log(data, "questions");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    // fetch section from django localhost
    // const fetchSection = async () => {
    //   const response = await fetch(
    //     "http://127.0.0.1:8000/api/question/sections/"
    //   );
    //   const data = await response.json();
    //   setSection(data);
    //   console.log(data);
    // };

    const fetchSection = async () => {
      const response = await axiosInstance.get("question/sections/");
      const data = await response.data;
      setSection(data);
      console.log(data);
    };

    fetchSection();
  }, []);

  const handleClick = async () => {
    try {
      // const response = await fetch(
      //   "http://127.0.0.1:8000/api/question/sections/",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       questionnaire: "1",
      //       title: selectData.title,
      //       description: selectData.description,
      //     }),
      //   }
      // );

      const response = await axiosInstance.post("question/sections/", {
        questionnaire: "1",
        title: selectData.title,
        description: selectData.description,
      });

      const data = await response.data;
      setSection((data: any): any => [...data, data]);
      // message alert
      alert("Section added successfully");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const postQuestion = async () => {
    console.log(questionPost);
    const opt = questionPost.options.split(",");
    try {
      // const response = await fetch(
      //   "http://127.0.0.1:8000/api/question/questions/",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       text: questionPost.text,
      //       question_type: questionPost.question_type,
      //       section: questionPost.section,
      //       options: opt,
      //     }),
      //   }

      const response = await axiosInstance.post("question/questions/", {
        text: questionPost.text,
        question_type: questionPost.question_type,
        section: questionPost.section,
        options: opt,
        subsection: questionPost.subsection,
        subsubsection: questionPost.subsubsection,
      });

      const newQuestion = await response.data;
      setQuestions((prevQuestions: any): any => [
        ...prevQuestions,
        newQuestion,
      ]);
      // message alert
      alert("Question added successfully");
      console.log(newQuestion);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id: any) => {
    console.log("delete");
    alert(id);
    try {
      await axiosInstance.delete(`question/questions/${id}/`);
      // filterout the deleted question
      setQuestions(questions.filter((question: any) => question.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (question: any) => {
    setSelectedQuestion(question); // Set the selected question data
    setOpenEdit(true); // Open the edit modal
  };

  const handlePostSubSection = async () => {
    try {
      await axiosInstance.post(`question/subsections/`, {
        title: subSections.title,
        section: subSections.id,
        description: "hello",
      });
      alert("SubSection added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handlePostSubSubSection = async () => {
    try {
      await axiosInstance.post(`question/subsubsections/`, {
        title: subSubSections.title,
        subsection: subSubSections.id,
        description: "hello",
      });
      alert("SubSection 2 added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Questions</h1>
      {/* {questions.length > 0 &&
        questions?.map((question) => (
          <div key={question.id}>
            <h2>{question.text}</h2>
            <p>{question.question_description}</p>
          </div>
        ))} */}
      <div className="flex justify-end gap-5">
        {/* <AddSection /> */}

        <Dialog>
          <DialogTrigger>
            <Button variant="outline">Add Section</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
            </DialogHeader>

            <div>
              <Label>Title</Label>
              <Input
                onChange={(e) =>
                  setSelectData({ ...selectData, title: e.target.value })
                }
              />
            </div>
            <div>
              <Label>Description</Label>
              <Input
                onChange={(e) =>
                  setSelectData({ ...selectData, description: e.target.value })
                }
              />
            </div>
            <DialogFooter>
              <DialogClose>
                <Button type="submit" onClick={handleClick}>
                  Add Section
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* <AddSubSection /> */}

        <Dialog>
          <DialogTrigger>
            <Button variant="outline">Add Sub Section</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
            </DialogHeader>

            {/* <div>
              <Label>Title</Label>
              <Input
                onChange={(e) =>
                  setSelectData({ ...selectData, title: e.target.value })
                }
              />
            </div> */}
            <div>
              <Label>Section</Label>
              <Select
                defaultValue="1"
                onValueChange={(value) =>
                  setSubSections({ ...subSections, id: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  {/* map section */}
                  {section &&
                    section.map((section: any) => (
                      <SelectItem key={section.id} value={section.id}>
                        {section.title}
                      </SelectItem>
                    ))}
                  {/* <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem> */}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Title</Label>
              <Input
                onChange={(e) =>
                  setSubSections({ ...subSections, title: e.target.value })
                }
              />
            </div>
            <DialogFooter>
              <DialogClose>
                <Button type="submit" onClick={handlePostSubSection}>
                  Add Sub Section
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* <AddSubSubSection /> */}

        <Dialog>
          <DialogTrigger>
            <Button variant="outline">Add Sub Section 2</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
            </DialogHeader>

            {/* <div>
              <Label>Title</Label>
              <Input
                onChange={(e) =>
                  setSelectData({ ...selectData, title: e.target.value })
                }
              />
            </div> */}
            <div>
              <Label>Sub Section</Label>
              <Select
                defaultValue="1"
                onValueChange={(value) =>
                  setSubSubSections({ ...subSubSections, id: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  {/* map section */}
                  {section &&
                    section.map((section: any) => {
                      if (section.subsections) {
                        return section.subsections.map((section: any) => (
                          <SelectItem key={section.id} value={section.id}>
                            {section.title}
                          </SelectItem>
                        ));
                      }
                    })}
                  {/* <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem> */}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Title</Label>
              <Input
                onChange={(e) =>
                  setSubSubSections({
                    ...subSubSections,
                    title: e.target.value,
                  })
                }
              />
            </div>
            <DialogFooter>
              <DialogClose>
                <Button type="submit" onClick={handlePostSubSubSection}>
                  Add Sub Section 2
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* <AddQuestion /> */}

        <Dialog>
          <DialogTrigger>
            <Button variant="outline">Add Question</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
            </DialogHeader>
            <div>
              <Label>Section</Label>
              <Select
                defaultValue="1"
                onValueChange={(value) =>
                  setQuestionPost({ ...questionPost, section: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  {/* map section */}
                  {section &&
                    section.map((section: any) => (
                      <SelectItem key={section.id} value={section.id}>
                        {section.title}
                      </SelectItem>
                    ))}
                  {/* <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem> */}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Sub Section</Label>
              <Select
                defaultValue="1"
                onValueChange={(value) =>
                  setQuestionPost({ ...questionPost, subsection: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  {/* map section */}
                  {section &&
                    section.map((section: any) => {
                      if (section.subsections) {
                        return section.subsections.map((section: any) => (
                          <SelectItem key={section.id} value={section.id}>
                            {section.title}
                          </SelectItem>
                        ));
                      }
                    })}
                  {/* <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem> */}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Sub Section 2</Label>
              <Select
                defaultValue="1"
                onValueChange={(value) =>
                  setQuestionPost({ ...questionPost, subsubsection: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  {/* map section */}
                  {section &&
                    section.map((section: any) => {
                      if (section.subsections) {
                        return section.subsections.map((section: any) => {
                          if (
                            section.subsubsections &&
                            section.subsubsections.length > 0
                          ) {
                            return section.subsubsections.map(
                              (section: any) => {
                                return (
                                  <SelectItem
                                    key={section.id}
                                    value={section.id}
                                  >
                                    {section.title}
                                  </SelectItem>
                                );
                              }
                            );
                          }
                        });
                      }
                    })}
                  {/* <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem> */}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Question Type</Label>

              <RadioGroup
                defaultValue="input"
                onValueChange={(value) =>
                  setQuestionPost({ ...questionPost, question_type: value })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="input" id="option-one" />
                  <Label htmlFor="option-one">Input</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="radio" id="option-two" />
                  <Label htmlFor="option-two">Radio</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>Title</Label>
              <Input
                onChange={(e) =>
                  setQuestionPost({ ...questionPost, text: e.target.value })
                }
              />
            </div>

            {questionPost.question_type === "radio" && (
              <div>
                <Label>Options</Label>
                <Input
                  onChange={(e) =>
                    setQuestionPost({
                      ...questionPost,
                      options: e.target.value,
                    })
                  }
                />
              </div>
            )}
            <DialogFooter>
              <DialogClose>
                <Button type="submit" onClick={postQuestion}>
                  Add Question
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Table */}

      <Table className="mt-5 h-10">
        <TableCaption>A list of your recent questions.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Question</TableHead>
            <TableHead>Section</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Options</TableHead>
          </TableRow>
        </TableHeader>
        {loading ? (
          <TableBody className="text-center">Loading...</TableBody>
        ) : (
          <TableBody>
            {questions.length > 0 &&
              questions.slice(startIndex, endIndex).map((question: any) => (
                <TableRow>
                  <TableCell>{question.text}</TableCell>
                  <TableCell>{question.section}</TableCell>
                  <TableCell>{question.question_type}</TableCell>
                  <TableCell>{question.options}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>
                          <h3 onClick={() => handleEditClick(question)}>
                            Edit
                          </h3>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <h3 onClick={() => handleDelete(question.id)}>
                            Delete
                          </h3>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        )}
      </Table>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={
                startIndex === 0 ? "pointer-events-none opacity-50" : undefined
              }
              onClick={() => {
                setStartIndex(startIndex - rowsPerPage);
                setEndIndex(endIndex - rowsPerPage);
              }}
            />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              className={
                endIndex === 100 ? "pointer-events-none opacity-50" : undefined
              }
              onClick={() => {
                setStartIndex(startIndex + rowsPerPage); //10
                setEndIndex(endIndex + rowsPerPage); //10 + 10 = 20
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <EditComponent
        open={openEdit}
        setOpen={setOpenEdit}
        selectedQuestion={selectedQuestion} // Pass the selected question data to the EditComponent
        sections={section} // Pass sections for selection in the modal
      />
    </div>
  );
}

export default Questions;

// Edit Component

function EditComponent({ open, setOpen, selectedQuestion, sections }: any) {
  const [questionPost, setQuestionPost] = useState({
    text: selectedQuestion?.text || "",
    question_type: selectedQuestion?.question_type || "input",
    section: selectedQuestion?.section || "",
    options: selectedQuestion?.options?.join(",") || "",
  });

  useEffect(() => {
    setQuestionPost({
      text: selectedQuestion?.text || "",
      question_type: selectedQuestion?.question_type || "input",
      section: selectedQuestion?.section || "",
      options: selectedQuestion?.options?.join(",") || "",
    });
  }, [selectedQuestion]);

  const handleUpdate = async () => {
    try {
      const opt = questionPost.options.split(",");
      await axiosInstance.put(`question/questions/${selectedQuestion.id}/`, {
        text: questionPost.text,
        question_type: questionPost.question_type,
        section: questionPost.section,
        options: opt,
      });
      alert("Question updated successfully");
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Question</DialogTitle>
        </DialogHeader>
        <div>
          <Label>Section</Label>
          <Select
            value={questionPost.section}
            onValueChange={(value) =>
              setQuestionPost({ ...questionPost, section: value })
            }
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Section" />
            </SelectTrigger>
            <SelectContent>
              {sections &&
                sections.map((section: any) => (
                  <SelectItem key={section.id} value={section.id}>
                    {section.title}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Question Type</Label>
          <RadioGroup
            value={questionPost.question_type}
            onValueChange={(value) =>
              setQuestionPost({ ...questionPost, question_type: value })
            }
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="input" id="option-one" />
              <Label htmlFor="option-one">Input</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="radio" id="option-two" />
              <Label htmlFor="option-two">Radio</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <Label>Title</Label>
          <Input
            value={questionPost.text}
            onChange={(e) =>
              setQuestionPost({ ...questionPost, text: e.target.value })
            }
          />
        </div>

        {questionPost.question_type === "radio" && (
          <div>
            <Label>Options</Label>
            <Input
              value={questionPost.options}
              onChange={(e) =>
                setQuestionPost({ ...questionPost, options: e.target.value })
              }
            />
          </div>
        )}
        <DialogFooter>
          <Button type="submit" onClick={handleUpdate}>
            Update Question
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
