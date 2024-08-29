import AboutBlock from "./AboutBlock";
import Block from "./Block";
import EmailBlock from "./EmailBlock";
import HeaderBlock from "./HeaderBlock";
import LocationBlock from "./LocationBlock";
import SocialBlock from "./SocialBlock";

const Bento = () => {
  return (
    <section className="min-h-screen px-4 py-12 bg-zinc-900 text-zinc-50">
      <div className="grid max-w-4xl grid-cols-12 gap-4 mx-auto grid-flow-dense">
        <HeaderBlock />
        <SocialBlock />
        <AboutBlock />
        <LocationBlock />
        <EmailBlock />
      </div>
    </section>
  );
};

export default Bento;
