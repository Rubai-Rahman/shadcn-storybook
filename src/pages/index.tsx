import { useState } from "react";
import CustomToggle from "../components/CustomToggle";
import CustomListbox from "@/components/CustomListbox";

export default function Home() {
  const [checked, setChecked] = useState<boolean>(true);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <CustomToggle checked={checked} handler={handleChecked} />

      <CustomListbox />
    </div>
  );
}
