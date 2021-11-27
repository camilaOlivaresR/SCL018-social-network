/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  onSnapshot,
  // { doc, deleteDoc, , updateDoc , Timestamp, orderBy} 
} from "https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js";




const firebaseConfig = {
  apiKey: "AIzaSyCRXzTGFbssFI_Vgt69WYFu5HAtJeW2vhk",
  authDomain: "red-social-sport-fem.firebaseapp.com",
  projectId: "red-social-sport-fem",
  storageBucket: "red-social-sport-fem.appspot.com",
  messagingSenderId: "136278586908",
  appId: "1:136278586908:web:90cef68cefc0a1dc1751d9",
  measurementId: "G-QK2DZJ2H58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);
console.log(app);

//AUTENTICACION GOOGLE

export const signInGoogle = () => {
  const provider = new GoogleAuthProvider(app);
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      window.location.hash = "#/templateHome";
      return user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};
// REGISTRO EMAIL Y PASSWORD NUEVOS USUARIOS

export const newEmail = (email, newpassword, names) => {
  // retornar esta funcion, hacer cambio de hash
  createUserWithEmailAndPassword(auth, email, newpassword)
  //esto me regresa una promesa, then= resultado de una promesa
    .then((userCredential) => {
      // Signed in/ result de la promesa 
      const user = userCredential.user;
       //consultar o actualizar la data basica del usuario como url de la foto
     
     
      window.location.hash = "#/login";

      return user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      return errorCode + errorMessage;
    });
     //se hace consultando elidentificador unico que nos genera firebase
      /* actualizar el nombre que el usuario eligio al registrarse
      .then((result) => {
        result.user.updateProfile({
          displayName: names
        })
        //const avatar= {
          url:'' de donde obtendremos la imagen
        }//
        //enviar email de verificacion
        result.user.sendEmailVerification() .catch((error) => { y asi vamos a capturar el error
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      return errorCode + errorMessage;
    });
      })
 
      }

      */
  return createUserWithEmailAndPassword;
    
};
// USUARIOS REGISTRADOS
export const logEmail = (emaiLogin, passwordLogin) => {
  signInWithEmailAndPassword(auth, emaiLogin, passwordLogin)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      //const avatar = url-src-img-pngimagen foto;




      window.location.hash = "#/templateHome";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return errorCode + errorMessage;
    });
};

// Función para crear la colección user-id
export const addUserData = async (userId, input) => {
  try {
    const docRef = await addDoc(collection(db, 'contenido'), {
      id: userId,
      name: input,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

// Add a new document with a generated id, post,crear coleccion de post

export const postear = async (input) => {
  const user = auth.currentUser;
  const docRef = await addDoc(collection(db, "contenido"), {
    title: input,
    description: input,
    correo: user.email,
    foto: user.photoURL,
    id:  auth.currentUser.uid,
    datePost: Timestamp.fromDate(new Date()),
    //id: auth.currentUser.uid,

 /*CONSTRUCCION ELIMINAR POST
  .then((algo) => {
      docRef.id.updateProfile;
    docRef.id.update(id)
   // return docRef;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return errorCode + errorMessage;
  })*/
  
  });

  console.log("Document written with ID: ", docRef.id);

/*función para publicar nombre de usuarios
export const getCurrentUserData = (callback) => {
  const q = query(collection(db, 'user-data'));
  onSnapshot(q, (querySnapshot) => {
    const postsName = [];
    querySnapshot.forEach((doc) => {
      postsName.push(doc.data());
    });
    callback(postsName);
  });
};*/
export const readData = (callback) => {
  const q = query(collection(db, "contenido"), orderBy('datePost', 'desc'));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const posting = [];
    querySnapshot.forEach((doc) => {
     /* const element = {};
      element.id = doc.id;
      element.data = doc.data(),*/
      posting.push(doc.data());

      
    });
    callback(posting);
  })
};

 // función para eliminar post
export const deleteDoc = async(id) => {
  const isConfirm = window.confirm('¿Seguro quieres eliminar tu post?');
if (isConfirm) {
   
 await deleteDoc(doc(db, "contendido", id))
 }

};
// función para cerrar sesión
export const out = () => {
  signOut(auth)
    .then(() => {
      window.location.hash = '#/login';
    })
    .catch((error) => {
      console.log(error);
    });
};



// Para editar Post
export const editTemplate = async (postId) => {
  const isConfirm = window.confirm('¿Seguro quieres editar tu post?');
  if (isConfirm) {
    const postEdit = doc(db, 'post', postId);
    await updateDoc(postEdit, {
      userName: auth.currentUser.displayName,
      userId: auth.currentUser.uid,
      idPost: postId,
      userPost: document.getElementById('textPostInputEdit').value,
    });
    window.location.reload();
  }
}
};