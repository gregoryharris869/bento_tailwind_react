import { motion, MotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
} & MotionProps;
const Block = ({ className, ...rest }: Props) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          opacity: 0,
          y: 50,
        },
        animate: {
          scale: 1,
          opacity: 1,
          y: 0,
        },
      }}
      className={twMerge(
        "col-span-4 p-6 border rounded-lg border-zinc-700 bg-zinc-800",
        className
      )}
      {...rest}
    />
  );
};

export default Block;
