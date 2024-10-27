import courseImg from "@/assets/images/courseImg1.png";
import { ComponentProps } from "react";
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
  return (
    <div className="grid grid-cols-5">
      <CourseCard {...courseDetails} />
    </div>
  );
};

export default Home;
