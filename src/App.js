import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const [currentPage, setCurrentPage] = useState('landing'); // 'landing', 'onboarding1', 'onboarding2', 'onboarding3', 'timemachine', 'fuar-gunu', 'egemen-bilmiyordu', 'next-page', 'sad-ending', 'happy-ending', 'fuar-ertesi-sabah', 'fuar-ertesi-alternative', 'yazdin-gun', 'yazdin-gun-alternative', 'ertesi-gun', 'ertesi-gun-alternative', 'gecmis-cmt', 'gecmis-cmt-alternative'
  const [timer, setTimer] = useState(15);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [showBackMessage, setShowBackMessage] = useState(false);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [noButtonClicks, setNoButtonClicks] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const [isHeartBroken, setIsHeartBroken] = useState(false);
  const [buttonsLocked, setButtonsLocked] = useState(false);
  const [showRestartPopup, setShowRestartPopup] = useState(false);

  const sunflowerEmojis = ['🌻', '🌻', '🌻', '🌻', '🌻', '🌻', '🌻', '🌻', '🌻', '🌻', '🌻', '🌻', '🌻', '🌻', '🌻'];

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
    } else if (event === "Fuar Gününün Ertesi Sabahı") {
      setCurrentPage('fuar-ertesi-sabah');
    } else if (event === "Yazdığın Gün") {
      setCurrentPage('yazdin-gun');
    } else if (event === "Ertesi gün (buluşma)") {
      setCurrentPage('ertesi-gun');
    } else if (event === "Geçtiğimiz Cmt") {
      setCurrentPage('gecmis-cmt');
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


  const handleChangeToAlternative = () => {
    setCurrentPage('egemen-bilmiyordu');
  };

  const handleNextToNewPage = () => {
    setCurrentPage('next-page');
    setNoButtonClicks(0);
    setIsHeartBroken(false);
    setButtonsLocked(false);
  };

  const handleSadEnding = () => {
    setCurrentPage('sad-ending');
  };

  const handleRestartClick = () => {
    setShowRestartPopup(true);
  };

  const handleRestartYes = () => {
    setCurrentPage('happy-ending');
    setShowRestartPopup(false);
  };

  const handleHappyEnding = () => {
    setCurrentPage('happy-ending');
  };

  const handleFuarErtesiAlternative = () => {
    setCurrentPage('fuar-ertesi-alternative');
  };

  const handleYazdinGunAlternative = () => {
    setCurrentPage('yazdin-gun-alternative');
  };

  const handleErtesiGunAlternative = () => {
    setCurrentPage('ertesi-gun-alternative');
  };

  const handleGecmisCmtAlternative = () => {
    setCurrentPage('gecmis-cmt-alternative');
  };

  const handleRestartNo = () => {
    setCurrentPage('timemachine');
    setShowRestartPopup(false);
  };

  const handleNoButtonClick = () => {
    if (buttonsLocked) return;
    
    if (noButtonClicks < 4) {
      setNoButtonClicks(prev => prev + 1);
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 500);
    } else if (noButtonClicks === 4) {
      setNoButtonClicks(prev => prev + 1);
      setIsShaking(true);
      setIsHeartBroken(true);
      setButtonsLocked(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 500);
      setTimeout(() => {
        setButtonsLocked(false);
      }, 4000);
    } else {
      handleSadEnding();
    }
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
        <h1 className="fuar-gunu-title">Fuar Gecesi Egemen'in hissettikleri</h1>
        <div className="fuar-gunu-text">
          <p>Fuar günü Egemen çok ateşli, resmen bok gibi hasta. Bir önceki gün yataktan kalkamamıştı ama bu gece beş saat kadar ayakta duruyor. Yaptığı iş orada bilgisayardan çok fiziksel; aşırı yorgun ve stresli.</p>
          
          <p>Kız arkadaşı Buse ile iletişime geçmeye çalışıyor. Online olsa da yazmadığını görüyor. "Ben hastayım, çalışıyorum; o evde ve tek kelime yazdıkları dışında umursamıyor bile." diye düşünüyor. Egemen bunları konuşmak istiyor çünkü ortada ciddi bir sıkıntı var.</p>
          
          <p>Fuardan çıkar çıkmaz mesaj bombardımanı yapıyor. Buse çevrimiçi olmasına rağmen dönmüyor ve en sonunda sadece "İzninle ders seçiyorum." notuyla bir fotoğraf geliyor. Egemen kırılıyor.</p>
          
          <p>Egemen biraz hızlı kırılıyor, çünkü bunu diyen kişiye değer veriyor. Eve gidiyor, tavırlı bir "İyi geceler." mesajı yazıp uyuyor.</p>
        </div>
        
        <button 
          className="change-button"
          onClick={handleChangeToAlternative}
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

  const renderEgemenBilmiyorduPage = () => (
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

      {/* Rain of sunflowers */}
      <div className="rain-container">
        {sunflowerEmojis.map((sunflower, index) => (
          <div
            key={index}
            className="rain-text sunflower-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {sunflower}
          </div>
        ))}
      </div>

      <div className="fuar-gunu-content">
        <h1 className="fuar-gunu-title">Egemen bunu bilmiyordu</h1>
        <div className="fuar-gunu-text">
          <p>Egemen bencillik etmişti. Buse'nin kıskandığını bilmiyordu. O dümdüz siklemediğini düşünmüştü. Ders seçimi gibi Buse için önemli bir olayın haberini alamadığı için kızgın ve kırgındı.</p>
          
          <p>Buse'nin kıskandığı için tavır aldığını fark eden Egemen, o gece eve geldiğinde "iyi geceler" yazmaz. Hissettiklerini anlatır ve Buse ile konuşur. Sorunu halleden çift yoluna devam eder.</p>
        </div>
        
        <button 
          className="change-button"
          onClick={handleNextToNewPage}
        >
          İlerle
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

  const renderNextPage = () => (
    <div className={`fuar-gunu-page ${isShaking ? 'shaking' : ''}`}>
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
        <div className="heart-container">
          <div className={`big-heart ${isHeartBroken ? 'broken' : ''}`}>
            {isHeartBroken ? '💔' : '❤️'}
          </div>
        </div>
        <h1 className="fuar-gunu-title">Barıştık mı? :)</h1>
        <h2 className="fuar-gunu-subtitle">Bu kadar basit değil biliyorum...</h2>
        
        <div className="button-container">
          <button 
            className="yes-button"
            onClick={handleHappyEnding}
          >
            EVET
          </button>
          <button 
            className="no-button"
            onClick={handleNoButtonClick}
          >
            HAYIR
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

  const renderSadEndingPage = () => (
    <div 
      className="sad-ending-page"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/sad.jpg)`
      }}
    >
      {/* Background music */}
      <audio autoPlay loop>
        <source src={`${process.env.PUBLIC_URL}/sad.mp3`} type="audio/mpeg" />
      </audio>
      <audio autoPlay loop>
        <source src={`${process.env.PUBLIC_URL}/ardaSad.mp3`} type="audio/mpeg" />
      </audio>
      
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

      <div className="sad-ending-content">
        <h1 className="sad-ending-title">Hayat bitti...</h1>
        <p className="sad-ending-text">Bazı 'hayır'lar, içten içe 'keşke'lerle yanar.</p>
        
        <button 
          className="restart-button"
          onClick={handleRestartClick}
        >
          Baştan Başla
        </button>
      </div>

      {/* Restart popup */}
      {showRestartPopup && (
        <div className="restart-popup-overlay" onClick={handleRestartNo}>
          <div className="restart-popup" onClick={(e) => e.stopPropagation()}>
            <h2 className="restart-popup-title">HERŞEYE BAŞTAN MI BAŞLAYALIM YOKSA???? :))))</h2>
            <div className="restart-popup-buttons">
              <button 
                className="restart-popup-yes"
                onClick={handleRestartYes}
              >
                EVET
              </button>
              <button 
                className="restart-popup-no"
                onClick={handleRestartNo}
              >
                Hayır zaman makinesine dön
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quotes section */}
      <div className="quotes-section" onClick={handleQuoteClick}>
        <div className="quote-container">
          <p className="quote-text">{quotes[currentQuoteIndex]}</p>
          <p className="quote-hint">Tıklayarak değiştir</p>
        </div>
      </div>
    </div>
  );

  const renderHappyEndingPage = () => (
    <div 
      className="happy-ending-page"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/happy.jpeg)`
      }}
    >
      {/* Background music */}
      <audio autoPlay loop>
        <source src={`${process.env.PUBLIC_URL}/happy.mp3`} type="audio/mpeg" />
      </audio>
      
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

      <div className="happy-ending-content">
        <h1 className="happy-ending-title">Mutlu Son! 🎉</h1>
        <p className="happy-ending-text">Evet demek cesarettir; çünkü sorumluluk yüklenmektir.</p>
        
        <button 
          className="restart-button"
          onClick={() => setCurrentPage('landing')}
        >
          Çok TŞK &lt;3
        </button>
      </div>

      {/* Restart popup */}
      {showRestartPopup && (
        <div className="restart-popup-overlay" onClick={handleRestartNo}>
          <div className="restart-popup" onClick={(e) => e.stopPropagation()}>
            <h2 className="restart-popup-title">HERŞEYE BAŞTAN MI BAŞLAYALIM YOKSA???? :))))</h2>
            <div className="restart-popup-buttons">
              <button 
                className="restart-popup-yes"
                onClick={handleRestartYes}
              >
                EVET
              </button>
              <button 
                className="restart-popup-no"
                onClick={handleRestartNo}
              >
                Hayır zaman makinesine dön
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Quotes section */}
      <div className="quotes-section" onClick={handleQuoteClick}>
        <div className="quote-container">
          <p className="quote-text">{quotes[currentQuoteIndex]}</p>
          <p className="quote-hint">Tıklayarak değiştir</p>
        </div>
      </div>
    </div>
  );

  const renderFuarErtesiSabahPage = () => (
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
        <h1 className="fuar-gunu-title">Fuar Gününün Ertesi Sabah Egemen'in Hissettikleri</h1>
        <div className="fuar-gunu-text">
          <p>Egemen sabah kalktı ve telefonunda sadece "Oha, abart." yazısını gördü. Buna çok içerledi. Evden çıkıp işe gelene kadar kafasında,</p>
          
          <p>"Bu olanlara karşı sadece bunu mu yazıyor? Gram umursamıyor lan beni!" tarzında düşünceler dönüp duruyordu.</p>
          
          <p>İşe gelmesine iki dakika kala, WhatsApp'tan o lanet bloklama hareketini yaptı. Buse, Instagram'dan ulaşmaya çalıştı — blok. Snapchat'ten yazdı — blok. En son TikTok'tan gergin bir konuşma, ardından ise Instagram'da devam eden ayrılık mesajları geldi.</p>
          
          <p>Egemen, Instagram'daki konuşmadan şunu çıkarmıştı: "Ben bir bok yedim ama özür dileyip barışmak istesem de bu kız bunu istemiyor. Ben bloklamasam bile zaten bunu düşünüyordu."</p>
          
          <p>Çok üzücü olsa bile, gitmeliydi. Gururlu olmalıydı.</p>
        </div>
        
        <button 
          className="change-button"
          onClick={handleFuarErtesiAlternative}
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

  const renderFuarErtesiAlternativePage = () => (
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

      {/* Rain of sunflowers */}
      <div className="rain-container">
        {sunflowerEmojis.map((sunflower, index) => (
          <div
            key={index}
            className="rain-text sunflower-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {sunflower}
          </div>
        ))}
      </div>

      <div className="fuar-gunu-content">
        <h1 className="fuar-gunu-title">Egemen hata yapmıştı...</h1>
        <div className="fuar-gunu-text">
          <p>Egemen gelecekte olanları gördü. Geçmişe döndü. Sabah kalkınca: "Günaydın, konuşabilir miyiz? Dünden beri olanlar çok üzücü bir sıkıntı mı var?" diyerek konuyu açtı.</p>
          
          <p>Çift bu problemi çerez niyetine yedi ve yoluna devam etti.</p>
        </div>
        
        <button 
          className="change-button"
          onClick={handleNextToNewPage}
        >
          İlerle
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

  const renderYazdinGunPage = () => (
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
        <h1 className="fuar-gunu-title">Yazdığın Gün Egemen'in Hissettikleri</h1>
        <div className="fuar-gunu-text">
          <p>Egemen, Buse'nin yazmayacağını; eğer yazarsa 22'si veya 23'ünde yazacağını biliyordu. (Harbiden arkadaşlara falan da hep dedim, "şu tarihler kritik" diye.)</p>
          
          <p>Almanca dersinin tam ortasında Buse'den bir mesaj alan Egemen, bütün ders boyunca mutluluktan piç piç sırıttı. Olmuştu işte; problemi çözebileceklerdi.</p>
          
          <p>Ama Egemen bazen bir tık mal olabiliyordu. Buse'nin tekrar konuşmak için mi yazdığını tam anlayamamıştı. Çok mutlu olsa bile emin olmak için sordu. Bir tık kabaydı da… Bunu çok geç fark edecekti.</p>
          
          <p>Egemen kararlıydı; Buse'nin konuşmak istediğine inanmak ve bunu onun ağzından duymak istiyordu. Ancak bunu başaramadı. Egemen'e tekrar yazılması yetmemişti. Green flag'i aldı, götüne soktu… Buse'nin hevesini kırdı.</p>
        </div>
        
        <button 
          className="change-button"
          onClick={handleYazdinGunAlternative}
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

  const renderYazdinGunAlternativePage = () => (
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

      {/* Rain of sunflowers */}
      <div className="rain-container">
        {sunflowerEmojis.map((sunflower, index) => (
          <div
            key={index}
            className="rain-text sunflower-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {sunflower}
          </div>
        ))}
      </div>

      <div className="fuar-gunu-content">
        <h1 className="fuar-gunu-title">Egemen akıllı ol</h1>
        <div className="fuar-gunu-text">
          <p>Egemen tekrar barışmak için kaçırdığı fırsattan aşırı bir haberdi. Ancak gelecekte olanları gördü. Bu sefer Buse yazınca ona eskileri açmak yerine samimi ve tatlı cevaplar verdi.</p>
          
          <p>Buse'nin İzmir'e gelmesiyle de hemen hemen denk olduğuna inandığımız bu gün buluşan çift birasını içti keyfine baktı.</p>
          
          <p>GG WP O7</p>
        </div>
        
        <button 
          className="change-button"
          onClick={handleNextToNewPage}
        >
          İlerle
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

  const renderErtesiGunPage = () => (
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
        <h1 className="fuar-gunu-title">Buluşma Günü Egemen'in Hissettikleri</h1>
        <div className="fuar-gunu-text">
          <p>Egemen, bir önceki çok kötü kapanan günün ardından bir şeyler yapmalıydı. Kafası karman çormandı; sevdiği insanla günler sonra tekrar konuşmuş ve yine bloklanmıştı. Bu işi bitirmeliydi — hem de bir mesajla olmamalıydı.</p>
          
          <p>Bunu Buse ile paylaştı ve görüşmek üzere anlaştılar. Egemen buluşma yerine gidip yaklaşık üç saat boyunca Buse'yi bekledi. Kafasında, yüz yüze her şeyi halledebileceklerine dair büyük umutlar vardı. Ama Buse istemez belki diye eşyalarını da getirmişti.</p>
          
          <p>Buse'nin gelmeyeceğini ve bunun sebebini öğrenemeyen Egemen çok düştü. O gün, Buse'ye ilk defa saygısız laflar etti.</p>
        </div>
        
        <button 
          className="change-button"
          onClick={handleErtesiGunAlternative}
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

  const renderErtesiGunAlternativePage = () => (
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

      {/* Rain of sunflowers */}
      <div className="rain-container">
        {sunflowerEmojis.map((sunflower, index) => (
          <div
            key={index}
            className="rain-text sunflower-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {sunflower}
          </div>
        ))}
      </div>

      <div className="fuar-gunu-content">
        <h1 className="fuar-gunu-title">Başka gün buluşma</h1>
        <div className="fuar-gunu-text">
          <p>Egemen bunların hepsini yaşadı. Ancak artık bir zaman makinesi vardı. Buse'yi buluşmak için biraz zorladığını, hatta belki emrivaki yaptığını fark etmişti.</p>
          
          <p>Bu sefer sadece iki kere sordu buluşup buluşmamak konusunu. Buse ise ilk başta "hayır" dese de sonra kabul etti. Daha uygun bir günde Egemen, bu kez Bornova tarafına geldi.</p>
          
          <p>Yüz yüze geldiklerinde, Buse'nin kararı ne olacaktı…?</p>
        </div>
        
        <button 
          className="change-button"
          onClick={handleNextToNewPage}
        >
          İlerle
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

  const renderGecmisCmtPage = () => (
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
        <h1 className="fuar-gunu-title">Amk Cumartesisi</h1>
        <div className="fuar-gunu-text">
          <p>Şu siktimin cumartesi günü… Egemen de Buse de çok kabaydı. Kaba olabilirsin ama hakaret etmek ne mk, Egemen'i…</p>
          
          <p>O gün Egemen, Felipe Melo'nun üstüne atlayan Volkan Demirel gibiydi. Her denilene kudurdu ve çirkinleşti. Kendisine söylenen — özellikle "Üzüldüğüm geceler oldu."ya karşı aldığı "Tüh." cevabı ve "Ruh eşim diyordun." cümlesi — Egemen'i Hulk'a dönüştürdü. Ağzına geleni söyledi.</p>
          
          <p>Egemen çok pişman… Egemen çok üzgün…</p>
        </div>
        
        <button 
          className="change-button"
          onClick={handleGecmisCmtAlternative}
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

  const renderGecmisCmtAlternativePage = () => (
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

      {/* Rain of sunflowers */}
      <div className="rain-container">
        {sunflowerEmojis.map((sunflower, index) => (
          <div
            key={index}
            className="rain-text sunflower-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            {sunflower}
          </div>
        ))}
      </div>

      <div className="fuar-gunu-content">
        <h1 className="fuar-gunu-title">Tek çare</h1>
        <div className="fuar-gunu-text">
          <p>Egemen bütün dediklerinden büyük pişman (Buse demişti pişman olursun diye, haklıydı). O gün hiç konuşmamalılardı. Egemen geçmişteki kendini gördü.</p>
          
          <p>Tam yazarken telefonunu alıp denize attı. Egemen telefonsuz kaldı ve asla böyle şeyler yazamadı.</p>
        </div>
        
        <button 
          className="change-button"
          onClick={handleNextToNewPage}
        >
          İlerle
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
        "Valla Pişmanım",
        "kafamı sikim"
      )}

      {currentPage === 'onboarding3' && renderOnboardingPage(
        3,
        "Hazır mısın?",
        "Umarım seversin 🥹"
      )}

              {currentPage === 'timemachine' && renderTimeMachinePage()}

              {currentPage === 'fuar-gunu' && renderFuarGunuPage()}

              {currentPage === 'egemen-bilmiyordu' && renderEgemenBilmiyorduPage()}

              {currentPage === 'next-page' && renderNextPage()}

              {currentPage === 'sad-ending' && renderSadEndingPage()}

              {currentPage === 'happy-ending' && renderHappyEndingPage()}

              {currentPage === 'fuar-ertesi-sabah' && renderFuarErtesiSabahPage()}

              {currentPage === 'fuar-ertesi-alternative' && renderFuarErtesiAlternativePage()}

              {currentPage === 'yazdin-gun' && renderYazdinGunPage()}

              {currentPage === 'yazdin-gun-alternative' && renderYazdinGunAlternativePage()}

              {currentPage === 'ertesi-gun' && renderErtesiGunPage()}

              {currentPage === 'ertesi-gun-alternative' && renderErtesiGunAlternativePage()}

              {currentPage === 'gecmis-cmt' && renderGecmisCmtPage()}

              {currentPage === 'gecmis-cmt-alternative' && renderGecmisCmtAlternativePage()}
            </div>
          );
        }

        export default App;
