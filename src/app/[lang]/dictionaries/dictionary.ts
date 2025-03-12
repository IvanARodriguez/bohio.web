// Define types
export interface Dictionary {
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
  [key: string]: any; // Add this for flexibility if more nested dictionaries are added
}
