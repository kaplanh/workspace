import React from "react";
import ReactDOM from "react-dom/client";

// import App from './App'; //burda App yazinca onun js veya jsx oldugunu dogrudaralgiliyor o nedenle sadece App yazmamiz yeterli oluyor ama digerlerinde . dan sonraki uzantilari yazmak zorundayiz .jpg,png,css vb
import App from "./App"; //import { App } from "./App"; App default olarak export edilmeseydi bu sekilde import edilecekti ama default export edildigi icin import Appp from "./Appp"; bu sekilde edildi
//birinci App ismi farkli birseyde olabilir ama best praktice ayni isim olmasdir mport Appp as Apple from "./Appp"; seklinde alias ile farkli sekilde isimlendirebiliriz
import "./index.css";
//!css dosyalari direk import ediliyor import "index.css"; seklinde

//! index componenti ReactDOM.createRoot() metodu ile
//! public klasorunde yer alan index.html icersindeki id'si root
//! olan elemana erisir.

//* render() metodu içerisinde App componenti cagrilir.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
