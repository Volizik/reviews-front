import React, {useEffect} from 'react';
import {Router} from "./Router";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {getUserInfo} from "./store/user/thunks";
import {useDispatch} from "react-redux";
import {setAuthHeaders} from './services/auth';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        setAuthHeaders();
        dispatch(getUserInfo());
    });

  return (
    <div className="App">
        <Router />
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            draggable
            pauseOnHover
        />
    </div>
  );
}

export default App;
