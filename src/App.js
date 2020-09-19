
import React from 'react';



/*Componentes */
import Header from './componentes/Header';
import Footer from './componentes/Footer';

import TablaUsuario from './componentes/Tablas/TablaUsuaio';







function App() {
 

  return (
    <div className="container"> 
        <Header/>
        
        
       <TablaUsuario/>
        

        <Footer/>

       
    </div>
  );
}

export default App;
