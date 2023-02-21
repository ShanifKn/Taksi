import { getDriver } from "../api/services/UserRequest";

// * Date picker *//
export const options = {
  title: "Select Date",
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  maxDate: new Date("2023-04-01"),
  minDate: new Date("2023-02-01"),
  theme: {
    background: "bg-white ",
    // todayBtn: "bg-green-500",
    // clearBtn: "",
    // icons: "",
    // text: "",
    // input: "",
    // inputIcon: "",
    selected: "bg-red-500",
  },
  icons: {
    // () => ReactNode | JSX.Element
    prev: () => <span>Previous</span>,
    next: () => <span>Next</span>,
  },
  datepickerClassNames: "top-25 ",
  language: "en",
};

export const handleChange = (selectedDate) => {};

export const handleBookTrip = async (details) => {
  const { Driver, PickUp, DropOff } = details;
  const response = await getDriver(Driver);
  console.log(response);
};
