/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import {
  initializeApp,
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-auth.js';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  onSnapshot,
  deleteDoc,
  doc,
  Timestamp,
  orderBy,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/9.2.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCRXzTGFbssFI_Vgt69WYFu5HAtJeW2vhk',
  authDomain: 'red-social-sport-fem.firebaseapp.com',
  projectId: 'red-social-sport-fem',
  storageBucket: 'red-social-sport-fem.appspot.com',
  messagingSenderId: '136278586908',
  appId: '1:136278586908:web:90cef68cefc0a1dc1751d9',
  measurementId: 'G-QK2DZJ2H58',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);


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
export const newEmail = (email, newpassword) => {
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
    });
        
};
// USUARIOS REGISTRADOS
export const logEmail = (emaiLogin, passwordLogin) => {
  signInWithEmailAndPassword(auth, emaiLogin, passwordLogin)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
    window.location.hash = '#/templateHome';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return errorCode + errorMessage;
    });
};

// Add a new document with a generated id, post,crear coleccion de post
export const postear = async (input) => {
  const user = auth.currentUser;
  const docRef = await addDoc(collection(db, 'contenido'), {
    username: auth.currentUser.displayName,
    title: input,
    correo: user.email,
    foto: user.photoURL,
    userId: auth.currentUser.uid,
    datePosted: Timestamp.fromDate(new Date()),

  });
  return docRef;
};
export const readData = async () => {
  const q = await getDocs(collection(db, 'contenido'), orderBy('datePosted', 'desc'));
  const posts = [];
  q.forEach((element) => {
    posts.push({
      id: element.id,
      ...element.data(),
    });
  });
  return posts;
};


export const eraseDoc = async (id) => {
  const confirm = window.confirm('¿Quieres eliminar esta publicación?');
  if (confirm) {
    await deleteDoc(doc(db, 'contenido', id));
  }
};


// cerrar sesion
export const logOut = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('cierre de sesión');
    window.location.hash = '#/login';
  }).catch((error) => {
    console.log(error);
    // An error happened.
  });
};
/* observador
export const observador = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userId = user.uid;
      window.location.hash = '#/templateHome';
      
    } else if (!user) {
      logOut();
 
    }
  });
};
/* función observador
export const onAuth = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
     
      const userId = user.uid;
       window.location.hash = '#/nav';
    } else if (!user) {
      out();
    }
  });
};
export const observador = () => {
  onAuthStateChanged(auth, (user) =>{
    if (user) {
      if (window.location.hash !== '#/register') {
       
        window.location.hash = '#/templateHome';
      }
     
      const uid = user.uid;
      // ...
    } else if (!user) {
  
  
        window.location.hash = '#/login';
      
    }
  });
};

*/