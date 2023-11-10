
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA31PhawhKE0ll6RjTIeF70fDs-26VNAHo",
    authDomain: "login-y-storage-aa07e.firebaseapp.com",
    projectId: "login-y-storage-aa07e",
    storageBucket: "login-y-storage-aa07e.appspot.com",
    messagingSenderId: "26176140051",
    appId: "1:26176140051:web:a6d0a9faec477847b620e6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


// Obtiene la referencia al elemento del formulario
const btnEnviar = document.getElementById('btnEnviar');

// Agrega un evento de escucha para el envío del formulario
btnEnviar.addEventListener("click", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma convencional

  // Obtiene los valores del correo electrónico y la contraseña desde el formulario
  const email = document.getElementById('txtEmail').value;
  const password = document.getElementById('txtPassword').value;

  // Obtiene la instancia de autenticación de Firebase
  const auth = getAuth();

  // Intenta autenticar al usuario con el correo electrónico y la contraseña proporcionados
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Usuario autenticado correctamente
      const user = userCredential.user;
      alert(`Usuario autenticado${user.email}`);

      // Redirige al usuario a la página de inicio, por ejemplo:
      window.location.href = "/html/menu.html";
    })
    .catch((error) => {
      // Error durante la autenticación
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error durante la autenticación: ${errorMessage}`);
   });
   
});
