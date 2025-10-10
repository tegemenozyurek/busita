import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing', 'onboarding1', 'onboarding2', 'onboarding3', 'timemachine', 'fuar-gunu'
  const [timer, setTimer] = useState(15);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [showBackMessage, setShowBackMessage] = useState(false);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const handleStart = () => {
    setCurrentPage('onboarding1');
    setTimer(15);
    setIsTimerActive(true);
  };

  // Timer effect
  useEffect(() => {
    let interval = null;
    if (isTimerActive && timer > 0) {
      interval = setInterval(() => {
        setTimer(timer => timer - 1);
      }, 1000);
    } else if (timer === 0 && currentPage === 'onboarding1') {
      setCurrentPage('onboarding2');
      setIsTimerActive(false);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timer, currentPage]);

  const handleQuoteClick = () => {
    setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };

  const handleInfoClick = () => {
    setShowInfo(!showInfo);
  };

  const closeInfo = () => {
    setShowInfo(false);
  };

  const handleNextPage = () => {
    if (currentPage === 'onboarding1') {
      setIsTimerActive(false);
      setCurrentPage('onboarding2');
    } else if (currentPage === 'onboarding2') {
      setCurrentPage('onboarding3');
    } else if (currentPage === 'onboarding3') {
      setCurrentPage('timemachine');
    }
  };

  const handlePrevPage = () => {
    // Show message instead of going back
    setShowBackMessage(true);
    setTimeout(() => {
      setShowBackMessage(false);
    }, 3000);
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

  const timeEvents = [
    "Fuar Günü",
    "Fuar Gününün Ertesi Sabahı",
    "Yazdığın Gün",
    "Ertesi gün (buluşma)",
    "Geçtiğimiz Cmt"
  ];

  const handleEventSelect = (event) => {
    if (event === "Fuar Günü") {
      setCurrentPage('fuar-gunu');
    } else {
      alert(`Seçilen olay: ${event}\n\nBu olaya gidiliyor...`);
    }
  };

  const handleSwipeUp = () => {
    setCurrentEventIndex((prevIndex) => 
      prevIndex === timeEvents.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSwipeDown = () => {
    setCurrentEventIndex((prevIndex) => 
      prevIndex === 0 ? timeEvents.length - 1 : prevIndex - 1
    );
  };

  const handleBackToTimeMachine = () => {
    setCurrentPage('timemachine');
  };


  const renderTimeMachinePage = () => (
    <div className="timemachine-page">
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
            <div className="info-text">
              <ul className="info-list">
                <li>Slm, bu farklı sonları olan bir mini oyun ama zaman makinesi gibi takılabilirsin.</li>
                <li>Ayrıca Block Blast'ten çok daha iyi</li>
                <li>Biraz metin tabanlı ama umarım seversin</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="timemachine-content">
        <h1 className="timemachine-title">ZAMAN MAKİNESİ</h1>
        <p className="timemachine-subtitle">Kaydırarak olayları değiştir</p>
        
        <div className="single-event-container">
          <div className="event-indicator">
            {currentEventIndex + 1} / {timeEvents.length}
          </div>
          
          <div className="event-navigation">
            <button 
              className="nav-arrow-button left-arrow"
              onClick={handleSwipeDown}
            >
              ◀
            </button>
            
            <div className="single-event-display">
              <div className="event-text">{timeEvents[currentEventIndex]}</div>
            </div>
            
            <button 
              className="nav-arrow-button right-arrow"
              onClick={handleSwipeUp}
            >
              ▶
            </button>
          </div>
          
          <button 
            className="teleport-button"
            onClick={() => handleEventSelect(timeEvents[currentEventIndex])}
          >
            Zamana Işınlan
          </button>
        </div>
      </div>

      {/* Quotes section */}
      <div className="quotes-section" onClick={handleQuoteClick}>
        <div className="quote-container">
          <p className="quote-text">{quotes[currentQuoteIndex]}</p>
          <p className="quote-hint">Tıklayarak değiştir</p>
        </div>
      </div>
    </div>
  );

  const renderFuarGunuPage = () => (
    <div className="fuar-gunu-page">
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
            <div className="info-text">
              <ul className="info-list">
                <li>Slm, bu farklı sonları olan bir mini oyun ama zaman makinesi gibi takılabilirsin.</li>
                <li>Ayrıca Block Blast'ten çok daha iyi</li>
                <li>Biraz metin tabanlı ama umarım seversin</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="fuar-gunu-content">
        <h1 className="fuar-gunu-title">Fuar Fecesi Egemen'in hissettikleri</h1>
        <div className="fuar-gunu-text">
          <p>Fuar günü Egemen çok ateşli, resmen bok gibi hasta. Bir önceki gün yataktan kalkamamıştı ama bu gece beş saat kadar ayakta duruyor. Yaptığı iş orada bilgisayardan çok fiziksel; aşırı yorgun ve stresli.</p>
          
          <p>Kız arkadaşı Buse ile iletişime geçmeye çalışıyor. Online olsa da yazmadığını görüyor. "Ben hastayım, çalışıyorum; o evde ve tek kelime yazdıkları dışında umursamıyor bile." diye düşünüyor. Egemen bunları konuşmak istiyor çünkü ortada ciddi bir sıkıntı var.</p>
          
          <p>Fuardan çıkar çıkmaz mesaj bombardımanı yapıyor. Buse çevrimiçi olmasına rağmen dönmüyor ve en sonunda sadece "İzninle ders seçiyorum." notuyla bir fotoğraf geliyor. Egemen kırılıyor.</p>
          
          <p>Egemen biraz hızlı kırılıyor, çünkü bunu diyen kişiye değer veriyor. Eve gidiyor, tavırlı bir "İyi geceler." mesajı yazıp uyuyor.</p>
        </div>
        
        <button 
          className="change-button"
          onClick={handleBackToTimeMachine}
        >
          Değiştir
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
  );

  const renderOnboardingPage = (pageNumber, title, content) => (
    <div className="onboarding-page">
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
            <div className="info-text">
              <ul className="info-list">
                <li>Slm, bu farklı sonları olan bir mini oyun ama zaman makinesi gibi takılabilirsin.</li>
                <li>Ayrıca Block Blast'ten çok daha iyi</li>
                <li>Biraz metin tabanlı ama umarım seversin</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      
      <div className="onboarding-content">
        <h1 className="onboarding-title">{title}</h1>
        <div className="onboarding-text">
          {content}
        </div>
        
        <div className="onboarding-navigation">
          {pageNumber > 1 && (
            <div className="back-button-container">
              <button className="nav-button prev-button" onClick={handlePrevPage}>
                Geri
              </button>
              {showBackMessage && (
                <div className="back-message">
                  Geri dönüş yok, taşşaklı olduğunu sanıyordum
                </div>
              )}
            </div>
          )}
          <div className="nav-section">
            <button 
              className={`nav-button next-button ${pageNumber === 1 ? 'disabled' : ''}`} 
              onClick={handleNextPage}
              disabled={pageNumber === 1}
            >
              {pageNumber === 3 ? 'Başla' : 'İleri'}
            </button>
            {pageNumber === 1 && isTimerActive && (
              <div className="timer-display">
                {timer} saniye
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quotes section */}
      <div className="quotes-section" onClick={handleQuoteClick}>
        <div className="quote-container">
          <p className="quote-text">{quotes[currentQuoteIndex]}</p>
          <p className="quote-hint">Tıklayarak değiştir</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="App">
      {currentPage === 'landing' && (
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
                <div className="info-text">
                  <ul className="info-list">
                    <li>Slm, bu farklı sonları olan bir mini oyun ama zaman makinesi gibi takılabilirsin.</li>
                    <li>Ayrıca Block Blast'ten çok daha iyi</li>
                    <li>Biraz metin tabanlı ama umarım seversin</li>
                  </ul>
                </div>
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
      )}

      {currentPage === 'onboarding1' && renderOnboardingPage(
        1,
        "Bu gerçek bir zaman makinesi!!!!",
        "Kullanmak için taşşaklı birisi olmak gerekiyor. Sende de var biliyoz. Bu yüzden bu kısmı otomatik geçiyoruz."
      )}

      {currentPage === 'onboarding2' && renderOnboardingPage(
        2,
        "Nasıl Oynanır?",
        "Oyunda karşına çıkan seçeneklerden birini seçeceksin. Her seçim seni farklı bir yola götürecek. Merak etme, yanlış seçim yok - sadece farklı hikayeler var!"
      )}

      {currentPage === 'onboarding3' && renderOnboardingPage(
        3,
        "Hazır mısın?",
        "Artık zaman yolculuğuna başlamaya hazırsın! Farklı sonları keşfetmek için oyunu birkaç kez oynayabilirsin. Her oynayışında yeni şeyler keşfedeceksin."
      )}

              {currentPage === 'timemachine' && renderTimeMachinePage()}

              {currentPage === 'fuar-gunu' && renderFuarGunuPage()}
            </div>
          );
        }

        export default App;
