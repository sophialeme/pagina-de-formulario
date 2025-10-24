import { useState } from 'react'
import './App.css'


function App() {
const handleSubmit = (e) => {
alert("Formulário enviado com sucesso!")
e.target.reset()
}


return (
<div className="container">
    <h2>Questionário</h2>
  <form id="formulario" onSubmit={handleSubmit}>


    <label htmlFor="nome">Nome:</label>
    <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />
 
    <label htmlFor="idade">Idade:</label>
    <input type="number" id="idade" name="idade" placeholder="Digite sua idade" required />


    <label htmlFor="telefone">Telefone:</label>
    <input type="tel" id="telefone" name="telefone" placeholder="(xx) xxxxx-xxxx" />
  

    <label htmlFor="instagram">Instagram:</label>
    <input type="url" id="instagram" name="instagram" placeholder="@usuario" />


    <label htmlFor="github">GitHub:</label>
    <input type="url" id="github" name="github" placeholder="link ou usuário do GitHub" />


    <label htmlFor="pensamento">Pensamento:</label>
    <input id="pensamento" name="pensamento" rows="2" placeholder="Compartilhe um pensamento..." />
 

    <label htmlFor="probleminha">Probleminha:</label>
    <input id="probleminha" name="probleminha" rows="2" placeholder="Conte um probleminha..." />


    <label htmlFor="serie">Última série assistida:</label>
    <input type="text" id="serie" name="serie" placeholder="Última série assistida" />


    <label htmlFor="jogo">Último jogo jogado:</label>
    <input type="text" id="jogo" name="jogo"  placeholder="Último jogo jogado" />


    <label htmlFor="musica">Música favorita:</label>
    <input type="url" id="musica" name="musica"  placeholder="Música favorita" />


    <label htmlFor="genero">Gênero:</label>
    <select id="genero" name="genero">
      <option value="">Selecione</option>
      <option>Masculino</option>
      <option>Feminino</option>
    </select>


    <label htmlFor="habilidade">Habilidade especial:</label>
    <input type="text" id="habilidade" name="habilidade"  placeholder="Habilidade especial" />
  

    <label htmlFor="poder">Poder especial:</label>
    <input type="text" id="poder" name="poder"  placeholder="Poder especial" />

    <label htmlFor="time">Time que torce:</label>
    <input type="text" id="time" name="time"  placeholder="Time que torce" />


    <button type="submit">Enviar</button>
  </form>
</div>


)
}


export default App


