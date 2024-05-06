
let i = 1;
let bandera = false;
let bandera2 = false;

const misUsuarios = [
    {
        dni: 123,
        nombre: "Sebastian",
        contraseña: "12_asS",
    },
    {
        dni: 456,
        nombre: "Alberto",
        contraseña: "1d_aTd",
    },
    {
        dni: 789,
        nombre: "Ana",
        contraseña: "Perr_9",
    }



];

class usuario {
    constructor(dni, nombre, contraseña) {
        this.dni = dni;
        this.nombre = nombre;
        this.contraseña = contraseña;
    };

};
let opcion;
while (opcion != 0) {

    let opcion = parseInt(prompt(" 1. Alta de usuario\n 2. Baja del Primer Usuario\n 3. Baja del Último Usuarios\n 4. Consulta de los Usuarios\n 5. Cantidad de Usuarios registrados\n 6. Salir"));
    if (opcion == 6) {
        break;
    }

    switch (opcion) {

        case 1:
            alert("Alta de Usuarios");
            altaUsuario();
            break;
        case 2:
            alert('Baja del Primer Usuario');
            eliminarPrimerUsuario();
            break;
        case 3:
            alert('Baja del Último Usuario');
            eliminarUltimoUsuario();
            break;

        case 4:
            alert('Consulta de los Usuarios registrados');
            consultarUsuario();
            break;
        case 5:
            alert('Cantidad de Usuarios registrados');
            cantidadUsuario();
            break;
        case 6:
            break;

        default:
            alert('Opción incorrecta');
            break;
    }
}


function altaUsuario() {
    const dniNuevoUsuario = parseInt(prompt('Ingrese DNI'));
    const nombreNuevoUsuario = prompt('Ingrese Nombre de Usuario');
    if (usuario === '') {
        console.warn('No ha ingresado ningún valor');

    }
    //  else{
    // if (typeof nombreNuevoUsuario != "String") {
    // console.warn('No ha ingresado un valor de tipo string');

    //  } 
    // }

    else {

        console.log('Nombre de Usuario correcto');

    }

    const contraseñaNuevoUsuario = prompt('Ingrese Contraseña');
    const caracter = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6}$/;

    if (contraseñaNuevoUsuario.match(caracter)) {

        alert("La Contraseña es Correcta y Segura");

    } else {

        alert("Contraseña Incorrecta!!!. La Contraseña debe contener al menos una minúscula, mayúscula, número y un carácter especial. Y 6 carácteres como mínimo.");

    }

    const nuevoUsuario = new usuario(misUsuarios.length + 1, dniNuevoUsuario, nombreNuevoUsuario, contraseñaNuevoUsuario);
    misUsuarios.push(nuevoUsuario);
    alert("Usuario: " + nombreNuevoUsuario + ", dado de Alta correctamente!!!");

}

function consultarUsuario() {
    let mostrar = "";

    if (misUsuarios.length === 0) {
        mostrar = "No existen Usuarios";
    } else {
        misUsuarios.forEach(el => {
            mostrar += "DNI: " + el.dni + "\n Nombre: " + el.nombre + "\n Contraseña: " + el.contraseña + "\n"
        });
    }

    alert(mostrar);

}




function eliminarPrimerUsuario() {

    let eliminado = misUsuarios.shift();
    console.log("Eliminación Exitosa");
    console.log(misUsuarios);
}

function eliminarUltimoUsuario() {

    let eliminado = misUsuarios.pop();
    console.log("Eliminación Exitosa");
    console.log(misUsuarios);
}


function cantidadUsuario() {
   
    console.log(misUsuarios.length); 
    alert("Cantidad de Usuarios registrados: " + misUsuarios.length);

}

