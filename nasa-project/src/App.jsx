import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [date, setDate] = useState('2023-11-22'); 
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=O42i4uno6c2kebzqhLBIF3cD7Ld2q4wtrc8gWgy8&date=${date}`);
      console.log(date)
      const data = await response.json();
      setImageData(data);
      console.log(imageData.url)
    };

    fetchImage();
  },[date]);



  return (
    <div>
      <h1>ESCOLHA UMA DATA</h1>
      <input type="date" className='date-field'  value={date} onChange={(e) => setDate(e.target.value)} />
      <hr />
      {imageData && (
        <div>
          <h2>{imageData.title}</h2>
          <div className="image-container">
            <img src={imageData.url} className='image' />
            <p>{imageData.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;


/**
 * Nome do arquivo: App.jsx
 * Data de criação: 13/11/2024
 * Autor: José Aldenir Almeida Gomes Filho
 * Matrícula: 01697549
 *
 * Descrição:
 * Este arquivo REACT é responsável por implementar as funcionalidades,
 * constantes, a url de API e seus parametros, e retornar para o usuario oque é solicitado ao sistema
 */