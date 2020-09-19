import React from 'react';

//componentes 

import Registrarse from '../Formularios/Resgistrarse';
import Footer from '../Footer';
import EditarUsuarios from '../Formularios/EditarUsuarios';


const Tablauno = (props) => {
    console.log(props.usuarios);

   

   
    return (
         <div className="container">
          <table className="table table-hover" style={{height: '30%'}} >
              <thead>
                  <tr>
                      < th scope="col">id</th>
                      <th  scope="col"> usuario</th>
                      <th  scope="col"> nombre</th>
                      <th  scope="col"> rol</th>
                      <th  scope="col"> telefono</th>
                      <th  scope="col">  correo</th>
                     
                      
                  </tr>
              </thead>
              <tbody>
                  {
                    props.usuarios.length > 0 ?
                    props.usuarios.map(user =>( 
                    
                        <tr key={user.id}>
                     
                     <td >{user.id}</td>
                     <td> {user.usuario}</td>
                     <td> {user.nombre}</td>
                     <td> {user.rol}</td>
                     <td> {user.telefono}</td>
                     <td> {user.correo}</td>
                        <td className="d-flex md-d-flex-column mr-2">
                            
                            <button  className="btn btn-primary" onClick={()=>{props.usuarioModificado(user)} }  data-toggle="modal" data-target="#exampleModal" >Editar</button>
                            
                            <button className="btn btn-danger "
                            onClick={()=> {props.eliminarUsuarios(user.id)}}
                            >Eliminar
                            
                            </button>
                        </td>
                     </tr>)):(
                         <td> 
                           no hay usuarios
                         </td>
                     )
                      }

                     
                     
                 
                  
              </tbody>
             
              
          </table>
               <div className="row">
               <div className="col"> 
                   
               <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={()=>{props.setEdit(false)}}>
  Registrar usuario
</button> 
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Latineando</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
          { 
          props.edit ? (
             <EditarUsuarios 
             adduser={props.adduser}
             regrabarusuario={props.regrabarusuario}
             updateUsuario={props.updateUsuario}
             />
          ):(
             
              <Registrarse 
       adduser={props.adduser}
       
       />
          )
}
      </div>
      
      <div className="modal-footer">
          <div className="container">
        <Footer/>
        </div>
      </div>
    </div>
  </div>
</div>
               </div>
               </div>
              
          </div>
        
      );
}
 
export default Tablauno;
