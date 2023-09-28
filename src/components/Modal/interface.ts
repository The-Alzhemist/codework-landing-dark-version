export interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  disabledClose?: boolean;
  onCloseModal: (event: React.MouseEvent<HTMLElement>) => void
}

export interface ModalAcceptProps {
    children: React.ReactNode;
    isOpen: boolean;
    disabledClose?: boolean;
    onCloseHandler: () => void;
  }
  
