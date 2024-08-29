import { SiGithub, SiTiktok, SiYoutube } from "react-icons/si";
import Block from "./Block";
import { TfiTwitterAlt } from "react-icons/tfi";

const SocialBlock = () => {
  return (
    <>
      <Block
        whileHover={{ rotate: "2.5deg", scale: 1.1 }}
        className="col-span-6 bg-red-500 md:col-span-3"
      >
        <a
          href="#"
          className="grid h-full text-3xl text-white place-content-center"
        >
          <SiYoutube />
        </a>
      </Block>
      {/* Add more social media links */}
      <Block
        whileHover={{ rotate: "-2.5deg", scale: 1.1 }}
        className="col-span-6 bg-green-500 md:col-span-3"
      >
        <a
          href="#"
          className="grid h-full text-3xl text-white place-content-center"
        >
          <SiGithub />
        </a>
      </Block>
      {/* Add more social media links */}
      <Block
        whileHover={{ rotate: "-2.5deg", scale: 1.1 }}
        className="col-span-6 bg-zinc-50 md:col-span-3"
      >
        <a
          href="#"
          className="grid h-full text-3xl text-black place-content-center"
        >
          <SiTiktok />
        </a>
      </Block>
      {/* Add more social media links */}
      <Block
        whileHover={{ rotate: "2.5deg", scale: 1.1 }}
        className="col-span-6 bg-blue-500 md:col-span-3"
      >
        <a
          href="#"
          className="grid h-full text-3xl text-white place-content-center"
        >
          <TfiTwitterAlt />
        </a>
      </Block>
    </>
  );
};

export default SocialBlock;
