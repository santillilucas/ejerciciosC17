/*Ejercicio integrador: Cajero
Escribe un programa en JavaScript que simule transacciones bancarias. El programa utiliza un array de objetos que representa cuentas de usuarios, cada una con un saldo y una clave asociada. El programa permite la impersonación de usuarios mediante la verificación de claves. La función “simulacionTransaccion” toma como parámetros el nombre de usuario, la clave correspondiente y el monto a extraer. Antes de realizar la transacción, verifica la existencia del usuario, la validez de la clave y si hay saldo suficiente en la cuenta. En caso de ser exitosa, actualiza el saldo y muestra un mensaje indicando el nuevo saldo; de lo contrario, informa la razón de la transacción fallida. */

var cuentasUsuarios = [
    {usuario: 'erica' , saldo: 10000 , clave: '1234'},
    {usuario: 'airam' , saldo: 9000 , clave: '12345'},
    {usuario: 'Mia' , saldo: 5000 , clave: '123456'},
]


function simulacionTransaccion(usuario, clave, montoAExtraer) {
    //buscar usuario
    function realizarTransaccion(){
        var cuentaUsuario = cuentasUsuarios.find(cuenta => cuenta.usuario === usuario)
//chequea si lo encontro o no
        if(!cuentaUsuario){
            console.log('Usuario no encontrado')
            return
        }
//chequea la clave
        if(clave !== cuentaUsuario.clave){
            console.log('Clave incorrecta')
            return
        }
        var resultado;

        if(montoAExtraer > cuentaUsuario.saldo){
            resultado = 'Transaccion invalida, saldo insuficiente'
        } else{
            cuentaUsuario.saldo -= montoAExtraer
            resultado = 'Transaccion exitosa, el saldo del usuario ' + cuentaUsuario.usuario + ' es : ' + cuentaUsuario.saldo
        }
        return resultado
    }
    
    console.log(realizarTransaccion())
}
simulacionTransaccion('erica', '1234', 5000)
simulacionTransaccion('airam', '12345', 900)









/* pueden escribir en un papel antes y luego llevarlo a código, ayudarte a comprender mejor el problema que estás resolviendo y a estructurar tu código de manera más eficiente. */