import {useEffect} from 'react'
import '../ItemList.css';
function ItemList(props) {
    return (
        <div>
            <div className="container">
                    {props.productos.map(producto => <div className="card"><img key={producto.id} src={producto.img}></img><h4 key={producto.id}>{producto.title}</h4><p key={producto.id}>{producto.price}</p> </div>)}
            </div>
        </div>
    )
}
export default ItemList