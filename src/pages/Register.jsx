import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
 // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

   const handleSubmit = async (e) => { 
    /* setLoading(true); */
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

  try{
    const res =  await createUserWithEmailAndPassword(auth, email, password)

    const storageRef = ref(storage, displayName);
    console.log("oiii")
    const uploadTask = uploadBytesResumable(storageRef, file)
    console.log("oiii2222")
    setTimeout(function() {
      console.log("Passaram 1 segundo!");
    }, 2000);
    uploadTask.on(
      (error) => {
        setErr(true)
      }, 
      () => {
        
        
       
        getDownloadURL(uploadTask.snapshot.ref).then( async(getDownloadURL) => {
          await updateProfile(res.user,{
            displayName,
            photoURL:getDownloadURL,
          });
          setTimeout(function() {
            console.log("Passaram 1 segundo!");
          }, 2000);
          
          await setDoc(doc(db,"users", res.user.uid),{
            uid: res.user.uid,
            displayName,
            email,
            photoURL: getDownloadURL
          })
          setTimeout(function() {
            console.log("Passaram 1 segundo!");
          }, 2000);

          await setDoc(doc(db, "userChats", res.user.uid),{})
          navigate("/");
        });
      }
    );

    
  }catch(err){
    setErr(true);
    console.log(setDoc)
    console.log(ref)
   
  }

  }; 
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Ichat </span>
                <span className="title">Register</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="display name"/>
                    <input type="email" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input style= {{display:"none"}} type="file" id="file" />
                    <label htmlFor="file">
                        <img src={Add} alt="" />
                        <span>Add Foto </span>
                    </label>
                    <button>Sign up</button>
                    {err && <span>Tem algo errado</span>}
                </form>
                <p>Já possui uma conta? <Link to="/login">Logar</Link> </p>
            </div>
        </div>
    )
}

export default Register;
