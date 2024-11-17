import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/svg/Logo";

const navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Logout",
    url: "/login",
  },
];

function Navbar() {
  return (
    <section className="bg-white">
      <div className="container flex items-center justify-between gap-8 bg-white py-4">
        <div className="flex items-center gap-2">
          <Link className="pr-6 border-r border-r-zinc-200 scale-75" to="/">
            <Logo />
          </Link>

          <p>Dashboard</p>
        </div>

        <nav className="flex items-center gap-2">
          {navLinks.map((link) => (
            <NavLink
              className="hover:bg-zinc-100 py-2 px-4 duration-150"
              key={link.name}
              to={link.url}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
