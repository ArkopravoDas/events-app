import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-cebter sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo3.svg"
            alt="logo"
            width={175}
            height={100}
          />
        </Link>
        <p>2024 EventX. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
