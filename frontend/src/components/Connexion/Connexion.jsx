import { useState } from "react";
import style from "./Connexion.module.css";

export default function Connexion() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const message = "";
  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      // Vérifie si le serveur a répondu avec une erreur HTTP (500, 404, etc.)
      if (!res.ok) {
        throw new Error(`Erreur serveur : ${res.status}`);
      }

      const data = await res.json();
      console.log("Réponse serveur :", data);

    } catch (error) {
      message = `Erreur lors de la connexion : ${error}`
      console.error("Erreur lors de la connexion :", error);
    }
  };

  return (
    <main className={style.main}>
      <form
        className={style.Connexion}
        onSubmit={(e) => e.preventDefault()}
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
        <p>{message}</p>

        <button type="button" onClick={handleSubmit}>
          <h2>Connexion</h2>
        </button>
      </form>
    </main>
  );
}
