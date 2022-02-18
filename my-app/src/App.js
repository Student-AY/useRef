import {useRef , useState , useEffect} from 'react'
import './App.css';

function App() {
  const [name , setName] = useState('');
  const prevName = useRef('');

  useEffect(() => {
    prevName.current = name;
  },[name])

  
  return (
    <>
    <input value={name} onChange={e => setName(e.target.value)}/>
    <div>my name is {name} but it used to be {prevName.current}</div>
    
    </>
  );
}

export default App;
