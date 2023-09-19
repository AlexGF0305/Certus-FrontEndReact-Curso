export const ColorChanger = ({ color }) => {
    const squareStyle = {
      width: '100px',   // Ancho del cuadrado
      height: '100px',  // Altura del cuadrado
      backgroundColor: color, // Color del cuadrado
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px solid #333',
    };
  
    return (
      <div>
        <h1>Color actual:</h1>
        <div style={squareStyle}>
          {/* Puedes dejar otros elementos dentro del cuadrado si es necesario*/}
        </div>
      </div>
    );
  };
  