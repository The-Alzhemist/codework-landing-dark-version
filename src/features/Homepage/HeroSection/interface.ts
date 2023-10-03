

export interface HeroSectionProps {
    containerAnimation: {
        hidden: AnimationProperties;
        visible: AnimationProperties;
      };
      itemAnimation: {
        hidden: AnimationProperties;
        visible: AnimationProperties;
      };
}

interface AnimationProperties {
    opacity: number;
    y?: number;
    transition?: {
      delay?: number;
      staggerChildren?: number;
    };
  }