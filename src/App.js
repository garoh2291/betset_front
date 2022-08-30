import { Suspense } from "react";
import "./App.css";
import "../src/utils/i18next";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Layout/Header";

function App() {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <BrowserRouter>
        <div className="App">
          <Header />
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
