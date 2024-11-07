import error from "@/assets/icons/error.svg";
import info from "@/assets/icons/info.svg";
import success from "@/assets/icons/success.svg";
import warning from "@/assets/icons/warning.svg";
import { cn } from "@/lib/utils";
import { Cross1Icon } from "@radix-ui/react-icons";
import { VariantProps } from "class-variance-authority";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

type TCusToastProps = {
  type?: "success" | "error" | "warning" | "info";
  message: string;
};

const LOOKUP: Record<
  NonNullable<TCusToastProps["type"]>,
  {
    icon: string;
    badge: VariantProps<typeof Badge>["variant"];
    dividerClasses: string;
    containerClasses: string;
  }
> = {
  success: {
    icon: success,
    badge: "success",
    dividerClasses: "bg-success-700",
    containerClasses: "bg-success-100  border-success-300 successToast",
  },
  error: {
    icon: error,
    badge: "error",
    dividerClasses: "bg-error-700",
    containerClasses: "bg-error-100  border-error-300 errorToast",
  },
  warning: {
    icon: warning,
    badge: "warning",
    dividerClasses: "bg-warning-800",
    containerClasses: "bg-warning-100  border-warning-300 warningToast",
  },
  info: {
    icon: info,
    badge: "gray",
    dividerClasses: "bg-gray-900",
    containerClasses: "bg-gray-50 border-gray-200 infoToast",
  },
};

const ToastOutput = ({
  type,
  message,
  fn,
}: {
  type: TCusToastProps["type"];
  message: string;
  fn: () => void;
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between gap-12 border p-2 pl-6",
        LOOKUP[type as keyof typeof LOOKUP].containerClasses,
      )}
    >
      <div className="flex items-center space-x-3">
        <img src={success} alt="" className="" />
        <span className="text-labelL">{message}</span>
      </div>
      <div className="flex items-center">
        <Badge
          variant={type === "info" ? "gray" : type}
          className="px-6 text-buttonS capitalize"
        >
          {LOOKUP[type as keyof typeof LOOKUP].badge === "gray"
            ? "info"
            : LOOKUP[type as keyof typeof LOOKUP].badge}
        </Badge>
        <div
          className={cn(
            "mx-2 h-[28px] w-0.5 opacity-20",
            LOOKUP[type as keyof typeof LOOKUP].dividerClasses,
          )}
        />
        <Button variant="ghost" className="p-3" onClick={fn}>
          <Cross1Icon className="size-3.5" />
        </Button>
      </div>
    </div>
  );
};

export default ToastOutput;
