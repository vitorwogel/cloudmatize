import { useEffect, useState } from "react"
import { getItems } from "../api/api-methods" 

function ItemsPage() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

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
            <div>
                {items.map((item) => (
                    <div key={item.id}>
                    <p>ID: {item.id}</p>
                    <p>Name: {item.name}</p>
                    <p>Price: {item.price}</p>
                    <p>Count: {item.count}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default ItemsPage