import { Link } from "react-router-dom";

export default function Headers() {
  return (
    <div>
      <nav className="bg-green-700  justify-between flex py-5 px-10 items-center">
        <h2 className="text-2xl text-white">Rocky-Creation</h2>
        <div className="flex gap-10 text-white">
          <Link className="text-xl cursor-pointer" to="/">
            Home
          </Link>
          <Link className="text-xl cursor-pointer" to="/about">
            About
          </Link>
          <Link className="text-xl cursor-pointer" to="/contact">
            Contact
          </Link>
          <Link className="text-xl cursor-pointer" to="/account">
            Your Account
          </Link>
        </div>
      </nav>
    </div>
  );
}
