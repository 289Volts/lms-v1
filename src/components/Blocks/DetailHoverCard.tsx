import bars from "@/assets/icons/bars.svg";
import cart from "@/assets/icons/cart.svg";
import clock from "@/assets/icons/clock.svg";
import favorite from "@/assets/icons/favorite.svg";
import star from "@/assets/icons/star.svg";
import user from "@/assets/icons/user.svg";
import { formatCurrency } from "@/utils/formatCurrency";
import { formatNumber } from "@/utils/formatNumber";
import { Link } from "@tanstack/react-router";
import { VariantProps } from "class-variance-authority";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { CourseDetailWithIcon } from "./CourseDetailWithIcon";

export type TDetailHoverCardProps = {
  courseId: string;
  badge: string;
  badgeColor: VariantProps<typeof Badge>["variant"];
  title: string;
  avatar: string;
  instructor: string;
  rating: string;
  ratingsCount: number;
  studentsCount: number;
  difficulty: string;
  duration: string;
  price: number;
  discount: number;
  benefits: string[];
};
const DetailHoverCard = ({
  courseId,
  badge,
  badgeColor,
  title,
  avatar,
  instructor,
  ratingsCount,
  rating,
  studentsCount,
  difficulty,
  duration,
  price,
  discount,
  benefits,
}: TDetailHoverCardProps) => {
  const formatRatingCount = new Intl.NumberFormat().format(ratingsCount);
  const discountedPrice = price - (price * discount) / 100;
  const initials =
    instructor.split(" ").length > 1
      ? instructor.split(" ")[0][0] + instructor.split(" ")[1][0]
      : instructor[0].repeat(2);
  return (
    <div className="absolute left-[97%] top-[-30%] z-50 hidden max-w-[424px] bg-white py-5 shadow-sm group-hover:block">
      <div className="px-5">
        <Badge variant={badgeColor}>{badge}</Badge>
        <h3 className="mt-2.5 text-bodyXL500 text-gray-900">{title}</h3>
      </div>

      <div className="mt-4 space-y-5 px-5">
        <div className="flex items-center justify-between gap-20">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={avatar} />
              <AvatarFallback className="text uppercase">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-bodyM400">
              <span className="text-gray-500">Course by</span>
              <span className="text-gray-900">{instructor}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <img src={star} alt="" className="mr-1.5" />
            <span className="text-bodyL500 text-gray-900">{rating}</span>
            <span className="ml-0.5 text-bodyM400 text-gray-600">
              ({formatRatingCount})
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between text-bodyM400 text-gray-700">
          <CourseDetailWithIcon
            img={user}
            label={`${formatNumber(studentsCount)} students`}
            labelClass="font-semibold"
          />
          <CourseDetailWithIcon
            img={bars}
            label={difficulty}
            labelClass="capitalize"
          />
          <CourseDetailWithIcon img={clock} label={duration} />
        </div>
        <div className="flex items-center justify-between gap-[105px]">
          <div className={`${discount ? "space-x-2.5" : ""} flex items-center`}>
            <p className="flex items-center">
              <span className="text-bodyXXXL text-gray-900">
                {discount
                  ? formatCurrency(discountedPrice)
                  : formatCurrency(price)}
              </span>{" "}
              {discount && (
                <span className={`ml-1 text-base text-gray-500 line-through`}>
                  {formatCurrency(price)}
                </span>
              )}
            </p>
            {discount && (
              <Badge className="whitespace-nowrap bg-primary-100 text-labelL uppercase text-primary-500">
                {discount}% off
              </Badge>
            )}
          </div>
          <Button
            aria-label="add to wishlist"
            variant="swp"
            className="h-12 w-12"
          >
            <img src={favorite} alt="" className="" />
          </Button>
        </div>
      </div>
      <hr className="my-5 bg-gray-100" />
      <div className="px-5">
        <h4 className="text-labelM uppercase text-gray-900">
          what you&apos;ll learn
        </h4>
        <ul className="mt-2 space-y-2">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="relative flex gap-2 text-bodyM400 text-gray-600 before:content-[url(/src/assets/icons/listCheck.svg)]"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-3 bg-gray-100" />
      <div className="space-y-3 px-5">
        <Button aria-label="add to cart" variant="pwp" className="w-full">
          <img src={cart} alt="" className="mr-3" />
          <span className="text-buttonM">Add to cart</span>
        </Button>
        <Button variant="swp" size="md" className="w-full">
          <Link
            to="/courses/:id"
            params={{ id: courseId }}
            className="capitalize text-primary-500"
          >
            course detail
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default DetailHoverCard;
