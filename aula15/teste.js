// teste.js
function ComponentePost() {
  let likesComum = 0; // Variável simples
  likesComum = likesComum + 1;
  console.log(`[Interface atualizada] Curtidas: ${likesComum}`);
}

console.log("Simulando vários cliques:");
ComponentePost(); // 1
ComponentePost(); // 1
ComponentePost(); // 1
