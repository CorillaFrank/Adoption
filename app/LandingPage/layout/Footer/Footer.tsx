import styles from "./Footer.module.css";
import { SocialIcons } from "@/Components/SocialIcons/SocialIcons";
export const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <h6>@Easy codign tutorial</h6>
      <h6>@2025. Alla rights reserved.</h6>

      <div>
        <SocialIcons />
      </div>
    </footer>
  );
};
