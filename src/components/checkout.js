import { useRef } from "react"

function Checkout(props){

    const { frutas } = props
    const nomeRef = useRef('')

    const compraRealizada = (e) => {
        e.preventDefault()
        nomeRef.current.focus()

        console.log(frutas)
    }

    return(
        <div style={{display: "flex", justifyContent: "center", marginTop: "60px"}}>
            <form style={{display: "flex", flexDirection: "column", maxWidth:"400px"}}>
                <label>
                    Nome Completo:
                    <input type="text" ref={nomeRef} />
                </label>
                <label>
                    E-mail:
                    <input type="email" />
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