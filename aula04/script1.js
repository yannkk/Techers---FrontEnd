/*let src = "imagemlalalala.jpg"
let text = 'descrição'
let titulo = 'Titulo'

const Infocard = document.getElementById("info1")
const tituloCard = document.getElementById('titulo1')
const imgCard = document.getElementById('img1')

imgCard.setAttribute ('src', src)
Infocard.textContent = text
tituloCard.textContent = titulo*/

const imgCard = document.getElementsByClassName('img-card')
const titulo = document.getElementsByClassName('titulo')
const info = document.getElementsByClassName('info')

const imgSrc = [
    'images/pikachupelucia.jpg',
    'images/gengarpelucia.jpg',
    'images/togepipelucia.jpg',
    'images/dragonitepelucia.jpg',
    'images/bulbasaurpelucia.jpg',
    'images/caterpiepelucia.jpg',
    'images/charmanderpelucia.jpg',
    'images/evepelucia.jpg',
    'images/psyduckpelucia.jpg',
    'images/raichupelucia.jpg',
    'images/chanseypelucia.jpg']

const headings = [
    'Pikachu',
    'Gengar',
    'Togepi',
    'Dragonite',
    'Bulbasaur',
    'Caterpie',
    'Charmander',
    'Eevee',
    'Psyduck',
    'Raichu',
    'Chansey'
]

const dataInfo = [
    'Pokémon do tipo elétrico, pequeno e amarelo, que armazena eletricidade nas bochechas.',
    'Pokémon do tipo Fantasma/Veneno, conhecido por se esconder nas sombras e assustar as pessoas.',
    'Pokémon pequeno do tipo Fada, que vive dentro de uma casca de ovo e traz sorte.',
    'Pokémon do tipo Dragão/Voador, muito forte e conhecido por voar grandes distâncias rapidamente.',
    'Pokémon do tipo Planta/Veneno, com uma semente nas costas que cresce conforme ele evolui.',
    'Pokémon do tipo Inseto, uma pequena lagarta que depois evolui para Butterfree.',
    'Pokémon do tipo Fogo, com uma chama na cauda que mostra sua energia e saúde.',
    'Pokémon de tipo Normal, conhecido por poder evoluir para várias formas diferentes.',
    'Pokémon do tipo Água, que sofre de dor de cabeça constante e libera poderes psíquicos quando está muito estressado.',
    'Evolução de Pikachu, do tipo Elétrico, maior e mais forte, com cauda em forma de raio.',
    'Um Pokémon raro e esquivo que, dizem, traz felicidade àqueles que conseguem capturá-lo.'
]

for(let i = 0; i<imgCard.length; i++){
    imgCard[i].setAttribute('src', imgSrc[i])
    titulo[i].textContent = headings[i]
    info[i].textContent = dataInfo[i]
}