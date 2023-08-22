import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaDiscord, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const copyright = (
    new Date().getFullYear()
  );
  return (
    <div className="flex flex-col px-40 w-full font-mono pb-20 pt-24 bg-[black]  text-[white]">
      <div className="flex justify-between text-xl font-semibold w-full">
        <Link href='/'>
          <p className="">&copy; {copyright}  AI Resources Marketplace</p>
        </Link>
        <div className="flex gap-24 jusitfy-between">
          <div className="flex flex-col items-center gap-12">
            <Link href=''>Privacy</Link>
            <Link href=''>Terms</Link>
          </div>
          <div className="flex flex-col items-center gap-12">
            <Link href=''>Categories</Link>
            <Link href=''>FAQ</Link>
          </div>
          <Link href=''>Social Media</Link>
        </div>
      </div>
      <div className="flex items-center justify-center gap-12 pt-24">
        <hr className="w-20" />
        <Link
          href=''
          className="relative w-[52px] h-[52px]"
          target="_blank"
        >
          <div className="absolute border top-1/2 left-1/2 w-12 h-12 rotate-45 -translate-y-1/2 -translate-x-1/2">
            <FaTwitter className="text-3xl -rotate-45 mt-2 ml-2"/>
          </div>
        </Link>
        <Link
          href=''
          className="relative w-[52px] h-[52px]"
          target="_blank"
        >
          <div className="absolute border top-1/2 left-1/2 w-12 h-12 rotate-45 -translate-y-1/2 -translate-x-1/2">
            <FaDiscord className="text-3xl -rotate-45 mt-2 ml-2" />
          </div>
        </Link>
        <Link
          href=''
          className="relative w-[52px] h-[52px]"
          target="_blank"
        >
          <div className="absolute border top-1/2 left-1/2 w-12 h-12 rotate-45 -translate-y-1/2 -translate-x-1/2">
            <FaWhatsapp className="text-3xl -rotate-45 mt-2 ml-2 shrink-0" />
          </div>
        </Link>
        <hr className="w-20" />
      </div>
    </div>
  );
}
