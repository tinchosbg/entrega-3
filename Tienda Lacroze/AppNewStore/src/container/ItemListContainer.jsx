import ItemList from "../components/ItemList"
import {useState,useEffect} from 'react'

function ItemListContainer({Mensaje}) {
    const estilos={
        fontSize:'20px'
    }
    const productos=[{ id: '1', title: 'Nike air force one', price: 70000, img: 'https://nikeclprod.vteximg.com.br/arquivos/ids/158944-1000-1000/CT2302_100_A_PREM.jpg?v=637654374150800000' },{ id: '2', title: 'Zapatilla nike air max', price: 85000, img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/air-max-90-zapatillas-dlXJdc.png' },{ id: '3', title: 'Zapatilla nike huarache', price: 78000, img: 'https://storage.googleapis.com/sportshowroom.cl/products/26db3f71802e11b2a5f1f79502fd6416.jpg'}]
    const [productoState, setProductoState] = useState([])

    useEffect(() => {
        getProductos()
        console.log('Efecto realizado con éxito')
    }, [])

    const getProductos = () => {
        const getProductosPromesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(setProductoState(productos))
            }, 2000);
        })
        getProductosPromesa.then(response => {
            console.log(response)
        })
    }



    return (
        <div>
            <span style={estilos}>{Mensaje}</span>
            <ItemList productos={productoState}></ItemList>    
        </div>
    )
}
export default ItemListContainer