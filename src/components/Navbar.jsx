import React from 'react';
import '../App.css'
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      {/* Nombre de la página a la izquierda */}
      <div className="bar-search">
        <input className="input-search" placeholder="Buscar..."/>
        <span>
        <SearchIcon style={{color: 'white', marginLeft: '50px'}}/>
        </span>
    </div>

      {/* Enlaces a la derecha */}
      <div style={styles.links}>
        <a href="#" style={styles.link}>Proyectos</a>
        <a href="#" style={styles.link}>Estadisticas</a>
        <a href="#" style={styles.link}>Sobre nosotros</a>
        <a href="#" style={styles.link}>Actividad</a>
        
      </div>      
      <button className="button-add" style={styles.button}>Agregar</button>

      {/* Espacio para la imagen */}
      <div style={styles.imageContainer}>
        <img
          src="https://via.placeholder.com/30x30" // URL de tu imagen
          alt="Logo"
          style={styles.image}
        />
      </div>
    </nav>
  );
};

const styles = {
  buttonAdd: {
    marginLeft: '30px',
  },

  navbar: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#2D2D2D',
    borderRadius: '8px'
  },
  logo: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    gap: '20px',
    
    marginLeft: '220px',
  },
  link: {
    textDecoration: 'none',
    color: '#E7E5E5',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#E87601',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginLeft: '20px',
  },
  imageContainer: {
    marginLeft: '30px',
    
  },
  image: {
    borderRadius: '50%',
  },
};

export default Navbar;
