import styles from "./SocialIcons.module.css";
import Link from "next/link";
//for icons
import { FaInstagram, FaGithub, FaYoutube } from "react-icons/fa6";

export const SocialIcons = () => {
  return (
    <div className={styles.SocialIcons}>
      <Link href={"https://www.youtube.com/"} target="_blank">
        <FaInstagram className={styles.icon} />
      </Link>
      <Link href={"https://www.youtube.com/"} target="_blank">
        <FaGithub className={styles.icon} />
      </Link>
      <Link href={"https://www.youtube.com/"} target="_blank">
        <FaYoutube className={styles.icon} />
      </Link>
    </div>
  );
};
