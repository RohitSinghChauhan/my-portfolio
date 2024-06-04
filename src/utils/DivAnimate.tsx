import { motion } from "framer-motion";

const DivAnimate = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string | undefined;
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ type: "spring", stiffness: 35 }}
    >
      {children}
    </motion.div>
  );
};

export default DivAnimate;
