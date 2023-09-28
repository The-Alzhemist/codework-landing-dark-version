import React from "react";
import { ModalAcceptProps, ModalProps } from "./interface";
import { MODAL_ID } from "@/interfaces/enum";


const withModal = (Component: React.FC<ModalProps>) => {
  const Hoc = ({
    children,
    isOpen,
    onCloseHandler,
    disabledClose = false,
  }: ModalAcceptProps) => {
    const onCloseModal = (event: React.MouseEvent<HTMLElement>) => {
      if (
        !disabledClose &&
        ((event.target as HTMLElement).id === MODAL_ID.MODAL_BACKDROP ||
          (event.target as HTMLElement).id === MODAL_ID.MODAL_CANCEL_BTN)
      ) {
        onCloseHandler();
      }
    };

    const newProps: ModalProps = {
      onCloseModal,
      isOpen,
      children,
      disabledClose,
    };

    return <Component {...newProps} />;
  };

  return Hoc;
};
export default withModal;
