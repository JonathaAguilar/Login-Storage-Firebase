

const firebaseConfig = {
    apiKey: "AIzaSyA31PhawhKE0ll6RjTIeF70fDs-26VNAHo",
    authDomain: "login-y-storage-aa07e.firebaseapp.com",
    projectId: "login-y-storage-aa07e",
    storageBucket: "login-y-storage-aa07e.appspot.com",
    messagingSenderId: "26176140051",
    appId: "1:26176140051:web:a6d0a9faec477847b620e6"
  };
  
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  const storageRef = storage.ref();

  // Función para subir imagen a Firebase Storage
  function subirImagen() {
    const fileInput = document.getElementById('fileInput');
    const archivo = fileInput.files[0];
    const urlInput = document.getElementById('urlInput');

    if (archivo) {
        // Verificar que el archivo sea una imagen .jpg, .jpeg o .png
        if (archivo.type === 'image/jpeg' || archivo.type === 'image/png') {
            const imagenRef = storageRef.child(`imagenes/${archivo.name}`);

            // Subir imagen a Firebase Storage
            imagenRef.put(archivo).then(() => {
                alert('Imagen subida con éxito.');

                // Mostrar la imagen subida
                imagenRef.getDownloadURL().then((url) => {
                    const imagenContainer = document.getElementById('imagenContainer');
                    const imagen = document.createElement('img');
                    imagen.src = url;
                    imagenContainer.appendChild(imagen);

                    // Mostrar URL de la imagen
                    urlInput.value = url;
                }).catch((error) => {
                    alert('Error al obtener la URL de descarga: ' + error.message);
                });
            }).catch((error) => {
                alert('Error al subir la imagen: ' + error.message);
            });
        } else {
            alert('Por favor, selecciona una imagen en formato .jpg, .jpeg o .png.');
        }
    } else {
        alert('Por favor, selecciona un archivo.');
    }
}