import courseImg from "@/assets/images/courseImg1.png";
import { ComponentProps } from "react";
import { toast } from "sonner";
import CourseCard from "../Blocks/CourseCard";
import ToastOutput from "../Blocks/CusToast";
import InstructorCard from "../Blocks/InstructorCard";

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
  requestAnimationFrame(() => {
    toast.custom(
      (t) => (
        <ToastOutput
          type="info"
          message="Lorem ipsum dolor"
          fn={() => toast.dismiss(t)}
        />
      ),
      {
        unstyled: true,
        classNames: {
          toast: "w-max translate-x-[-3rem]",
        },
      },
    );
  });
  return (
    <div className="flex gap-4">
      <CourseCard {...courseDetails} />
      <InstructorCard
        studentsCount={265700}
        image=""
        name="test"
        role="test"
        rating={4.6}
        hasBtn
      />

      {/* <LongCourseCard
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
      /> */}
    </div>
  );
};

export default Home;
