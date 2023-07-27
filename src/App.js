import './App.css';
import { useState } from 'react';
import Checkout from './components/checkout';
import ItemRow from './components/itemRow';
import Navbar from './components/navbar';
import Resumo from './components/resumo';

function App() {

  const [frutas, setFrutas] = useState([])

  return (
    <div>
      <Navbar />
      <ItemRow frutas={frutas} onAddFruta={setFrutas} />
      <Resumo frutas={frutas} />
      <Checkout frutas={frutas} />
    </div>
  );
}

export default App;
