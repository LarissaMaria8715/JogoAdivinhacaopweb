function iniciarJogo() {
  alert("🎯 Bem-vindo ao Jogo de Adivinhação!\n\nTente adivinhar o número secreto entre 1 e 100.");

  const maxTentativas = 5;

  while (true) {
    const numeroSecreto = gerarNumeroAleatorio(1, 100);
    let tentativasRestantes = maxTentativas;
    let acertou = false;

    while (tentativasRestantes > 0) {
      const palpite = obterPalpite(tentativasRestantes);

      if (palpite === null) {
        alert("🚪 Jogo encerrado pelo jogador.");
        return;
      }

      if (!ehPalpiteValido(palpite)) {
        alert("⚠️ Digite um número válido entre 1 e 100.");
        continue;
      }

      const palpiteNumero = Number(palpite);
      tentativasRestantes--;

      if (palpiteNumero === numeroSecreto) {
        alert(`🎉 Parabéns! Você acertou o número ${numeroSecreto} com ${maxTentativas - tentativasRestantes} tentativa(s)!`);
        acertou = true;
        break;
      } else {
        const dica = palpiteNumero < numeroSecreto ? "MAIOR" : "MENOR";
        alert(`❌ Errado! O número secreto é ${dica} que ${palpiteNumero}.\nTentativas restantes: ${tentativasRestantes}`);
      }
    }

    if (!acertou) {
      alert(`😢 Fim de jogo! O número secreto era ${numeroSecreto}.`);
    }

    if (!desejaJogarNovamente()) {
      alert("👋 Obrigado por jogar! Até a próxima.");
      break;
    }
  }
}

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function obterPalpite(tentativasRestantes) {
  return prompt(`📌 Você tem ${tentativasRestantes} tentativa(s).\nDigite seu palpite (1 a 100):`);
}

function ehPalpiteValido(palpite) {
  const numero = Number(palpite);
  return !isNaN(numero) && numero >= 1 && numero <= 100;
}

function desejaJogarNovamente() {
  const resposta = prompt("🔁 Deseja jogar novamente? (s para sim / qualquer outra tecla para sair)");
  return resposta && resposta.trim().toLowerCase() === "s";
}

// Iniciar o jogo automaticamente ao carregar
iniciarJogo();
