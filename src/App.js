// Utilizando o useState no React

import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  return (
    <>
      <h1>Hello World, {name}.</h1>
      <input value={name} type="text" placeholder="Digite seu nome aqui" onChange={e => setName(e.target.value)} />
    </>
  );
}

export default App;
