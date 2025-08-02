import Button from "./Button";

export default function NavBar() {

  return (
    <div className="nav-bar">
      <img src="#" alt="Logo" />
      <div className="nav-links">
        <Button label="Movies" url="/movies" />
        <Button label="TV Shows" url="/tv" />
      </div>
    </div>
  );
}
