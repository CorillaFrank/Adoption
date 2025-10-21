import React from "react";
import styles from "./OurBlogs.module.css";
import Link from "next/link";

const OurBlogsData = [
  {
    id: 1,
    BlogImg: "/2.png",
    BlogTitle: "Dota 20/10/25",
    BlogDesc:
      "¡Lo tienes! Para que tu sección “Proceso de Adopción” se vea como la de tu amigo (tarjetas blancas con sombra, botón naranja y textos compactos), los puntos clave que hoy te están fallando son:",
  },
];
export const OurBlogs = () => {
  return (
    <div className={styles.OurBlogsMain}>
      <div className={styles.OurBlogs_Row}>
        {OurBlogsData.map((data) => (
          <div className={styles.OurBlogs_Box} key={data.id}>
            <img src={data.BlogImg} alt={data.BlogTitle} />
            <div className={styles.OurBlos_BoxContent}>
              <h6>{data.BlogTitle}</h6>
              <p>{data.BlogDesc}</p>
              <Link href={"/"} className={styles.OurBlogs_Button}>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurBlogs;
