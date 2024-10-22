import facebook from "@/assets/icons/facebook.svg";
import instagram from "@/assets/icons/instagram.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import rightArr from "@/assets/icons/rightArr.svg";
import twitter from "@/assets/icons/twitter.svg";
import youtube from "@/assets/icons/youtube.svg";
import appstore from "@/assets/images/appstore.png";
import logo from "@/assets/images/footerLogo.svg";
import playstore from "@/assets/images/playstore.png";
import { Link } from "@tanstack/react-router";

const socialLinks = [facebook, instagram, linkedin, twitter, youtube];

const categories = [
  { name: "Development", link: "/courses?category=development" },
  { name: "Finance & Accounting", link: "/courses?category=finance" },
  { name: "Design", link: "/courses?category=design" },
  { name: "Business", link: "/courses?category=business" },
];

const quickLinks = [
  { name: "About", link: "/about" },
  { name: "Become Instructor", link: "/instructors" },
  { name: "Contact", link: "/contact" },
  { name: "Career", link: "/careers" },
];

const support = ["Help Center", "FAQs", "Terms of use", "Privacy policy"];

const FooterNavLinks = ({
  title,
  data,
}: {
  title: string;
  data: { name: string; link: string }[];
}) => {
  return (
    <div className="">
      <h3 className="mb-5 text-labelL uppercase">{title}</h3>
      <nav className="">
        <ul className="space-y-2">
          {data.map((link, index) => (
            <li key={index} className="">
              <Link
                to={link.link}
                className="group flex w-fit border-b-2 border-b-transparent py-2 pb-1 text-bodyM400 text-gray-500 transition-colors duration-300 hover:border-b-primary-500"
              >
                <span>{link.name}</span>
                <img
                  src={rightArr}
                  alt=""
                  className="invisible ml-3 transition duration-300 group-hover:visible"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="contain flex items-center justify-between gap-32 px-[10%] py-[100px]">
        <div className="w-fit space-y-8">
          <h2 className="text-heading2">
            Start learning with 67.1k
            <br /> students around the world.
          </h2>
          <div className="space-x-4">
            <Link
              to="/register"
              className="inline-block bg-primary-500 px-6 text-buttonM capitalize text-white"
            >
              join the family
            </Link>
            <Link
              to="/courses"
              className="inline-block bg-white/5 px-6 text-buttonM capitalize text-white"
            >
              browse all courses
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-12">
          <div className="flex flex-col">
            <span className="text-heading2">6.3k</span>
            <span className="text-bodyL500 text-gray-300">Online courses</span>
          </div>
          <div className="flex flex-col">
            <span className="text-heading2">6.3k</span>
            <span className="text-bodyL500 text-gray-300">Online courses</span>
          </div>
          <div className="flex flex-col">
            <span className="text-heading2">6.3k</span>
            <span className="text-bodyL500 text-gray-300">Online courses</span>
          </div>
        </div>
      </div>{" "}
      <div className="border-y border-x-gray-100/20">
        <div className="contain flex items-center justify-between px-[10%] py-20">
          <div className="w-[28%]">
            <Link to="/">
              <img src={logo} alt="" className="" />
            </Link>
            <p className="mb-6 mt-5 text-bodyM500 text-gray-500">
              Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
              mattis odio at.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link, index) => (
                <div
                  key={index}
                  className="flex h-[46px] w-[46px] items-center justify-center bg-[#363B47] transition-colors duration-200 hover:bg-primary-500"
                >
                  <img src={link} alt="" className="" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-9">
            <div className="flex gap-10">
              <FooterNavLinks title="Top 4 Categories" data={categories} />
              <FooterNavLinks title="Quick Links" data={quickLinks} />
              <div className="">
                <h3 className="mb-5 text-labelL uppercase">Support</h3>
                <nav className="">
                  <ul className="space-y-2">
                    {support.map((link, index) => (
                      <li
                        key={index}
                        className="group flex w-fit border-b-2 border-b-transparent py-2 pb-1 text-bodyM400 text-gray-500 transition-colors duration-300 hover:border-b-primary-500"
                      >
                        <span>{link}</span>
                        <img
                          src={rightArr}
                          alt=""
                          className="invisible ml-3 transition duration-300 group-hover:visible"
                        />
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
            <div className="">
              <h3 className="mb-5 text-labelL uppercase">Download our app</h3>
              <img src={appstore} alt="" className="mb-3" />
              <img src={playstore} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
