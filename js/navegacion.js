$(document).ready(function(){
   
/*Ingreso*/
function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
  
}



 /* Transiciones del menu */

  $("#funciona").click(function(){
    $('html, body').animate({

      scrollTop: $("#s1").offset().top-100
  }, 1000);

  }); 
  
 
  $("#cursos").click(function(){
    $('html, body').animate({

      scrollTop: $("#s2").offset().top-80
  }, 1000);

  }); 
  
  
  $("#seguir").click(function(){
    $('html, body').animate({

      scrollTop: $("#contactar").offset().top-100
  }, 1000);

  }); 
  
  
  //Control del codigo

     $("nav>#ingresa").click(function(){

 $("body>#overlay").css("display", "grid");
  }); 

   
  /* Creación de icono responsive */
    var c = document.getElementById("signos");

    /* Linea  1 */
    var L1 = c.getContext("2d");
    L1.lineWidth = 4;
    L1.moveTo(10,10);
    L1.lineTo(50,10);
    L1.stroke();
  
    /* Linea  2 */
    var L2 = c.getContext("2d");
    L2.lineWidth = 4;
    L2.moveTo(10,22);
    L2.lineTo(50,22);
    L2.stroke();

    /* Linea  3 */
    var L1 = c.getContext("2d");
    L2.lineWidth = 4;
    L2.moveTo(10,34);
    L2.lineTo(50,34);
    L2.stroke();
    var estado=0;

    /*-------Función cuando se hace click en el menu responsive -----*/

    $("#signos").click(function(){
       
        /* Si el boton no esta oprimo el estado es 1 */
        
        if(estado==0){
        /* ---Elimamos los objetos y se anima para que se pueda ver el contenido---*/
        $("#logotipo").remove();
        $("#signos").css("margin-left", "0px");
        $("#signos").css("margin-top", "5px");
        $("#signos").css("border", "0px");
        $("#IO").remove();
        $("#ingresa").remove();
        $("nav").animate({width:'70px',height:'60px'});
        $("nav").css("border-bottom-right-radius", "35px");
        estado=1;
        /*Se cambia el estado del boton*/
      }
        else{
        /*Crear nuevamente los elementos y se cambia el estado del boton.*/
        $("nav").css("display", "flex");
        $("nav").css("flex-direction", "column");
        $("nav").css("justify-content", "flex-start");
        $("nav").animate({width:'80%',height:'100%'});
        $("nav").css("margin", "0");
        $("nav").css("position", "fixed");
  
        // acomodar boton responsive
        $("#signos").before("<div id ='logo'><img id='logotipo' src='imagenes/logotipo.png' width='150px' height='50px'>");
        $("#signos").css("display", "flex");
        $("#signos").css("color", "white");
        $("#signos").css("border","2px solid white");
        $("#signos").css("margin-top",'5px');
        $("#signos").css("margin-left",'50px');
        $("#signos").css("margin-bottom",'15px');
        $("#logo").after("<div id='IO'></div>");

         //Hacer visible los elementos 

      
         $("nav>#IO").css("display", "flex");
         $("nav>#IO").css("flex-direction", "column");
         $("nav>#IO").css("font", "400 18px Lato, sans-serif");
         $("#IO").append("<a id='crr'> CURSOS </a>");
         $("#IO").append("<a id='fr'> REGISTRO </a>");
         $("#IO").append("<a  href='https://sumatematematicas.com/moodle/'> INGRESA </a>");
         $("#IO").append('<a  href="https://www.facebook.com/S%C3%BAmate-100707368251290/" id="facebook" class="fa fa-facebook"></a>');
         $("#IO").append('<a href="https://co.pinterest.com/sumatematematicas/boards/" id="pinteres" class="fa fa-pinterest"></a>');
         $("#IO").append('<a href="https://api.whatsapp.com/send?phone=573115070336" id="whatsapp" class="fa fa-whatsapp"></a> ');
         $("#IO").after("<div id='ingresa'> <a  href='https://sumatematematicas.com/moodle/'> INGRESA </a></div>");
       


       
        estado=0;

        }


              /*-------Función de boton de  cursos -----*/

              $("#crr").click(function(){
        // Generar la división de los cursos //

                      $("#usalo").css("display", "none");
                      $("#contacto").css("display","none");
                    
                      $("#clr").css("display","flex");
                      $("#clr").css("flex-direction","column");
                      $("#clr").css("border-radius","15px");
                      $("#clr").css("border-width","5px");
                      $("#clr").css("border-style","solid");
                      $("#clr").css("margin-top","18%");
                      $("#clr").css("margin-bottom","6%");
                      $("#clr").css("margin-left","4%");
                      $("#clr").css("margin-right","4%");
                      $("#clr").css("padding-right","5%");
                      $("#clr").css("padding-left","10%");
                      $("#clr").css("padding-bottom","8px");
                      $("#clr").css("background-color","#F9F9F9");
                      $("#clr").css("border-color","#9D79B1");
                     
              }); 

         
              /*-------Función de boton de  registro -----*/

              $("#fr").click(function(){
               
              $("#usalo").css("display", "none");
              $("#clr").css("display", "none");
              $("#contacto").css("display","grid");
              $("#contacto").css("border-radius","15px");
              $("#contacto").css("border-width","5px");
              $("#contacto").css("border-style","solid");
              $("#contacto").css("margin-top","18%");
              $("#contacto").css("margin-bottom","6%");
              $("#contacto").css("margin-left","4%");
              $("#contacto").css("margin-right","4%");
              $("#contacto").css("padding-right","5%");
              $("#contacto").css("padding-left","10%");

              


              }); 




      }); 






});
