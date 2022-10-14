let imagem = document.getElementById('imagem')
let titulo = document.getElementById('titulo')

function trocarAnimal(filename, animalname) {
    imagem.setAttribute('src', filename);
    imagem.setAttribute('data-animal', animalname);
    titulo.innerHTML = animalname;
}

function knowanimal() {
    let animal = imagem.getAttribute('data-animal');
    let resposta = window.prompt('Que animal é este?');
    if (resposta.toLowerCase() == animal.toLowerCase()) {
        alert('Você acertou em cheio!!!');
    } else {
        alert('Infelizmente você errou');
        alert('Este animal é um ' + animal);
    }
    console.log("Esse é o animal: " + animal.toLowerCase() + "; e Essa é a resposta: " + resposta.toLowerCase())
}