console.log("El documento se cargo");
const url ='http://127.0.0.1:8000/mensajes/mismensajes/';


data=[{"id": 16, "con": "@lore", "mensaje": "chauuu", "Fecha": "2022-11-17T23:53:00.309Z"}, 
    {"id": 18, "con": "@juan", "mensaje": "Hola amigo.. Que tal?", "Fecha": "2022-11-17T23:49:57.348Z"}, 
    {"id": 19, "con": "@lyajaz", "mensaje": "Hola hermano... como andas?", "Fecha": "2022-11-17T23:51:49.570Z"}];

const table = document.getElementById("alicuotas");

data.forEach((e,i) => {    //< ---  recorremos data

  let tr = document.createElement("tr"); //< ---  creamos una fila
  
  let td = document.createElement("td"); //< ---  Hacemos columna index dentro de la fila
  td.classList.add("index");
  td.innerHTML = i;
  tr.appendChild(td); //< --- Agregamos la columna en la fila

  for (p in e) {  //< ---  recorremos cada propiedad de cada elemento

    let td = document.createElement("td"); //< ---  Hacemos columna dentro de la fila
    td.classList.add(p);//<-- le podemos agregar a toda la columna la misma clase
    td.innerHTML = e[p]; 

    tr.appendChild(td); //< --- Agregamos la columna en la fila

  }

  table.appendChild(tr); //< --- Agregamos la fila a la tabla

});

const myIp='127.0.0.1:8000';
const endPoint='http://127.0.0.1:8000/mensajes/mismensajes/'
console.log(endPoint);
fetch(endPoint);

fetch(endPoint)
.then(Request => Request.text())
.then(printData => console.log( printData));



