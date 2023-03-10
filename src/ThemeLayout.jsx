import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";
import { PalleteContext } from "./Context/PalleteContext";
const ThemeLayout = ({ children }) => {
  const [colorState, setcolorState] = useState("#BB1010");
  const theme = createTheme({ palette: { primary: { main: colorState } } });
  const fontResponsive = responsiveFontSizes(theme);
  const { primary } = theme.palette;
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const Colors = ["#BB1010", "#35AE01", "#0769C6"];
    const randomColor = setInterval(() => {
      if (counter === 3) {
        setCounter(0);
      } else {
        setcolorState(Colors[counter]);
        setCounter(counter + 1);
      }
    }, 3000);
    return () => clearInterval(randomColor);
  }, [counter]);
  return (
    <ThemeProvider theme={fontResponsive}>
      <PalleteContext.Provider value={{ primary: primary.main }}>
        {children}
      </PalleteContext.Provider>
    </ThemeProvider>
  );
};
export default ThemeLayout;
