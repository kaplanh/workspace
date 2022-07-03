//? React,JSX kullanmaktadir.
//? JSX'de, HTMl elementleri dogrudan JS icerisinde kullanilabilir

import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

//! Componentler, HTML,CSS ve JS kodlarindan meydana gelmiş
//! bir kod parcacigidir.

//! Bir componentin return () kismi ise JSX kodlari icerir.

//! JSX'in kendine gore bazi kurallari vardir. Ornegin bir
//! component eger birden fazla html elementi dondurmesi
//! gerekirse bunlari tek bir container elemani ile sarmayalarak
//! dondurmelidir.container icin div, article, header, <> v.b, <> </> bunda yazim daha kolay ama stil veremeyiz sitil gerekmeyen yerlerde kullanilabilir
//! herhangi bir element kullanilabilir.

//? App componentinin tanimlanmasi
function App() {
  //* return ün ici JSX bölgesidir js icinde html kodlari yazabiliriz burda
  //? stillendirme yapilmayacaksa container icin <> kullanilabilir
  return (
    <>
      <Header />
      {/*Header componentinden export ettikten sonra burda <He yazmaya basladigimizda  gelen Header karsisinda jsx yazana basinca ve kapanis tagini koyunca üstte kendi otomatikman import yapiyor */}
      <Content />
      <Footer />
      {/* Burda sira önemli html de oldugu gibi üstte yazdigimiz  sayfadada üstte gözükür */}
    </>
  );
}

// !asagidaki gibi returnun yanina yazarsak paranteze gerek kalmadanda yazabiliriz ama best practice üstteki gibi yazilmasi
// function App() {
//   return <div>
//       <h1>hello</h1>
//     </div>;
// }

export default App;

// !bir alt component self closing tag ile cagrilir yani
// ? <App/> ile
// single page aplication mantiginin  bir alternatif dosya yapisi gibi düsünebiliriz
// componentler birden fazla dosya üst component icinde cagrilabilr
// herbir component export edilir ve istenilen yerde importla cagiriyoruz

// fonksiyon yazim yöntemleri 3 seklinide kullanabiliriz
// //!  1.YÖNTEM:experetion
// function topla(a, b) {
//   return a + b;
// }
// //!  2.YÖNTEM:decleretion
// const topla = function (a, b) {
//   return a + b;
// };
// //!  3.YÖNTEM:arrow
// const topla = (a, b) => a + b;
