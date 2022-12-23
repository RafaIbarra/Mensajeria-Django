window.addEventListener("load",function(){
    makerequest();
});
async function makerequest(){
  let result=await fetch('http://127.0.0.1:8000/mensajes/mismensajes/');
  console.log(result.json());
}

