import React, { useState } from "react";
import { Switch } from "./ui/switch";

const CustomToggle = ({
  checked,
  handler,
}: {
  checked: boolean;
  handler: any;
}) => {
  console.log("Custom Toggle", checked);
  return (
    <div className="z-0">
      <Switch checked={checked} onCheckedChange={handler}></Switch>
    </div>
  );
};

export default CustomToggle;
