import { Dialog, DialogContent } from "@/shadcn/dialog";
import { ReactElement } from "react";

const CustomDialog = ({
  children,
  isOpen,
  closeModal,
}: {
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

export default CustomDialog;
