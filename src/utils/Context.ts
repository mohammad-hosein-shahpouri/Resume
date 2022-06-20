import { createContext } from "react";

const LanguageContext = createContext({
    Language: "En",
    SetLanguage: (value: React.SetStateAction<string>) => {},
  });
  
  export { LanguageContext };