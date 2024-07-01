import toast from "react-hot-toast";
import { useAppSelector } from "setup/redux/Hooks";

export interface CustomToastNotificationProps {
  message: string;
  status: "promise" | "error" | "success";
  name?: string;
  duration?: number;
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  icon?: string;
  iconTheme?: object;
  style?: object;
  className?: string;
  ariaProps?: object;
  promise?: any;
  labelText?: string;
  labelClassname?: string;
  successOnClick?: () => void;
}

const showCustomToastNotification = ({
  message,
  status,
  duration,
  position,
  icon,
  iconTheme,
  style,
  className,
  promise,
  ariaProps,
  labelText,
  labelClassname,
  successOnClick,
}: CustomToastNotificationProps) => {
  switch (status) {
    case "error": {
      const insuranceRoute = location.pathname.slice(
        location.pathname.lastIndexOf("/") + 1
      );
      const errorToast = toast.error(
        (t) => (
          <div className="d-flex gap-2 align-items-center ">
            <div className="fs-12">{message}</div>
            <button
              className={`${
                labelText ? "d-inline-block" : "d-none"
              } toast-notification-label ${labelClassname && labelClassname}`}
              onClick={() => {
                successOnClick && successOnClick();
                toast.dismiss(t.id);
              }}
            >
              {labelText}
            </button>
          </div>
        ),
        {
          duration: duration || 3000,
          position: position || "top-center",
          icon: icon || null,
          iconTheme:
            {
              primary: "#000",
              secondary: "#fff",
            } || iconTheme,
          className,
          style: {
            borderRadius: 5,
            fontSize: "14px",
            lineHeight: "21px",
            color: "red",
            border: 0,
            maxWidth: "max-content",
            ...style,
          },
          ariaProps:
            {
              role: "status",
              "aria-live": "polite",
            } || ariaProps,
        }
      );

      if (insuranceRoute !== "quote" && className === "getAQuoteError") {
        toast.dismiss(errorToast);
      }
      break;
    }

    case "success":
      toast.success(
        (t) => (
          <div className="d-flex gap-2 align-items-center ">
            <div className="fs-12">{message}</div>
            <button
              className={`${
                labelText ? "d-inline-block" : "d-none"
              } toast-notification-label ${labelClassname && labelClassname}`}
              onClick={() => {
                successOnClick && successOnClick();
                toast.dismiss(t.id);
              }}
            >
              {labelText}
            </button>
          </div>
        ),
        {
          duration: duration || 3000,
          position: position || "top-center",
          icon: icon || null,
          iconTheme: {
            primary: "#000",
            secondary: "#fff",
          },
          style: {
            border: 0,
            fontSize: "14px",
            lineHeight: "21px",
            color: "#222222",
            borderRadius: 5,
            maxWidth: "max-content",
            ...style,
          },
          className,
          ariaProps:
            {
              role: "status",
              "aria-live": "polite",
            } || ariaProps,
        }
      );
      break;
    case "promise":
      toast.promise(
        promise,
        {
          loading: "Loading",
          success: "Got the data",
          error: "Error when fetching",
        },
        {
          duration: duration || 3000,
          position: position || "top-center",
          icon: icon || null,
          iconTheme:
            {
              primary: "#000",
              secondary: "#fff",
            } || iconTheme,
          style: {
            border: 0,
            fontSize: "14px",
            lineHeight: "21px",
            color: "#222222",
            borderRadius: 5,
            maxWidth: "max-content",
            ...style,
          },
          ariaProps:
            {
              role: "status",
              "aria-live": "polite",
            } || ariaProps,
        }
      );
      break;
  }
};

export default showCustomToastNotification;
