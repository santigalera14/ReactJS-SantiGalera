import './App.css';
import  NavBar  from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function App({valorInicial}) {
  console.log({valorInicial});


  return (
    <div className='app-containter'>
      <BrowserRouter>
        <NavBar />
        <Routes>
         <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/item/:itemId' element={<ItemDetailContainer/>} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

// export default App;
