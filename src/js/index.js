const botoesCarrossel = document.querySelectorAll(".botao")
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes")

botoesCarrossel.forEach((botao, indice) => { //Se tiver um argumento, não precisa de (), como são dois, o () entra, aqui, o indice serve para pegar a posição da imagem do dragão
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado()
        marcarBotaoSelecionado(botao)

        esconderImagemAtiva()
        mostrarImagemDeFundo(indice)//O indice recebe a mesma posição que os botões

        esconderInfomacoesAtivas()
        mostrarInformacoes(indice)
    })
})

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado")
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa")
}

function esconderInfomacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa")
    informacoesAtiva.classList.remove("ativa")
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa")
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".imagem.ativa")
    imagemAtiva.classList.remove("ativa")
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado") //aqui seleciona um botao por vez: querySelector
    botaoSelecionado.classList.remove("selecionado")
}

