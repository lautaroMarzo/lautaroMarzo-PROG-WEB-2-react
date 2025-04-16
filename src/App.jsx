import './App.css'


const productos = [
  {Nombre:"Proteina",Precio:66000},
  {Nombre:"Creatina",Precio:78000},
  {Nombre:"Prentreno",Precio:40000},
  {Nombre:"Proteina",Precio:66000},
  {Nombre:"Creatina",Precio:78000},
  {Nombre:"Prentreno",Precio:40000},
  {Nombre:"Proteina",Precio:66000},
  {Nombre:"Creatina",Precio:78000},
  {Nombre:"Prentreno",Precio:40000},
  {Nombre:"Proteina",Precio:66000},
  {Nombre:"Creatina",Precio:78000},
  {Nombre:"Prentreno",Precio:40000},
  {Nombre:"Proteina",Precio:66000},
  {Nombre:"Creatina",Precio:78000},
  {Nombre:"Prentreno",Precio:40000}
] 

function App() {


  return (
    <>
    <div>
    <h1>Mi carrito de Compras</h1>
    <h4>Añade tu compra al Carrito</h4>
    <div className='container mt-4'>
      <div className='row'>
      {
        productos.map((producto, index)=>(
          <div className="col-md-4 mb-3" key={index}>
            <div className="card h-100">
              <div className="card-body">
               <h5 className='card-title'>{producto.Nombre}</h5>
               <h6 className='card-subtitle'>${producto.Precio}</h6> 
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
