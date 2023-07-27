import Item from './item.js';

function ItemRow(props){

    const { frutas, onAddFruta } = props;

    return(
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Item
                titulo="Melancia"
                preco="6.99"
                texto="Fruta vermelha doce e deliciosa."
                frutas={frutas}
                onAddFruta={onAddFruta}
            />
            <Item
                titulo="Banana"
                preco="2.99"
                texto="Fruta amarela colhida em cachos."
                frutas={frutas}
                onAddFruta={onAddFruta}
            />
            <Item
                titulo="Kiwi"
                preco="4.99"
                texto="Fruta verde azeda e pequena."
                frutas={frutas}
                onAddFruta={onAddFruta}
            />
        </div>
    )
}

export default ItemRow