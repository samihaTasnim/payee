import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div>
     <div>
      <header>
        <h2 className="header">Payee</h2>
      </header>
     </div>
      <div>
       <Person></Person>
      </div>
    </div>
  );
}

export default App;
