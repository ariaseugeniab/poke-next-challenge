// ** React Imports
import { createContext, useEffect, useState } from "react";

type Colors = {
  primary: {
    light: string;
    main: string;
  };
  secondary: {
    light: string;
    main: string;
  };
  success: {
    light: string;
    main: string;
  };
  danger: {
    light: string;
    main: string;
  };
  warning: {
    light: string;
    main: string;
  };
};

const defaultValue = {
  primary: {
    light: "",
    main: "",
  },
  secondary: {
    light: "",
    main: "",
  },
  success: {
    light: "",
    main: "",
  },
  danger: {
    light: "",
    main: "",
  },
  warning: {
    light: "",
    main: "",
  },
};

// ** Create Context
const ThemeColors = createContext<{ colors: Colors }>({ colors: defaultValue });

const ThemeContext = ({ children }: React.PropsWithChildren) => {
  // ** State
  const [colors, setColors] = useState(defaultValue);

  //** ComponentDidMount
  useEffect(() => {
    if (typeof window !== "undefined") {
      //** Get variable value
      const getHex = (color: string) =>
        window.getComputedStyle(document.body).getPropertyValue(color).trim();

      //** Colors obj
      const obj = {
        primary: {
          light: getHex("--bs-primary").concat("1a"),
          main: getHex("--bs-primary"),
        },
        secondary: {
          light: getHex("--bs-secondary").concat("1a"),
          main: getHex("--bs-secondary"),
        },
        success: {
          light: getHex("--bs-success").concat("1a"),
          main: getHex("--bs-success"),
        },
        danger: {
          light: getHex("--bs-danger").concat("1a"),
          main: getHex("--bs-danger"),
        },
        warning: {
          light: getHex("--bs-warning").concat("1a"),
          main: getHex("--bs-warning"),
        },
        info: {
          light: getHex("--bs-info").concat("1a"),
          main: getHex("--bs-info"),
        },
        dark: {
          light: getHex("--bs-dark").concat("1a"),
          main: getHex("--bs-dark"),
        },
      };

      setColors({ ...obj });
    }
  }, []);

  return <ThemeColors.Provider value={{ colors }}> {children} </ThemeColors.Provider>;
};

export { ThemeContext };
