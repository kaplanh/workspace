//? Componentler fonksiyonlarda oldugu gibi 3 farkli yontemle yazilabilir.
// //!  1.YÖNTEM:experetion
// function topla(a, b) {
//   return a + b;
// }
// //!  2.YÖNTEM:decleretion
// const topla = function (a, b) {
//   return (
// a + b);
// };
// //!  3.YÖNTEM:arrow
// const topla = (a, b) => a + b;

//? JSX icerisinde degiskenler {} icerisinde gosterilir.

//? Footer comp.
const Footer = () => {
  return <footer>Copyright by Clarusway, {new Date().getFullYear()} </footer>;
};

export default Footer;
