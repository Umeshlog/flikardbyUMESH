import React from "react";
import { createContext } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
const TamplateContext = createContext(null);
const TampledProvider = ({ children }) => {
  const theme = createTheme({
    overrides: {
      MuiDialog: {
        paperWidthSm: {
          maxWidth: "none",
        },
      },
      MuiDialogContent: {
        root: {
          padding: 0,
          "&:first-child": {
            paddingTop: 0,
          },
        },
      },
      MuiTableCell:{
        root:{
          borderBottom:"none"
        }
      }
    },
  });

  return (
    <TamplateContext.Provider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </TamplateContext.Provider>
  );
};

export default TampledProvider;
