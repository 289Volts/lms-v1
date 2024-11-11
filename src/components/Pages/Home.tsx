import courseImg from "@/assets/images/courseImg1.png";
import heroImg from "@/assets/images/heroImg.png";
import { Link } from "@tanstack/react-router";
import { ComponentProps } from "react";
import CategoryRect from "../Blocks/CategoryRect";
import CourseCard from "../Blocks/CourseCard";

const courseDetails: ComponentProps<typeof CourseCard> = {
  badge: "Development",
  badgeColor: "secondary",
  price: 57,
  title: "The Complete 2022 Web Development Bootcamp",
  rating: "4.6",
  studentsCount: 265700,
  img: courseImg,
  grid: 5,
};
const Home = () => {
  // requestAnimationFrame(() => {
  //   toast.custom(
  //     (t) => (
  //       <ToastOutput
  //         type="info"
  //         message="Lorem ipsum dolor"
  //         fn={() => toast.dismiss(t)}
  //       />
  //     ),
  //     {
  //       unstyled: true,
  //       classNames: {
  //         toast: "w-max translate-x-[-3rem]",
  //       },
  //     },
  //   );
  // });

  const categoriesBgColors = [
    "bg-success-100",
    "bg-secondary-100",
    "bg-primary-100",
    "bg-warning-100",
    "bg-gray-50",
    "bg-error-100",
  ];
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  return (
    <main className="">
      <section className="flex items-center justify-between gap-[102px] pl-[300px] text-gray-900">
        <div className="space-y-10">
          <h1 className="text-display2">
            Learn from experts anytime, anywhere
          </h1>
          <p className="text-bodyXXXL text-gray-700">
            Our mission is to help people to find the best course online and
            learn with expert anytime, anywhere.
          </p>
          <Link
            to="/signin"
            className="inline-block bg-primary-500 px-8 text-buttonL capitalize text-white"
          >
            create account
          </Link>
        </div>
        <div className="h-full">
          <img src={heroImg} alt="" className="" />
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-10 py-20">
        <h2 className="text-heading2">Browse top category</h2>
        <div className="grid grid-cols-4 gap-6">
          {[...Array(12)].map((_, i) => (
            <CategoryRect
              title="Development"
              courses={120000}
              bgColor={
                categoriesBgColors[getRandomInt(categoriesBgColors.length)]
              }
              icon=""
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
