import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [instagram, setInstagram] = useState("");
  const [github, setGithub] = useState("");
  const [thought, setThought] = useState("");
  const [problem, setProblem] = useState("");
  const [lastSeries, setLastSeries] = useState("");
  const [lastGame, setLastGame] = useState("");
  const [music, setMusic] = useState("");
  const [genre, setGenre] = useState("");
  const [specialSkill, setSpecialSkill] = useState("");
  const [specialPower, setSpecialPower] = useState("");
  const [favoriteTeam, setFavoriteTeam] = useState("");
  const [bibleVerse, setBibleVerse] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  async function criarUsuario(data) {
    try {
      const response = await fetch("https://api.alanleiser.com/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("POST RESULT:", result);

      if (response.status === 201) {
        alert("Usuário criado com sucesso!");
        return true;
      } else {
        alert("Erro ao criar usuário: " + result.msg);
        return false;
      }

    } catch (error) {
      console.error(error);
      alert("Erro inesperado no POST.");
      return false;
    }
  }


  async function buscarUsuario(email, password) {
    try {

      const encodedEmail = encodeURIComponent(email);
      const encodedPassword = encodeURIComponent(password);

      const response = await fetch(
        `https://api.alanleiser.com/api/users/${encodedEmail}/${encodedPassword}`
      );

      console.log("GET STATUS:", response.status);

      if (response.status === 401) {
        alert("Email ou senha incorretos!");
        return null;
      }

      const data = await response.json();
      console.log("Dados recebidos:", data);

      alert("Login realizado com sucesso!");

      return data;

    } catch (error) {
      console.error(error);
      alert("Erro inesperado no GET.");
      return null;
    }
  }



  const onSubmitHandle = async (e) => {
    e.preventDefault();

    const data = {
      name,
      age,
      phone,
      instagram,
      github,
      thought,
      problem,
      lastSeries,
      lastGame,
      music,
      genre,
      specialSkill,
      specialPower,
      favoriteTeam,
      bibleVerse,
      email,
      password
    };

    const userCreated = await criarUsuario(data);

    if (userCreated) {
      await buscarUsuario(email, password);
    }
  };



  return (
    <div className="container">
      <h2>Questionário</h2>

      <form onSubmit={onSubmitHandle}>
        
        <label>Nome:</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />

        <label>Idade:</label>
        <input value={age} onChange={(e) => setAge(e.target.value)} />

        <label>Telefone:</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} />

        <label>Instagram:</label>
        <input value={instagram} onChange={(e) => setInstagram(e.target.value)} />

        <label>GitHub:</label>
        <input value={github} onChange={(e) => setGithub(e.target.value)} />

        <label>Pensamento:</label>
        <input value={thought} onChange={(e) => setThought(e.target.value)} />

        <label>Problema:</label>
        <input value={problem} onChange={(e) => setProblem(e.target.value)} />

        <label>Última série assistida:</label>
        <input value={lastSeries} onChange={(e) => setLastSeries(e.target.value)} />

        <label>Último jogo jogado:</label>
        <input value={lastGame} onChange={(e) => setLastGame(e.target.value)} />

        <label>Música favorita:</label>
        <input value={music} onChange={(e) => setMusic(e.target.value)} />

        <label>Gênero:</label>
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Selecione</option>
          <option>Masculino</option>
          <option>Feminino</option>
        </select>

        <label>Habilidade especial:</label>
        <input value={specialSkill} onChange={(e) => setSpecialSkill(e.target.value)} />

        <label>Poder especial:</label>
        <input value={specialPower} onChange={(e) => setSpecialPower(e.target.value)} />

        <label>Time que torce:</label>
        <input value={favoriteTeam} onChange={(e) => setFavoriteTeam(e.target.value)} />

        <label>Verso bíblico:</label>
        <input value={bibleVerse} onChange={(e) => setBibleVerse(e.target.value)} />

        <label>Email:</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Senha:</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
