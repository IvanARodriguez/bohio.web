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
  homePage: {
    main: {
      title1: string;
      title2: string;
    };
  };
  search: {
    placeholder: string;
  };
  [key: string]: any;
}
