//Declaración de variables
var nombreUsuario = "Fernando Guarini";
var saldoCuenta = 50000;
var limiteExtraccion = 4000;
var Agua = 350;
var Telefono = 425;
var Luz = 210;
var Internet = 570;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var codigoSeguridad = 1234;

iniciarSesion();
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

function sumaDinero(dineroSumado) {
    saldoCuenta = saldoCuenta + dineroSumado;
}

function restaDinero(dineroRestado) {
    saldoCuenta = saldoCuenta - dineroRestado;
}
//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = parseInt(prompt("Ingrese su nuevo limite de extraccion"));
    if (isNaN(nuevoLimite)) {
        alert("el limite ingresado es invalido, intente otra vez");
    } else {
        limiteExtraccion = nuevoLimite;
        actualizarLimiteEnPantalla();
        alert("Su nuevo limite de extraccion es:$"+limiteExtraccion);
    }
}

function extraerDinero() {
    var retiroUsuario = parseInt(prompt("Ingrese la cantidad que desea retirar"));
    if (retiroUsuario > saldoCuenta) {
        alert("El monto de retiro excede a su saldo, intente otra vez");
    } else if (retiroUsuario > limiteExtraccion) {
        alert("El monto de retiro excede a su limite de extraccion, intente otra vez");
    } else if ((retiroUsuario%100) != 0) {
        alert("El cajero solo entrega dinero en multiplos de 100, intente otra vez");
    } else {        
        var guardarSaldo = saldoCuenta;
        restaDinero(retiroUsuario);
        actualizarSaldoEnPantalla();
        alert("Has retirado:$"+retiroUsuario+"\n Saldo Anterior:$"+guardaSaldo+"\n Saldo Actual:$"+saldoCuenta);
    }
}   

function depositarDinero() {
    var depositoUsuario = parseInt(prompt("Ingrese la cantidad que desea depositar"));
    if (isNaN(depositoUsuario)){
        alert("la opcion ingresada es incorrecta");
    } else {
       var guardarSaldo = saldoCuenta;
        sumaDinero(depositoUsuario);
        actualizarSaldoEnPantalla();
        alert("Has depositado:$"+depositoUsuario+"\n Saldo Anterior:$"+guardarSaldo+"\n Saldo Actual:$"+saldoCuenta); 
    }
}

function auxiliarPagarServicio(servicio) {
            if(saldoCuenta<servicio) {
                alert("no hay suficiente saldo en tu cuenta para pagar este servicio");
            } else {
                var guardarSaldo = saldoCuenta;
                saldoCuenta -= servicio;
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio escogido\n Saldo anterior:$"+guardarSaldo+"\n Dinero descontado:$"+servicio+"\n Saldo actual:$"+saldoCuenta);
            }
}

function pagarServicio() {
    var opcionEscogida = prompt("Ingrese el numero que corresponda con el servicio que quiere pagar\n 1-Agua\n 2-Telefono\n 3-Luz \n 4-Internet");
    switch(opcionEscogida) {
        case "1":
            auxiliarPagarServicio(Agua);
            break;
        case "2":
            auxiliarPagarServicio(Telefono);
            break;
        case "3":
            auxiliarPagarServicio(Luz);
            break;
        case "4":
            auxiliarPagarServicio(Internet);
            break;
        default:
            alert("La opcion que ha escogido no corresponde a un servicio disponible para pagar, intente otra vez");
    }
}


function transferirDinero() {
    var montoTransferencia = parseInt(prompt("Ingrese el monto que desea transferir"));
    if (isNaN(montoTransferencia)) {
        alert("el monto ingresado es invalido, intente otra vez");
    } else {
        if(montoTransferencia>saldoCuenta) {
            alert("La cantidad que desea transferir supera su saldo restante, intente otra vez");
        } else {
            var compararCuenta = parseInt(prompt("Ingrese el numero de cuenta al que desea transferir"));
                switch(compararCuenta) {
                    case cuentaAmiga1:
                        saldoCuenta -= montoTransferencia;
                        actualizarSaldoEnPantalla();
                        alert("Se han transferido:$"+montoTransferencia+"\n Cuenta destino:"+cuentaAmiga1)
                        break;
                    case cuentaAmiga2:
                        saldoCuenta -= montoTransferencia;
                        actualizarSaldoEnPantalla();
                        alert("Se han transferido:$"+montoTransferencia+"\n Cuenta destino:"+cuentaAmiga2);
                        break;
                    default:
                        alert("la cuenta ingresada no pertenece a sus cuentas amigas y por lo tanto no puede transferirle dinero");
            }
        }
    }
}
function iniciarSesion() {
    var comparaCodigo = parseInt(prompt("Por favor, ingrese el codigo de su cuenta"));
    if (comparaCodigo == codigoSeguridad) {
        alert("Bienvenido/a "+nombreUsuario+" ya puedes comenzar a realizar operaciones");
    } else {
        saldoCuenta = 0;
        alert("Codigo incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad");
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}