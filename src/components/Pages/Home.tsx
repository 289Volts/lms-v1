import courseImg from "@/assets/images/courseImg1.png";
import { ComponentProps } from "react";
import CourseCard from "../Blocks/CourseCard";
import LongCourseCard from "../Blocks/LongCourseCard";

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
    <div className="gri flex grid-cols-5 gap-4">
      <CourseCard {...courseDetails} />
      <LongCourseCard
        avatar={""}
        instructor={"test"}
        difficulty={"test"}
        discount={10}
        title={"Introduction to Web Development"}
        badge={"test"}
        badgeColor={"primary"}
        duration={"test"}
        price={57}
        ratingsCount={1000}
        rating={"test"}
        studentsCount={265700}
      />
    </div>
  );
};

export default Home;
