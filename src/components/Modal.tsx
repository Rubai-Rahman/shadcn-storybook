import React, { ReactElement } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const Modal = ({
  content,
  children,
}: {
  content: ReactElement;
  children: ReactElement;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        {content}
      </DialogTrigger>
      <DialogContent className={`max-w-[425px]`}>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
