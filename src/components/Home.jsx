import React, { useReducer } from 'react';
import TextArea from './TextArea';
import Button from './Button';
import Navbar from './Navbar';

// Initial state
const initialState = {
  value: '',
  isDarkMode: false
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case 'SET_VALUE':
      return { ...state, value: action.payload };
    case 'UPPERCASE':
      return { ...state, value: state.value.toUpperCase() };
    case 'LOWERCASE':
      return { ...state, value: state.value.toLowerCase() };
    case 'REMOVE_SPACES':
      return { ...state, value: state.value.replace(/\s+/g, ' ').trim() };
    case 'CLEAR':
      return { ...state, value: '' };
    case 'TOGGLE_DARK_MODE':
      return { ...state, isDarkMode: !state.isDarkMode };
    default:
      return state;
  }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e) {
    dispatch({ type: 'SET_VALUE', payload: e.target.value });
  }

  function convertUpperCase() {
    dispatch({ type: 'UPPERCASE' });
  }

  function convertLowerCase() {
    dispatch({ type: 'LOWERCASE' });
  }

  function removeExtraSpaces() {
    dispatch({ type: 'REMOVE_SPACES' });
  }

  function clearText() {
    dispatch({ type: 'CLEAR' });
  }

  function copyText() {
    navigator.clipboard.writeText(state.value);
  }

  function toggleDarkMode() {
    dispatch({ type: 'TOGGLE_DARK_MODE' });
  }

  const wordCount = state.value.trim().split(/\s+/).length;
  const charCount = state.value.length;
  const readingTime = (wordCount / 200).toFixed(2); // assuming average reading speed of 200 WPM

  return (
    <div className={state.isDarkMode ? 'dark-mode' : ''}>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={state.isDarkMode} />
      <div className="container">
        <h1>TextUtils - Word Counter, Character Counter, Remove Extra Space</h1>
        <h4>Enter Your Text Here:</h4>
        <TextArea onChange={handleChange} value={state.value} />
        <Button onClick={convertUpperCase} color="blue" title="Convert to Uppercase" />
        <Button onClick={convertLowerCase} color="blue" title="Convert to Lowercase" />
        <Button onClick={removeExtraSpaces} color="pink" title="Remove Extra Spaces" />
        <Button onClick={clearText} color="blue" title="Clear Text" />
        <Button onClick={copyText} color="blue" title="Copy Text" />
        <h1>Summary of Your Text</h1>
        <p>Number of words: {wordCount}</p>
        <p>Number of characters: {charCount}</p>
        <p>Reading Time: {readingTime} minutes</p>
        <h1>Preview Document</h1>
        <TextArea onChange={handleChange} value={state.value} />
      </div>
    </div>
  );
}

export default Home;
