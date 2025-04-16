import './App.css'
import { useMemo, useState } from 'react'

const productos = [
  {Nombre:"Proteina",Precio:66000},
  {Nombre:"Creatina",Precio:78000},
  {Nombre:"Prentreno",Precio:40000}
] 

function App() {
  const [carrito, setcarrito] = useState([])

  const total = useMemo(
    ()=> carrito.reduce((acc, producto) => acc + producto.Precio * producto.cantidad, 0) ,
    [carrito]
  )
  // El useMmemo es un hook que basicamente tiene un activador que se pone entre corchetes 
  // al cambiar este valor activador ejecuta el codigo que hay adentro


  const agregarProducto = (producto)=>{
    const exsiste = carrito.find(item => item.Nombre === producto.Nombre)
    if (exsiste){
    const  nuevocarrito = carrito.map(item => {
      if (item.Nombre === producto.Nombre){
        return{...item, cantidad: item.cantidad + 1}
      }
      return item 
    }
    )
    setcarrito([nuevocarrito]) 
    }else {
      // le agrego el producto
      setcarrito([...carrito, {...producto, cantidad:1}])
    } 
  }

  return (
    <>
    <div>
    <h1>Mi carrito de Compras</h1>
    <h4>Total de Compras: ${total}</h4>
    <div className='container mt-4'>
      <div className='row'>
      {
        productos.map((producto, index)=>(
          <div className="col-md-4 mb-3" key={index}>
            <div className="card h-100">
              <div className="card-body">
               <h6 className='card-title'>{producto.Nombre}</h6>
               <h4 className='card-subtitle'>${producto.Precio}</h4>
               <button 
               className="btn btn-primary"
               onClick={()=>agregarProducto(producto)}
               >Agregar</button>
              </div>
            </div>
          </div>
        ))
      }
      </div>

    </div>
    </div>

    </>
  )
}

export default App
