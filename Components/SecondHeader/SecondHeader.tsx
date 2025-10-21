import styles from "./SecondHeader.module.css";
const SecondHeader = () => {
  return (
    <div className={styles.SecondHeader}>
      <div>
        <img src="/4.jpg" alt="" />
      </div>
      <div className={styles.SecondHeaderOverlay}></div>
    </div>
  );
};
export default SecondHeader;
