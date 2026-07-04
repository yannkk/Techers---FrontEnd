import "./App.css";
import { Post } from "./components/Post";
import { ProfileCard} from "./components/profilecard";

function App() {
  return (
    <main className="feed-container">
      <h1>VibeCheck ✨</h1>

      {/* O seu cartão do desafio entra aqui */}

      <ProfileCard
        name="Naoseikkkkk"
        vibe="Seila tambem"
        content="Naosei tambem"
      />
      <Post
        author="DevTeen_01"
        vibe="Explorando o React 🚀"
        content="Acabei de criar meu primeiro componente dinâmico!"
      />
      <Post
        author="JS_Ninja"
        vibe="Focado 💻"
        content="Entendendo como as props fluem de cima para baixo na árvore."
      />
    </main>
  );
}

export default App;
