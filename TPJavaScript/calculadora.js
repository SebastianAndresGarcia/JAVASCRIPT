function calculo(){
    var cuenta=document.getElementById("resultado").value;
    console.log(cuenta);
    var operador="";
    var asignado=false;
    var num1="",num2="";
    for (let i = 0; i < cuenta.length; i++) {
                
        if(cuenta.charAt(i)=='+'){
            operador=cuenta.charAt(i);
            asignado=true;
        }else if(cuenta.charAt(i)=='-'){
            operador=cuenta.charAt(i);
            asignado=true;
        }
        else if(cuenta.charAt(i)=='*'){
            operador=cuenta.charAt(i);
            asignado=true;
        }
        else if(cuenta.charAt(i)=='/'){
            operador=cuenta.charAt(i);
            asignado=true;
        }else if(asignado==false){
            num1=num1+cuenta.charAt(i);
        }else if(asignado){
            num2=num2+cuenta.charAt(i);
        }
    }
    console.log("este es el numero uno: "+num1);
    console.log();
    console.log("este es el numero dos "+num2);
    console.log("esta es la operacion: "+operador);
    var result=(aplicarOperacion(operador, num1,num2));
    console.log(result);
    //document.write(result);
    //console.log(result);
    //document.resultado.resultado.value = result;
    //document.getElementById("resultado").setAttribute("resultado",result);
    document.getElementById("resultado").value= (result);
    
}

function aplicarOperacion(operador, num1, num2) {
    switch (operador) {
        case "+":
            return (parseInt(num1,10) + parseInt(num2,10));
        case "-":
            return (parseInt(num1,10) - parseInt(num2,10));
        case "*":
            return (parseInt(num1,10) * parseInt(num2,10));
        case "/":
            return (parseInt(num1,10) / parseInt(num2,10));
        default:
            break;
    }
    return 0;
}