import React, { useState } from 'react';
import './main.css'; // Importar o arquivo CSS corretamente.

function Form() {
  const [nome, setNome] = useState('Velhinho');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imagem, setImagem] = useState(
    'https://th.bing.com/th/id/OIP.pgljHOqKsWT8BgNHrQLphwHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  );

  const nomeExibido = () => {
    return nome.trim() !== '' ? nome : 'Velhinho';
  };

  const calcularIMC = () => {

    if (peso === 0 || isNaN(peso) || altura === 0 || isNaN(altura)) {
      setImagem(
        'https://th.bing.com/th/id/OIP.pgljHOqKsWT8BgNHrQLphwHaHa?w=204&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7'
      );
    } else {
      const imc = peso / (altura * altura);
      if (imc < 18.5) {
        setImagem(
          'https://th.bing.com/th/id/OIP.k_qs9hEkz6nPWC4kofBBIwHaFj?w=238&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
        );
      } else if (imc >= 18.5 && imc < 35.0) {
        setImagem('https://live.staticflickr.com/1616/23403692974_c4969d55dc.jpg');
      } else {
        setImagem(
          'https://th.bing.com/th/id/OIP.XtluOHQbdgtBgys0_oTy7gHaIJ?pid=ImgDet&rs=1'
        );
      }
    }
  };

  return (
    <div className='container'>
      <img className='perfil' src={imagem} alt='Perfil' />

      <h1>Que qui há, {nomeExibido()} ?</h1>
      <h2>Calcule seu IMC Aqui</h2>

      <div className='formulario'>
        <label>Seu Nome: </label>
        <input type='text' onChange={(event) => setNome(event.target.value)} placeholder='Perna Longa' />
        <label>Sua Massa: </label>
        <input type='number' onChange={(event) => setPeso(parseFloat(event.target.value))} placeholder='em Quilogramas' />
        <label>Sua Altura</label>
        <input type='number' onChange={(event) => setAltura(parseFloat(event.target.value))} placeholder='em Metros' />
        <button type='button' onClick={calcularIMC}>
          Calcular
        </button>
      </div>
    </div>
  );
}

export default Form;
