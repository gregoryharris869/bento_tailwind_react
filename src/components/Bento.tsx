import Block from "./Block";

const Bento = () => {
  return (
    <section className="min-h-screen px-4 py-12 bg-zinc-900 text-zinc-50">
      <div className="grid max-w-4xl grid-cols-12 gap-4 mx-auto grid-flow-dense">
        <Block className="col-span-6">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            adipisci incidunt fuga.
          </p>
        </Block>
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
