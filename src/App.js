import { Suspense } from "react";
import "./App.css";
import "../src/utils/i18next";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Layout/Header";
import { RoutesComponents } from "./Routes";
import { LangContextProvider } from "./context/langProvider";

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <LangContextProvider>
        {" "}
        <BrowserRouter>
          <div className="App">
            <Header />
            <RoutesComponents />
          </div>
        </BrowserRouter>
      </LangContextProvider>
    </Suspense>
  );
}

export default App;
