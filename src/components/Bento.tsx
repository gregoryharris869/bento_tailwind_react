import Block from "./Block";
import HeaderBlock from "./HeaderBlock";

const Bento = () => {
  return (
    <section className="min-h-screen px-4 py-12 bg-zinc-900 text-zinc-50">
      <div className="grid max-w-4xl grid-cols-12 gap-4 mx-auto grid-flow-dense">
        <HeaderBlock />
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </div>
    </section>
  );
};

export default Bento;
