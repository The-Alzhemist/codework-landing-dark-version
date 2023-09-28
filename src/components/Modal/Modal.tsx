import React from "react";
import { ModalProps } from "./interface";
import withModal from "./withModal";

const Modal = ({
  children,
  isOpen,
  disabledClose = false,
  onCloseModal
}: ModalProps) => {

  if (!isOpen) {
    return;
  }

  return (
    <section
      id="modalBackdrop"
      onClick={onCloseModal}
      className="z-50 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="mx-3 sm:mx-0 md:w-[600px] flex flex-col relative">
        {!disabledClose && (
          <>
            <div
              className="z-10 cursor-pointer absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
              id="hideModalBtn"
            >
              X
            </div>
          </>
        )}
        <div className="bg-white p-2 rounded">{children}</div>
      </div>
    </section>
  );
};


const WrappedComponent = withModal(Modal);
export default WrappedComponent;
