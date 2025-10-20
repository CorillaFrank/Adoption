import Link from "next/link";
import styles from "./Button.module.css";
export const Button = ({LinkTo,LinkText}:{LinkText:string,LinkTo: string}) => {
  return (
    <Link href={"/"} className={styles.Btn}>
      {LinkText}
    </Link>
  );
};
export default Button;
