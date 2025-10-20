import styles from "./AuthBg.module.css";

export const AuthBg = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.AuthBg}>
      <div className={styles.AuthBgImage} /> {/* ← este pinta el fondo */}
      <div className={styles.AuthBgContent}>{children}</div>
    </div>
  );
};
