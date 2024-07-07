import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
          <Link to="/">HOME</Link>
          <Link to="/test">ALL COUNTRIES</Link>
      </ul>
    </nav>
  );
}

export default Navbar
