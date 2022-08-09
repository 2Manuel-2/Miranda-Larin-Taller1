
var min=1, max=100, cantidad=1;

var ingresados;
var i=0, prueba;
var contenido;
var esOno=0;


function init(){
    //Declaración del arreglo o matriz de forma literal que contendrá los números aleatorios
    
    ingresados = [];
    //Declaración y asignación de los límites entre los cuales estarán comprendidos los números  aleatorios
    
    

    prueba = aleatorio(min, max, cantidad);
       //    alert("hola "+prueba);

      do{
        do{
            ingresados[i] = prompt("Adivine el numero:" , "");
            if(isNaN(ingresados[i])){
                esOno=1;
            }else{
                esOno=0;
            }
        }while(esOno!=0);

        if(ingresados[i] < prueba){
            alert("El numero que ingreso es menor a el numero aleatorio, pruebe con uno mas alto");
        }else if(ingresados[i] > prueba){
            alert("El numero que ingreso es mayor a el numero aleatorio, pruebe con uno mas bajo")
        }
        i++;
      }while(ingresados[i-1]!=prueba);

    

      if((i) == 1){
        contenido += "<h1 class=\"intentos\">¡SOBRESALIENTE! Lo ha adivinado en el primer intento</h1>\n";
    }else if((i) < 4){
        contenido += "<h1 class=\"intentos\">¡NOTABLE! Lo ha adivinado antes de los 4 intentos</h1>\n";
    }else if((i) < 11){
        contenido += "<h1 class=\"intentos\">¡MUY BIEN! Lo ha adivinado antes de los 11 intentos</h1>\n";
    }else if((i) < 25){
        contenido += "<h1 class=\"intentos\">Regular! Lo ha adivinado antes de los 25 intentos</h1>\n";
    }else if((i) >= 25){
        contenido += "<h1 class=\"intentos\">¡PESIMO! Lo ha adivinado despues de los 25 intentos</h1>\n";
    }
    contenido += "<h1 class=\"ingresos\">Los Números que ha ingresado son:</h1>\n";
    contenido += "<table class=\"table\" >\n\t<tbody>\n\t\t";
    
    //Lazo que muestra los elementos del arreglo que han sido ordenados con el método de la burbuja
    for(j=0; j<i; j++) {
        contenido += "\t\t\t<tr><td class=\"Off\">" + (j+1) + " -) " + ingresados[j] + "</td></TR>";
    }
    contenido += "\t\t\n\t</tbody>\n</table>\n";


    listanumeros.innerHTML = contenido;

    }

    function aleatorio(minimo, maximo, cantidad){
        //Generando un número aleatorio teniendo el cuidado que esté comprendido entre los valores mínimo y máximo
        var numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
       
        return numero;

    }
    window.onload = init;