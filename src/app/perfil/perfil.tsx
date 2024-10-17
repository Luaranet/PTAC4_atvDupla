import PerfilUsuario from "../interfaces/usuario";

const PaginaPerfil = () =>{
    const usuario ={
        nome: 'josé lima',
        idade: 20,
        email: 'josélima@gmail.com'
    }

    return (
        <div>
            <h1>Pagina perfil</h1>
            <PerfilUsuario usuario={usuario}/>
        </div>
    )
}

export default PaginaPerfil;