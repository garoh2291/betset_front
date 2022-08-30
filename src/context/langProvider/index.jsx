import { useState } from "react";
import { getLang } from "../../helpers";
import { langContext } from "../index";

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState(getLang());

  return (
    <langContext.Provider value={{ lang, setLang }}>
      {children}
    </langContext.Provider>
  );
};
