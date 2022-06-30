const setTime = () => {
  //! Vanilla JS Element
  const jsElement = `
   <div>
      <h1>Javascript Element</h1>
      <input type="text" />
      <p>${new Date().toLocaleTimeString()}</p>
   </div>
`;
// yukarda js ile yazdigimiz kodda tüm div güncellenirken altta React ile yazdigimizda sadece ilgili element p kismi degisti iste react bu rendering kismini ciddi kazanim saglar

  document.querySelector('.container-1').innerHTML = jsElement;

  // //! React Element
  const reactElement = React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'React'),
    React.createElement(
      'div',
      null,
      React.createElement('input', { type: 'text' })
    ),
    React.createElement('p', null, new Date().toLocaleTimeString())
  );
  ReactDOM.render(reactElement, document.querySelector('.container-2'));
};

setInterval(setTime, 1000);
