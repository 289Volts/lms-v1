import { Link } from "@tanstack/react-router";
import Logo from "./Logo";

const AuthHeader = () => {
  return (
    <header className="py-5">
      <div className="w-70 mx-auto flex items-center justify-between">
        <Logo />
        <div className="space-x-4">
          <span className="">Don&apos;t have account?</span>
          <Link
            to="/signin"
            className="text-buttonM bg-primary-100 text-primary-500 inline-block px-6 capitalize"
          >
            create account
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;
