function Resumo(props){

    const {frutas} = props

    const calcularTotal = (fruta) => parseFloat(fruta.preco) * fruta.quantidade

    const totalCompras = frutas.reduce((total, fruta) => total + calcularTotal(fruta), 0)

    return(
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "60px"}}>
            <ul>
                {frutas.map((fruta, index) => (
                    <li key={index}>{fruta.nome} - {fruta.preco} - Quant. {fruta.quantidade} - Total = R${calcularTotal(fruta).toFixed(2)}</li>
                ))}
            </ul>
            <h4>Total das Compras = R${totalCompras.toFixed(2)}</h4>
        </div>
    )
}

export default Resumo