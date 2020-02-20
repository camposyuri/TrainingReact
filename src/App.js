// Utilizando o useState e useEffect no React
import React, { useState, useEffect } from 'react';

function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  // Similar ao componentDidMount e componentDidUpdate:
  useEffect(() => {
    document.querySelector('#add').innerHTML = `Você clicou ${count} vezes`;
  });

  return (
    <>
      <h1>Hello World, {name}.</h1>
      <input value={name} type="text" placeholder="Digite seu nome aqui" onChange={e => setName(e.target.value)} />
      
      <br />

      <p id="add"></p>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
    </>
  );
}

export default App;
