import { useEffect, useState } from "react"
import { Container, TextField, Typography, Box, Button } from "@mui/material"
import { addItem } from "../api/api-methods"

function AdminField() {

    const [fruta, setFruta] = useState({})
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [count, setCount] = useState('')

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handlePrice = (event) => {
        setPrice(event.target.value)
    }

    const handleCount = (event) => {
        setCount(event.target.value)
    }

    const handleFruta = () => {
        setFruta({
            name: name,
            price: price,
            count: count
        })
    }

    useEffect(() => {
        addItem(fruta).then(response => {
            console.log(response)
        }).catch(error => console.error("Erro ao add fruta:", error))
    }, [fruta])

    return(
        <Container>
            <Typography variant="h1" fontSize={"36px"} sx={{marginTop: "20px"}}>Página do Gerente</Typography>
            <Typography variant="h2" fontSize={"28px"} sx={{marginTop: "20px"}}>Adicionar Frutas ao Mercado</Typography>
            <Box
                display="flex"
                flexDirection="column"
                gap={2}
                alignItems={{ xs: 'center', sm: 'flex-start' }}
                sx={{marginTop: "20px"}}
            >
                <TextField id="standard-basic" label="Nome da Fruta" variant="standard" onChange={handleName} />
                <TextField
                    id="standard-basic"
                    label="Preço"
                    variant="standard"
                    type="number"
                    InputProps={{
                        min: 0,
                        step: 0.01
                    }} 
                    onChange={handlePrice}
                />
                <TextField
                    id="standard-basic"
                    label="Quantidade Disponível"
                    variant="standard"
                    type="number"
                    InputProps={{
                        min: 0,
                        step: 1
                    }}
                    onChange={handleCount}
                />
            </Box>
            <Button type="submit" color="primary" onClick={handleFruta} sx={{marginTop: "20px", borderRadius: "25px", padding: "10px 20px 10px 20px"}}>
                Enviar
            </Button>
        </Container>
    )
}

export default AdminField