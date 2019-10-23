import React, {useState} from 'react';
import MainComponent from './components/MainComponent';
import { commingDishes } from './shared/dishes'

function App() {
  const [dishes, setDishes] = useState(commingDishes);

  return (
    <>
        <MainComponent></MainComponent>
    </>
  );
}

export default App;
