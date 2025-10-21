import React from "react";
import styles from "./AdoptionProcess.module.css";
import Link from "next/link";
const AdoptionProcessData = [
  {
    id: 1,
    ProcessName: "Dota 2",
    ProcessDesc:
      "Dota 2 es un videojuego perteneciente al género de Arena de batalla en línea ARTS, también conocido en inglés como MOBA, que fue lanzado el 9 de julio del año 2013. El juego fue desarrollado por la empresa Valve Corporation.",
  },
  {
    id: 2,
    ProcessName: "LoL",
    ProcessDesc:
      "Dota 2 es un videojuego perteneciente al género de Arena de batalla en línea ARTS, también conocido en inglés como MOBA, que fue lanzado el 9 de julio del año 2013. El juego fue desarrollado por la empresa Valve Corporation.",
  },
  {
    id: 3,
    ProcessName: "Counter Strike",
    ProcessDesc:
      "Dota 2 es un videojuego perteneciente al género de Arena de batalla en línea ARTS, también conocido en inglés como MOBA, que fue lanzado el 9 de julio del año 2013. El juego fue desarrollado por la empresa Valve Corporation.",
  },
  {
    id: 4,
    ProcessName: "Operation 7",
    ProcessDesc:
      "Dota 2 es un videojuego perteneciente al género de Arena de batalla en línea ARTS, también conocido en inglés como MOBA, que fue lanzado el 9 de julio del año 2013. El juego fue desarrollado por la empresa Valve Corporation.",
  },
];
export const AdopcionProcess = () => {
  return (
    <div className={styles.AdoptionProcess_Main}>
      <div className={styles.AdoptionProcess_Row}>
        {AdoptionProcessData.map((data) => (
          <div className={styles.AdoptionProcess_Box} key={data.id}>
            <h6>{data.ProcessName}</h6>
            <p>{data.ProcessDesc}</p>
            <Link href={"/"} className={styles.AdoptionProcess_Button}>
              view pull details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AdopcionProcess;
