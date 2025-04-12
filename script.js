function mostrarMensagem() {
  const telaInicial = document.getElementById("tela-inicial");
  const conteudo = document.getElementById("conteudo");

  console.log("Acessando a função mostrarMensagem.");

  telaInicial.style.display = "none";
  conteudo.style.display = "block";

  const musica = document.getElementById("musica");

  console.log("Tentando tocar música...");

  musica.play().catch((error) => {
    console.error("Erro ao tentar tocar a música: ", error);
  });
}
