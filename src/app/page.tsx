import Link from "next/link";
import Feed from "./components/Feed";
import Share from "./components/Share";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <div className="flex justify-around text-textGray font-bold border-b-[1px] border-textGrayLight dark:border-borderGray px-4 pt-4">
          <Link href="/" className="pb-3 flex items-center border-b-4 border-blue-400 capitalize">for you</Link>
          <Link href="/" className="pb-3 flex items-center capitalize">following</Link>
        </div>
        <Share/>
        <Feed/>
      </main>
    </div>
  );
}
