import { createContext, useContext } from "react";
import { IData } from "./interfaces";

// Define a default context value matching IData
const defaultContextValue: IData = {
    event: undefined,
    outputEvent: () => {}, // Provide a noop function as a placeholder
};

// Creating the context with an initial value that matches the expected type
export const DataContext = createContext<IData>(defaultContextValue);

export const useDataContext = () => useContext(DataContext);