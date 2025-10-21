import styles from "./Footer.module.css";
import { SocialIcons } from "@/Components/SocialIcons/SocialIcons";
import Link from "next/link";
const Aboutus = [
  {
    LinkText: "Aboutus",
    LinkTo: "/Abaut",
  },
  {
    LinkText: "Blogs",
    LinkTo: "/Abaut",
  },
  {
    LinkText: "Contac us",
    LinkTo: "/Abaut",
  },
  {
    LinkText: "Adoption Proces",
    LinkTo: "/Abaut",
  },
];
const Help = [
  {
    LinkText: "Teminos / condiciones",
    LinkTo: "/Abaut",
  },
  {
    LinkText: "Privaci policitas",
    LinkTo: "/Abaut",
  },
  {
    LinkText: "Si y No?",
    LinkTo: "/Abaut",
  },
  {
    LinkText: "Faq",
    LinkTo: "/Abaut",
  },
];
export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterRow1}>
        <div>
          <img src="/2.png" alt="" />
          <p>FInd yor friend in a new way</p>
        </div>
        <div>
          <h6>about us</h6>
          {Aboutus.map((data) => (
            <div key={data.LinkText}>
              <Link href={data.LinkTo} className={styles.FooterLink}>
                {data.LinkText}
              </Link>
            </div>
          ))}
        </div>
        <div>
          <h6>Help</h6>
          {Aboutus.map((data) => (
            <div key={data.LinkText}>
              <Link href={data.LinkTo} className={styles.FooterLink}>
                {data.LinkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.FooterRow2}>
        <h6>@ Easy codig tutorial</h6>
        <h6>@2025 todo reservado</h6>
        <div>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
