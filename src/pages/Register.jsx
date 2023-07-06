import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile, fetchSignInMethodsForEmail } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      // Verifica se o email já existe na base de dados
      const emailExists = await checkEmailExists(email);
      console.log(emailExists)
      if (emailExists) {
        setErr("O email já está em uso.");
        setLoading(false);
        return;
      }

      const res = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr("Erro ao criar usuário.");
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr("Erro ao criar usuário.");
      setLoading(false);
    }
  };

  const checkEmailExists = async (email) => {
    
      try {
        
        const methods = await fetchSignInMethodsForEmail(auth, email);
        console.log()
        return methods.length > 0; // Retorna verdadeiro se o email existir
      } catch (error) {
        console.error("Erro ao verificar o email:", error);
        return false;
      }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">IChat</span>
        <span className="title">Registro</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add Foto </span>
          </label>
          <button disabled={loading}>Entrar</button>
          {loading && "Subindo imagem aguarde..."}
          {err && <span>{err}</span>}
        </form>
        <p>
          Já Possui uma Conta? <Link to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
