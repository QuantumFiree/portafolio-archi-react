import React from 'react';// Ajusta la ruta según tu estructura de archivos
import CardProject from './CardProject';

const CardContainer = () => {
  // Ejemplo de datos de proyectos (puedes cargar estos datos desde una API)
//   const projectsData = [
//     {
//       id: 1,
//       imageUrl: 'https://via.placeholder.com/300',
//       projectName: 'Proyecto 1',
//       description: 'Descripción del proyecto 1.',
//       projectValue: '$1000',
//       likesCount: 15,
//     },
//     // Agrega más datos de proyectos aquí...
//   ];

  return (
    <>
        <div style={styles.container}>
          <CardProject/>
          <CardProject/>
          <CardProject/>
          <CardProject/>
          <CardProject/>
        </div>
        <div>
            <button style={styles.loadMoreButton}>Cargar más</button>
        </div>
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px', 
  },
  loadMoreButton: {
    width: '130px',
    height: '50px',
    padding: '10px',
    marginTop: '20px',
    backgroundColor: 'white',
    color: '#161616',
    border: 'none',
    borderRadius: '40px',
    cursor: 'pointer',
  },
};

export default CardContainer;
