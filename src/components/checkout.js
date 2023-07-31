import { useEffect, useRef, useState } from "react"
import { addPerson } from "../api/api-methods"

function Checkout(props){

    const { frutas, total } = props
    const [nomePessoa, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [pessoa, setPessoa] = useState({})
    const nomeRef = useRef('')

    useEffect(() => {
        addPerson(pessoa).then(response => {
            console.log(response)
        }).catch(error => console.error("Erro ao add pessoa:", error))
    }, [pessoa])

    const compraRealizada = (e) => {
        e.preventDefault()
        nomeRef.current.focus()

        setPessoa({
            name: nomePessoa,
            email: email,
            total_spent: total,
            frutas: JSON.stringify(frutas)
        })
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
                <button type="submit" onClick={compraRealizada}>Comprar</button>
            </form>
        </div>
    )
}

export default Checkout