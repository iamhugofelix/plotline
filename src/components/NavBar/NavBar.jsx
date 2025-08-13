import { Link } from "react-router";
import Buttons from "../Buttons/Buttons";
import { Clapperboard, Compass, Film, Tv } from "lucide-react";
import { GrGithub } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";


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
        <Buttons url="/" type="nav" size="sm">
          <Compass size={16} /> Discover
        </Buttons>
        <Buttons url="/movies" type="nav" size="sm">
          <Clapperboard size={16} /> Movies
        </Buttons>
        <Buttons url="/tv" type="nav" size="sm">
          <Tv size={16} /> Series
        </Buttons>
        <Buttons url="/upcoming" type="nav" size="sm">
          <Film size={16} /> Upcoming
        </Buttons>
      </div>
      <div className="right-actions">
        <Link to={"https://github.com/iamhugofelix/plotline"} target="_blank">
        <FaGithub size={24}/>
        </Link>
      </div>
    </div>
  );
}
