const formFields = [
  {
    name: "activity_date",
    label: "What is the date on which the activity is going to be conducted?",
    type: "text", // Assuming date input, but you can use a date picker if available
    placeholder: "YYYY-MM-DD",
  },
  {
    name: "division",
    label: "In which division is the activity being conducted?",
    type: "radio",
    options: [
      { label: "Central", value: "central" },
      { label: "Nakawa", value: "nakawa" },
      { label: "Lubaga", value: "lubaga" },
      { label: "Kawempe", value: "kawempe" },
      { label: "Makindye", value: "makindye" },
    ],
  },
  {
    name: "parish",
    label: "In which parish is the activity being conducted?",
    type: "text",
    placeholder: "Enter parish name",
  },
  {
    name: "village",
    label: "In which village is the activity being conducted?",
    type: "text",
    placeholder: "Enter village name",
  },
  {
    name: "physical_location",
    label: "Describe the physical location of the activity.",
    type: "text",
    placeholder: "Enter physical location description",
  },
  {
    name: "gps_location",
    label: "Record the exact location of the Household using GPS",
    type: "text",
    placeholder: "Enter GPS coordinates",
  },
];

const one = [
  {
    name: "respondent_name",
    label: "Respondent's name:",
    type: "text",
    placeholder: "Enter respondent's name",
  },
  {
    name: "gender",
    label: "Gender of the respondent",
    type: "radio",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
  },
  {
    name: "respondent_phone",
    label: "Respondent's phone contact(s):",
    type: "text",
    placeholder: "Enter phone number",
  },
  {
    name: "status",
    label: "Are you a landlord/tenant/caretaker?",
    type: "radio",
    options: [
      { label: "Landlord", value: "landlord" },
      { label: "Tenant", value: "tenant" },
      { label: "Caretaker", value: "caretaker" },
      { label: "Other (please specify)", value: "other" },
    ],
  },
  {
    name: "landlord_name",
    label:
      "If the respondent is not the landlord, please provide the name of the Landlord?",
    type: "text",
    placeholder: "Enter landlord's name",
  },
  {
    name: "landlord_phone",
    label: "Landlord's phone contact(s):",
    type: "text",
    placeholder: "Enter landlord's phone number",
  },
];

const two = [
  {
    name: "water_source",
    label:
      "What is the main drinking water source for most households or premises?",
    type: "radio",
    options: [
      { label: "Public tap / stand pipe", value: "public_tap" },
      { label: "Borehole", value: "borehole" },
      { label: "Protected dug well", value: "protected_dug_well" },
      { label: "Unprotected dug well", value: "unprotected_dug_well" },
      { label: "Rainwater collection", value: "rainwater_collection" },
      { label: "Water Truck", value: "water_truck" },
      { label: "Water Kiosk", value: "water_kiosk" },
      { label: "Other (please specify)", value: "other" },
    ],
  },
  {
    name: "water_source_location",
    label: "Where is the water source located?",
    type: "radio",
    options: [
      { label: "In own house", value: "own_house" },
      { label: "In the yard / plot", value: "yard_plot" },
      {
        label: "At the neighbour's yard / plot",
        value: "neighbours_yard_plot",
      },
      { label: "Other (please specify)", value: "other" },
    ],
  },
];

const three = [
  {
    name: "toilet_present",
    label: "Is there a toilet?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "toilet_construction_date",
    label: "When was it constructed?",
    type: "radio",
    options: [
      { label: "Less than 1 year ago", value: "less_than_1_year" },
      { label: "1 year - 5 years", value: "1_to_5_years" },
      { label: "5 years - 10 years", value: "5_to_10_years" },
      { label: "Over 10 years ago", value: "over_10_years" },
    ],
  },
  {
    name: "toilet_type",
    label: "What type of toilet is it?",
    type: "radio",
    options: [
      { label: "Flush / Pour Flush Toilets", value: "flush_pour_flush" },
      { label: "Ventilated Improved Pit Latrine (VIP)", value: "vip_latrine" },
      { label: "Pit Latrine with Slab", value: "pit_latrine_slab" },
      { label: "Composting Toilet", value: "composting_toilet" },
      {
        label: "Pit Latrine without Slab / Open pit",
        value: "pit_latrine_no_slab",
      },
      { label: "Bucket", value: "bucket" },
      { label: "Hanging latrines", value: "hanging_latrines" },
      { label: "Open Defecation", value: "open_defecation" },
    ],
  },
  {
    name: "toilet_drain",
    label: "Where does the toilet drain?",
    type: "radio",
    options: [
      { label: "Soak pit", value: "soak_pit" },
      { label: "Open drain", value: "open_drain" },
      { label: "Open ground", value: "open_ground" },
      { label: "Water body", value: "water_body" },
      { label: "No outlet", value: "no_outlet" },
      { label: "Don't know", value: "dont_know" },
    ],
  },
  {
    name: "households_sharing_toilet",
    label: "How many households use or share that toilet?",
    type: "text",
    placeholder: "Enter number of households",
  },
  {
    name: "toilet_filled",
    label: "Is the toilet filled up?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
      { label: "I don't know", value: "dont_know" },
      { label: "N/A", value: "na" },
    ],
  },
  {
    name: "toilet_last_emptied",
    label: "When was the toilet last emptied?",
    type: "text",
    placeholder: "Enter last emptied date",
  },
  {
    name: "toilet_emptied_by",
    label: "Who last emptied the toilet facility?",
    type: "radio",
    options: [
      { label: "Gulper entrepreneur", value: "gulper_entrepreneur" },
      { label: "Cesspool entrepreneur", value: "cesspool_entrepreneur" },
      { label: "Other (please specify)", value: "other" },
      { label: "N/A", value: "na" },
    ],
  },
  {
    name: "emptied_connection",
    label:
      "How did you connect with the person or company that last emptied your toilet?",
    type: "radio",
    options: [
      { label: "Contacted the KCCA call centre", value: "kcca_call_centre" },
      { label: "Used the Weyonje App", value: "weyonje_app" },
      { label: "Referral from Neighbour", value: "referral_neighbour" },
      { label: "Went to Lubigi", value: "lubigi" },
      { label: "Went to Bugolobi", value: "bugolobi" },
      { label: "Other (please specify)", value: "other" },
    ],
  },
  {
    name: "handwashing_facility",
    label: "Is there a functional handwashing facility with water and soap?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
      { label: "I don't know", value: "dont_know" },
      { label: "N/A", value: "na" },
    ],
  },
  {
    name: "sanitation_follow_ups",
    label: "If Qn 5.19 is yes, how many sanitation follow-ups were conducted?",
    type: "text",
    placeholder: "Enter number of follow-ups",
  },
  {
    name: "observations",
    label: "What were the observations?",
    type: "text",
    placeholder: "Enter observations",
  },
  {
    name: "actions_taken",
    label: "What were the immediate actions taken?",
    type: "text",
    placeholder: "Enter actions taken",
  },
];

const four = [
  {
    name: "sewer_connected",
    label: "Are you connected to this sewer?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
      { label: "I don't know", value: "dont_know" },
    ],
  },
  {
    name: "sewer_line_within_30m",
    label:
      "Is there a sewer line within a radius of 30 Meters from your premises?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "sewer_not_connected_reason",
    label: "If NOT, why aren't your premises connected to the sewer?",
    type: "text",
    placeholder: "Enter reason",
  },
  {
    name: "sewer_connection_cost",
    label: "If YES, how much did you pay/spend on the sewer connection? (UGX)",
    type: "text",
    placeholder: "Enter cost",
  },
  {
    name: "sewer_connected_by",
    label: "Who connected your premises to the sewer?",
    type: "radio",
    options: [
      {
        label: "National Water and Sewerage Corporation (NWSC)",
        value: "nwsc",
      },
      { label: "Myself", value: "myself" },
      { label: "A friend", value: "friend" },
      { label: "Other (please specify)", value: "other" },
    ],
  },
  {
    name: "sewer_messaging_received",
    label:
      "Have you ever been sensitized or provided with messaging by KCCA or NWSC encouraging you to connect to the sewer?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "sewer_interest",
    label: "Are you interested or willing to connect to the sewer?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "sewer_approached_by_authorities",
    label:
      "Have you ever been approached by NWSC, KCCA, or other authorities to connect your premises?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "sanitation_follow_ups_conducted",
    label: "Are there sanitation follow-ups that were conducted?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "sanitation_follow_ups_count",
    label:
      "If Qn 3.2.3.9 is yes, how many sanitation follow-ups were conducted?",
    type: "text",
    placeholder: "Enter number of follow-ups",
  },
  {
    name: "observations",
    label: "What were the observations?",
    type: "text",
    placeholder: "Enter observations",
  },
  {
    name: "actions_taken",
    label: "What were the immediate actions taken?",
    type: "text",
    placeholder: "Enter actions taken",
  },
];

export { formFields };
