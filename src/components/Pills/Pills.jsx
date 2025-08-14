import { Link } from "react-router";

export default function Pill({
  children,
  url,
}) {
  // Pick between primary and secondary for the button type

  return (
    <Link
      to={url}
      className='pill pill--sm'
    >
      {children}
    </Link>
  );
}
