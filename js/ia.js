$(document).ready(function(){

$Contador=0;
  
  var ejercicio = {primero:{posicion:"1",operacion:"3 + 5",r1:"8",r2:"7",r3:"15",r4:"65"},
  segundo:{posicion:"2",operacion:"8 + 9",r1:"10",r2:"10",r3:"35",r4:"15"},
  tercero:{posicion:"3",operacion:"7 + 2",r1:"15",r2:"27",r3:"15",r4:"15"},
  cuarto:{posicion:"4",operacion:"1 + 7",r1:"28",r2:"7",r3:"45",r4:"55"},
  quinto:{posicion:"5",operacion:"8 + 9",r1:"10",r2:"10",r3:"35",r4:"15"},
  sexto:{posicion:"6",operacion:"4 + 3",r1:"15",r2:"27",r3:"15",r4:"15"},
  septimo:{posicion:"7",operacion:"1 + 7",r1:"28",r2:"7",r3:"45",r4:"55"},
  octavo:{posicion:"8",operacion:"8 + 9",r1:"10",r2:"10",r3:"35",r4:"15"},
  noveno:{posicion:"9",operacion:"4 + 9",r1:"15",r2:"27",r3:"15",r4:"15"},
  diez:{posicion:"10",operacion:"1 + 7",r1:"28",r2:"7",r3:"45",r4:"55"}
  };

  var resultados = []
 
 $("body>#IIA>#proceso>#respuestas>#primera").click(function(){
       
        //guardar respuesta de los usuarios
        resultados[$Contador]=1;
        //Sumar el ejercicio
        $Contador=$Contador+1;
        //mostrar en los elementos
        mostrar($Contador)

     }); 

  $("body>#IIA>#proceso>#respuestas>#segunda").click(function(){

    resultados[$Contador]=2;
    $Contador=$Contador+1;
     mostrar($Contador)

  }); 
  
   $("body>#IIA>#proceso>#respuestas>#tercera").click(function(){
     
    resultados[$Contador]=3;
    $Contador=$Contador+1;
    mostrar($Contador)

 }); 

 $("body>#IIA>#proceso>#respuestas>#cuarta").click(function(){
   
  resultados[$Contador]=4;
  $Contador=$Contador+1;
  mostrar($Contador)

}); 
      

    
 function mostrar($Contador){


              if ($Contador==1){$("body>#IIA>#avance>#diez").css("background-color", "rgb(0 , 158, 226)");
                  
              $("body>#IIA>#proceso>#problema>h1").text(ejercicio.primero.operacion);
              $("body>#IIA>#proceso>#respuestas>#primera").text(ejercicio.primero.r1);
              $("body>#IIA>#proceso>#respuestas>#segunda").text(ejercicio.primero.r2);
              $("body>#IIA>#proceso>#respuestas>#tercera").text(ejercicio.primero.r3);
              $("body>#IIA>#proceso>#respuestas>#cuarta").text(ejercicio.primero.r4); }
            
              if ($Contador==2){$("body>#IIA>#avance>#nueve").css("background-color", "rgb(0 , 158, 226)");

              $("body>#IIA>#proceso>#problema>h1").text(ejercicio.segundo.operacion);
              $("body>#IIA>#proceso>#respuestas>#primera").text(ejercicio.segundo.r1);
              $("body>#IIA>#proceso>#respuestas>#segunda").text(ejercicio.segundo.r2);
              $("body>#IIA>#proceso>#respuestas>#tercera").text(ejercicio.segundo.r3);
              $("body>#IIA>#proceso>#respuestas>#cuarta").text(ejercicio.segundo.r4); }
            
              if ($Contador==3){$("body>#IIA>#avance>#ocho").css("background-color", "rgb(0 , 158, 226)");

              $("body>#IIA>#proceso>#problema>h1").text(ejercicio.tercero.operacion);
              $("body>#IIA>#proceso>#respuestas>#primera").text(ejercicio.tercero.r1);
              $("body>#IIA>#proceso>#respuestas>#segunda").text(ejercicio.tercero.r2);
              $("body>#IIA>#proceso>#respuestas>#tercera").text(ejercicio.tercero.r3);
              $("body>#IIA>#proceso>#respuestas>#cuarta").text(ejercicio.tercero.r4); }

              if ($Contador==4){$("body>#IIA>#avance>#siete").css("background-color", "rgb(0 , 158, 226)");

              $("body>#IIA>#proceso>#problema>h1").text(ejercicio.cuarto.operacion);
              $("body>#IIA>#proceso>#respuestas>#primera").text(ejercicio.cuarto.r1);
              $("body>#IIA>#proceso>#respuestas>#segunda").text(ejercicio.cuarto.r2);
              $("body>#IIA>#proceso>#respuestas>#tercera").text(ejercicio.cuarto.r3);
              $("body>#IIA>#proceso>#respuestas>#cuarta").text(ejercicio.cuarto.r4); }    

              if ($Contador==5){$("body>#IIA>#avance>#seis").css("background-color", "rgb(0 , 158, 226)");

              $("body>#IIA>#proceso>#problema>h1").text(ejercicio.sexto.operacion);
              $("body>#IIA>#proceso>#respuestas>#primera").text(ejercicio.quinto.r1);
              $("body>#IIA>#proceso>#respuestas>#segunda").text(ejercicio.quinto.r2);
              $("body>#IIA>#proceso>#respuestas>#tercera").text(ejercicio.quinto.r3);
              $("body>#IIA>#proceso>#respuestas>#cuarta").text(ejercicio.quinto.r4); }  


              if ($Contador==6){$("body>#IIA>#avance>#cinco").css("background-color", "rgb(0 , 158, 226)");
              $("body>#IIA>#proceso>#problema>h1").text(ejercicio.sexto.operacion);
              $("body>#IIA>#proceso>#respuestas>#primera").text(ejercicio.sexto.r1);
              $("body>#IIA>#proceso>#respuestas>#segunda").text(ejercicio.sexto.r2);
              $("body>#IIA>#proceso>#respuestas>#tercera").text(ejercicio.sexto.r3);
              $("body>#IIA>#proceso>#respuestas>#cuarta").text(ejercicio.sexto.r4); }

              if ($Contador==7){$("body>#IIA>#avance>#cuatro").css("background-color", "rgb(0 , 158, 226)");
              $("body>#IIA>#proceso>#problema>h1").text(ejercicio.septimo.operacion);
              $("body>#IIA>#proceso>#respuestas>#primera").text(ejercicio.septimo.r1);
              $("body>#IIA>#proceso>#respuestas>#segunda").text(ejercicio.septimo.r2);
              $("body>#IIA>#proceso>#respuestas>#tercera").text(ejercicio.septimo.r3);
              $("body>#IIA>#proceso>#respuestas>#cuarta").text(ejercicio.septimo.r4); }

              if ($Contador==8){$("body>#IIA>#avance>#tres").css("background-color", "rgb(0 , 158, 226)");
              $("body>#IIA>#proceso>#problema>h1").text(ejercicio.octavo.operacion);
              $("body>#IIA>#proceso>#respuestas>#primera").text(ejercicio.octavo.r1);
              $("body>#IIA>#proceso>#respuestas>#segunda").text(ejercicio.octavo.r2);
              $("body>#IIA>#proceso>#respuestas>#tercera").text(ejercicio.octavo.r3);
              $("body>#IIA>#proceso>#respuestas>#cuarta").text(ejercicio.octavo.r4); }



              if ($Contador==9){$("body>#IIA>#avance>#dos").css("background-color", "rgb(0 , 158, 226)");
              $("body>#IIA>#proceso>#problema>h1").text(ejercicio.noveno.operacion);
              $("body>#IIA>#proceso>#respuestas>#primera").text(ejercicio.noveno.r1);
              $("body>#IIA>#proceso>#respuestas>#segunda").text(ejercicio.noveno.r2);
              $("body>#IIA>#proceso>#respuestas>#tercera").text(ejercicio.noveno.r3);
              $("body>#IIA>#proceso>#respuestas>#cuarta").text(ejercicio.noveno.r4); }


              if ($Contador==10){$("body>#IIA>#avance>#uno").css("background-color", "rgb(0 , 158, 226)");
              $("body>#IIA>#proceso>#problema>h1").text(ejercicio.diez.operacion);
              $("body>#IIA>#proceso>#respuestas>#primera").text(ejercicio.diez.r1);
              $("body>#IIA>#proceso>#respuestas>#segunda").text(ejercicio.diez.r2);
              $("body>#IIA>#proceso>#respuestas>#tercera").text(ejercicio.diez.r3);
              $("body>#IIA>#proceso>#respuestas>#cuarta").text(ejercicio.diez.r4); 
              // Mostrar los resultados.
              console.log(resultados);
              // Eliminar interfaz anterior
              $("body>#IIA>#proceso").remove();
              // Crear nueva interfaz - mostrar resultados - analizar los anteriores.
              $("body>#IIA>#avance").after("<div id='resultados'><div id='tr'><h1> Resultados </h1></div><div id='pr'><h1> Progreso </h1></div></div>");
              $("Body>#IIA>#resultados").css("background-color", "rgb(237 , 221, 252)");
              $("Body>#IIA>#resultados").css("display", "grid");
              $("Body>#IIA>#resultados").css("grid-template-columns", "50% 50%");
              $("Body>#IIA>#resultados").css("grid-template-rows", "auto");
              // tr: Tus resultados --> Mostrar los resultados de los ejercicios
              $("Body>#IIA>#resultados>#tr").css("background-color", "white");
              $("Body>#IIA>#resultados>#tr").css("border-radius", "20px");
              $("Body>#IIA>#resultados>#tr").css("margin-top", "6%");
              $("Body>#IIA>#resultados>#tr").css("margin-left", "5%");
              $("Body>#IIA>#resultados>#tr").css("margin-bottom", "5%");
              $("Body>#IIA>#resultados>#tr").css("margin-right", "5%");        
              $("Body>#IIA>#resultados>#tr").css("padding-top", "6%");
              $("Body>#IIA>#resultados>#tr").css("padding-left", "8%");                            
               //Crear tabla de resultados:
               $("Body>#IIA>#resultados>#tr>h1").after("<br><table><tr id='encabezado'><td><h3>  Operación  </h3></td><td><h3>  Tu respuesta  </h3></td><td><h3>  Aciertos </h3></td></tr><tr><td><h2 id='ej1'></h2></td><td><h2 id='sol1'></h2></td><td><h3 id='A1'></h3></td></tr><tr><td><h2 id='ej2'></td><td><h2 id='sol2'></td><td><h3 id='A2'></h3></td></tr><tr><td><h2 id='ej3'></td><td><h2 id='sol3'></td><td><h3 id='A3'></h3></td></tr><tr><td><h2 id='ej4'></td><td><h2 id='sol4'></td><td><h3 id='A4'></h3></td></tr><tr><td><h2 id='ej5'></td><td><h2 id='sol5'></td><td><h3 id='A5'></h3></td></tr><tr><td><h2 id='ej6'></td><td><h2 id='sol6'></td><td><h3 id='A6'></h3></td></tr><tr><td><h2 id='ej7'></td><td><h2 id='sol7'></td><td><h3 id='A7'></h3></td></tr><tr><td><h2 id='ej8'></td><td><h2 id='sol8'></td><td><h3 id='A8'></h3></td></tr><tr><td><h2 id='ej9'></td><td><h2 id='sol9'></td><td><h3 id='A9'></h3></td></tr><tr><td><h2 id='ej10'></td><td><h2 id='sol10'></td><td><h3 id='A10'></h3></td></tr></table>");         
               //Primer resultado
               $("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#ej1").text(ejercicio.primero.operacion);
               if(resultados[0]==1){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol1").text(ejercicio.primero.r1);}
               if(resultados[0]==2){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol1").text(ejercicio.primero.r2);}
               if(resultados[0]==3){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol1").text(ejercicio.primero.r3);}
               if(resultados[0]==4){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol1").text(ejercicio.primero.r4);}
               //Segundo resultado
               $("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#ej2").text(ejercicio.segundo.operacion);
               if(resultados[0]==1){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol2").text(ejercicio.segundo.r1);}
               if(resultados[0]==2){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol2").text(ejercicio.segundo.r2);}
               if(resultados[0]==3){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol2").text(ejercicio.segundo.r3);}
               if(resultados[0]==4){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol2").text(ejercicio.segundo.r4);}         
               //Tercer resultado
               $("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#ej3").text(ejercicio.tercero.operacion);
               if(resultados[0]==1){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol3").text(ejercicio.tercero.r1);}
               if(resultados[0]==2){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol3").text(ejercicio.tercero.r2);}
               if(resultados[0]==3){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol3").text(ejercicio.tercero.r3);}
               if(resultados[0]==4){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol3").text(ejercicio.tercero.r4);}  
               //Cuarto resultado
               $("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#ej4").text(ejercicio.cuarto.operacion);
               if(resultados[0]==1){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol4").text(ejercicio.cuarto.r1);}
               if(resultados[0]==2){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol4").text(ejercicio.cuarto.r2);}
               if(resultados[0]==3){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol4").text(ejercicio.cuarto.r3);}
               if(resultados[0]==4){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol4").text(ejercicio.cuarto.r4);} 
               //Quinto resultado
               $("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#ej5").text(ejercicio.quinto.operacion);
               if(resultados[0]==1){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol5").text(ejercicio.quinto.r1);}
               if(resultados[0]==2){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol5").text(ejercicio.quinto.r2);}
               if(resultados[0]==3){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol5").text(ejercicio.quinto.r3);}
               if(resultados[0]==4){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol5").text(ejercicio.quinto.r4);} 
               //Sexto resultado
               $("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#ej6").text(ejercicio.sexto.operacion);
               if(resultados[0]==1){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol6").text(ejercicio.sexto.r1);}
               if(resultados[0]==2){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol6").text(ejercicio.sexto.r2);}
               if(resultados[0]==3){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol6").text(ejercicio.sexto.r3);}
               if(resultados[0]==4){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol6").text(ejercicio.sexto.r4);} 
               //Séptimo resultado
               $("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#ej7").text(ejercicio.septimo.operacion);
               if(resultados[0]==1){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol7").text(ejercicio.septimo.r1);}
               if(resultados[0]==2){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol7").text(ejercicio.septimo.r2);}
               if(resultados[0]==3){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol7").text(ejercicio.septimo.r3);}
               if(resultados[0]==4){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol7").text(ejercicio.septimo.r4);} 
               //Octavo resultado
               $("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#ej8").text(ejercicio.octavo.operacion);
               if(resultados[0]==1){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol8").text(ejercicio.octavo.r1);}
               if(resultados[0]==2){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol8").text(ejercicio.octavo.r2);}
               if(resultados[0]==3){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol8").text(ejercicio.octavo.r3);}
               if(resultados[0]==4){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol8").text(ejercicio.octavo.r4);} 
               //Noveno resultado
               $("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#ej9").text(ejercicio.noveno.operacion);
               if(resultados[0]==1){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol9").text(ejercicio.noveno.r1);}
               if(resultados[0]==2){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol9").text(ejercicio.noveno.r2);}
               if(resultados[0]==3){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol9").text(ejercicio.noveno.r3);}
               if(resultados[0]==4){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol9").text(ejercicio.noveno.r4);} 
               //Décimo resultado
               $("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#ej10").text(ejercicio.diez.operacion);
               if(resultados[0]==1){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol10").text(ejercicio.diez.r1);}
               if(resultados[0]==2){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol10").text(ejercicio.diez.r2);}
               if(resultados[0]==3){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol10").text(ejercicio.diez.r3);}
               if(resultados[0]==4){$("Body>#IIA>#resultados>#tr>table>tbody>tr>td>#sol10").text(ejercicio.diez.r4);}     
               
               
               $("Body>#IIA>#resultados>#tr>table").after("<br><h3>Nunca se equivoca quien <u>aprende</u> de sus caidas</h3>");


















            } 
 }
 
 
});


