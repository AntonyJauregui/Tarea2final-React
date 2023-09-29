export const Moda = ({ modal, setModal,per }) => {
  return (
    <>
      {
        modal && (
        <div className="modal">
            <img src={per.image} alt="" />
            <h2>Nombre</h2><p><b>{per.name}</b></p>
            <h2>Estado</h2><p><b>{per.status}</b></p>
            <h2>Genero</h2><p><b>{per.gender}</b></p>
            <h2>Especie</h2><p><b>{per.species}</b></p>
            <h2>Origen</h2><p><b>{per.origin.name}</b></p>

          <button onClick={() => setModal(false)}>Cerrar</button>
        </div>
      )}
    </>
  );
};
