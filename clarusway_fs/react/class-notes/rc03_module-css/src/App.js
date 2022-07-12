import Card from "./components/card/Card";
import data from "./util/data"; // verimiz parent de alinip asagilara props lar ile gönderilir datayi almak icin önce ilgili componentte data (veya baska bir isimde) import data from './util/data'; seklinde import ediyoruz

function App() {
  return (
    <>
      {/* burasi jsx alani oldugu icin burda js kodlari yazmak icin {} acip öyle kodlari yazmak zorundayiz. */}

      {data.map((item) => {
        //!Destr
        const { id, img, btnName, dil } = item;
        return <Card key={id} img={img} btnName={btnName} dil={dil} />;
        // key e datada id varsa id yi yoksa map in 2. argümani index i kullanabiliriz
        //key props degil asagiya gitmez sadece React'in Card i basarken kullandigi parametre
      })}
    </>
  );
}

export default App;
