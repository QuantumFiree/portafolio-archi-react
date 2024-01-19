import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      {/* Imagen de portada */}
      <img
        src="https://via.placeholder.com/1200x200" // URL de tu imagen de portada
        alt="Portada"
        style={styles.coverImage}
      />

      {/* Contenido en la mitad de abajo */}
      <div style={styles.bottomContent}>
        {/* Espacio para la imagen de perfil */}
        <div style={styles.profileImageContainer}>
          <img
            src="https://via.placeholder.com/100" // URL de tu imagen de perfil
            alt="Perfil"
            style={styles.profileImage}
          />
        </div>

        {/* Nombre y Apellido */}
        <div style={styles.name}>
          <h2>Nombre Apellido</h2>
        </div>

        {/* Contador de Proyectos, Seguidores y Reputación */}
        <div style={styles.stats}>
          <div>
            <p style={styles.contentStats}><strong>Proyectos</strong></p>
            <p style={styles.contentStats}>10</p>
          </div>
          <div>
            <p style={styles.contentStats}><strong>Seguidores</strong></p>
            <p style={styles.contentStats}>100</p>
          </div>
          <div>
            <p style={styles.contentStats}><strong>Reputación</strong></p>
            <p style={styles.contentStats}>500</p>
          </div>
        </div>

        {/* Botones */}
        <div style={styles.buttons}>
          <button style={styles.button1}><strong>Seguir</strong></button>
          <button style={styles.button2}><strong>Contacto</strong></button>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    width: '100%',
    marginTop: '5px',
    height: '600px',
  },
  coverImage: {
    width: '100%',
    maxHeight: '500px',
    objectFit: 'cover',
    borderRadius: '8px',
    height: '250px'
  },
  bottomContent: {
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#161616',
  },
  profileImageContainer: {
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: '0px',
    marginTop: '-70px'
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
  },
  name: {
    marginBottom: '10px',
    color: 'white'
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    color: 'white',
    marginBottom: '40px'
  },
  contentStats: {
    margin: '0px 30px'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',  
    width: '100%',
  },
  button1: {
    padding: '10px',
    backgroundColor: '#E87601',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    margin: '0px 10px',
    width: '110px'
  },
  button2: {
    padding: '10px',
    backgroundColor: 'white',
    color: '#161616',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    margin: '0px 10px',
    width: '110px'
  },
};

export default Header;
