import { useState } from "react";
import style from "./Connexion.module.css";

export default function Connexion() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Ici tu peux envoyer les données à ton backend Flask
    fetch("http://192.168.1.32:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Réponse serveur :", data));
  };

  return (
    <main className={style.main}>
      <form
        className={style.Connexion}
        onSubmit={(e) => e.preventDefault()} // empêche le reload
      >
        <h1>Connexion</h1>

        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleSubmit}>
          <h2>Connexion</h2>
        </button>
      </form>
    </main>
  );
}
