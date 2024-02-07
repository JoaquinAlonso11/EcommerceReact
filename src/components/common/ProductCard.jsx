

export const ProductCard = ( {titulo, desc, precio} ) => {



  return (
    <div style={{border: "2.5px solid blue"}}>
        <img src="" alt="" />
        <h4>{titulo}</h4>
        <h3>{desc}</h3>
        <h3>{precio}</h3>
    </div>
  )
}
