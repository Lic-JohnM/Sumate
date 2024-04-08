$(document).ready(function(){
   

    /*arreglar el select */
    $("#cur").click(function(){ 
        $("#temp").css("display","none");
    });

    /* Botones para responsive*/
   
    $("#cr").click(function(){ 

        // Generar la división de los cursos //
        $("#usalo").css("display", "none");

        $("header").append("<div id='clr'></div>");

        // Creación del contenedor
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
        $(".lt").css("color","#9D79B1");


      });
   
   
      $("#rg").click(function(){ 

        $("#usalo").css("display", "none");
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
     
 

  //Codigo para volver a la página principal
   
   document.getElementById("#volver").addEventListener('click', function() {
    $("Body>#overlay").css("display", "none");
   });


   
   
    /* Oprimir boton de enviar*/

    $("#contact-submit").click(function(){

        /* tomar los datos de los inputs*/
       $nombre= $("#nombre").val();
       $apellido= $("#apellido").val();
       $telefono=$("#telefono").val();
       $email=$("#email").val();
    
    /* Validar formulario (empleo de la libreria sweet alert)*/

        if ($nombre.length==0 || $apellido.length==0 || telefono.length ==0 || email.length==0){

            Swal.fire({
            icon: 'error',
            title: '¡Te faltan llenar datos¡',
            });
            }

        else {
         Swal.fire({
         icon: 'success',
         title: '¡Tus datos se han enviado correctamente¡',
         text: 'Nos contactaremos lo más rapido posible',
         timer: 4000       
            });

            $.post("php/informacion.php",
            {
            name: $nombre,
            apellido:$apellido,
            telefono:$telefono,
            email: $email
            },
            function(data,status){
            console.log("Data: " + data + "\nStatus: " + status);
            });  
       };

    });


  
 });
