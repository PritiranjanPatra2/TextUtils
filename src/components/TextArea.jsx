import React from 'react';

function TextArea({ onChange, value }) {
  return (
    <textarea
      style={{ width: '100%', height: '150px', padding: '10px', margin: '10px 0' }}
      onChange={onChange}
      value={value}
    />
  );
}

export default TextArea;
