/**
 * lang.js — Sistema di traduzione globale per gaetanodimauromusic
 * Include questo script in TUTTE le pagine del sito.
 * Legge/scrive la lingua in localStorage e applica le traduzioni.
 */

(function() {
  // ── Dizionario globale ──────────────────────────────────────────────
  const TRANSLATIONS = {
    it: {
      // Navigazione
      'nav_biografia': 'Biografia',
      'nav_discografia': 'Discografia',
      'nav_galleria': 'Galleria',
      'nav_instagram': 'Instagram',
      'nav_djset': 'DJ Set',
      'nav_ascolta': 'Ascolta',
      'nav_strumenti': 'Strumenti',
      'nav_contatti': 'Contatti',
      // Hero
      'hero_tag': 'Musicista · Produttore · Compositore · DJ',
      'hero_sub': 'Musicista, compositore e produttore catanese. Dall\'ambient all\'elettronica, dalla chitarra alla computer music. Ultimo lavoro: Rinse — 2025.',
      'hero_scroll': 'Scorri',
      // Sezioni
      'section_biografia': 'Biografia',
      'section_discografia': 'Discografia',
      'section_disco_hint': 'Discografia — passa il mouse sulla cover per vedere i brani',
      'section_galleria': 'Galleria',
      'section_ascolta': 'Ascolta',
      'section_strumenti': 'Strumenti & Attrezzatura',
      'section_contatti': 'Contatti',
      'section_seguimi': 'Seguimi',
      'section_djset': 'DJ Set · Mix',
      // About
      'about_h2': 'Suono come linguaggio',
      'about_p1': 'Gaetano Di Mauro è un musicista, compositore e produttore catanese. Appassionato di musica fin da bambino, ha iniziato a suonare la chitarra nel 1997, prima da autodidatta e poi al CESM di Catania. Le sue influenze spaziano da Pink Floyd e Pat Metheny a Miles Davis, Ennio Morricone e John Williams.',
      'about_p2': 'La sua discografia conta quattordici pubblicazioni tra album, EP e singoli — dall\'ambient classico di <em>Adagio Espressivo</em> (2015) fino al recente <em>Rinse</em> (2025), passando per concept album come <em>Television</em> e collaborazioni come <em>Interplay</em> con Antonino Cortese.',
      'stat_anni': 'Anni di carriera',
      'stat_pub': 'Pubblicazioni',
      'stat_luogo': 'Catania, Sicilia',
      'stat_fans': 'Ascoltatori / mese',
      // Press
      'press_h2': 'La critica\nha scritto di me',
      // Gear
      'gear_h2': 'Il suono nasce\ndagli strumenti giusti',
      'gear_sub': 'Le marche con cui lavoro ogni giorno — in studio e sul palco.',
      'gear_chitarre': 'Chitarre & Amplificatori',
      'gear_audio': 'Audio & Studio',
      'gear_dj': 'DJ & Produzione',
      'gear_software': 'Software & DAW',
      // Listen
      'listen_h2': 'La mia musica\nsu tutte le piattaforme',
      'listen_single_label': 'Ultimo singolo · 2025',
      'platform_video': 'Video & Musica',
      // DJ
      'dj_h2': 'Dietro\nai piatti',
      'dj_p1': 'Oltre alla composizione e alla produzione musicale, Gaetano porta la sua sensibilità sonora anche nei DJ set: percorsi elettronici che spaziano dall\'ambient all\'elettronica più sperimentale, con un\'attenzione ossessiva per i dettagli e per la costruzione di atmosfere.',
      'dj_p2': 'Ogni mix è un viaggio — non una semplice selezione di brani, ma una narrazione coerente che riflette la stessa cura che mette in ogni sua produzione originale.',
      'dj_set_pub': 'Set pubblicati',
      'dj_ultimi': 'Ultimi set',
      'dj_ultimo_set': 'Ultimo set pubblicato',
      'dj_tutti': 'TUTTI I SET',
      'dj_visita': 'Visita il profilo\nMixcloud',
      'dj_tutti_mix': 'Tutti i mix in un unico posto',
      'dj_apri': 'Apri Mixcloud',
      // Instagram
      'ig_title': 'Post &\nStorie',
      'ig_desc': 'Aggiornamenti dal vivo, dietro le quinte, nuove uscite e momenti dal palco. Seguimi su Instagram per restare in contatto.',
      'ig_btn': 'Apri Instagram ↗',
      'ig_account': 'Account ufficiale',
      'ig_feed': 'Feed aggiornato',
      'ig_storie_label': 'In evidenza',
      'ig_ultimi': 'Ultimi post',
      'ig_storie_title': 'Storie in evidenza',
      'ig_storie_text': 'Le storie in evidenza sono visibili direttamente su Instagram.',
      'ig_storie_btn': 'Vedi le storie ↗',
      'ig_follow': 'Seguimi per aggiornamenti',
      'ig_backstage': 'Backstage, nuovi brani, live.',
      // Contatti
      'contact_h2': 'Lavoriamo insieme',
      'contact_sub': 'Per collaborazioni, booking e produzioni',
      'contact_btn': 'Scrivimi',
      // Footer
      'footer_rights': 'Tutti i diritti riservati',
      // La mia band
      'band_label': 'La mia band',
      'band_cta': 'Scopri →',
      // Disco card
      'disco_approfondisci': 'Approfondisci →',
    },
    en: {
      // Navigazione
      'nav_biografia': 'Biography',
      'nav_discografia': 'Discography',
      'nav_galleria': 'Gallery',
      'nav_instagram': 'Instagram',
      'nav_djset': 'DJ Set',
      'nav_ascolta': 'Listen',
      'nav_strumenti': 'Gear',
      'nav_contatti': 'Contact',
      // Hero
      'hero_tag': 'Musician · Producer · Composer · DJ',
      'hero_sub': 'Musician, composer and producer from Catania, Sicily. From ambient to electronics, from guitar to computer music. Latest release: Rinse — 2025.',
      'hero_scroll': 'Scroll',
      // Sezioni
      'section_biografia': 'Biography',
      'section_discografia': 'Discography',
      'section_disco_hint': 'Discography — hover the cover to see tracks',
      'section_galleria': 'Gallery',
      'section_ascolta': 'Listen',
      'section_strumenti': 'Gear & Equipment',
      'section_contatti': 'Contact',
      'section_seguimi': 'Follow me',
      'section_djset': 'DJ Set · Mix',
      // About
      'about_h2': 'Sound as language',
      'about_p1': 'Gaetano Di Mauro is a musician, composer and producer from Catania, Sicily. Passionate about music since childhood, he began playing guitar in 1997, first self-taught and later at the CESM in Catania. His influences range from Pink Floyd and Pat Metheny to Miles Davis, Ennio Morricone and John Williams.',
      'about_p2': 'His discography spans fourteen releases including albums, EPs and singles — from the classical ambient of <em>Adagio Espressivo</em> (2015) to the recent <em>Rinse</em> (2025), including concept albums like <em>Television</em> and collaborations like <em>Interplay</em> with Antonino Cortese.',
      'stat_anni': 'Years of career',
      'stat_pub': 'Releases',
      'stat_luogo': 'Catania, Sicily',
      'stat_fans': 'Monthly listeners',
      // Press
      'press_h2': 'What the press\nsaid',
      // Gear
      'gear_h2': 'Sound starts\nwith the right tools',
      'gear_sub': 'The brands I work with every day — in the studio and on stage.',
      'gear_chitarre': 'Guitars & Amplifiers',
      'gear_audio': 'Audio & Studio',
      'gear_dj': 'DJ & Production',
      'gear_software': 'Software & DAW',
      // Listen
      'listen_h2': 'My music\non all platforms',
      'listen_single_label': 'Latest single · 2025',
      'platform_video': 'Video & Music',
      // DJ
      'dj_h2': 'Behind\nthe decks',
      'dj_p1': 'Beyond composition and music production, Gaetano brings his sonic sensibility to his DJ sets: electronic journeys spanning from ambient to more experimental electronics, with an obsessive attention to detail and atmosphere-building.',
      'dj_p2': 'Every mix is a journey — not a simple track selection, but a coherent narrative that reflects the same care he puts into every original production.',
      'dj_set_pub': 'Published sets',
      'dj_ultimi': 'Latest sets',
      'dj_ultimo_set': 'Latest published set',
      'dj_tutti': 'ALL SETS',
      'dj_visita': 'Visit the Mixcloud\nprofile',
      'dj_tutti_mix': 'All mixes in one place',
      'dj_apri': 'Open Mixcloud',
      // Instagram
      'ig_title': 'Posts &\nStories',
      'ig_desc': 'Live updates, behind the scenes, new releases and stage moments. Follow me on Instagram to stay connected.',
      'ig_btn': 'Open Instagram ↗',
      'ig_account': 'Official account',
      'ig_feed': 'Updated feed',
      'ig_storie_label': 'Highlights',
      'ig_ultimi': 'Latest posts',
      'ig_storie_title': 'Story highlights',
      'ig_storie_text': 'Story highlights are visible directly on Instagram.',
      'ig_storie_btn': 'See stories ↗',
      'ig_follow': 'Follow for updates',
      'ig_backstage': 'Backstage, new tracks, live.',
      // Contatti
      'contact_h2': 'Let\'s work together',
      'contact_sub': 'For collaborations, booking and productions',
      'contact_btn': 'Get in touch',
      // Footer
      'footer_rights': 'All rights reserved',
      // La mia band
      'band_label': 'My band',
      'band_cta': 'Discover →',
      // Disco card
      'disco_approfondisci': 'Explore →',
    }
  };

  // ── Applica traduzioni agli elementi con data-langkey ───────────────
  function applyTranslations(lang) {
    const t = TRANSLATIONS[lang] || TRANSLATIONS.it;
    
    // Elementi con data-langkey="chiave"
    document.querySelectorAll('[data-langkey]').forEach(el => {
      const key = el.dataset.langkey;
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    // Compatibilità con il vecchio sistema data-it / data-en
    document.querySelectorAll('[data-it]').forEach(el => {
      const val = lang === 'it' ? el.dataset.it : el.dataset.en;
      if (val !== undefined) el.innerHTML = val;
    });

    // Aggiorna bottoni lingua
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
  }

  // ── API pubblica ────────────────────────────────────────────────────
  window.LangSystem = {
    get: function() {
      return localStorage.getItem('gdm_lang') || 'it';
    },
    set: function(lang) {
      localStorage.setItem('gdm_lang', lang);
      applyTranslations(lang);
      // Emetti evento per logica custom della pagina (es. buildDisco)
      document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
    },
    apply: function() {
      applyTranslations(this.get());
    },
    t: function(key) {
      const lang = this.get();
      return (TRANSLATIONS[lang] || TRANSLATIONS.it)[key] || key;
    }
  };

  // ── Auto-inizializza quando il DOM è pronto ─────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      window.LangSystem.apply();
    });
  } else {
    window.LangSystem.apply();
  }
})();
