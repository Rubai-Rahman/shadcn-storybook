import CustomToggle from "../components/CustomToggle";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const [checked, setChecked] = useState<boolean>(true);

const handleChecked = () => {
  setChecked(!checked);
};

const meta = {
  title: "Example/CustomToggle",
  component: CustomToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // checked: true,
    handler: handleChecked,
  },
} satisfies Meta<typeof CustomToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    checked: true,
    handler: handleChecked,
  },
};
