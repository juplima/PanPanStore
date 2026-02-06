// Produtos cadastrados
const produtos = {
    1: {
        nome: "Coleira Rosa",
        preco: "R$ 29,90",
        imagem: "https://i.pinimg.com/736x/df/17/12/df1712b846c51746a4340553807f4aef.jpg",
        descricao: "Coleira ajustável super confortável e charmosa! 💖"
    },
    2: {
        nome: "Casinha Conforto",
        preco: "R$ 199,90",
        imagem: "https://i.pinimg.com/736x/69/54/1b/69541b6e84b4a73c8bb03a44ca7fb998.jpg",
        descricao: "Casinha macia e quentinha para seu pet dormir tranquilo! 🏡🐶"
    },
    3: {
        nome: "Bolinha Divertida",
        preco: "R$ 14,90",
        imagem: "https://i.pinimg.com/1200x/d9/ef/17/d9ef17c61ea69f6a2a5175180e5d0f1f.jpg",
        descricao: "Bolinha fofinha e resistente para brincadeiras infinitas! 🎾"
    }
    // Eu posso completar os 12 pra você depois!
};

// Pegando o ID da URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Selecionando elementos da página
const nome = document.getElementById("product-name");
const preco = document.getElementById("product-price");
const imagem = document.getElementById("product-image");
const desc = document.getElementById("product-desc");

// Se o produto existir, troca as informações
if (produtos[id]) {
    nome.textContent = produtos[id].nome;
    preco.textContent = produtos[id].preco;
    imagem.src = produtos[id].imagem;
    desc.textContent = produtos[id].descricao;
}
