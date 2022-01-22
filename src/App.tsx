import React, {useState, useEffect} from "react";
import { ThemeProvider } from "styled-components";

// Components
import { Countdown } from "./components/countdown/Countdown";

const App = () => {
  const [theme, setTheme] = useState<any>(null)

  useEffect(() => {
    fetch(
      "https://api.koala.io/marketing/v1/device-configurations/alias/web-config",
      {
        method: "GET",
        headers: {
          "X-Organization-Id": "1",
        },
      }
    )
      .then((res) => res.json())
      .then(
        (result) => setTheme(result),
        (error) => console.log(error)
      );
  }, []);

  return (
    <>
      {theme && theme.data && theme.data.data && <ThemeProvider theme={theme.data.data}><Countdown /></ThemeProvider>}
    </>
  );
}

export default App;
