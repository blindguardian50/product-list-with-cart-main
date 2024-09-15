import {useContext} from "react";
import {DessertContext} from "./DessertContext.tsx";

export const useDessertContext = () => {
  const context = useContext(DessertContext)
  if (!context) throw new Error('DessertContext must be used within a DessertProvider');
  return context
}
