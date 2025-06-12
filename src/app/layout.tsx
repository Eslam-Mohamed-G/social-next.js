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
          <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xxl mx-auto flex">
            <div className="w-fit">
              <LeftBar />
            </div>
            <div className="flex-1/2 lg:min-w-[600px] border-x-[1px] border-textGrayLight dark:border-borderGray">
              {children}
            </div>
            <div className="hidden lg:flex md:pl-4 xl:pl-6 xxl:pl-8 flex-1/4">
              <RightBar />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
