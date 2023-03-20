const pages = [
  {
    title: "Reserve your spot! We'll figure out the payment details in a couple weeks.",
    data: [
      {
        name: "studentName",
        label: "Student Name",
        placeholder: "John Doe",
      },
      {
        name: "studentEmail",
        label: "Student Email",
        placeholder: "john.doe@dakotadebate.org",
      },
      {
        name: "studentPhoneNumber",
        label: "Student Phone Number (used for text alerts only)",
        placeholder: "+1 (605) 555-DEB8",
      },
      {
        name: "studentSchool",
        label: "School Name",
        placeholder: "Amazing High School",
      },
      {
        name: "studentGrade",
        label: "Grade entering, fall 2022",
        placeholder: "9th",
      },
    ],
  },
  // {
  //     title: "Second, some information about the parent.",
  //     data: [
  //         {
  //             name: "parentFirstName",
  //             label: "Parent First Name",
  //             placeholder: "John", // placeholders are fake examples
  //         },
  //         {
  //             name: "parentLastName",
  //             label: "Parent Last Name",
  //             placeholder: "Doe", // placeholders are fake examples
  //         },
  //         {
  //             name: "parentEmail",
  //             label: "Parent Email",
  //             placeholder: "john.doe@gmail.com", // placeholders are fake examples
  //         },
  //         {
  //             name: "parentPhoneNumber",
  //             label: "Parent Phone Number",
  //             placeholder: "+1 (605) 555-DEB8", // placeholders are fake examples
  //         },
  //         {
  //             name: "address",
  //             label: "Mailing Address",
  //             placeholder: "444 Cross Ex Ave", // placeholders are fake examples
  //         },
  //         {
  //             name: "addressDetails",
  //             label: "Apt, Suite, Bldg.",
  //             placeholder: "Apt, Suite, Bldg.", // make cute examples on ur own
  //             isRequired: false,
  //         },
  //         {
  //             name: "city",
  //             label: "City",
  //             placeholder: "City",
  //         },
  //         {
  //             name: "zip",
  //             label: "Zip",
  //             placeholder: "Zip",
  //         },
  //         {
  //             name: "state",
  //             label: "State",
  //             placeholder: "South Dakota",
  //         },
  //     ],
  // },
  {
    title: "Almost done! We just need some debate-y information from you.",
    data: [
      {
        name: "studentDebateInterest",
        label: "What kinds of debate are you interested in, if any?",
        placeholder: 'You can write "idk" if you don\'t know :)',
      },
      {
        name: "studentDebateExperience",
        label: "How many years of debate experience do you have?",
        placeholder: "0 (approximation is ok)",
      },
      {
        name: "studentCampFormatPreference",
        label:
          "How would you attend camp? You don't need to pay now, this is just to reserve your spot - you'll get an email with payment information later.",
        placeholder: ["Online", "Full In-Person", "Commuter with meals", "Commuter"].join(", "),
      },
      {
        name: "studentHear",
        label: "How did you hear about us?",
        placeholder: "Friend, coach, parent, flyer, etc.",
      },
    ],
  },
];

interface QuestionTypes {
  studentFirstName: string;
  studentLastName: string;
  studentEmail: string;
  studentPhoneNumber: string;
  studentSchool: string;
  studentGrade: string;
  address: string;
  addressDetails: string;
  city: string;
  zip: string;
  state: string;
  studentDebateInterest: string;
  studentDebateExperience: string;
  studentPartner: string;
  studentHear: string;
  nanoid: string;
}

const initialValues = {
  studentFirstName: "",
  studentLastName: "",
  studentEmail: "",
  studentPhoneNumber: "",
  studentSchool: "",
  studentGrade: "",
  address: "",
  addressDetails: "",
  city: "",
  zip: "",
  state: "",
  studentDebateInterest: "",
  studentDebateExperience: "",
  studentPartner: "",
  studentHear: "",
};
export { pages, initialValues };
export type { QuestionTypes };
