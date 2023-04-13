import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./main.scss";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Game from "./game/Game";
import NotFound from "./components/404";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav />

      <main>
        <div className="container">
          <Routes>
            <Route path="/" Component={Game} />
            <Route path="/information" Component={Info} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </div>
      </main>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
