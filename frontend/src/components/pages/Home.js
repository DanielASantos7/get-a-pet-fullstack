import api from "../../assets/utils/api";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Home.module.css";

function Home() {
  const [pets, setPets] = useState({});

  useEffect(() => {
    api.get("/pets").then((response) => {
      setPets(response.data.pets);
    });
  }, []);

  return (
    <section>
      <div className={styles.pet_home_header}>
        <h1>Adote um Pet</h1>
        <p>Veja os detalhes de cada um e conheça o tutor deles</p>
      </div>

      <div className={styles.pet_container}>
        {pets.length > 0 &&
          pets.map((pet) => (
            <div
            //   className={pet.available ? styles.pet_card : styles.adopted_card}
            key={pet._id}
            className={styles.pet_card}
            >
              <div
                style={{
                  backgroundImage: `url(${process.env.REACT_APP_API}/images/pets/${pet.images[0]})`,
                }}
                className={styles.pet_card_image}
              ></div>
              <h3>{pet.name}</h3>
              <p>
                <span className="bold">Peso:</span> {pet.weight}kg
              </p>
              <div className={styles.pet_card_actions}>
                {pet.available ? (
                  <Link to={`/pet/${pet._id}`}>
                    Mais detalhes
                  </Link>
                ) : (
                  <span className={styles.adopted_text}>Adotado</span>
                )}
              </div>
            </div>
          ))}
        {pets.length === 0 && (
          <p>Não há pets cadastrados ou disponíveis no momento</p>
        )}
      </div>
    </section>
  );
}

export default Home;
