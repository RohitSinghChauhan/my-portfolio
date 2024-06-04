import { motion } from "framer-motion";

const BtnAnimate = ({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string | undefined;
  onClick?: () => void;
}) => {
  return (
    <motion.button
      className={className}
      whileHover={{ scale: 0.9 }}
      whileTap={{ scale: 1 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default BtnAnimate;
