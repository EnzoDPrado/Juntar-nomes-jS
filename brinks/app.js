'use script'

function juntarNome (){
    const nome = document.getElementById('nome').value;
    const sobreNome = document.getElementById('sobreNome').value;
    const resultado = document.getElementById('resultado')
    
    nomeCompleto = `Seu nome completo e: ${nome} ${sobreNome}`;
    console.log(nomeCompleto);

    resultado.textContent = nomeCompleto;
}

document.getElementById('juntar').addEventListener('click', juntarNome)
