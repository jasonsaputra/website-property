
  import React, { useEffect, useState } from 'react';
  import axios from 'axios';
  
  const FetchData = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      // Panggil endpoint backend menggunakan Axios
      axios.get('/api/data')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
  
    return (
      <div>
        {/* Tampilkan data dari backend */}
        {data.map(item => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    );
  };
  
  export default FetchData;
  