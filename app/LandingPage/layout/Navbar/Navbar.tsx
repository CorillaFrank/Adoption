import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";

// 2. Array tipado
const NavLinks = [
  {
    Linktext: "Home",
    LinkTo: "/root/routes/Home",
  },
  {
    Linktext: "Login",
    LinkTo: "/auth/routes/Login",
  },
];
export const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <Image src="/logo.png" alt="Logo" width={140} height={140} />

      <div className={styles.NavLinks}>
        {NavLinks.map((item) => (
          <div key={item.Linktext}>
            <Link href={item.LinkTo}>{item.Linktext}</Link>
          </div>
        ))}
      </div>
    </nav>
  );
};
