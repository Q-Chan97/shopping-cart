import Nav from "./components/Nav/Nav.jsx";
import { Outlet } from "react-router";

import "./App.css";

export default function App() {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}