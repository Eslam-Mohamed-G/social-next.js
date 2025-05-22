import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>
          Social
        </title>
      </head>
      <body className="p-0 dark:bg-black">
        <div className="w-full">
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto flex justify-between">
          <div className="">
            <LeftBar />
          </div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-textGrayLight dark:border-borderGray">
            {children}
          </div>
          <div className="hidden lg:flex ml-4 md:ml-8">
            <RightBar />
          </div>
        </div>
        </div>
      </body>
    </html>
  );
}
