import data from "./data";
import Product from "./Product";

import Header from './Header';

function App() {
  
  return (
    <>
    <Header/>
    <main className="App">
     {/* <div className="unit">
      <h1>{products[0].title}</h1>
      <h3>{products[0].desc}</h3>
      <p>{products[0].price}</p>
     </div> */}


    {
      data.map((item)=>{
     
        return(
        <Product
        //  key = {.id}
        // title = {title}
        // desc = {desc}
        // price = {price}
        {...item}
        />
        )
      })
    }



     {/* <Product

      title = {products[0].title}
      desc = {products[0].desc}
      price = {products[0].price}
     /> */}
    </main>
    </>
  );
}

export default App;
