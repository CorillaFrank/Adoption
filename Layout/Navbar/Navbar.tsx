"use client";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const NavLinks = [
  { LinkText: "Home", LinkTo: "/root/routes/Home" },
  { LinkText: "About us", LinkTo: "/root/routes/About" },
  { LinkText: "Faq", LinkTo: "/Faq" },
  { LinkText: "Blogs", LinkTo: "/Blogs" },
  { LinkText: "Pets", LinkTo: "/Pets" },
  { LinkText: "Contact", LinkTo: "/Contact" },
];
export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.Navbar}>
      <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="Logo"
          width={150}
          height={150}
          className={styles.Navbar__Image}
        />
      </Link>
      <div className={styles.NavLinks}>
        {NavLinks.map((data) => (
          <div key={data.LinkText}>
            <Link
              href={data.LinkTo}
              className={pathname === data.LinkTo ? styles.Active : ""}
            >
              {data.LinkText}
            </Link>
          </div>
        ))}
      </div>
      <div className={styles.CustomBtns}>
        <Link href={"/"} className={styles.CustomBtn}>
          Adoption Process
        </Link>
        <Link href={"/auth/routes/Login"} className={styles.CustomBtn}>
          Login Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
