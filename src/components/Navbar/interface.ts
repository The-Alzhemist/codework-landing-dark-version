export interface NavbarProps {
  onClikcToggle: () => void;
  sectionNavRef: React.RefObject<HTMLElement>;
  isScrolled: boolean;
}