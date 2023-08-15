import React, { useState } from "react";
import { Switch } from "./ui/switch";

const CustomToggle = ({
  checked,
  handler,
}: {
  checked: boolean;
  handler: any;
}) => {
  console.log(checked);
  return (
    <div className="z-0">
      <Switch
        checked={checked}
        onCheckedChange={handler}
        className="bg-red-500"
      ></Switch>
    </div>
  );
};

export default CustomToggle;
