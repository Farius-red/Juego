import React from 'react';

const Tablauno = (props) => {
    console.log(props.usuarios)
   
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
                            
                            <button  className="btn btn-primary" >edit</button>
                            
                            <button className="btn btn-danger ">Delete</button>
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
                   
                   <button className="btn btn-primary"> agregar usuario</button>
                   
               </div>
               </div>
          </div>
        
      );
}
 
export default Tablauno;
