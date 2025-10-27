export interface PDPAPopupAcceptProps {
  onAccept?: () => void;
};

export interface PDPAPopupProps {
  isOpen: boolean;
  handleClose: (value: boolean) => void;
  shouldRender: boolean,
  setIsOpen: (value: boolean) => void;
}