import React from 'react';

const Card = ({ name, className, image }) => {
  const cardStyle = {
    width: '400px',
    border: '2px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    overflow: 'hidden',
    textAlign: 'center',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#e72626ff'
  };

  const imageStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover'
  };

  const infoStyle = {
    padding: '15px'
  };

  const nameStyle = {
    margin: '10px 0',
    fontSize: '24px',
    fontWeight: 'bold'
  };

  const classStyle = {
    margin: '5px 0',
    fontSize: '18px',
    color: '#3070c3ff'
  };

  return (
    <div style={cardStyle}>
      <img src={image} alt={name} style={imageStyle} />
      <div style={infoStyle}>
        <div style={nameStyle}>{name}</div>
        <div style={classStyle}>Class: {className}</div>
      </div>
    </div>
  );
};

export default Card;