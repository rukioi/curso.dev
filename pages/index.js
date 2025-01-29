import React, { useEffect } from 'react';
import '../styles/global.css'; // Importa o CSS global

const Home = () => {

  useEffect(() => {
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
    const fecharBtn = document.getElementById('fecharBtn');
    if (fecharBtn) {
      fecharBtn.addEventListener('click', fecharAviso);
    }

    // Adiciona o evento de clique para fechar o pop-up
    const popupBtn = document.getElementById('popupBtn');
    if (popupBtn) {
      popupBtn.addEventListener('click', fecharPopup);
    }

  }, []);

  return (
    <>
      <div id="aviso">
        <div className="aviso-content">
          <h1>ATENÇÃO!</h1>
          <h2>VOCÊ FOI HACKeADO!</h2>
          <p>Seus dados estão comprometidos.</p>
          <button id="fecharBtn">Fechar</button>
        </div>
      </div>

      {/* Pop-up */}
      <div id="popup" className="popup">
        <div className="popup-content">
          <h2>Por que você fez isso?</h2>
          <p>HAHAHA! Agora estou dentro do seu dispositivo!</p>
          <button id="popupBtn">OK</button>
        </div>
      </div>
    </>
  );
};

export default Home;
