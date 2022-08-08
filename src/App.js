import './App.css';
import { Footer } from './Footer';
import Left from './Left';
import Right from './Right';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row content">
          <Left></Left>
          <Right></Right>
        </div>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default App;
