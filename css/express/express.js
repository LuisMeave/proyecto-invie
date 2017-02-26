var express = require ("express");
var aplicacion = express();

aplicacion.get("/", inicio);
aplication.get("/cursos", cursos);

function inicio(peticion, resultado)
{
	resultado.send("Este es el <strong> home</strong>");

}
function cursos (peticion, resultado) 
{
	resultado.send("estos  son los  <strong> cursos</strong>")	// body...
}

aplicacion.listen(8989);