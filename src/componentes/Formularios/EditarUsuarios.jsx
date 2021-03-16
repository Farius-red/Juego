import React from 'react';
import {useForm} from 'react-hook-form';

/*componentes*/
import Footer from '/home/daniel/Documentos/Paginas/juego/src/componentes/Footer.js'

const EditarUsuarios = ({adduser, regrabarusuario, updateUsuario}) => {
    
 


    const {register, errors, handleSubmit} = useForm({
        defaultValues: regrabarusuario
    });

    
      const onSubmit =(data, e)=> {
          //console.log(data);
          // limpiar campos formulario
          e.target.reset();
          adduser(data);
          data.id = regrabarusuario.id;

          updateUsuario(regrabarusuario.id, data);
         

      }
      
    return (
      <div className="card" style={{height : '35%'}} >
          <div className="card-header text-center">
             <h2 className="card-title">Editar Usuario</h2>
              </div>
         <div className="card-body ">
             
           <form  onSubmit ={handleSubmit(onSubmit)}>
               <div  className="form-group">
                 <label> Usuario * </label>
                   <input  className="form-control" id="usuario" name="usuario" type="text" placeholder="Maximo 15 caracteres" required maxLength="15" minLength="5"
                   ref={
                        register({
                                    required:{value: true, message:'Campo requerido'}
                        })
                   }
                     />
                   <span className="text-danger text-small d-block">
                   { errors?.usuario?.message}
                   </span>
               </div>
               <div className="form-group">
                   <label> Nombre *</label>
                   <input className="form-control" id="nombre"  name="nombre"  type="text" placeholder="Escribe tu nombre"required maxLength="10" minLength="5" 
                       ref={
                        register({
                                    required:{value: true, message:'Campo requerido'}
                        })
                   }
                   />
               </div>
               <div className="form-group" >
                   <label> Apellidos *</label>
                   <input className="form-control" id="apellidos"  name="apellidos"  type="text" placeholder="Escriba sus apellidos"required maxLength="40" minLength="5"  ref={
                        register({
                                    required:{value: true, message:'Campo requerido'}
                        })
                   } />
               </div>
               <div className="form-group" >
                   <label>Telefono *</label>
                   <input className="form-control" id="telefono"  name="telefono" type="text" placeholder="Escriba su telefono"  min="7" max="10"required   ref={
                        register({
                                    required:{value: true, message:'Campo requerido'}
                        })
                   }/>
               </div>
               <div className="form-group" >
                   <label>Correo 
                       </label> 
                   <input className="form-control" id="correo" name="correo" type="text" placeholder="ejemplo@gmail.com" required  
                      ref={
                        register({
                                    required:{value: true, message:'Campo requerido'}
                        })
                   }  
                   />
               </div>
               <div className="form-group" >
                   <label> Contraseña *</label>
                   <input  type="password" className="form-control" id="clave" name="clave"  placeholder="minimo 7 caracteres alfanumericos " required   ref={
                        register({
                                    required:{value: true, message:'Campo requerido'}
                        })
                   }/>
                   <span> La contraseña debe tener una letra como minimo  </span>
               </div>
               <div className="form-group" >
                   <label>Selecione rol *</label>
                   <select className="form-control" id="rol"  name="rol" placeholder="" required ref={
                        register({
                                    required:{value: true, message:'Campo requerido'}
                        })
                   } >
                   <option value="Reclutador">Reclutador</option>
                   <option value="Aprendiz">Aprendiz</option>
                   <option value="Profesor">Profesor</option>
                          
                       </select>
                   
               </div>
               <div className="form-group" >
                   <label>Selecione Instrumento *</label>
                   <select className="form-control" id="instrumento" name="instrumento"  placeholder="" required  ref={
                        register({
                                    required:{value: true, message:'Campo requerido'}
                        })
                   }>
                   <option value="Guitarra">Guitarra</option>
                   <option value="Piano">Piano</option>
                   <option value="Tecnica vocal">Tecnica Vocal</option>
                          
                       </select>
                   
               </div>
               <p className="h5">Todos los campos con * son obligatorios</p>
               <div className="container">
               <input  type="submit" className="btn btn-primary"  value="EditarUsuario" />
               </div>
           </form>
            
         </div>
         <div className="card-footer">
             <Footer/>
         </div>
      </div>

      );

                }

 
export default EditarUsuarios;