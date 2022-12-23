
export function cargadato(){
    let usuario = document.getElementById("Chat").innerText;
    let val=usuario.length;
    if (val >0){
        function createNode(element) {
            return document.createElement(element);
        }
        
        function append(parent, el) {
        return parent.appendChild(el);
        }
    
        const urlchat = 'http://127.0.0.1:8000/mensajes/chats/' + usuario;
        console.log(urlchat)
        const div3 = document.getElementById("Chat");
    
    
        fetch(urlchat)
        .then((resp) => resp.json())
        .then(function(data) {
        let authors = data;
    
        return authors.forEach((e) => {    //< ---  recorremos data
            
            
            let me = document.createElement("div");
            //me.classList.add("p-4 bg-gray rounded-xl");
            let det= document.createElement("p");
            det.classList.add("font-semibold");
            det.innerHTML=e.chat.mensaje;
            let det2= document.createElement("p");
            det2.innerHTML=e.chat.fecha;

            me.appendChild(det);
            me.appendChild(det2);
            
    
            //me.innerHTML = e.chat.mensaje;
            
            div3.appendChild(me);
            
            // let men = document.createElement("span");
            // men.innerHTML = e.mesajes.mensaje
            // div2.appendChild(men);
            //< --- Agregamos la fila a la tabla
    
        });
    
        })
    };

   
}
cargadato();

