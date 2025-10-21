import styles from "./Pets.module.css";
import PetsBox from "./PetsBox";
export const Pets = () => {
  return (
    <div className={styles.PetsMain}>
      <div className={styles.PetsRow}>
        <PetsBox
          Breed="Elmo"
          ImgUrl="/2.png"
          ImgAlt="Elmo el bravo"
          Desc="Lorem ipsun, dolor sit amet cosectetur adipsicing elit. Eius unde
          minus alias fungit officia aspernatur, repellendus suscipit ration."
          Age={5}
          Gender="Masculino"
        />
      </div>
    </div>
  );
};
export default Pets;
