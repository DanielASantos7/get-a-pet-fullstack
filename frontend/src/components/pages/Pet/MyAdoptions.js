import api from "../../../assets/utils/api";

import { useState, useEffect } from "react";

import styles from "./MyAdoptions.module.css";

import RoundedImage from "../../layout/RoundedImage";

function MyAdoptions() {
  const [pets, setPets] = useState({});
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    api
      .get("/pets/myadoptions", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setPets(response.data.pets);
      });
  }, [token]);

  return (
    <section>
      <div className={styles.header}>
        <h1>Minhas Adoções</h1>
      </div>

      <div className={styles.adoptions_container}>
        {pets.length > 0 &&
          pets.map((pet) => (
            /* AQUI COMEÇA O CARD NOVO */
            <div className={styles.adoption_card} key={pet._id}>
              {/* 1. A FOTO (Quadrada/Redonda) */}
              <RoundedImage
                src={`${process.env.REACT_APP_API}/images/pets/${pet.images[0]}`}
                alt={pet.name}
                width="px75"
              />

              {/* 2. COLUNA DO PET (Nome, Idade, Peso) */}
              <div className={styles.info_column}>
                {/* Cada par Label+Value é uma linha do seu desenho */}
                <div>
                  <div className={styles.label}>Nome do Pet</div>
                  <div className={styles.value}>{pet.name}</div>
                </div>
                <div>
                  <div className={styles.label}>Idade do Pet</div>
                  <div className={styles.value}>{pet.age} anos</div>
                </div>
                <div>
                  <div className={styles.label}>Peso do Pet</div>
                  <div className={styles.value}>{pet.weight}kg</div>
                </div>
              </div>

              {/* 3. COLUNA DO DONO (Nome, Telefone) */}
              <div className={styles.info_column}>
                <div>
                  <div className={styles.label}>Nome do Dono</div>
                  <div className={styles.value}>{pet.user.name}</div>
                </div>
                <div>
                  <div className={styles.label}>Telefone do Dono</div>
                  <div className={styles.value}>{pet.user.phone}</div>
                </div>
              </div>

              {/* 4. O STATUS (Canto direito) */}
              <div className={styles.status_area}>
                <div
                  className={`${styles.status_badge} ${
                    pet.available ? styles.in_process : styles.concluded
                  }`}
                >
                  {pet.available ? "Adoção em processo" : "Adoção Concluída"}
                </div>
              </div>
            </div>
          ))}

        {pets.length === 0 && <p>Ainda não há adoções de Pets.</p>}
      </div>
    </section>
  );
}

export default MyAdoptions;
