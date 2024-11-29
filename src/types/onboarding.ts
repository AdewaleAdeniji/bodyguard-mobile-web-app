export interface OnboardingSlide {
  title: string;
  description: string;
  image: string;
}

export interface AppRoute {
  path: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
}