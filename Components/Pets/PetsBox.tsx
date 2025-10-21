import styles from "./Pets.module.css";
import Link from "next/link";

interface PetsBoxProps {
  Breed: string;
  ImgUrl: string;
  ImgAlt?: string;
  Age: number;
  Gender: string;
  Desc: string;
}
export const PetsBox = ({
  Breed,
  ImgUrl,
  ImgAlt,
  Age,
  Gender,
  Desc,
}: PetsBoxProps) => {
  return (
    <div className={styles.PetsBox}>
      <img src={ImgUrl} alt={ImgAlt} />
      <div className={styles.PetsBoxContent}>
        <h6>Elmo</h6>
        <p className={styles.Breed}>Breed:{Breed}</p>
        <div>
          <p>Años: {Age}</p>
          <p>Gender: {Gender}</p>
        </div>
        <p className={styles.Desc}>{Desc}</p>
        <Link href={"/"} className={styles.Btn}>
          {" "}
          Adopta Ahora
        </Link>
      </div>
    </div>
  );
};
export default PetsBox;
