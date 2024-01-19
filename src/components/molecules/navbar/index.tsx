import NavLink from "./nav-link";

const Navbar = () => {
  return (
    <nav className="bg-primary text-gray-400">
      <div className="container py-3">
        <div className="flex justify-center items-center gap-4">
          <NavLink href="/" title="Home" />
          <NavLink href="/ingredients" title="Ingredients" />
          <NavLink href="/categories" title="Categories" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
