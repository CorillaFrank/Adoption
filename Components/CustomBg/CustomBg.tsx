import styles from "./CustomBg.module.css";

interface CustomBgProps {
  ImgUrl: string;
  ImgUrlAlt?: string;
}
export const CustomBg = ({ ImgUrl, ImgUrlAlt }: CustomBgProps) => {
  return (
    <div className={styles.CustomBg}>
      <div>
        <div>
          <img src={ImgUrl} alt={ImgUrlAlt} />
        </div>
        <div className={styles.CustomBgOverlay}></div>
      </div>
      <div className={styles.CustomBgContent}>
        <h6>Quien es tu amigo dia a dia?</h6>
        <h5>Las mascotas el mejor amigo del Hombre por siempre.</h5>
      </div>
    </div>
  );
};
export default CustomBg;
