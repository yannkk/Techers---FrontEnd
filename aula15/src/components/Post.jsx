import { useState } from "react";

export function Post(props) {
  // useState cria a caixinha de memória isolada para cada Post
  const [likes, setLikes] = useState(0);
  const [favorite, setFavorite] = useState(false);

  function handleLike() {
    // Altera o estado garantindo que pega o valor mais recente da memória
    setLikes((estadoAnterior) => estadoAnterior + 1);
  }

  function handleFavorite() {
    setFavorite((estadoAnterior) => !estadoAnterior);
  }

  return (
    <article className="post-card">
      <header>
        <strong>@{props.author}</strong>
        <span>
          sent a vibe: <strong>{props.vibe}</strong>
        </span>
      </header>

      <p>{props.content}</p>

      <footer>
        {/* Evento que dispara a reatividade */}
        <button onClick={handleLike} className="btn-like">
          Curtir Vibe ({likes})
        </button>
        <button onClick={handleFavorite} className="btn-favorite">
          {favorite ? "💖 Favorito" : "🤍 Favoritar"}
        </button>
      </footer>
    </article>
  );
}
