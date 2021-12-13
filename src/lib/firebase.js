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
      const user = result.user;
      window.location.hash = "#/templateHome";
      
       })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
};
// REGISTRO EMAIL Y PASSWORD NUEVOS USUARIOS
export const newEmail = (email, newpassword) => {
  // retornar esta funcion, hacer cambio de hash
  createUserWithEmailAndPassword(auth, email, newpassword)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.hash = "#/login";
  
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
      const user = userCredential.user;
      console.log(user);
    window.location.hash = '#/templateHome';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      return errorCode + errorMessage;
    });
};
 



// Add a new document with a generated id, post,crear coleccion de post
export const addData = async (input) => {
  const contentPost = await addDoc(collection(db, 'contenido'), {
    username: auth.currentUser.displayName,
    userId: auth.currentUser.uid,
    title: input,
    correo: auth.currentUser.email,
    foto: auth.currentUser.photoURL,
    datePosted: Timestamp.fromDate(new Date()),
  });
  return contentPost;
};

export const readData = (callback) => {
  const q = query(collection(db, "contenido") ,orderBy('datePosted', 'desc'));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const poster = [];
    querySnapshot.forEach((_doc) => {
      poster.push({ ..._doc.data(), id: _doc.id });
    });
    
    callback(poster, auth.currentUser);
  
  });
};

export const eraseDoc = async (id) => {
    await deleteDoc(doc(db, 'contenido', id));
};

// cerrar sesion
export const logOut = () => {
  signOut(auth).then(() => {
    window.location.hash = '#/login';
  }).catch((error) => {
    console.log(error);
    // An error happened.
  });
};

//observador
export const observed = () => {
  onAuthStateChanged(auth, (user) => {
 if (user) {
     const uid = user.uid;
     window.location.hash === '#/templateHome'

    } else {
      window.location.hash === '#/register'
     
  } 
  });
};
