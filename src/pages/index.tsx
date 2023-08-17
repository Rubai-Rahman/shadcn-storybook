import { useState } from "react";
import CustomToggle from "../components/CustomToggle";
import CustomListbox from "@/components/CustomListbox";

const data = [
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

export default function Home() {
  const [checked, setChecked] = useState<boolean>(true);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <CustomToggle checked={checked} handler={handleChecked} />

      <CustomListbox data={data} />
    </div>
  );
}
