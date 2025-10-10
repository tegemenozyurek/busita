import './App.css';
import { useState } from 'react';

function App() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const handleStart = () => {
    alert('Uygulama başlatılıyor!');
  };

  const handleQuoteClick = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const closeInfo = () => {
    setShowInfo(false);
  };

  const apologies = [
    { text: "Özür dilerim", lang: "Türkçe" },
    { text: "Sorry", lang: "English" },
    { text: "Lo siento", lang: "Español" },
    { text: "Pardon", lang: "Français" },
    { text: "Entschuldigung", lang: "Deutsch" },
    { text: "Scusa", lang: "Italiano" },
    { text: "Desculpa", lang: "Português" },
    { text: "Извините", lang: "Русский" },
    { text: "すみません", lang: "日本語" },
    { text: "죄송합니다", lang: "한국어" },
    { text: "对不起", lang: "中文" },
    { text: "معذرة", lang: "العربية" },
    { text: "क्षमा करें", lang: "हिन्दी" },
    { text: "Συγγνώμη", lang: "Ελληνικά" },
    { text: "Przepraszam", lang: "Polski" }
  ];

  const quotes = [
    "Affetmek büyüklüktendir.",
    "Affetmek, intikamdan daha asil bir davranıştır.",
    "Bağışlamak, insanın kalbinin zenginliğindendir.",
    "Kin tutan kalp huzur bulmaz.",
    "Bağışlamak erdemdir, unutmak bilgelik.",
    "Kırgınlık yük, affetmek hafifliktir.",
    "Affeden, kendini özgür kılar.",
    "Cezalandırmak kolaydır; asil olan affetmektir.",
    "Affetmek, kudretin en yüce hâlidir.",
    "Affetmek, geçmişi değiştirmez ama geleceğe ışık tutar.",
    "Zayıflar asla affedemez; affetmek güçlülerin özelliğidir.",
    "Başkalarını affetmek huzur verir; kendini affetmek özgürlük.",
    "Gerçek güç, affedebilme cesaretidir.",
    "Affetmek, kalbi onarmaktır.",
    "Kırgınlık zincir, affetmek anahtardır.",
    "Affetmek unutmak değil, yükü bırakmaktır.",
    "İntikam ruhu zehirler, affetmek arındırır.",
    "En derin intikam, affetmektir.",
    "Bazı yaralar sadece affetmekle iyileşir."
  ];

  return (
    <div className="App">
      <div className="landing-page">
        {/* Info button */}
        <button className="info-button" onClick={handleInfoClick}>
          <div className="info-icon">
            <div className="info-circle">i</div>
          </div>
        </button>

        {/* Info modal */}
        {showInfo && (
          <div className="info-modal-overlay" onClick={closeInfo}>
            <div className="info-modal" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={closeInfo}>×</button>
              <p className="info-text">
                Slm, bu farklı sonları olan bir mini oyun ama zaman makinesi gibi takılabilirsin.
              </p>
            </div>
          </div>
        )}

        {/* Rain of apologies */}
        <div className="rain-container">
          {apologies.map((apology, index) => (
            <div
              key={index}
              className="rain-text"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              {apology.text}
            </div>
          ))}
        </div>
        
        <div className="landing-content">
          <h1 className="main-title">Zaman Makinesi</h1>
          <button className="start-button" onClick={handleStart}>
            Çalıştır
          </button>
        </div>

        {/* Quotes section */}
        <div className="quotes-section" onClick={handleQuoteClick}>
          <div className="quote-container">
            <p className="quote-text">{quotes[currentQuoteIndex]}</p>
            <p className="quote-hint">Tıklayarak değiştir</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
