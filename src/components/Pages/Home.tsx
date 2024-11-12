import courseImg from "@/assets/images/courseImg1.png";
import heroImg from "@/assets/images/heroImg.png";
import { ArrowRightIcon } from "@radix-ui/react-icons";
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
  function getRandomInt(max: number) {
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
      <section className="mx-auto flex w-90 flex-col items-center justify-center gap-10 py-20">
        <h2 className="text-heading2">Browse top category</h2>
        <div className="grid grid-cols-4 gap-6">
          {[...Array(12)].map((_, i) => (
            <CategoryRect
              key={i}
              title="Development"
              courses={120000}
              bgColor={
                categoriesBgColors[getRandomInt(categoriesBgColors.length)]
              }
              icon=""
            />
          ))}
        </div>
        <div className="flex items-center gap-3 text-gray-700">
          <p className="text-bodyM400">We have more category & subcategory.</p>
          <Link
            to="/categories"
            className="flex items-center gap-2 text-bodyM500 text-primary-500"
          >
            Browse All <ArrowRightIcon className="size-6" />
          </Link>
        </div>
      </section>
      <section className="bg-gray-50 py-20">
        <div className="mx-auto flex w-90 flex-col items-center justify-center gap-10">
          <h2 className="text-heading2">Best selling courses</h2>
          <div className="grid grid-cols-5 gap-6">
            {[...Array(10)].map((_, i) => (
              <CourseCard {...courseDetails} index={i} key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
