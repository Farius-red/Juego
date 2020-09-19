import React, {useState} from 'react';

import {v4  as uuidv4} from 'uuid';

import TablaUno from '../Tablas/Tablauno.jsx';
import Registrarse from '../Formularios/Resgistrarse';

const TablaUsuario = () => {
    
    const datos = [
        { id: uuidv4(), usuario:'farius-red', nombre:'daniel', rol: 'fan', telefono: '3186956700', correo:'aaaa@hola' },
        
     ]
    
   const [usuarios, setUsuarios] = useState(datos)

   //agregar datos

   const adduser =(user)=>{
    user.id= uuidv4();
       setUsuarios([
          ...usuarios,
          usuarios
       ])


   }
    return ( 
        <div className="container d-flex flex-row">
         
         <div className="row">
             <div className="col">
             
                 <h2>ADD user</h2>
                <div className="d-row">
                  <Registrarse adduser={adduser}/>
                </div>
             </div>
             <div className="col">
                 <h2>Ver Usuarios</h2>
                 <div className="d-block">
                  <TablaUno usuarios={usuarios}/>
                 </div>
             </div>
            </div>
        </div>
     );
}
 
export default TablaUsuario;
