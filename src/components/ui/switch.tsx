import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "../../lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      `peer inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors   data-[state=checked]:bg-indigo-600 data-[state=unchecked]:bg-gray-500  `
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        `pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0`
      )}
    >
      {props.checked && (
        <span
          className={`absolute inset-0 h-full w-full flex items-center justify-center transition-opacity focus:outline-none data-[state=checked]:opacity-100 data-[state=checked]:ease-in data-[state=checked]:duration-200 data-[state=unchecked]:opacity-0 data-[state=unchecked]:ease-out data-[state=unchecked]:duration-100`}
          aria-hidden="true"
        >
          <svg
            className="h-3 w-3 text-indigo-600"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
          </svg>
        </span>
      )}
      {!props.checked && (
        <span
          className={`absolute inset-0 h-full w-full flex items-center justify-center transition-opacity focus:outline-none data-[state=checked]:opacity-0 data-[state=checked]:ease-out data-[state=checked]:duration-100 data-[state=unchecked]:opacity-100 data-[state=unchecked]:ease-in data-[state=unchecked]:duration-200`}
        >
          <svg
            className="h-3 w-3 text-gray-400"
            fill="none"
            viewBox="0 0 12 12"
          >
            <path
              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      )}
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
