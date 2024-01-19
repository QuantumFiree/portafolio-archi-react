import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CardProject = () => {
  return (
    <article style={styles.card}>
      <div style={styles.contentImage}>
        <img src="https://via.placeholder.com/100" alt="Proyecto" style={styles.image} />
      </div>

      <div style={styles.contentDescription}>
        <h2 style={styles.projectName}>Nombre proyecto</h2>
        <p style={styles.description}>descripcion</p>
      </div>

      <div style={styles.bottomCard}>
        <p style={styles.projectValue}>{`$00.00`}</p>

        <button style={styles.likeButton}>
            <span>
                <FavoriteIcon style={styles.icon}/>
            </span>
            +{10}
        </button>
      </div>
    </article>
  );
};

const styles = {
  card: {
    width: '284px',
    height: '380px',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    backgroundColor: '#2D2D2D',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: '0.6rem'
  },
  contentDescription: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '250px',
    marginBottom: '15px',
    marginTop: '3px'
  },
  bottomCard: {
    width: '250px',
    display: 'flex',
    justifyContent: 'space-between',
    
  },
  contentImage: {
    backgroundColor: 'red',
    width: '250px',
    height: '240px',
    borderRadius: '20px'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '20px',
  },
  projectName: {
    fontSize: '1rem',
    margin: '0px',
    color: 'white'
  },
  description: {
    fontSize: '0.7rem',
    margin: '0px',
    color: 'white'
  },
  projectValue: {
    fontSize: '0.8rem',
    bottom: '10px',
    left: '10px',
    color: 'white'
  },
  likeButton: {
    fontSize: '0.6rem',
    backgroundColor: '#161616',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    height: '32px',
    width: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '8px'
  },
  heartIcon: {
    marginRight: '5px',
  },
};

export default CardProject;
