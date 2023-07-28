import { useRef, useState } from "react"
import { addItem, addPerson } from "../api/api-methods"

function Checkout(props){

    const { frutas, total } = props
    const [nomePessoa, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [pessoa, setPessoa] = useState({})
    const nomeRef = useRef('')

    const compraRealizada = (e) => {
        e.preventDefault()
        nomeRef.current.focus()

        frutas.map(fruta => addItem(fruta.nome, fruta.preco, fruta.quantidade).then(res => {
            console.log(res)
        }).catch(error => console.error("Erro:", error)))

        setPessoa({
            name: nomePessoa,
            email: email,
            total_spent: total
        })

        addPerson(pessoa.name, pessoa.email, pessoa.total_spent).then(response => {
            console.log(response)
        }).catch(error => console.error("Erro ao add pessoa:", error))
    }

    const handleName = (e) => {
        setNome(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    
    return(
        <div style={{display: "flex", justifyContent: "center", marginTop: "60px"}}>
            <form style={{display: "flex", flexDirection: "column", maxWidth:"400px"}}>
                <label>
                    Nome Completo:
                    <input type="text" ref={nomeRef} onChange={handleName} />
                </label>
                <label>
                    E-mail:
                    <input type="email" onChange={handleEmail}/>
                </label>
                <label>
                    N. do Cartao:
                    <input type="text" />
                </label>
                <label>
                    Validade:
                    <input type="date" />
                </label>
                <label>
                    CVC:
                    <input type="number" />
                </label>
                <button type="submit" onClick={compraRealizada}>Comprar</button>
            </form>
        </div>
    )
}

export default Checkout