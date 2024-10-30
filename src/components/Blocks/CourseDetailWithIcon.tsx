export const CourseDetailWithIcon = ({
  img,
  label,
  labelClass,
}: {
  img: string;
  label: string;
  labelClass?: string;
}) => {
  return (
    <div className="flex items-center gap-1.5">
      <img src={img} alt="" className="" />
      <span className={labelClass}>{label}</span>
    </div>
  );
};
