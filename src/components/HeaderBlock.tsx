import { FiArrowRight } from "react-icons/fi";
import Block from "./Block";

const HeaderBlock = () => {
  return (
    <Block className="col-span-12 row-span-2 md:col-span-6">
      <img
        src="https://img.freepik.com/premium-vector/illustration-man-with-beard-glasses-wearing-shirt-with-suspenders_995281-1448.jpg?w=1060"
        alt="Avatar"
        className="mb-4 rounded-full size-14"
      />
      <h1 className="pb-12 text-4xl font-medium leading-tight">
        Hi, I'm Bento.{" "}
        <span className="text-zinc-400">
          I build things. Like cool websites.
        </span>
      </h1>
      <a
        href="#"
        className="flex items-center gap-1 text-red-300 hover:underline"
      >
        Contact me <FiArrowRight />
      </a>
    </Block>
  );
};

export default HeaderBlock;
