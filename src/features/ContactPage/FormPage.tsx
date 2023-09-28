"use client";

import React, { useState } from "react";

import { SELECTED_OPTION_LIST } from "@/constants/contactPage/constants";
import withFormPage from "./withFormPage";

import TextAreaField from "@/components/form/TextAreaField/TextAreaField";
import InputField from "@/components/form/InputField/InputField";
import FileUploadField from "@/components/form/FileUploadField/FileUploadField";
import SelectedField from "@/components/form/SelectedField/SelectedField";
import { ExternalPrimaryButton } from "@/components/buttons/ExternalPrimaryButton";

import CheckBoxSimpleField from "@/components/form/CheckBoxSimpleField/CheckBoxSimpleField";
import { WithFormPageProps } from "./interface";
import StatusMessage from "./component/StatusMessage/StatusMessage";
import SocialsSection from "./component/SocialsSection/SocialsSection";
import Modal from "@/components/Modal/Modal";

import { CgSpinner } from "react-icons/cg";
import { BiCheckCircle } from "react-icons/bi";
import { motion } from "framer-motion";

const FormPage = ({
  handleSubmit,
  errors,
  isValid,
  state,
  control,
  sendDataToFromSpree,
  isShowOtherChannel,
  onSubmit,
  showModal,
  setShowModal,
}: WithFormPageProps) => {
  const titleAnimation = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.08,
      },
    },
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={titleAnimation}
        className="relative bg-neutral-1000 rounded-xl w-full max-w-[1140px] mx-auto py-[30px] md:py-[50px] lg:px-[50px]  sm:my-0"
      >
        <motion.h1 className="text-center mb-20 text-white">
          <motion.div variants={itemAnimation} className="text-2xl font-light">
            Wanna talk with us?
          </motion.div>
          <motion.div
            variants={itemAnimation}
            className="font-normal inline bg-line text-3xl md:text-5xl text-primary-100"
          >
            Contact us
          </motion.div>
        </motion.h1>
        <motion.form     variants={itemAnimation}  onSubmit={handleSubmit(onSubmit)}>
          {/* row 1 */}
          <div className="text-white">
            <TextAreaField
              name="idea"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Tell us your idea is required.",
                },
              }}
              placeholder="Write something..."
              label="Tell us your idea"
              className="mb-[12px] "
              rows={5}
            />
          </div>
          {/* row 2 */}
          <div className="flex flex-col sm:flex-row gap-x-6">
            {/* left */}
            <div className="w-full text-white">
              <InputField
                name="budget"
                control={control}
                rules={{
                  required: { value: false, message: "" },
                }}
                suffixIcon="฿"
                placeholder="Write something..."
                type="text"
                label="Your budget? (optional)"
                className="mb-[12px]"
              />

              <InputField
                name="name"
                control={control}
                rules={{
                  required: { value: true, message: "Name is Required." },
                }}
                placeholder="Write something..."
                type="text"
                label="Name"
                className="mb-[12px]"
              />
              <InputField
                name="email"
                control={control}
                rules={{
                  required: { value: true, message: "Email is Required." },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid pattern email address",
                  },
                }}
                placeholder="Write something..."
                type="text"
                label="Email"
                className="mb-[12px]"
              />

              <FileUploadField
                control={control}
                disabled={false}
                rules={{
                  required: {
                    value: false,
                    message: "",
                  },
                }}
                name="attachment"
                label="File Attachment"
                className="w-full  mb-5"
              />
            </div>
            {/* right */}
            <div className="w-full text-white">
              <div className="flex gap-x-3 sm:gap-x-6">
                <div className="w-full">
                  <InputField
                    name="timeSlot"
                    control={control}
                    rules={{
                      required: {
                        value: false,
                        message: "",
                      },
                    }}
                    type="date"
                    label="Preferred time slots"
                    className="mb-[12px] "
                    inputClassName="h-[38px]"
                  />
                </div>
                <div className="w-full">
                  <SelectedField
                    name="timePeriod"
                    control={control}
                    rules={{
                      required: {
                        value: false,
                        message: "",
                      },
                    }}
                    label="Time Period"
                    className="mb-[12px]"
                    optionList={SELECTED_OPTION_LIST}
                  />
                </div>
              </div>

              <InputField
                name="phoneNumber"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "Phone number is Required.",
                  },
                }}
                placeholder="Write something..."
                type="number"
                label="Phone number"
                className="mb-[12px]"
              />

              <InputField
                name="companyName"
                control={control}
                rules={{
                  required: { value: false, message: "" },
                }}
                placeholder="Write something..."
                type="text"
                label="Company name"
                className="mb-[12px]"
              />
            </div>
          </div>

          <div className="mb-5 text-white">
            <label className="flex">How did you hear about us?</label>
            <div className="flex gap-x-4 items-start flex-wrap">
              <CheckBoxSimpleField
                control={control}
                name="channels.searchEngine"
                label="Search engine (Google, Yahoo, etc.)"
                labelClassName=""
                rules={{
                  required: { value: false, message: "" },
                }}
                inputClassName="ml-0"
              />
              <CheckBoxSimpleField
                control={control}
                name="channels.social"
                label="Social media"
                rules={{
                  required: { value: false, message: "" },
                }}
                inputClassName="ml-0"
              />
              <CheckBoxSimpleField
                control={control}
                name="channels.friend"
                label="Friend/Colleague"
                inputClassName="ml-0"
              />
              <div className="flex flex-col">
                <CheckBoxSimpleField
                  control={control}
                  name="channels.other"
                  rules={{
                    required: { value: false, message: "" },
                  }}
                  label="Other (please specify)"
                  inputClassName="ml-0"
                />

                {isShowOtherChannel && (
                  <InputField
                    name="Others"
                    control={control}
                    rules={{
                      required: { value: false, message: "" },
                    }}
                    placeholder="Write something..."
                    type="text"
                    label=""
                    className="mb-[12px] ml-2"
                  />
                )}
              </div>
            </div>
          </div>

          <p className="mb-5  text-sm text-white">
            *We will be in touch with you shortly through the number +66 83 987
            4997.
          </p>

          <div className=" flex justify-end">
            <ExternalPrimaryButton
              id="form-submit-ContactForm"
              pathName="#"
              disabled={!isValid}
            >
              <div className="flex justify-center items-center gap-x-1">
                {state.submitting && (
                  <span className=" animate-spin">
                    <CgSpinner />
                  </span>
                )}
                Submit my idea
              </div>
            </ExternalPrimaryButton>
          </div>
        </motion.form>

        <StatusMessage errors={state.errors} />
        <SocialsSection />

        <Modal
          isOpen={showModal}
          onCloseHandler={() => setShowModal(false)}
          disabledClose={false}
        >
          <div className="relative bg-white rounded-lg text-center">
            <div className="p-6">
              <div className="flex justify-center text-7xl mb-5 ">
                <BiCheckCircle />
              </div>
              <h3 className="text-xl sm:text-xl font-medium text-slate-900 mb-5">
                Thank you for sharing your idea with us!
              </h3>
              <div className="text-sm font-light mt-0 pt-0 text-slate-700 mb-5">
                We will get back to you as soon as possible. Let the journey
                with CodeWork
              </div>
            </div>
          </div>
        </Modal>
      </motion.div>
    </>
  );
};
const WrappedComponent = withFormPage(FormPage);
export default WrappedComponent;
