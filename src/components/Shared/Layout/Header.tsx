import { CaretDownIcon } from "@radix-ui/react-icons";
import { Link } from "@tanstack/react-router";
import CusDropdown from "../CusDropdown";

const headerLinks = [
  { name: "Home", link: "/" },
  { name: "Courses", link: "/courses" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "Become an Instructor", link: "/become-instructor" },
];

const Header = () => {
  return (
    <header className="bg-gray-900">
      <div className="w-95 mx-auto flex items-center justify-between">
        <nav className="">
          <ul className="flex gap-2">
            {headerLinks.map((link) => (
              <li key={link.name} className="">
                <Link
                  to={link.link}
                  className="text-bodyM500 inline-block border-t border-t-transparent p-4 text-gray-500"
                  activeProps={{
                    className: "!border-t-primary-500 !text-white",
                  }}
                >
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-bodyM400 flex items-center gap-6 text-gray-400">
          <CusDropdown
            trigger={
              <>
                USD <CaretDownIcon className="h-5 w-5" />
              </>
            }
            options={["USD", "EUR", "RUB"]}
          />
          <CusDropdown
            trigger={
              <>
                English <CaretDownIcon className="h-5 w-5" />
              </>
            }
            options={["English", "French", "Spanish"]}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
