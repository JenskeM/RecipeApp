import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
//import { RecipeListPage } from "./pages/RecipeListPage";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
      {/* <RecipeListPage /> */}
    </ChakraProvider>
  </React.StrictMode>
);
