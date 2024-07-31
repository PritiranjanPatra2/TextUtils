import React from 'react';

function Button({ onClick, color, title }) {
  return (
    <button
      style={{ backgroundColor: color, color: 'white', padding: '10px', margin: '5px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
