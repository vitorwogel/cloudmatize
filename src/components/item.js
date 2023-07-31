import React, {useState} from 'react'

function Item(props) {

    const [counter, setCounter] = useState(0)
    const { item, frutas, onAddFruta } = props

    const incrementCounter = () => {
      counter<item.count ? setCounter(counter+1) : setCounter(counter)
    }

    const decrementCounter = () => {
      counter>0 ? setCounter(counter-1) : setCounter(0)
    }
    
    const adicionar = () => {
      const fruta = {
        nome: item.name,
        preco: item.price,
        quantidade: counter
      }
      if(fruta.quantidade>0){ 

        if(frutas.filter((f) => f.nome === fruta.nome).length > 0){
          const newFrutas = frutas.map((f) => f.nome === fruta.nome ? {...f, quantidade: fruta.quantidade} : f)
          onAddFruta(newFrutas)
        }
        else{
          onAddFruta((prevFrutas) => [...prevFrutas, fruta])
        }
      }else{
        if(frutas.filter((f) => f.nome === fruta.nome).length > 0){
          const filtraZero = frutas.map((f) => f.nome === fruta.nome ? {...f, quantidade: 0} : f)
          const tiraZero = filtraZero.filter((f) => f.quantidade > 0)
          onAddFruta(tiraZero)
        }
      }
    }
    

    return (
      <div>
        <h1>{item.name}</h1>
        <h2>R${item.price}</h2>
        <span>Quant. Disponível {item.count}</span>
        <br/>
        <span>Num de Items {counter}<button onClick={incrementCounter}>+</button> <button onClick={decrementCounter}>-</button></span>
        <br />
        <button onClick={adicionar}>Adicionar ao Carrinho</button>
      </div>
    );
}

export default Item