import { useState } from 'react';
import Checkout from '../components/checkout';
import ItemRow from '../components/itemRow';
import Navbar from '../components/navbar';
import Resumo from '../components/resumo';

function MainPage() {

  const [frutas, setFrutas] = useState([])
  const [total, setTotal] = useState('')

  return (
    <div>
      <Navbar />
      <ItemRow frutas={frutas} onAddFruta={setFrutas} />
      <Resumo frutas={frutas} setTotal={setTotal} />
      <Checkout frutas={frutas} total={total} />
    </div>
  );
}

export default MainPage