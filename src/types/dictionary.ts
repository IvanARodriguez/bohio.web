// Define types
export interface Dictionary {
  login: string;
  register: string;
  signInWithOpenAccount: string;
  signInWithGoogle: string;
  continueWithEmail: string;
  emailAddress: string;
  password: string;
  confirmPassword: string;
  forgotPassword: string;
  dontHaveAnAccount: string;
  homePage: {
    head: {
      title: string;
      description: string;
    };
    main: {
      title: string;
      subtitle: string;
    };
  };
  search: {
    placeholder: string;
  };
  validations: {
    name_required: string;
    description_required: string;
    category_required: string;
  };
  homespace: {
    title: string;
    subtitle: string;
    space_title: string;
    space_title_placeholder: string;
    description: string;
    description_placeholder: string;
    category: string;
    category_placeholder: string;
    city: string;
    city_placeholder: string;
    state: string;
    state_placeholder: string;
    country: string;
    country_placeholder: string;
    features: string;
    features_placeholder: string;
    features_hint: string;
    next: string;
  };
  [key: string]: any;
}
