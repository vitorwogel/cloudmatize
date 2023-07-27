import React, {useState} from 'react'

function Item(props) {

    const [counter, setCounter] = useState(0)
    const { frutas, onAddFruta } = props

    const incrementCounter = () => {
        setCounter(counter+1)
    }

    const decrementCounter = () => {
      counter>0 ? setCounter(counter-1) : setCounter(0)
    }

    const adicionar = () => {
      const fruta = {
        nome: props.titulo,
        preco: props.preco,
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
        <h1>{props.titulo} - R${props.preco}</h1>
        <p>{props.texto}</p>
        <span>Quant. {counter} <button onClick={incrementCounter}>+</button> <button onClick={decrementCounter}>-</button></span>
        <br />
        <button onClick={adicionar}>Adicionar ao Carrinho</button>
      </div>
    );
}

export default Item