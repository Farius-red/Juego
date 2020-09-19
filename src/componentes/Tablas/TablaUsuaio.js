import React, {useState} from 'react';

import {v4  as uuidv4} from 'uuid';
//componentes
import TablaUno from '../Tablas/Tablauno.jsx';

const TablaUsuario = () => {
    
    const datos = [
        { id: uuidv4(), usuario:'farius-red', nombre:'daniel', rol: 'fan', telefono: '3186956700', correo:'aaaa@hola' },
        
     ]
    
   const [usuarios, setUsuarios] = useState(datos);

   //agregar usuarios

   const adduser =(user )=>{
    user.id= uuidv4();
     
       setUsuarios([
          ...usuarios,
          user
       ])
    }
     // eliminar usuario 

     const eliminarUsuarios=(id)=>{
        setUsuarios(usuarios.filter(user => user.id !== id))
     }

     //editar usuarios
      const [edit, setEdit] = useState(false);


      const[regrabarusuario, setRegrabarusuario]= useState({
          id:null,  usuario:'', nombre:'', rol: '', telefono: '', correo:''
      })

      const usuarioModificado =(user)=> {
          setEdit(true);
          setRegrabarusuario({
              id: user.id , usuario: user.usuario , nombre: user.nombre , rol:user.rol,
              telefono:user.telefono , correo:user.correo
          })
      }

      //update usuarios 

      const updateUsuario = (id, updateUsuario)=>{
          
          setUsuarios(usuarios.map(user => (user.id ===id ? updateUsuario : user)))
      }
    
    return ( 
        <div className="container d-flex flex-row">
         
         <div className="row">
             
             <div className="col">
                 <h2>Ver Usuarios</h2>
                 <div className="d-block">
                  <TablaUno
                   usuarios={usuarios} 
                   eliminarUsuarios={eliminarUsuarios} 
                   edit={edit}
                   setEdit={setEdit}
                    adduser={adduser}
                    regrabarusuario={regrabarusuario}
                    usuarioModificado={usuarioModificado}

                    updateUsuario={updateUsuario}
                    
                    />
                 </div>
             </div>
            </div>
        </div>
     );
}
 
export default TablaUsuario;
