import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { updateEmail, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";

const Profile = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!displayName || !email) {
      setErr("Por favor, preencha todos os campos.");
      return;
    }
    

    try {
      const user = auth.currentUser;
      await updateProfile(user, {
        displayName: displayName,
      });
      await updateEmail(user, email);

      navigate("/");
    } catch (err) {
      setErr("Erro ao atualizar o perfil. Por favor, tente novamente.");
    }
    const user = auth.currentUser;
    const storageRef = storage.ref(`users/${user.uid}`);
    console.log()
    await storageRef.updateMetadata({ customMetadata: { displayName: displayName } });
    
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">IChat</span>
        <span className="title">Alterar Nome e Email</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Novo Nome"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Novo Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button>Atualizar</button>
          <p>
          Você não quer mudar?<Link to="/">Voltar</Link>
        </p>
          {err && <span>{err}</span>}
        </form>
      </div>
    </div>
  );
};

export default Profile;
