import star from "@/assets/icons/star.svg";
import user from "@/assets/icons/user.svg";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { formatNumber } from "@/utils/formatNumber";
import { VariantProps } from "class-variance-authority";
import DetailHoverCard from "./DetailHoverCard";

type TCourseCardProps = {
  img: string;
  badge: string;
  badgeColor: VariantProps<typeof badgeVariants>["variant"];
  price: number;
  title: string;
  rating: string;
  studentsCount: number;
  grid: number;
};

const GRID_LOOKUP: Record<number, string> = {
  3: "px-5",
  4: "px-[1.125rem]",
  5: "px-3.5",
};

const CourseCard = ({
  img,
  badge,
  badgeColor,
  price,
  title,
  rating,
  studentsCount,
  grid,
}: TCourseCardProps) => {
  return (
    <div className="group relative border border-gray-100 text-bodyM500">
      <DetailHoverCard
        title={title}
        price={price}
        badge={badge}
        badgeColor={badgeColor}
        studentsCount={studentsCount}
        benefits={["test", "test"]}
        courseId={"test"}
        difficulty={"test"}
        duration={"test"}
        instructor={"test"}
        rating={"test"}
        ratingsCount={1000}
        discount={10}
        avatar={""}
      />
      <div className="">
        <img src={img} alt="" className="w-full" />
      </div>
      <div
        className={`mt-3.5 ${GRID_LOOKUP[grid]} ${grid === 5 ? "space-y-2.5" : grid === 4 || grid === 3 ? "space-y-2" : ""}`}
      >
        <div className="flex items-center justify-between">
          <Badge variant={badgeColor} className="text-labelS">
            {badge}
          </Badge>
          <p className="text-bodyL600 text-primary-500">{price}</p>
        </div>
        <p className="text-gray-900">
          {title.length > 50 ? `${title.substring(0, 50)}...` : title}
        </p>
      </div>
      <hr className="my-3.5" />
      <div
        className={`flex items-center justify-between pb-3.5 text-gray-700 ${GRID_LOOKUP[grid]}`}
      >
        <div className="flex items-center gap-1">
          <img src={star} alt="" className="" />
          <span className="">{rating}</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={user} alt="" className={`${grid !== 3 ? "h-5 w-5" : ""}`} />
          <span className="">{formatNumber(studentsCount)} students</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
