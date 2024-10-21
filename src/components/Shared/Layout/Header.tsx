import heartIcon from "@/assets/icons/CusHeartIcon.svg";
import logo from "@/assets/images/logo.svg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Link } from "@tanstack/react-router";
import { SearchIcon } from "lucide-react";
import CusDropdown from "../CusDropdown";
import CusCartIcon from "./CusCartIcon";
import CusNotificationsIcon from "./CusNotificationsIcon";

const headerLinks = [
  { name: "Home", link: "/" },
  { name: "Courses", link: "/courses" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
  { name: "Become an Instructor", link: "/become-instructor" },
];

const Header = () => {
  return (
    <header className="">
      <div className="flex items-center justify-between bg-gray-900 px-8">
        <nav className="">
          <ul className="flex gap-2">
            {headerLinks.map((link) => (
              <li key={link.name} className="">
                <Link
                  to={link.link}
                  className="text-bodyM500 inline-block border-t border-t-transparent p-4 text-gray-500 transition-colors duration-300"
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
      <div className="mx-auto flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-[3.125rem]">
          <img src={logo} alt="E-tutor" className="" />
          <div className="flex items-center gap-4">
            <CusDropdown
              triggerClasses="text-bodyL400 text-gray-700 justify-between gap-[5.875rem] py-3 px-[1.125rem] border border-gray-100"
              trigger={
                <>
                  Browse <CaretDownIcon className="h-5 w-5" />
                </>
              }
              options={["English", "French", "Spanish"]}
            />
            <div className="relative flex items-center">
              <SearchIcon className="absolute left-5 h-5 w-5" />
              <Input
                className="min-w-[350px] max-w-[424px] flex-1 pl-[3.375rem]"
                placeholder="What do you want learn..."
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-6">
            <Link
              aria-label="My Notifications"
              to="/students/$studentId"
              search={{ tab: "message" }}
              params={{ studentId: "12345" }}
            >
              <CusNotificationsIcon count={0} />
            </Link>
            <Link
              to="/students/$studentId"
              search={{ tab: "wishlist" }}
              params={{ studentId: "12345" }}
              className=""
              aria-label="My Wishlist"
            >
              <img src={heartIcon} alt="" className="" />
            </Link>
            <Link
              to="/students/$studentId/cart"
              params={{ studentId: "12345" }}
              className=""
              aria-label="My Cart"
            >
              <CusCartIcon count={0} />
            </Link>
          </div>
          {2 % 2 == 0 ? (
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          ) : (
            <div className="space-x-3">
              <Button variant="swp" size="md" className="capitalize">
                create account
              </Button>
              <Button variant="pwp" size="md" className="capitalize">
                sign in
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
