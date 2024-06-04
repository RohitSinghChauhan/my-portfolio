import { useEffect } from "react";
import CloseButton from "../CloseButton";
import { motion } from "framer-motion";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  links: {
    id: number;
    title: string;
    s_id: string;
  }[];
};

const Drawer = ({ isOpen, onClose, links }: Props) => {
  const variant = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variant}
      transition={{ type: "spring", stiffness: 80 }}
      className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity
    ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div
        className={`fixed inset-0 bg-white p-4 transition-transform transform overflow-y-auto
        dark:bg-primary
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ height: "100vh" }}
      >
        <div className="flex justify-end items-start">
          <CloseButton onClose={onClose} />
        </div>

        {/* LINKS */}
        <div className="mt-7 flex flex-col gap-12 items-center">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.s_id}
              className="text-2xl border border-gray-500 w-full p-2 rounded-md text-center"
              onClick={onClose}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Drawer;
