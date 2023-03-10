import './App.css';
import { Titles } from './components/Titles/Titles';
import { DropzoneDesk } from './components/Dropzone/DropzoneDesk/DropzoneDesk';
import { Popular } from "./components/Popular/Popular"
import { Navbar } from './components/Navbar/Navbar';
import { Background } from './components/Background/Background';
import { Buttons } from './components/Buttons/Buttons';
import MoviesProvider from './context/MoviesProvider';

var number = Math.floor(Math.random() * 5)

function App() {
  return (
    <MoviesProvider>
      <DropzoneDesk />
      <div className='homeContainer'>
        <Background random={number} />
        <Navbar />
        <div className='flexContainer'>
          <div className='titleContainer'>
            <Titles random={number} />
            <Buttons />
          </div>
          <Popular />
        </div>
      </div>
    </MoviesProvider>
  );
}

export default App;
