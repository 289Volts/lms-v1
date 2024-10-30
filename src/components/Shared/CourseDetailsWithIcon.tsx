export const CourseDetailWithIcon = ({
  img,
  label,
}: {
  img: string;
  label: string;
}) => {
  return (
    <div className="flex items-center gap-1">
      <img src={img} alt="" className="" />
      <span className="">{label}</span>
    </div>
  );
};
