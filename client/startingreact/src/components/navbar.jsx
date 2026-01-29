import { NavLink } from "react-router-dom";

export default function Navbar({ links }) {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}
