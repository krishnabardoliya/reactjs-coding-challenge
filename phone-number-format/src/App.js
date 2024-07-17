import { useRef } from 'react';

function App() {
  const phoneNumber = useRef('');
  

  const formatNumber = (number) => {
    // (999)652-3459
    const result = number.replace(/[^0-9]/g,"");
    let newNumber = '';

    if(result.length > 0) {
      newNumber += ('(' + result.slice(0,3))
    }

    if(result.length > 3) {
      newNumber += (')' + result.slice(3,6))
    }

    if(result.length > 6) {
      newNumber += ('-' + result.slice(6,10))
    }

    phoneNumber.current.value = newNumber;
  }

  return (
    <div className="App">
      Format Phone number challenge
      <br/>
      <br/>
      <input ref={phoneNumber} onChange={e => formatNumber(e.target.value)}/>
    </div>
  );
}

export default App;
