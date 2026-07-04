import {useState} from "react";

export function ProfileCard(props) {
    const [Seguindo, setSeguindo] = useState(false);

    return(
        <div className="profile-card">
            <h2>{props.name}</h2>
            <p>{props.vibe}</p>
            <p>{props.content}</p>

            <button onClick={() => setSeguindo(!Seguindo)} className="seguir-btn">
                {Seguindo ? "Seguindo" : "Seguir"}
            </button>
        </div>
    )
}