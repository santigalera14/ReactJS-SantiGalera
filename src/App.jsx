import { useState } from 'react';
import './App.css';
import { Button } from './components/button'  
import  NavBar  from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

export function App({valorInicial}) {
  
  console.log({valorInicial});

  const [contador, setContador] = useState(valorInicial)

  const aumentaContador = () => {
    setContador(contador + 1)
  }

  return (
    <div className='app-containter'>
      <NavBar /> 
      <ItemListContainer greeting={'Bienvenidos'}/>  
      <h1>Valor: <strong>{ contador }</strong></h1>
      <Button 
        aumentaContador={aumentaContador}
        text={"+1"}
      />
    </div>
  );
}

// export default App;
