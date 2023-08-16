import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Check } from "lucide-react";
import { Command, CommandGroup, CommandItem } from "./ui/command";
import { cn } from "../lib/utils";
import { IoIosArrowDown } from "react-icons/io";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const CustomListbox = ({ maxWidth = "w-1/4" }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <span
          className={`${maxWidth} border border-gray-300 rounded-md px-3 py-1 flex justify-between items-center cursor-pointer`}
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Please Select..."}
          <IoIosArrowDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </span>
      </PopoverTrigger>
      <PopoverContent className={`w-[380px] p-0`}>
        <Command>
          <CommandGroup>
            {frameworks.map(
              (framework: { value: string; label: string }, index: number) => (
                <CommandItem
                  key={index}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              )
            )}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CustomListbox;
