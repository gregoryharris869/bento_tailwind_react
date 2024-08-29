import AboutBlock from "./AboutBlock";
import EmailBlock from "./EmailBlock";
import Footer from "./Footer";
import HeaderBlock from "./HeaderBlock";
import LocationBlock from "./LocationBlock";
import Logo from "./Logo";
import SocialBlock from "./SocialBlock";
import { motion } from "framer-motion";

const Bento = () => {
  return (
    <div className="min-h-screen px-4 py-12 bg-zinc-900 text-zinc-50">
      <Logo />
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="grid max-w-4xl grid-cols-12 gap-4 mx-auto grid-flow-dense"
      >
        <HeaderBlock />
        <SocialBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailBlock />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Bento;
