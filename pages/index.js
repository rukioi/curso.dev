// pages/index.js
import React, { useState } from 'react';

const Home = () => {
  const [avisoVisivel, setAvisoVisivel] = useState(true);
  const [popupVisivel, setPopupVisivel] = useState(false);

  const fecharAviso = () => {
    setAvisoVisivel(false);
    setPopupVisivel(true);
  };

  const fecharPopup = () => {
    setPopupVisivel(false);
  };

  return (
    <>
      {avisoVisivel && (
        <div id="aviso">
          <div className="aviso-content">
            <h1>ATENÇÃO!</h1>
            <h2>VOCÊ FOI HACKeADO!</h2>
            <p>Seus dados estão comprometidos.</p>
            <button onClick={fecharAviso}>Fechar</button>
          </div>
        </div>
      )}

      {/* Pop-up */}
      {popupVisivel && (
        <div id="popup" className="popup">
          <div className="popup-content">
            <h2>Por que você fez isso?</h2>
            <p>HAHAHA! Agora estou dentro do seu dispositivo!</p>
            <button onClick={fecharPopup}>OK</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
