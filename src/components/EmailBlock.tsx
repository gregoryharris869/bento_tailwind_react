import { FiMail } from "react-icons/fi";
import Block from "./Block";

const EmailBlock = () => {
  return (
    <Block className="col-span-12 md:col-span-9">
      <p className="mb-3text-lg">Email Me</p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center gap-2 py-1 "
      >
        <input
          type="email"
          placeholder="Enter your Email"
          className="w-full px-3 py-1.5 transition-colors border rounded border-zinc-700 bg-zinc-800 focus:border-red-300 focus:outline-0"
        />
        <button
          type="submit"
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors rounded whitespace-nowrap bg-zinc-50 text-zinc-900 hover:bg-zinc-300"
        >
          <FiMail /> Join the list.
        </button>
      </form>
    </Block>
  );
};

export default EmailBlock;
