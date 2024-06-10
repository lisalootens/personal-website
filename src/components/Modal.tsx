import { FC, ReactNode } from "react";

interface ModalProps {
  onClose: () => any;
  closeButtonTitle: string;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({
  onClose,
  closeButtonTitle,
  children,
}) => {
  const handleModalClose = () => {
    // Set overflow property to default
    document.body.style.overflow = "";
    onClose();
  };

  return (
    <section className="fixed top-0 left-0 overflow-hidden pt-20 w-screen h-screen bg-[#151515BF]">
      <button
        className=" absolute top-[2vh] right-[2vw] py-4 px-2 text-white text-base z-10 capitalize"
        onClick={handleModalClose}
      >
        {closeButtonTitle}
      </button>
      {children}
    </section>
  );
};
