import { useEffect, useState } from "react"
import { getItems } from "../api/api-methods" 
import Item from './item'
import { Container } from "@mui/material"

function ItemsPage(props) {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {frutas, onAddFruta} = props

    useEffect(() => {
        getItems().then(data => {
            setItems(data)
            setLoading(false)
        }).catch(error => {
            console.error("Error: ", error)
            setLoading(false)
        })
    }, [])

    if(loading === true){
        return(
            <h1>Loading...</h1>
        )

    }else{
        return(
            <Container sx={{display: 'flex', justifyContent: 'space-around'}}> 
                {items.map((item) => (
                    <Item key={item.id} item={item} frutas={frutas} onAddFruta={onAddFruta} />
                ))}
            </Container>
        )
    }
}

export default ItemsPage