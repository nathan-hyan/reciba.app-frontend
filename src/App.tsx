import React, { useContext } from "react";
import { HashRouter } from "react-router-dom";
import { LangContext } from "configs/Language";
import IdGenerationProvider from "configs/IdGeneration";
import UserContextProvider from "configs/UserContext";
import Navigation from "components/Navigation";

import "utils/i18n";
import Routing from "components/Routing";

function App() {
  const language = useContext(LangContext);
  const changeLang = (lang: "en" | "es") => {
    language.setLanguage(lang);
  };

  return (
    <>
      <UserContextProvider>
        <IdGenerationProvider>
          <HashRouter basename={process.env.PUBLIC_URL}>
            <Navigation changeLang={(lang) => changeLang(lang)} />
            <Routing />
          </HashRouter>
        </IdGenerationProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
