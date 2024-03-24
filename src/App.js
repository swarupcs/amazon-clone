import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const email = user.email;
    console.log(email);

  
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("The User is ------- ",user)
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(uid)
        dispatch({
          type: 'SET_USER',
          user: user,
        })
        // ...
      } else {
        // User is signed out
        // ...
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    });

  }, [])
  return (
    // BEM
    <div className='app'>
      <Header/>
      {/* <Home/> */}
      <Outlet/>
    </div>
  );
}

export default App;
