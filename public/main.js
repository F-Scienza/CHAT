//  conectamos al cliente con el servidor de websocket
//  y escuchamos messages
const socket = io.connect()

//  creamos una funcion que se encargue de
//  inyectar los mensajes al html
function render(data){
	const html = data.map((elem, index) => {
			return( 
            `<div>
                <strong>  ${elem.author}:  </strong>
                <em>  ${elem.text}  </em>
            </div>`
            )
		}).join(' '); //  conecta los elementos de array con un espacio
	//  lo insertamos en el dom
	document.getElementById('messages').innerHTML = html;
}

//  Data tiene el array de mensajes que envia el servidor
socket.on('messages', data=>{
    render(data)
})