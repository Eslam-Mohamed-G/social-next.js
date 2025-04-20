import Link from "next/link";
import Feed from "./components/Feed";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="flex justify-between text-gray-500 font-bold border-b-[1px] border-gray-500 px-4 pt-4">
          <Link href="/" className="pb-3 flex items-center border-b-4 border-blue-400 capitalize">for you</Link>
          <Link href="/" className="pb-3 flex items-center capitalize">following</Link>
        </div>
        main seciton
        <Feed/>
      </main>
    </div>
  );
}
