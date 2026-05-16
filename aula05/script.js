const linhas = document.getElementsByClassName('linha-filme')
console.log(linhas)
console.log(linhas[1])
console.log(linhas[0].children)
for(let i = 0; i < 3; i++){
    console.log(linhas[i])
}

const baseDeDados = [
    {titulo: 'Coraline', ano:'2009', status:'Assistido', nota:'8/10'}
    {titulo: 'Homem-Aranha: Um Novo Dia', ano:'2026', status:'Em Lançamento', nota:'?/10'}
    {titulo: ''}
]

for(let l = 0; l < 3; l++){
    const celulas = linhas[l].children
    for(let c = 0; c < 3; l++){
        console.log(celulas[c])
        celulas[c].textContent = baseDeDados[c].titulo
        celulas[c].textContent = baseDeDados[c].ano
        celulas[c].textContent = baseDeDados[c].status
        celulas[c].textContent = baseDeDados[c].nota
    }
}

