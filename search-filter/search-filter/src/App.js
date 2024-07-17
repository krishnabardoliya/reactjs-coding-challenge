import {useState} from 'react';
import debounce from './debounce'; 

function App() {
  const list = ["apple","banana","Fig", "Appricot", "Cherry", "blueberry", "Date", "dragonfruit", "Grape", "Watermelon", "orange", "Grapes", "Guawa"]
  const [filteredList, setFilteredList] = useState(list);
  const [notFound, setNotFountMessage] = useState("");

  const filterFruit = debounce((e) => {
    e.preventDefault();
    const filteredFruit = list.filter(value => value.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
    setFilteredList(filteredFruit);
    if(filteredFruit.length <= 0) {
      setNotFountMessage("No Fruit found!")
    } else {
      setNotFountMessage("");
    }
  }, 500);
  
  return (
    <div>
      <input type="search" onChange={(e) => filterFruit(e)}/>
      {filteredList.map((fruit, id) => <li key={`fruit-${id}`}>{fruit}</li>)}
      {notFound && notFound}
    </div>
  );
}

export default App;
