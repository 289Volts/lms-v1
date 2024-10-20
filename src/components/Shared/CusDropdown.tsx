import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
const CusDropdown = ({
  trigger,
  label,
  triggerClasses,
  labelClasses,
  optionClasses,
  options,
}: {
  trigger: string | React.ReactNode;
  label?: string;
  triggerClasses?: string;
  labelClasses?: string;
  optionClasses?: string;
  options: string[];
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn("flex items-center gap-1", triggerClasses)}
      >
        {trigger}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {label && (
          <>
            <DropdownMenuLabel className={cn(labelClasses)}>
              {label}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
          </>
        )}
        {options.map((option) => (
          <DropdownMenuItem className={cn(optionClasses)} key={option}>
            {option}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CusDropdown;
