import { cn } from "@/lib/utils";

type TCategoryRectProps = {
  title: string;
  courses: number;
  icon: string;
  bgColor: string;
};

const CategoryRect = ({
  title,
  courses,
  icon,
  bgColor,
}: TCategoryRectProps) => {
  return (
    <div className={cn("flex min-w-[312px] items-center gap-5 p-5", bgColor)}>
      <div className="flex size-16 items-center justify-center bg-white">
        <img src={icon} alt="" />
      </div>
      <div className="flex flex-col space-y-2">
        <span className="text-bodyL500">{title}</span>
        <span className="text-bodyM400 text-gray-600">
          {courses.toLocaleString()} courses
        </span>
      </div>
    </div>
  );
};

export default CategoryRect;
