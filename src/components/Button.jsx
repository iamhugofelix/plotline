import { Link } from "react-router";

export default function Button ({label = "Button", url, type = "primary", newTab = false}) {
  // Pick between primary and secondary for the button type

  return (
    <Link
      to={url}
      className={`btn btn--${type}`}
      target={newTab ? "_blank" : "_self"}
    >
      {label}
    </Link>
  );
}
