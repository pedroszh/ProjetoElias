// Array de receitas com nomes e ingredientes
const receitas = [
    {
        nome: "Bolo de Cenoura",
        ingredientes: [
            "3 cenouras",
            "2 xícaras de açúcar",
            "1 xícara de óleo",
            "4 ovos",
            "2 xícaras de farinha de trigo",
            "1 colher de sopa de fermento"
        ]
    },
    {
        nome: "Panqueca",
        ingredientes: [
            "1 ovo",
            "1 xícara de farinha de trigo",
            "1 xícara de leite",
            "1 pitada de sal",
            "1 colher de chá de fermento"
        ]
    },
];

// função para exibir uma recita aleatória
function exibirReceita() {
    // seleciona uma receita aletória do array
    const receitaAleatoria = receitas[Math.floor(Math.random() * receitas.length)];
    document.getElementById('nome-receita').textContent = receitaAleatoria.nome;
   
    const listaIngredientes = document.getElementById('ingredientes');
    listaIngredientes.innerHTML = '';
   
    receitaAleatoria.ingredientes.forEach(ingrediente => {
        const item = document.createElement('li');
        item.textContent = ingrediente;
        listaIngredientes.appendChild(item);
    });
}


document.getElementById('nova-receita').addEventListener('click', exibirReceita);

// exibe uma receita ao carregar a página
window.onload = exibirReceita;


