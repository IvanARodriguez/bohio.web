// Define types
export interface Dictionary {
  homePage: {
    main: {
      title1: string;
      title2: string;
    };
  };
  search: {
    placeholder: string;
  };
  [key: string]: any; // Add this for flexibility if more nested dictionaries are added
}
