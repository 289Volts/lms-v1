import star from "@/assets/icons/star.svg";
import { formatNumber } from "@/utils/formatNumber";
import { Button } from "../ui/button";

type TInstructorCardProps = {
  image: string;
  name: string;
  role: string;
  rating: number;
  hasBtn?: boolean;
  studentsCount: number;
};

const InstructorCard = ({
  image,
  name,
  role,
  rating,
  hasBtn,
  studentsCount,
}: TInstructorCardProps) => {
  return (
    <div
      className={`${hasBtn ? "min-w-[312px] pb-5" : "min-w-[244px]"} max-w-[312px] border border-gray-100`}
    >
      <img src={image} alt="" className="max-h-[312px] min-h-[244px]" />
      <div className="border-b border-b-gray-100 p-3 text-center">
        <h3 className="text-bodyL500 text-gray-900">{name}</h3>
        <span className="text-bodyM400 text-gray-500">{role}</span>
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center text-bodyM500 text-gray-700">
          <img src={star} alt="" className="mr-1.5" />
          <span className="">{rating}</span>
        </div>
        <span className="text-bodyM500 text-gray-700">
          {formatNumber(studentsCount)} students
        </span>
      </div>
      <div className="mx-4">
        {" "}
        <Button className="w-full capitalize" variant="swp" size="sm">
          send message
        </Button>
      </div>
    </div>
  );
};

export default InstructorCard;
