import "./App.css";
import { useState } from "react";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [total, setTotal] = useState(0);
  const handleChange = (e) => {
    setNum1(e.target.value);
  };
  const handleChange2 = (e) => {
    setNum2(e.target.value);
  };

  const totalResult = () => {
    let total = +num1 + +num2;
    setTotal(total);
  };
  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input
        placeholder="First Number"
        type="number"
        onChange={handleChange}
        value={num1}
      />
      <input
        placeholder="Second Number"
        type="number"
        onChange={handleChange2}
        value={num2}
      />

      <button onClick={totalResult}>Add Two Numbers</button>
      <p>Total:{total}</p>
    </div>
  );
}

export default App;

// *solution-2
// import { useEffect, useState } from 'react';

// export default function Counter() {
//   const [number1, setNumber1] = useState();
//   const [number2, setNumber2] = useState();

//   const [sum,setSum]=useState(0)
//   const handleSum =()=>{
//      setSum(Number(number1)+Number(number2))
//      setNumber2('')
//      setNumber1('')
//   }
//   return (
//     <>
//       <div>
//       <h2>Adding Two Numbers</h2>
//       <input placeholder="First Number" value={number1} type="number" onChange={((e)=>{
//         setNumber1(e.target.value)
//       })} />
//       <input placeholder="Second Number" value={number2} type="number" onChange={((e)=>{
//         setNumber2(e.target.value)
//       })}/>

//       <button onClick={handleSum}>Add Two Numbers</button>
//       <p>Total:{sum}</p>
//     </div>
//     </>
//   )
// }
