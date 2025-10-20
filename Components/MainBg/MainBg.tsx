import Image from "next/image";
import styles from "./MainBg.module.css";

interface MainBgProps {
  ImgUrl: string;
  ImgUrlAlt: string;
  h6text: string;
}

export const MainBg = ({ ImgUrl, ImgUrlAlt, h6text }: MainBgProps) => {
  return (
    <div className={styles.MainBg}>
      <div>
        <div>
          <Image
            src={ImgUrl}
            alt={ImgUrlAlt}
            width={1940} // ancho real del archivo
            height={1080} // alto real del archivo
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className={styles.MainBgOverlay}></div>
      </div>
      <div className={styles.MainBgContent}>
        <h6>{h6text}</h6>
      </div>
    </div>
  );
};
