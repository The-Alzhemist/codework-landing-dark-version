export interface NavbarProps {
  handleButtonClick: () => void;
  itemVariants: {
    closed: {
      opacity: number;
    };
    open: {
      opacity: number;
      transition: {
        delay: number;
        duration: number;
      };
    };
  };
  open: boolean;
  isScrolled: boolean;
}