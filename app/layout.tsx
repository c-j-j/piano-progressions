import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-slate-100">
        <nav className="bg-slate-800 text-white p-4 sticky top-0 mb-8">
          <div className="max-w-6xl m-auto flex justify-between">
            <Link href="/">Home</Link>
            <div className="invisible md:visible">
              <Link href="/">Account</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
