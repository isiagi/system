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

const household = [
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

const wash = [
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

const sewer = [
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

const menstrual = [
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

const division = [
  {
    name: "toilet_type",
    label: "What type of toilet is it?",
    type: "radio",
    options: [
      { label: "Flush / Pour Flush Toilets", value: "flush" },
      { label: "Ventilated Improved Pit Latrine (VIP)", value: "vip" },
      { label: "Pit Latrine with Slab", value: "pit_slab" },
      { label: "Composting Toilet", value: "composting" },
      { label: "Pit Latrine without Slab / Open pit", value: "pit_no_slab" },
      { label: "Bucket", value: "bucket" },
      { label: "Hanging latrines", value: "hanging" },
      { label: "Open Defecation", value: "open_defecation" },
    ],
  },
  {
    name: "toilet_stances",
    label: "How many stances does the toilet have?",
    type: "text",
    placeholder: "Enter number of stances",
  },
  {
    name: "toilet_gender_sensitive",
    label: "Is the toilet gender sensitive?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "toilet_pwd_section",
    label: "Does the toilet have a PWD section or stance?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
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
    name: "toilet_connected_to_sewer",
    label: "Is the toilet connected to the sewer line?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "toilet_last_emptied",
    label: "When was the last time the toilet was emptied?",
    type: "text",
    placeholder: "Enter last emptied date",
  },
  {
    name: "toilet_empyting_truck_number",
    label: "Who emptied the toilet? (insert truck number plate)",
    type: "text",
    placeholder: "Enter truck number plate",
  },
  {
    name: "toilet_emptying_trips",
    label: "How many emptying trips were collected?",
    type: "text",
    placeholder: "Enter number of trips",
  },
  {
    name: "toilet_mhm_disposal",
    label: "Is there a provision for disposal of MHM material at the toilet?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "toilet_handwash_facility",
    label:
      "Is there a functional hand wash facility (with water and soap readily available)?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "toilet_cleaner_on_site",
    label: "Observe: Is there a cleaner on site?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "toilet_clean_and_not_smelly",
    label: "Observe: Is the toilet clean and not smelly?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "toilet_plumbing_intact",
    label:
      "Observe: Are all the plumbing accessories, doors, locks, and others intact or not broken?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
];

const health = [
  // Previous fields...

  {
    name: "health_centre_name",
    label: "Name of Health Centre",
    type: "radio",
    options: [
      { label: "City Hall Clinic", value: "city_hall_clinic" },
      { label: "Kiswa Health Centre", value: "kiswa_health_centre" },
      { label: "Komamboga Health Centre", value: "komamboga_health_centre" },
      { label: "Kisenyi Health Centre", value: "kisenyi_health_centre" },
      { label: "Kisugu Health Centre", value: "kisugu_health_centre" },
      { label: "Kitebi Health Centre", value: "kitebi_health_centre" },
      { label: "Kawaala Health Centre", value: "kawaala_health_centre" },
      { label: "Bukoto Health Centre", value: "bukoto_health_centre" },
    ],
  },
  {
    name: "opd_patients_per_month",
    label: "Number of Out-Patient Department (OPD) patients a month",
    type: "text",
    placeholder: "Enter number of OPD patients",
  },
  {
    name: "toilet_type",
    label: "What type of toilet is it?",
    type: "radio",
    options: [
      { label: "Flush / Pour Flush Toilets", value: "flush" },
      { label: "Ventilated Improved Pit Latrine (VIP)", value: "vip" },
      { label: "Pit Latrine with Slab", value: "pit_slab" },
      { label: "Composting Toilet", value: "composting" },
      { label: "Pit Latrine without Slab / Open pit", value: "pit_no_slab" },
      { label: "Bucket", value: "bucket" },
      { label: "Hanging latrines", value: "hanging" },
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
    name: "toilet_construction",
    label: "Who constructed the toilet?",
    type: "radio",
    options: [
      { label: "KCCA", value: "kcca" },
      { label: "Partner", value: "partner" },
    ],
  },
  {
    name: "partner_name",
    label: "If Qn. 4.2.4 is the partner, mention the name of the partner?",
    type: "text",
    placeholder: "Enter partner name",
    dependsOn: { name: "toilet_construction", value: "partner" },
  },
  {
    name: "toilet_stances_total",
    label: "How many stances (total) does the toilet have?",
    type: "text",
    placeholder: "Enter total number of stances",
  },
  {
    name: "toilet_gender_sensitive",
    label: "Is the toilet gender sensitive?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "stances_ladies_section",
    label:
      "If 4.2.7 is YES, Indicate the number of stances in the ladies' section",
    type: "text",
    placeholder: "Enter number of stances in ladies' section",
    dependsOn: { name: "toilet_gender_sensitive", value: "yes" },
  },
  {
    name: "stances_gents_section",
    label:
      "If 4.2.7 is YES, Indicate the number of stances in the gents section",
    type: "text",
    placeholder: "Enter number of stances in gents section",
    dependsOn: { name: "toilet_gender_sensitive", value: "yes" },
  },
  {
    name: "facility_has_showers",
    label: "Does the facility have showers?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "toilet_pwd_section",
    label: "Does the toilet have a PWD section or stance?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "toilet_connected_to_sewer",
    label: "Is the toilet connected to the sewer line?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "toilet_last_emptied",
    label: "When was the last time the toilet was emptied?",
    type: "text",
    placeholder: "Enter last emptied date",
  },
  {
    name: "toilet_emptying_truck_number",
    label: "Who emptied the toilet? (insert truck number plate)",
    type: "text",
    placeholder: "Enter truck number plate",
  },
  {
    name: "toilet_emptying_trips",
    label: "How many emptying trips were collected?",
    type: "text",
    placeholder: "Enter number of trips",
  },
  {
    name: "mhm_disposal_provision",
    label: "Is there a provision for disposal of MHM material at the toilet?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "facility_incinerators",
    label: "Does the facility have incinerators?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "handwash_facility",
    label:
      "Is there a functional hand wash facility (with water and soap readily available)?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "cleaner_on_site",
    label: "Observe: Is there a cleaner on site?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "toilet_clean_and_not_smelly",
    label: "Observe: Is the toilet clean and not smelly?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "plumbing_intact",
    label:
      "Observe: Are all the plumbing accessories, doors, locks and others intact or not broken?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "medical_waste_disposal",
    label: "How is the medical waste disposed of?",
    type: "radio",
    options: [
      { label: "Company collects", value: "company_collects" },
      { label: "Other (please specify)", value: "other" },
    ],
  },
  {
    name: "medical_waste_collection_company",
    label:
      "If 4.2.23 is 'company collects', what is the name of the company that collects the medical waste?",
    type: "text",
    placeholder: "Enter company name",
    dependsOn: { name: "medical_waste_disposal", value: "company_collects" },
  },
  {
    name: "medical_waste_collection_cost",
    label:
      "How much does the company charge for the collection of medical waste? (UGX)",
    type: "text",
    placeholder: "Enter cost in UGX",
    dependsOn: { name: "medical_waste_disposal", value: "company_collects" },
  },
];

const school = [
  {
    name: "school_name",
    label: "Name of School",
    type: "text",
    placeholder: "Enter the name of the school",
  },
  {
    name: "primary_school_enrolment_by_division",
    label: "What is the primary school enrolment by division?",
    type: "text",
    placeholder: "Enter primary school enrolment by division",
  },
  {
    name: "school_toilet_type",
    label: "What type of toilet does the school have?",
    type: "radio",
    options: [
      { label: "Flush / Pour Flush Toilets", value: "flush" },
      { label: "Ventilated Improved Pit Latrine (VIP)", value: "vip" },
      { label: "Pit Latrine with Slab", value: "pit_slab" },
      { label: "Composting Toilet", value: "composting" },
      { label: "Pit Latrine without Slab / Open pit", value: "pit_no_slab" },
      { label: "Bucket", value: "bucket" },
      { label: "Hanging latrines", value: "hanging" },
      { label: "Open Defecation", value: "open_defecation" },
    ],
  },
  {
    name: "school_toilet_drain",
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
    name: "school_toilet_construction",
    label: "Who constructed the toilet?",
    type: "radio",
    options: [
      { label: "KCCA", value: "kcca" },
      { label: "Partner", value: "partner" },
    ],
  },
  {
    name: "school_partner_name",
    label: "If Qn. 4.3.4 is the partner, mention the name of the partner?",
    type: "text",
    placeholder: "Enter partner name",
    dependsOn: { name: "school_toilet_construction", value: "partner" },
  },
  {
    name: "school_toilet_stances_total",
    label: "How many stances (total) does the toilet have?",
    type: "text",
    placeholder: "Enter total number of stances",
  },
  {
    name: "school_urinals_boys_section",
    label: "Does the facility have urinals in the boys' section?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "school_showers_girls_section",
    label: "Does the facility have showers in the girls' section?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "school_pwd_section",
    label: "Does the toilet have a PWD section/stance?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "school_toilet_connected_to_sewer",
    label: "Is the toilet connected to the sewer line?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "school_toilet_last_emptied",
    label: "When was the last time the toilet was emptied?",
    type: "text",
    placeholder: "Enter last emptied date",
  },
  {
    name: "school_toilet_emptying_truck_number",
    label: "Who emptied the toilet? (insert truck number plate)",
    type: "text",
    placeholder: "Enter truck number plate",
  },
  {
    name: "school_emptying_trips",
    label: "How many emptying trips were collected?",
    type: "text",
    placeholder: "Enter number of trips",
  },
  {
    name: "school_mhm_disposal_provision",
    label: "Is there a provision for disposal of MHM material at the toilet?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "school_incinerators",
    label: "Does the facility have incinerators?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "school_handwash_facility",
    label:
      "Is there a functional hand wash facility (with water and soap readily available)?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "school_handwash_facility_donor",
    label: "If 4.3.17 is YES, Who donated the handwash facility/washalot?",
    type: "text",
    placeholder: "Enter donor's name",
    dependsOn: { name: "school_handwash_facility", value: "yes" },
  },
  {
    name: "school_cleaner_on_site",
    label: "Observe: Is there a cleaner on site?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "school_toilet_clean_and_not_smelly",
    label: "Observe: Is the toilet clean and not smelly?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "school_plumbing_intact",
    label:
      "Observe: Are all the plumbing accessories, doors, locks and others intact or not broken?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "school_solid_waste_disposal",
    label: "How do you dispose of solid waste from your premises?",
    type: "radio",
    options: [
      {
        label: "Collection from SW collection company",
        value: "collection_company",
      },
      { label: "Burn", value: "burn" },
      { label: "Other (please specify)", value: "other" },
    ],
  },
  {
    name: "school_sw_collection_company",
    label:
      "If Qn. 4.3.22 is 'SW company collects', please provide the name of the company",
    type: "radio",
    options: [
      { label: "KCCA", value: "kcca" },
      { label: "Nabugabo Updeal", value: "nabugabo_updeal" },
      { label: "Solid waste consortium", value: "solid_waste_consortium" },
      { label: "Homeklin", value: "homeklin" },
      { label: "Other (please specify)", value: "other" },
    ],
    dependsOn: {
      name: "school_solid_waste_disposal",
      value: "collection_company",
    },
  },
  {
    name: "school_sw_collection_cost",
    label: "How much is paid monthly for the Solid Waste? (UGX)",
    type: "text",
    placeholder: "Enter amount in UGX",
    dependsOn: {
      name: "school_solid_waste_disposal",
      value: "collection_company",
    },
  },
  {
    name: "school_sanitation_follow_ups",
    label: "Are there sanitation follow-ups that were conducted?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "school_sanitation_follow_ups_count",
    label:
      "If Qn 4.3.25 is yes, how many sanitation follow-ups were conducted?",
    type: "text",
    placeholder: "Enter number of follow-ups",
    dependsOn: { name: "school_sanitation_follow_ups", value: "yes" },
  },
];

const public_data = [
  {
    name: "premise_category",
    label: "Category of the premise",
    type: "radio",
    options: [
      { label: "Market", value: "market" },
      { label: "Taxi Park", value: "taxi_park" },
      { label: "Other (please specify)", value: "other" },
    ],
  },
  {
    name: "premise_name",
    label: "Name of the premise",
    type: "text",
    placeholder: "Enter the name of the premise",
  },
  {
    name: "premise_toilet_type",
    label: "What type of toilet is it?",
    type: "radio",
    options: [
      { label: "Flush / Pour Flush Toilets", value: "flush" },
      { label: "Ventilated Improved Pit Latrine (VIP)", value: "vip" },
      { label: "Pit Latrine with Slab", value: "pit_slab" },
      { label: "Composting Toilet", value: "composting" },
      { label: "Pit Latrine without Slab / Open pit", value: "pit_no_slab" },
      { label: "Bucket", value: "bucket" },
      { label: "Hanging latrines", value: "hanging" },
      { label: "Open Defecation", value: "open_defecation" },
    ],
  },
  {
    name: "premise_toilet_drain",
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
    name: "premise_toilet_gender_sensitive",
    label: "Is the toilet gender sensitive?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "premise_pwd_section",
    label: "Does the toilet have a PWD section or stance?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "premise_toilet_management",
    label: "Is the toilet managed directly by KCCA or other parties?",
    type: "radio",
    options: [
      { label: "KCCA", value: "kcca" },
      { label: "Other (please specify)", value: "other" },
    ],
  },
  {
    name: "toilet_management_other",
    label: "If other, please specify:",
    type: "text",
    placeholder: "Specify other management party",
    dependsOn: { name: "premise_toilet_management", value: "other" },
  },
  {
    name: "premise_toilet_service_payment",
    label: "Do users pay for toilet services?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "toilet_service_payment_amount",
    label: "If Qn.5.8 is YES, how much is paid?",
    type: "text",
    placeholder: "Enter amount in UGX",
    dependsOn: { name: "premise_toilet_service_payment", value: "yes" },
  },
  {
    name: "premise_toilet_emptied_frequency",
    label: "How often does the toilet get emptied?",
    type: "radio",
    options: [
      { label: "Every week", value: "every_week" },
      { label: "After a month", value: "after_month" },
      { label: "After 3 months", value: "after_3_months" },
      { label: "After 6 months", value: "after_6_months" },
      { label: "Other (please specify)", value: "other" },
    ],
  },
  {
    name: "premise_toilet_sewer_connected",
    label: "Is the toilet connected to the sewer line?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "mhm_disposal_provision",
    label: "Is there a provision for disposal of MHM material at the toilet?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "handwash_facility_functional",
    label:
      "Is there a functional hand wash facility (with water and soap readily available)?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "nwsc_disconnected_last_30_days",
    label: "Has the toilet ever been disconnected by NWSC in the last 30 days?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "nwsc_disconnection_reasons",
    label: "If Qn 5.14 is YES, What were the reasons?",
    type: "radio",
    options: [
      { label: "Delay in payments", value: "delay_payments" },
      { label: "Pipe Bursts", value: "pipe_bursts" },
      { label: "Maintenance works", value: "maintenance_works" },
      { label: "Other (please specify)", value: "other" },
    ],
    dependsOn: { name: "nwsc_disconnected_last_30_days", value: "yes" },
  },
  {
    name: "premise_cleaner_on_site",
    label: "Observe: Is there a cleaner on site?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "premise_toilet_clean",
    label: "Observe: Is the toilet clean and not smelly?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "premise_plumbing_intact",
    label:
      "Observe: Are all the plumbing accessories, doors, locks and others intact or not broken?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "premise_sanitation_follow_ups",
    label: "Are there sanitation follow ups that were conducted?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "premise_sanitation_follow_ups_count",
    label: "If Qn 5.19 is yes, how many sanitation follow ups were conducted?",
    type: "text",
    placeholder: "Enter number of follow-ups",
    dependsOn: { name: "premise_sanitation_follow_ups", value: "yes" },
  },
];

const commercialPremiseFormFields = [
  {
    name: "commercial_premise_category",
    label: "What category is the commercial premise?",
    type: "radio",
    options: [
      { label: "Town Hotel", value: "town_hotel" },
      { label: "Motel", value: "motel" },
      { label: "Lodge", value: "lodge" },
      { label: "Inn", value: "inn" },
      { label: "Guest House", value: "guest_house" },
      { label: "Cottage", value: "cottage" },
      { label: "Hostel", value: "hostel" },
      { label: "Other (please specify)", value: "other" },
    ],
  },
  {
    name: "commercial_area_name",
    label: "Name of commercial area",
    type: "text",
    placeholder: "Enter the name of the commercial area",
  },
  {
    name: "sanitation_facility_available",
    label: "Does the commercial area have a sanitation facility?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "sanitation_facility_toilet_type",
    label: "What type of toilet is it?",
    type: "radio",
    options: [
      { label: "Flush / Pour Flush Toilets", value: "flush" },
      { label: "Ventilated Improved Pit Latrine (VIP)", value: "vip" },
      { label: "Pit Latrine with Slab", value: "pit_slab" },
      { label: "Composting Toilet", value: "composting" },
      { label: "Pit Latrine without Slab / Open pit", value: "pit_no_slab" },
      { label: "Bucket", value: "bucket" },
      { label: "Hanging latrines", value: "hanging" },
      { label: "Open Defecation", value: "open_defecation" },
    ],
    dependsOn: { name: "sanitation_facility_available", value: "yes" },
  },
  {
    name: "toilet_gender_sensitive",
    label: "Is the toilet gender sensitive?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    dependsOn: { name: "sanitation_facility_available", value: "yes" },
  },
  {
    name: "ladies_section_stances",
    label:
      "If 6.4 is YES, Indicate the number of stances in the ladies' section",
    type: "text",
    placeholder: "Enter number of stances",
    dependsOn: { name: "toilet_gender_sensitive", value: "yes" },
  },
  {
    name: "gents_section_stances",
    label: "If 6.4 is YES, Indicate the number of stances in the gents section",
    type: "text",
    placeholder: "Enter number of stances",
    dependsOn: { name: "toilet_gender_sensitive", value: "yes" },
  },
  {
    name: "mhm_waste_collection",
    label: "Is there a provision for menstrual waste collection?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    dependsOn: { name: "sanitation_facility_available", value: "yes" },
  },
  {
    name: "sewer_connection",
    label: "Is the toilet connected to the sewer line?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    dependsOn: { name: "sanitation_facility_available", value: "yes" },
  },
  {
    name: "handwash_facility_functional",
    label:
      "Is there a functional hand wash facility (with water and soap readily available)?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    dependsOn: { name: "sanitation_facility_available", value: "yes" },
  },
  {
    name: "solid_waste_disposal_method",
    label: "How do you dispose off solid waste from your premises?",
    type: "radio",
    options: [
      {
        label: "Collection from SW collection company",
        value: "sw_collection_company",
      },
      { label: "Burn", value: "burn" },
      { label: "Other (please specify)", value: "other" },
    ],
  },
  {
    name: "sw_company_name",
    label:
      "If Qn 6.10 is 'SW company collects', please provide the name of the company",
    type: "radio",
    options: [
      { label: "KCCA", value: "kcca" },
      { label: "Nabugabo Updeal", value: "nabugabo_updeal" },
      { label: "Solid waste consortium", value: "solid_waste_consortium" },
      { label: "Homeklin", value: "homeklin" },
      { label: "Other (please specify)", value: "other" },
    ],
    dependsOn: {
      name: "solid_waste_disposal_method",
      value: "sw_collection_company",
    },
  },
  {
    name: "sw_monthly_cost",
    label: "How much do you pay monthly for the Solid Waste collection?",
    type: "text",
    placeholder: "Enter the cost in UGX",
    dependsOn: {
      name: "solid_waste_disposal_method",
      value: "sw_collection_company",
    },
  },
  {
    name: "sw_collection_frequency",
    label: "What is the frequency of collection? (how many times in a week?)",
    type: "text",
    placeholder: "Enter number of times per week",
    dependsOn: {
      name: "solid_waste_disposal_method",
      value: "sw_collection_company",
    },
  },
  {
    name: "sanitation_follow_ups",
    label: "Are there sanitation follow ups that were conducted?",
    type: "radio",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  },
  {
    name: "sanitation_follow_ups_count",
    label: "If Qn 6.15 is yes, how many sanitation follow ups were conducted?",
    type: "text",
    placeholder: "Enter number of follow-ups",
    dependsOn: { name: "sanitation_follow_ups", value: "yes" },
  },
  {
    name: "sanitation_follow_ups_observations",
    label: "What were the observations?",
    type: "textarea",
    placeholder: "Enter observations during sanitation follow-ups",
    dependsOn: { name: "sanitation_follow_ups", value: "yes" },
  },
  {
    name: "sanitation_follow_ups_actions",
    label: "What were immediate actions taken?",
    type: "textarea",
    placeholder: "Enter actions taken after sanitation follow-ups",
    dependsOn: { name: "sanitation_follow_ups", value: "yes" },
  },
];

export {
  formFields,
  household,
  wash,
  sewer,
  menstrual,
  school,
  health,
  division,
  public_data,
  commercialPremiseFormFields,
};
