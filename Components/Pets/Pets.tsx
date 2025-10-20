import React from "react";
import styles from "./Pets.module.css";
import Link from "next/link";
export const Pets = () => {
  return (
    <div className={styles.PetsMain}>
      <div className={styles.PetsRow}>
        <div className={styles.PetsBox}>
          <img src="/2.png" alt="" />
          <div className={styles.PetsBoxContent}>
            <h6>Elmo</h6>
            <p className={styles.Breed}>Breed:Elmo</p>
            <div>
              <p>Años: 2 años</p>
              <p>Gender: Male</p>
            </div>
            <p className={styles.Desc}>
              Lorem ipsun, dolor sit amet cosectetur adipsicing elit. Eius unde
              minus alias fungit officia aspernatur, repellendus suscipit
              ration.
            </p>
            <Link href={"/"} className={styles.Btn}> Adopta Ahora</Link>
          </div>
        </div>
       
      </div>
    </div>
  );
};
export default Pets;
