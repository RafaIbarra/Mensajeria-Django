function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}

const url = 'http://127.0.0.1:8000/mensajes/mismensajes/';
const cards = document.getElementById("tarjeta");

// fetch(url)
// .then((resp) => resp.json())
// .then(function(data) {
//   let authors = data;
 
//   return authors.forEach((e) => {    //< ---  recorremos data
//     console.log('Con: ', e.mesajes.con);
//     console.log('Mensaje mensaje: ', e.mesajes.mensaje);
//     let td = document.createElement("li");
//     td.classList.add("list-group-item");
//     td.innerHTML = e.mesajes.con + ' : '
//      + e.mesajes.mensaje;
//     cards.appendChild(td);
//      //< --- Agregamos la fila a la tabla
  
//   });


// })

import {cargadato} from './chats.js'
const div1 = document.getElementById("conversaciones");
const div2 = document.getElementById("Chat");


fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data;
 
  return authors.forEach((e) => {    //< ---  recorremos data
    
    let td = document.createElement("div");
    let us = document.createElement("div");
    us.setAttribute("id", e.mesajes.con);
    let me = document.createElement("div");
    let sep= document.createElement("hr");


    us.innerHTML = e.mesajes.con;
    me.innerHTML = e.mesajes.mensaje;
    td.appendChild(us);
    td.appendChild(sep);
    us.appendChild(me);
    div1.appendChild(td);
    function saludo()
      {
        
       div2.innerHTML = e.mesajes.con;
       
       cargadato();
        
      };
    us.addEventListener('click',saludo,true);      
    // let men = document.createElement("span");
    // men.innerHTML = e.mesajes.mensaje
    // div2.appendChild(men);
     //< --- Agregamos la fila a la tabla
  
  });

  


})
