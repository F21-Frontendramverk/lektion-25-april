import './App.css';
import { increment } from './actions/counterActions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  function handleIncrease() {
    dispatch(increment(5));
  }

  return (
    <div className="App">
      <h2>Räknare</h2>
      <button onClick={ handleIncrease }>Öka</button>
    </div>
  );
}

export default App;
