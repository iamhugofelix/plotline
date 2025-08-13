import { Link } from "react-router";

export default function Button({
  children,
  url,
  type = "primary",
  size = "md",
  newTab = false,
}) {
  // Pick between primary and secondary for the button type

  return (
    <Link
      to={url}
      className={`btn btn-${type} btn--${size}`}
      target={newTab ? "_blank" : "_self"}
    >
      {children}
    </Link>
  );
}
