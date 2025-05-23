import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/tsfunchttp');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.text);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData('Failed to fetch data');
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  return <div>{data}</div>;
}

export default App;
