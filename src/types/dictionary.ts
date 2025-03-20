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
  [key: string]: any;
}
