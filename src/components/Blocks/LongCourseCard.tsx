import bars from "@/assets/icons/bars.svg";
import clock from "@/assets/icons/clock.svg";
import star from "@/assets/icons/star.svg";
import user from "@/assets/icons/user.svg";
import courseImage1 from "@/assets/images/courseImg1.png";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatNumber } from "@/utils/formatNumber";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { CourseDetailWithIcon } from "./CourseDetailWithIcon";
import { TDetailHoverCardProps } from "./DetailHoverCard";

type TLongCourseCardProps = Omit<
  TDetailHoverCardProps,
  "courseId" | "benefits"
>;

const LongCourseCard = ({
  price,
  discount,
  title,
  badge,
  badgeColor,
  ratingsCount,
  rating,
  studentsCount,
  difficulty,
  duration,
  avatar,
  instructor,
}: TLongCourseCardProps) => {
  const formatRatingCount = new Intl.NumberFormat().format(ratingsCount);
  const discountedPrice = price - (price * discount) / 100;
  const initials =
    instructor.split(" ").length > 1
      ? instructor.split(" ")[0][0] + instructor.split(" ")[1][0]
      : instructor[0].repeat(2);
  return (
    <div className="group flex h-fit max-w-fit bg-white shadow-sm transition-shadow duration-300 hover:shadow">
      <img
        src={courseImage1}
        alt=""
        className="max-h-[188px] max-w-[220px] object-cover"
      />
      <div className="min-w-[428px] py-4">
        <div className="flex items-center justify-between px-6">
          <Badge variant={badgeColor} className="text-labelS">
            {badge}
          </Badge>
          <div className={`${discount ? "space-x-2.5" : ""} flex items-center`}>
            <p className="flex items-center">
              <span className="text-bodyXL text-gray-900">
                {discount
                  ? formatCurrency(discountedPrice)
                  : formatCurrency(price)}
              </span>{" "}
              {discount && (
                <span className={`ml-1 text-sm text-gray-500 line-through`}>
                  {formatCurrency(price)}
                </span>
              )}
            </p>
          </div>
        </div>
        <p className="mt-2 px-6 text-bodyL500 text-gray-900 transition-colors duration-300 group-hover:text-primary-500">
          {title}
        </p>
        <div className="mt-4">
          <div className="flex items-center justify-between gap-[150px] px-6">
            <div className="flex items-center gap-3">
              <Avatar className="h-7 w-7">
                <AvatarImage src={avatar} />
                <AvatarFallback className="text-xs uppercase">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <span className="text-bodyM400 text-gray-700">{instructor}</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={star} alt="" className="mr-1" />
              <span className="text-bodyM500 text-gray-900">{rating}</span>
              <span className="ml-0.5 text-bodyM400 text-gray-600">
                ({formatRatingCount})
              </span>
            </div>
          </div>
          <hr className="my-4 bg-gray-100" />
          <div className="flex w-full items-center justify-between px-6 text-bodyM400 text-gray-700">
            <CourseDetailWithIcon
              img={user}
              label={`${formatNumber(studentsCount)} students`}
              labelClass="font-semibold "
            />
            <CourseDetailWithIcon
              img={bars}
              label={difficulty}
              labelClass="capitalize"
            />
            <CourseDetailWithIcon img={clock} label={duration} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongCourseCard;
