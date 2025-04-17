import Image from "next/image";
import Link from "next/link";
import React from "react";

const menuList = [
  {
    id: 1,
    name: "Home",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 9,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

export default function LeftBar() {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-0 bg-black">
      <div className="flex flex-col gap-4 items-center xl:items-start">
        {/* logo */}
        <Link href="/">
          <Image src="icons/logo.svg" alt="logo" width={24} height={24}/>
        </Link>

        {/* menu list */}
        <div className="flex flex-col">
          {menuList.map((menu) => (
            <Link href={menu.link} key={menu.id} className="flex items-center gap-3 hover:bg-[#181818] rounded-4xl py-3 px-3">
              <img src={`icons/${menu.icon}`} alt={menu.name}  className="w-6 h-6"/>
              <span className="hidden xl:inline text-white">{menu.name}</span>
            </Link>
          ))}
        </div>

        {/* button */}
        <Link href="/" className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xl:hidden">
          <Image src="icons/post.svg" alt="new post" width={24} height={24}/>
        </Link>
        <Link href="/" className="hidden xl:block bg-white text-black rounded-full font-bold py-2 px-20">post</Link>
      </div>
      
      {/* user */}
        <div className="flex items-center justify-center gap-2 mb-10 py-3 px-3 hover:bg-[#181818] rounded-4xl">
          <div className="w-10 h-10 rounded-full relative">
            <Image src="/img/em.png" alt="em" fill/>
          </div>

          <div className="text-white hidden lg:flex flex-1 justify-between">
            <div className="flex flex-col">
              <span className="font-bold">eslam</span>
              <span className="text-sm text-gray-400">@eslam_mg</span>
            </div>

            <div className=""> <span>...</span></div>
          </div>
        </div>
    </div>
  );
}
