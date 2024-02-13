
let inicioEncriptar = 0;

function Minone() {
  // Obtén el valor del textarea1
  // Obtén una referencia al textarea1 y a los elementos que deseas ocultar
var textarea1 = document.getElementById('mensajeAreaUno');
var elementosOcultos = document.getElementsByClassName("non");

  // Agrega un evento input al textarea1
  textarea1.addEventListener('input', function() {
      // Verifica si el textarea1 no está vacío
      if (textarea1.value.trim() !== '') {
          // Si no está vacío, oculta los elementos
          for (var i = 0; i < elementosOcultos.length; i++) {
              elementosOcultos[i].style.display = "none";
          }
      } else {
          // Si está vacío, muestra los elementos
          for (var i = 0; i < elementosOcultos.length; i++) {
              elementosOcultos[i].style.display = "block";
          }
      }
  });

}
function copiar(){
    //seleccionamos el textarea que queremos copiar
    var textoACopiar = document.getElementById('mensajeAreaDos')
      //seleccionamos el texto que esta dentro de el
      textoACopiar.select();
        //Copiamos el texto al portapapeles
        document.execCommand('copy');
          //Dejamos de seleccionar el textarea
          textoACopiar.setSelectionRange(0,0);

        //mostramos una msjtempo para especificarle al usuario que se ha realizado la accion
      mostrarMensajeTemporal();
    limpiarCopia();
}
function mostrarMensajeTemporal() {
  //decaramos y hacemos referencia al elemento
        var mensaje = document.getElementById('mensajeTemporal');
          // Muestra el mensaje
          mensaje.style.display = 'block';
            // Oculta el mensaje después de 5 segundos
            setTimeout(function() {
              mensaje.style.display = 'none';
            }, 7000); // 5000 milisegundos = 5 segundos
  }



  function cambiarVocales(vocal) {
      var resultado = '';
      for (var i = 0; i < vocal.length; i++) {
        var letra = vocal.charAt(i);
        // Verifica si la letra es una vocal
        if ('aeiou'.includes(letra.toLowerCase())) {
          // Modifica la vocal según el requerimiento
          switch (letra.toLowerCase()) {
            case 'a':
              resultado += 'ai';
              break;
            case 'e':
              resultado += 'enter';
              break;
            case 'i':
              resultado += 'imes';
              break;
            case 'o':
              resultado += 'ober';
              break;
            case 'u':
              resultado += 'ufat';
              break;
            default:
              resultado += letra;
          }
        } else {
          // Si no es una vocal, conserva la letra original
          resultado += letra;
        }
      }
      return resultado;
  }
  function encriptar() {
          
      
            //declaramos dos variables, que den referencia a nuestros dos textarea
            var textarea1 = document.getElementById('mensajeAreaUno');
            var textarea2 = document.getElementById('mensajeAreaDos');


                
                    //obtenemos el valor y lo limpia
                    var limpiarTexto = textarea1.value.trim();

                    //hacemos la funcion de modificar las vocales
                    var modificarTexto = cambiarVocales(limpiarTexto);

                    //agregamos la palabra con las vocales cambiadas al textarea2
                    textarea2.value += modificarTexto;
                    //removemos el deshabilitado del boton
                    document.getElementById('des').removeAttribute('disabled');
                    //iniciamos el conteo de inicios
                    inicioEncriptar++;

                    
                //limpiamos el primer textarea
                limpiar();
            // activamos el none de la img y de los p
            Minone(); 
  }
  function inicializarPagina() {
          // Espera a que la página esté completamente cargada
          document.addEventListener('DOMContentLoaded', function () {
            // Asigna el evento al botón una vez que la página se haya cargado
            var boton = document.getElementById('enc');
            var copiarBoton = document.getElementById('copiar');
            var botonDesencriptar = document.getElementById('des');
            var textoEncriptado = document.getElementById('mensajeAreaDos');
            
            //boton encriptar iniciamos el evento click
            boton.addEventListener('click', function (){
              //encriptamos el texto, mandando a llamar a la funcion
              encriptar();
                //deshabilitamos el textarea despues de encriptar
                deshabilitarTexto();
                  //este inicio se da una vez que encriptamos un msj, al llegar a 1 habilitamos el boton de desencriptar si no se cumple no lo hace
                  inicioEncriptar=1;
            
          });
              //boton copiar inicio de evento click
              copiarBoton.addEventListener('click', function(){
                //removemos el deshabilitado del boton desencriptar
                botonDesencriptar.removeAttribute('disabled');
                  //copiamos el texto
                  copiar();
                    //habilitamos el textarea despues de pulsar el boton copiar
                    habilitarTexto();
                
              });
              //boton desencriptar inicio de evento click
              botonDesencriptar.addEventListener('click', function(){
                //desencriptamos el texto, mandando a llamar a la funcion
                desencriptar();
                  //deshabilitamos el textarea despues de desencriptar
                  deshabilitarTexto();
                  });
                  //deshabilitar el boton sin detalles antes o depues de encriptar, inicio de evento input
                  textoEncriptado.addEventListener('input', function(){
                    //deshabilitamos el boton desencriptar
                    deshabilitarDesencriptar();
                  });
         });
  }



    function habilitarTexto(){
      //declaramos y mandamos a llamar al elemento
        var textarea1 = document.getElementById('mensajeAreaUno');
          //deshabilitamos/ removemos el atributo en el textarea1
          textarea1.removeAttribute('disabled');
    }
    function deshabilitarTexto(){
      //creamos una variable, hacemos referencia al id del primer textarea
      var textarea1 = document.getElementById('mensajeAreaUno');
        //aqui activamos el atrivuto de deshabilitar el textarea1
        textarea1.setAttribute('disabled', 'true');
    }


   
      function cambiarPalabras(palabra) {
        // Reemplaza 'ober' con 'o' y 'ai' con 'a'
        var resultado = palabra
        //metodo para las cadenas de texto/ multiples reemplazos
          .replace(/ober/g, 'o')
          .replace(/ai/g, 'a')
          .replace(/enter/g,'e')
          .replace(/imes/g, 'i')
          .replace(/ufat/g,'u');
      
        return resultado;
      }
      function desencriptar(){
          //declaramos dos variables, que den referencia a nuestros dos textarea
          var textarea1 = document.getElementById('mensajeAreaUno');
            var textarea2 = document.getElementById('mensajeAreaDos');
                  //obtenemos el valor y lo limpia
                  var limpiarTexto2 = textarea1.value.trim();
                  //hacemos la funcion de modificar las vocales
                  var modificarTexto2 = cambiarPalabras(limpiarTexto2);
                  //agregamos la palabra con las vocales cambiadas al textarea2
                  textarea2.value += modificarTexto2;
                  //deshabilitamos la funcion
                  deshabilitarDesencriptar();
              //limpiamos el primer textarea
              limpiar();
          // activamos el none de la img y de los p
          Minone();  
          
      }
      function deshabilitarDesencriptar() {
        //delcaramos dos variables y mandamos a llamar a los elementos
      var botonDesencriptar = document.getElementById('des');
        var textoEncriptado = document.getElementById('mensajeAreaDos');
            //si el textarea esta vacio
          if(textoEncriptado.value.trim() !== ''){
              //removemos el atributo para el boton se active
              botonDesencriptar.removeAttribute('disabled');
              //si no esta vacio el textarea
            } else{
          //habilitamos el atributo
          botonDesencriptar.setAttribute('disabled', 'true');
        }
      }



        function limpiar() {
          // Después de la acción, limpia el contenido del textarea1
          document.getElementById('mensajeAreaUno').value = '';
        }
        function limpiarCopia() {
          // Después de la acción, limpia el contenido del textarea2
          document.getElementById('mensajeAreaDos').value = '';
        }


  inicializarPagina();
  deshabilitarDesencriptar();
  Minone();
  