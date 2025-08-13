import { Link } from "react-router";
import Buttons from "../Buttons/Buttons";
import { Clapperboard, Compass, Film, Tv } from "lucide-react";


export default function NavBar() {
  return (
    <div className="nav-bar">
      <Link to={"/"}>
        <img
          src="public/plotline-icon.svg"
          alt="Plotline Logo"
          className="logo"
        />
      </Link>
      <div className="nav-links">
        <Buttons url="/" type="nav" size="md">
          <Compass size={16}/> Discover
        </Buttons>
        <Buttons url="/movies" type="nav" size="md">
          <Clapperboard size={16} /> Movies
        </Buttons>
        <Buttons url="/tv" type="nav" size="md">
          <Tv size={16} /> Series
        </Buttons>
        <Buttons url="/upcoming" type="nav" size="md">
          <Film size={16} /> Upcoming
        </Buttons>
      </div>
    </div>
  );
}
