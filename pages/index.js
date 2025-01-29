if (typeof window !== "undefined") {
  // Função para fechar o aviso
  function fecharAviso() {
    const aviso = document.getElementById('aviso');
    if (aviso) aviso.style.display = 'none';

    // Exibir o pop-up após o fechamento do aviso
    const popup = document.getElementById('popup');
    if (popup) popup.style.display = 'flex';
  }

  // Função para fechar o pop-up
  function fecharPopup() {
    const popup = document.getElementById('popup');
    if (popup) popup.style.display = 'none';
  }

  // Adiciona o evento de clique para fechar o aviso
  document.addEventListener('DOMContentLoaded', function() {
    const fecharBtn = document.getElementById('fecharBtn');
    if (fecharBtn) {
      fecharBtn.addEventListener('click', fecharAviso);
    }

    // Adiciona o evento de clique para fechar o pop-up
    const popupBtn = document.getElementById('popupBtn');
    if (popupBtn) {
      popupBtn.addEventListener('click', fecharPopup);
    }
  });
}
