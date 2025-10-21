import React from "react";
import CustomBg from "@/Components/CustomBg/CustomBg";
import Facts from "../../_components/Facts/Facts";
import styles from "@/app/root/routes/About/page.module.css";
import Wrapper from "@/Components/Wrapper/Wrapper";
import Content from "@/Components/Content/Content";
import AdoptionProcess from "@/Components/AdoptionProcess/AdoptionProcess";
import SecondHeader from "@/Components/SecondHeader/SecondHeader";
const AboutPage = () => {
  return (
    <>
      <CustomBg
        ImgUrl="/5.avif"
        h6Text="About us"
        h5Text="we are in market since 1980"
        ButtonLinkText="view pets"
        ButtonLinkTo=""
      />
      <Facts pText="Dota 2 es un videojuego perteneciente al género de Arena de batalla en línea ARTS, también conocido en inglés como MOBA, que fue lanzado el 9 de julio del año 2013. El juego fue desarrollado por la empresa Valve Corporation." />
      <Wrapper>
        <div className={styles.Aboutus}>
          <div>
            <h6>About us</h6>
            <p>
              Dota 2 (en español: Defensa de los Ancestros 2) es un videojuego
              perteneciente al género de Arena de batalla en línea ARTS
              («estrategia de acción en tiempo real»), también conocido en
              inglés como MOBA, que fue lanzado el 9 de julio del año 2013. El
              juego fue desarrollado por la empresa Valve Corporation. El título
              fue anunciado oficialmente el 13 de octubre de 2010, en un
              artículo en el sitio web Game . Generalmente Dota 2 se juega en
              partidas entre dos equipos de cinco jugadores, con cada equipo
              ocupando y defendiendo su propia base separada en el mapa. Cada
              uno de los diez jugadores controla de forma independiente a un
              poderoso personaje conocido como que tiene habilidades únicas y
              diferentes estilos de juego. Durante una partida, los jugadores
              acumulan puntos de experiencia y artículos.para que sus héroes
              derroten a los héroes del equipo contrario en un combate jugador
              contra jugador. Un equipo gana al ser el primero en destruir eldel
              otro equipo, una gran estructura ubicada dentro de su base.
            </p>
          </div>
          <div>
            <img src="/logo.png" alt="" />
          </div>
        </div>
      </Wrapper>
      <SecondHeader />

      <Wrapper>
        <div className={styles.Vision}>
          <div>
            <h6>Our vision</h6>
            <p>
              League of Legends-En el juego, dos equipos de cinco jugadores
              luchan en un combate jugador contra jugador, cada equipo ocupando
              y defendiendo su mitad del mapa. Cada uno de los diez jugadores
              controla un personaje, conocido como «campeón», con habilidades
              únicas y diferentes estilos de juego. Durante una partida, los
              campeones se vuelven más poderosos acumulando puntos de
              experiencia y ganando oro que se emplea para la compra de
              artículos que potencian sus características y habilidades. En el
              modo principal de juego de LoL, Grieta del invocador, un equipo
              gana al abrirse paso hasta la base enemiga y destruir su «nexo»,
              una gran estructura ubicada dentro de la cual se emanan tres
              líneas de súbditos o «minions», personajes no jugadores que al ser
              eliminados por el equipo enemigo otorgan oro y experiencia.
            </p>
          </div>
          <div>
            <img src="/logo.png" alt="" />
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className={styles.Vision}>
          <div>
            <h6>Our Mission</h6>
            <p>
              League of Legends-En el juego, dos equipos de cinco jugadores
              luchan en un combate jugador contra jugador, cada equipo ocupando
              y defendiendo su mitad del mapa. Cada uno de los diez jugadores
              controla un personaje, conocido como «campeón», con habilidades
              únicas y diferentes estilos de juego. Durante una partida, los
              campeones se vuelven más poderosos acumulando puntos de
              experiencia y ganando oro que se emplea para la compra de
              artículos que potencian sus características y habilidades. En el
              modo principal de juego de LoL, Grieta del invocador, un equipo
              gana al abrirse paso hasta la base enemiga y destruir su «nexo»,
              una gran estructura ubicada dentro de la cual se emanan tres
              líneas de súbditos o «minions», personajes no jugadores que al ser
              eliminados por el equipo enemigo otorgan oro y experiencia.
            </p>
          </div>
          <div>
            <img src="/logo.png" alt="" />
          </div>
        </div>
      </Wrapper>

      <Wrapper>
        <Content
          h6Text="Our adoption process!"
          pText="Oour adoption process is designed to make"
        />
        <AdoptionProcess />
      </Wrapper>
    </>
  );
};
export default AboutPage;
