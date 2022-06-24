function Product (props){
    
return (
    <div className="unit">
        <h1>{props.title}</h1>
        <h3>{props.desc}</h3>
        <p>{props.price}</p>
       
   </div>
)
}

export default Product;