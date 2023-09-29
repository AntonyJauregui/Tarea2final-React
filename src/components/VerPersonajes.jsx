import { useState } from "react";
import { Moda } from "./moda";

export const VerPersonajes = ({ personaje }) => {
  const [modal, setModal] = useState({});

  const abrirModal = (id) => {
    console.log(id);
    setModal((prevent) => ({
      ...prevent,
      [id]: true,
    }));
  };

  return (
    <table width="100%">
      <thead className="Tablas">
        <th>
          <b>Image</b>
        </th>
        <th>
          <b>Nombre</b>
        </th>
        <th>
          <b>Species</b>
        </th>
        <th>
          <b>Informacion</b>
        </th>
      </thead>
      <tbody>
        {personaje &&
          personaje.map((per) => (
            <tr className="cardPersonaje">
              <td>
                <img src={per.image} alt="" />
              </td>
              <td>
                <p>
                  <b>{per.name}</b>
                </p>
              </td>
              <td>
                <p>
                  <b>{per.species}</b>
                </p>
              </td>
              <td>
                <button className="button" onClick={() => abrirModal(per.id)}>
                  <b>Saber Mas</b>
                </button>
                {modal[per.id] && (
                  <Moda modal={modal[per.id]} setModal={setModal} per={per} />
                )}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
