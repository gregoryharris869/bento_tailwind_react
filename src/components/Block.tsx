import { motion, MotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
} & MotionProps;
const Block = ({ className, ...rest }: Props) => {
  return (
    <motion.div
      className={twMerge(
        "col-span-4 p-6 border rounded-lg border-zinc-700 bg-zinc-800",
        className
      )}
      {...rest}
    />
  );
};

export default Block;
