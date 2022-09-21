
import './App.css';
import Discount from './components/discount/discount';
import Header from './components/header/header';
import MainImage from './components/main-image/main-image';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainImage/>
      <Discount/>
    </div>
  );
}

export default App;
