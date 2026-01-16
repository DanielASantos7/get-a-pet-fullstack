import api from "../../../assets/utils/api";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./PetDetails.module.css";
import useFlashMessage from "../../../assets/hooks/useFlashMessage";

function PetDetails() {
  const [pet, setPet] = useState({});
  const { id } = useParams();
  const { setFlashMessage } = useFlashMessage();
  const [token] = useState(localStorage.getItem("token") || "");

  useEffect(() => {
    api.get(`/pets/${id}`).then((response) => {
      setPet(response.data.pet);
    });
  }, [id]);

  async function schedule() {
    let msgType = "success";

    const data = await api
      .patch(
        `pets/schedule/${pet._id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        }
      )
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        msgType = "error";
        return err.response.data;
      });

    setFlashMessage(data.message, msgType);
  }

  return (
    <>
      {pet.name && (
        <section className={styles.pet_details_container}>
          
          <div className={styles.pet_header}>
            <h1>Conhecendo o Pet</h1>
            <p>Se tiver interesse, marque uma visita para conhecê-lo</p>
          </div>

          <div className={styles.details_grid}>
            
            {/* --- COLUNA ESQUERDA: IMAGENS --- */}
            <div className={styles.pet_images}>
              {pet.images.map((image, index) => (
                <img
                  src={`${process.env.REACT_APP_API}/images/pets/${image}`}
                  alt={pet.name}
                  key={index}
                />
              ))}
            </div>

            {/* --- COLUNA DIREITA: INFO --- */}
            <div className={styles.pet_info}>

              <h1>{pet.name}</h1>


              <div className={styles.info_row}>
                <span className={styles.bold}>Idade:</span>
                <span>{pet.age} anos</span>
              </div>

              <div className={styles.info_row}>
                <span className={styles.bold}>Peso:</span>
                <span>{pet.weight}kg</span>
              </div>
               
              <div className={styles.info_row}>
                 <span className={styles.bold}>Cor:</span>
                 <span>{pet.color}</span>
              </div>

              {pet.description && (
                <div className={styles.description_box}>
                  <h3>Descrição</h3>
                  <p>{pet.description}</p>
                </div>
              )}

              <div className={styles.actions}>
                {token ? (
                  <button onClick={schedule}>Solicitar uma visita</button>
                ) : (
                  <p>
                    Você precisa <Link to="/register">criar uma conta</Link> para
                    solicitar a visita
                  </p>
                )}
              </div>

            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default PetDetails;