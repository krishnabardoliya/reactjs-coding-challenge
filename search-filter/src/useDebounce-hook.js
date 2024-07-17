
// hook craetion

import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);


    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}


// use of hook

function MyComponent() {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);
 
  useEffect(() => {
    // Perform any action using the debounced value
    // This will be triggered only after the specified delay (500ms in this example)
    console.log('Debounced value:', debouncedValue);
  }, [debouncedValue]);


  const handleChange = (event) => {
    setInputValue(event.target.value);
  };


  return (
    <input type="text" value={inputValue} onChange={handleChange} />
  );
}