import React, { ReactElement } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const Modal = ({
  // content,
  children,
  isOpen,
  closeModal,
}: {
  // content: ReactElement;
  children: ReactElement;
  isOpen: boolean;
  closeModal: () => void;
}) => {
  return (
    <Dialog open={isOpen || false} onOpenChange={closeModal}>
      <DialogContent className={`max-w-[425px]`}>{children}</DialogContent>
    </Dialog>
  );
};

export default Modal;
