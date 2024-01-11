import {
  Control,
  FieldErrors,
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { SubmissionSuccess, SubmissionError } from "@formspree/core";

// export interface ContactFormTypes {
//   email: string;
//   name: string;
//   CompanyName: string;
//   phoneNumber: number;
//   timeSlot: string;
//   timePeriod: string;
//   budget: string;
//   idea: string;
//   channels: string;
//   otherChannel: string;
//   isShowOtherChannel: boolean;
//   onSubmit: SubmitHandler<FieldValues>
// }

export interface WithFormPageProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  errors: FieldErrors<FieldValues>;
  isValid: boolean;
  control:  Control<FieldValues>;
  state: {
    errors: SubmissionError<FieldValues> | null;
    result: SubmissionSuccess | null;
    submitting: boolean;
    succeeded: boolean;
  };
  sendDataToFromSpree: SubmitHandler<FieldValues>;
  isShowOtherChannel: boolean;
  onSubmit: SubmitHandler<FieldValues>
  showModal:boolean,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  t: any
}

export interface FormDataFields {
  name: string;
  companyName?: string;
  email: string;
  phoneNumber: string;
  timeSlot?: string;
  timePeriod?: string;
  idea: string;
  budget?: string;
  channels: {
    searchEngine?: string;
    social?: string;
    friend?: string;
    other?: string;
  };
  attachment?: File;
}