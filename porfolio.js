(function () {
  const translations = {
    en: {
      header: 'Portfolio Website',
      navLinks: ['About', 'Projects', 'Experience', 'Certificate', 'Skill', 'Contact'],
      about: {
        title: 'About Me',
        mini: 'A quick introduction',
        description: 'I specialize in Java Spring Boot, PHP Laravel and C# ASP.NET.',
        cvText: 'Download CV',
        cvFile: 'タッターサン.pdf',
      },
      hero: {
        kicker: 'Portfolio',
        note: 'Based in Japan • Open to opportunities',
      },
      sectionTitles: {
        experience: 'Experience',
        certificates: 'Certificates',
        skills: 'Programming Skills',
        projects: 'Projects',
        contact: 'Contact',
      },
      experience: {
        mini: 'Recent roles and training',
        highlightsTitle: 'Highlights',
        highlights: [
          'Backend development with Java Spring Boot, C# ASP.NET Core',
          'Database experience with MySQL, SQL Server, PostgreSQL',
          'Frontend experience with React and Vue.js',
          'Hands-on building full-stack projects end-to-end',
        ],
        items: [
          { title: 'System Engineer', location: 'Isehara, Kanagawa, Japan' },
          { title: 'Trainee', location: 'Lanmadaw, Yangon, Myanmar' },
          { title: 'Internship Trainee', location: 'Hlaing, Yangon, Myanmar' },
          { title: 'Instructor', location: 'North Dagon, Yangon, Myanmar' },
        ],
      },
      certificates: {
        mini: 'Key milestones',
        issuedByLabel: 'Issued by:',
        titles: [
          'NATTEST N2',
          'Fundamentals of Engineering',
          'JLPT N3',
          'Python For EveryBody',
          'Python For Beginners',
          'Introduction to Html 5',
          'SQL Fundamentals',
          'Capstone: Retrieving, Processing, and Visualizing Data with Python',
          'Programming for Everybody',
          'Python Data structures',
          'Using Python to Access Web Data',
        ],
      },
      skills: {
        mini: 'Tools and technologies',
        programmingLanguages: 'Programming Languages',
        frameworks: 'Frameworks',
        tools: 'Tools',
        languages: 'Languages',
        database: 'Database',
        langEnglish: 'English',
        langJapanese: 'Japanese',
      },
      projects: {
        mini: 'Selected work',
        details: 'Details',
        detailsSummary: 'Key features • Tech • Role',
        keys: 'Key Features',
        technologyUsed: 'Technologies Used',
        role: 'Role',
        goProject: 'Go to Project',
        productGo: 'View on GitHub',
        productManagement: {
          nameTitle: 'Product Management Project',
          nameText:
            'Product Management is a full-stack application for managing user accounts and product inventories. It enables users to register, log in, add products, and view products added by other users. The application combines C# for backend services, Vue.js for the frontend, and SQL Server for data storage.',
          keyTitle: 'Highlighted Features:',
          techTitle: 'Technical Stack:',
          roleTitle: 'My Contribution:',
          roleText:
            'Designed and implemented the backend using C# for API development and authentication. Developed frontend components using Vue.js for seamless user experience. Integrated SQL Server for data storage and retrieval. Implemented JWT and session-based authentication for user security.',
          goGithub: 'View on GitHub',
        },
        projectOne: {
          name: 'Game Project',
          description:
            'This multiplayer gaming platform features three classic games: Tic Tac Toe, Four in a Row, and Checkers. The game allows two players to compete against each other locally on the same device. The application includes a scoring system that displays the winner of each match and maintains a record of winning results, enhancing the competitive experience.',
          roleText:
            'Developed the core gameplay mechanics for each game, ensuring smooth and interactive user experience. Implemented multiplayer game logic for two players, allowing them to compete locally or over a local network. Created the scoring system and leaderboard to track winners and maintain game statistics. Worked on both the back-end (Spring Boot, MySQL) and front-end to ensure seamless gameplay.',
        },
        projectTwo: {
          name: 'Chatter',
          description:
            'Chatter is a messaging web application. The application allows registered users to log in, send and receive messages, use emojis, and share files. Its interactive interface and features make it user-friendly and engaging.',
          roleText:
            'Led the development of core messaging functionalities, including the emoji and file-sharing features. Built and integrated authentication using Spring Boot, ensuring secure login and user management. Enhanced the UI in React to make the application more engaging and responsive.',
        },
        projectThree: {
          name: 'NetBuddy Project',
          description:
            'NetBuddy is a social media platform designed for seamless user interaction, content sharing, and real-time communication. The platform integrates modern technologies like WebSocket for real-time messaging, Google Drive for media storage, and SQL Server for data management. It offers a rich feature set for users to share content, interact with others, and communicate effectively.',
          roleText:
            'Designed and developed the core features for user management, content sharing, and real-time communication. Integrated Google Drive API for storing multimedia files and ensuring seamless media management. Implemented WebSocket for real-time messaging and user interactions. Worked on both the back-end (ASP.NET Core, SQL Server) and front-end to create an intuitive user experience.',
        },
      },
      contact: {
        mini: 'Let’s connect',
        nameLabel: 'Name:',
        emailLabel: 'Email:',
        messageLabel: 'Message:',
        sendBtn: 'Send',
      },
      footer: {
        footerTitle: 'Find Me Here',
        footerAddressTitle: '<strong>Address:</strong> Sakura Dai, Isehara, Kanagawa, Japan',
        footerRights: '© 2024 Portfolio Website. All rights reserved.',
      },
    },
    jp: {
      header: 'ポートフォリオサイト',
      navLinks: ['私について', 'プロジェクト', '経験', '証明書', 'スキル', '連絡先'],
      about: {
        title: '私について',
        mini: '簡単な紹介',
        description: 'Java Spring Boot と PHP Laravel を専門としています。',
        cvText: '履歴書をダウンロード',
        cvFile: 'タッターサン.pdf',
      },
      hero: {
        kicker: 'ポートフォリオ',
        note: '日本在住 • 機会を募集中',
      },
      sectionTitles: {
        experience: '経験',
        certificates: '証明書',
        skills: 'プログラミングスキル',
        projects: 'プロジェクト',
        contact: 'お問い合わせ',
      },
      experience: {
        mini: '最近の職務と研修',
        highlightsTitle: 'ハイライト',
        highlights: [
          'Java Spring Boot、C# ASP.NET Coreによるバックエンド開発',
          'MySQL、SQL Server、PostgreSQLのデータベース経験',
          'React、Vue.jsのフロントエンド経験',
          'フルスタックでの開発経験',
        ],
        items: [
          { title: 'システムエンジニア', location: '日本 神奈川県 伊勢原市' },
          { title: '研修生', location: 'ミャンマー ヤンゴン ランマドー' },
          { title: 'インターン研修生', location: 'ミャンマー ヤンゴン フライン' },
          { title: '講師', location: 'ミャンマー ヤンゴン ノースダゴン' },
        ],
      },
      certificates: {
        mini: '主な実績',
        issuedByLabel: '発行元:',
        titles: [
          'NATTEST N2',
          '工学の基礎',
          'JLPT N3',
          'みんなのためのPython',
          '初心者向けPython',
          'HTML5入門',
          'SQL基礎',
          'キャップストーン：Pythonでデータの取得・処理・可視化',
          'みんなのためのプログラミング',
          'Pythonデータ構造',
          'PythonでWebデータにアクセス',
        ],
      },
      skills: {
        mini: 'ツールと技術',
        programmingLanguages: 'プログラミング言語',
        frameworks: 'フレームワーク',
        tools: 'ツール',
        languages: '言語',
        database: 'データベース',
        langEnglish: '英語',
        langJapanese: '日本語',
      },
      projects: {
        mini: '代表的な作品',
        details: '詳細',
        detailsSummary: '主な特徴 • 技術 • 役割',
        keys: '主な特徴',
        technologyUsed: '使用技術',
        role: '役割',
        goProject: 'プロジェクトへ移動',
        productGo: 'GitHubで見る',
        productManagement: {
          nameTitle: '商品管理プロジェクト',
          nameText:
            '商品管理は、ユーザーアカウントと商品在庫を管理するフルスタックアプリケーションです。ユーザー登録、ログイン、商品の追加、他ユーザーが追加した商品の閲覧が可能です。バックエンドはC#、フロントエンドはVue.js、データベースはSQL Serverを使用しています。',
          keyTitle: '主な機能:',
          techTitle: '技術スタック:',
          roleTitle: '担当:',
          roleText:
            'C#でAPI開発と認証を含むバックエンドを設計・実装しました。Vue.jsでフロントエンドを開発し、スムーズなUXを実現しました。SQL Serverを統合し、データ保存・取得を実装しました。JWTとセッション認証でセキュアなアクセスを実現しました。',
          goGithub: 'GitHubで見る',
        },
        projectOne: {
          name: 'ゲームプロジェクト',
          description:
            'このマルチプレイヤーゲームプラットフォームは、三つのクラシックゲームを提供します：三目並べ、四つ並べ、チェッカー。ゲームは、同じデバイスで二人のプレイヤーが対戦できます。アプリケーションには、各試合の勝者を表示し、勝利結果を記録するスコアリングシステムが含まれており、競争体験を向上させます。',
          roleText:
            '各ゲームのコアゲームプレイメカニクスを開発し、スムーズでインタラクティブなユーザー体験を実現しました。2人プレイのゲームロジックを実装し、スコアリングシステムとリーダーボードを作成しました。バックエンド（Spring Boot、MySQL）とフロントエンドの両方でシームレスなゲームプレイを実現しました。',
        },
        projectTwo: {
          name: 'チャッター',
          description:
            'チャッターはメッセージングウェブアプリケーションです。登録ユーザーがログインし、メッセージの送受信、絵文字の使用、ファイルの共有ができます。ユーザーフレンドリーで魅力的なUIです。',
          roleText:
            '絵文字およびファイル共有機能を含むコアメッセージング機能の開発を主導しました。Spring Bootで認証機能を構築し、ReactでUIを強化しました。',
        },
        projectThree: {
          name: 'NetBuddyプロジェクト',
          description:
            'NetBuddyは、ユーザー同士のスムーズなインタラクション、コンテンツ共有、リアルタイムコミュニケーションを可能にするソーシャルメディアプラットフォームです。WebSocket、Google Drive、SQL Serverなどの技術を統合しています。',
          roleText:
            'ユーザー管理、コンテンツ共有、リアルタイム通信のためのコア機能を設計・実装しました。Google Drive APIを統合し、WebSocketでリアルタイムメッセージングを構築しました。',
        },
      },
      contact: {
        mini: 'お気軽にご連絡ください',
        nameLabel: '名前:',
        emailLabel: 'メール:',
        messageLabel: 'メッセージ:',
        sendBtn: '送信',
      },
      footer: {
        footerTitle: 'ここで見つけてください',
        footerAddressTitle: '　住所: 桜台　伊勢原　神奈川県',
        footerRights: '2024 ポートフォリオウェブサイト。全著作権所有。',
      },
    },
  };

  const el = (id) => document.getElementById(id);

  function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.body.classList.toggle('theme-dark', isDark);
    const icon = el('themeIcon');
    if (icon) {
      icon.className = isDark ? 'bi bi-sun' : 'bi bi-moon-stars';
    }
  }

  function applyLanguage(lang) {
    document.documentElement.lang = lang === 'jp' ? 'ja' : 'en';

    const t = translations[lang];
    if (!t) return;

    el('ui-hero-title').textContent = t.header;
    el('ui-kicker').textContent = t.hero.kicker;
    el('ui-hero-sub').textContent = t.about.description;
    el('ui-note').textContent = t.hero.note;

    el('nav-about').textContent = t.navLinks[0];
    el('nav-projects').textContent = t.navLinks[1];
    el('nav-experience').textContent = t.navLinks[2];
    el('nav-certificates').textContent = t.navLinks[3];
    el('nav-skills').textContent = t.navLinks[4];
    el('nav-contact').textContent = t.navLinks[5];

    el('about-title').textContent = t.about.title;
    el('about-mini').textContent = t.about.mini;
    el('about-desc').textContent = t.about.description;

    el('experience-title').textContent = t.sectionTitles.experience;
    el('experience-mini').textContent = t.experience.mini;
    el('experience-side-title').textContent = t.experience.highlightsTitle;
    el('experience-hl-1').textContent = t.experience.highlights[0];
    el('experience-hl-2').textContent = t.experience.highlights[1];
    el('experience-hl-3').textContent = t.experience.highlights[2];
    el('experience-hl-4').textContent = t.experience.highlights[3];

    t.experience.items.forEach((item, idx) => {
      const titleEl = el(`exp-${idx}-title`);
      const locEl = el(`exp-${idx}-location`);
      if (titleEl) titleEl.textContent = item.title;
      if (locEl) locEl.textContent = item.location;
    });

    el('certificates-title').textContent = t.sectionTitles.certificates;
    el('certificates-mini').textContent = t.certificates.mini;

    document.querySelectorAll('.issued-by-label').forEach((node) => {
      node.textContent = t.certificates.issuedByLabel;
    });

    t.certificates.titles.forEach((title, idx) => {
      const certEl = el(`cert-${idx}-title`);
      if (certEl) certEl.textContent = title;
    });

    el('skills-title').textContent = t.sectionTitles.skills;
    el('skills-mini').textContent = t.skills.mini;
    el('programming-languages-title').textContent = t.skills.programmingLanguages;
    el('frameworks-title').textContent = t.skills.frameworks;
    el('tools-title').textContent = t.skills.tools;
    el('languages-title').textContent = t.skills.languages;
    el('database-title').textContent = t.skills.database;
    el('lang-english').textContent = t.skills.langEnglish;
    el('lang-japanese').textContent = t.skills.langJapanese;

    el('project-title').textContent = t.sectionTitles.projects;
    el('projects-mini').textContent = t.projects.mini;

    el('project-one-details').textContent = t.projects.details;
    el('project-one-summary').textContent = t.projects.detailsSummary;
    el('project-two-details').textContent = t.projects.details;
    el('project-two-summary').textContent = t.projects.detailsSummary;
    el('netbuddy-details').textContent = t.projects.details;
    el('netbuddy-summary').textContent = t.projects.detailsSummary;
    el('product-details').textContent = t.projects.details;
    el('product-summary').textContent = t.projects.detailsSummary;

    el('project-name-title-one').textContent = t.projects.projectOne.name;
    el('project-name-text-one').textContent = t.projects.projectOne.description;
    el('project-one-keys-title').textContent = t.projects.keys;
    el('project-one-tech-title').textContent = t.projects.technologyUsed;
    el('project-one-role-title').textContent = t.projects.role;
    el('project-one-role-text').textContent = t.projects.projectOne.roleText;
    el('project-one-go').textContent = t.projects.goProject;

    el('project-name-title-two').textContent = t.projects.projectTwo.name;
    el('project-name-text-two').textContent = t.projects.projectTwo.description;
    el('key-features-title').textContent = t.projects.keys;
    el('technologies-used-title').textContent = t.projects.technologyUsed;
    el('role-title').textContent = t.projects.role;
    el('role-description').textContent = t.projects.projectTwo.roleText;
    el('project-two-go').textContent = t.projects.goProject;

    el('netbuddy-name-title').textContent = t.projects.projectThree.name;
    el('netbuddy-name-text').textContent = t.projects.projectThree.description;
    el('netbuddy-keys-title').textContent = t.projects.keys;
    el('netbuddy-tech-title').textContent = t.projects.technologyUsed;
    el('netbuddy-role-title').textContent = t.projects.role;
    el('netbuddy-role-text').textContent = t.projects.projectThree.roleText;
    el('netbuddy-go').textContent = t.projects.goProject;

    el('product-name-title').textContent = t.projects.productManagement.nameTitle;
    el('product-name-text').textContent = t.projects.productManagement.nameText;
    el('product-keyfeatures-title').textContent = t.projects.productManagement.keyTitle;
    el('product-technology-used-title').textContent = t.projects.productManagement.techTitle;
    el('product-role-title').textContent = t.projects.productManagement.roleTitle;
    el('product-management-role-text').textContent = t.projects.productManagement.roleText;
    el('product-go').textContent = t.projects.productManagement.goGithub;

    el('contact-title').textContent = t.sectionTitles.contact;
    el('contact-mini').textContent = t.contact.mini;
    el('name-label').textContent = t.contact.nameLabel;
    el('email-label').textContent = t.contact.emailLabel;
    el('message-label').textContent = t.contact.messageLabel;
    el('send-btn-text').textContent = t.contact.sendBtn;

    el('footer-title').textContent = t.footer.footerTitle;
    el('footer-address-title').innerHTML = t.footer.footerAddressTitle;
    el('footer-rights').textContent = t.footer.footerRights;

    const cvBtn = el('btn-cv');
    if (cvBtn) {
      cvBtn.setAttribute('href', t.about.cvFile);
      cvBtn.setAttribute('download', t.about.cvFile);
      el('ui-cv').textContent = t.about.cvText;
    }

    updateOpenDetailsHeights();
  }

  function updateOpenDetailsHeights() {
    document.querySelectorAll('.project details[open]').forEach((details) => {
      const content = details.querySelector('div');
      if (!content) return;
      content.style.maxHeight = content.scrollHeight + 'px';
    });
  }

  function initDetailsAnimation() {
    document.querySelectorAll('.project details').forEach((details) => {
      const content = details.querySelector('div');
      if (!content) return;

      // Start collapsed
      content.style.maxHeight = details.open ? content.scrollHeight + 'px' : '0px';

      details.addEventListener('toggle', () => {
        if (details.open) {
          // Measure and expand smoothly
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = '0px';
        }
      });
    });

    window.addEventListener('resize', () => {
      updateOpenDetailsHeights();
    });
  }

  function initScrollReveal() {
    const candidates = document.querySelectorAll(
      'main .section:not(.hero) .section-head, main .section:not(.hero) .panel, main .section:not(.hero) .project'
    );

    candidates.forEach((node) => node.classList.add('reveal'));

    if (!('IntersectionObserver' in window)) {
      candidates.forEach((node) => node.classList.add('is-in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    candidates.forEach((node) => observer.observe(node));
  }

  function initAutoGalleries() {
    const galleries = document.querySelectorAll('.gallery');
    galleries.forEach((gallery) => {
      const images = Array.from(gallery.querySelectorAll('img'));
      if (images.length <= 1) return;
      let index = 0;
      let timer = null;
      let resumeTimer = null;
      let isPaused = false;

      const stop = () => {
        if (timer) {
          clearInterval(timer);
          timer = null;
        }
      };

      const scheduleResume = () => {
        if (resumeTimer) clearTimeout(resumeTimer);
        resumeTimer = setTimeout(() => {
          isPaused = false;
          start();
        }, 1200);
      };

      const pause = () => {
        isPaused = true;
        stop();
      };

      const goTo = (nextIdx) => {
        index = ((nextIdx % images.length) + images.length) % images.length;
        try {
          images[index].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
        } catch {
          // Fallback for older browsers
          gallery.scrollLeft = images[index].offsetLeft;
        }
      };

      const tick = () => {
        if (isPaused) return;
        goTo(index + 1);
      };

      const start = () => {
        stop();
        timer = setInterval(tick, 2600);
      };

      const boot = () => {
        if (!timer) start();
      };
      if (document.readyState === 'complete') {
        boot();
      } else {
        window.addEventListener('load', boot, { once: true });
      }

      gallery.addEventListener('pointerenter', pause);
      gallery.addEventListener('pointerleave', () => {
        scheduleResume();
      });
      gallery.addEventListener('pointerdown', pause);
      gallery.addEventListener('touchstart', pause, { passive: true });
      gallery.addEventListener('wheel', pause, { passive: true });
      gallery.addEventListener('focusin', pause);
      gallery.addEventListener('focusout', scheduleResume);

      // Pause auto-sliding when the gallery leaves the viewport,
      // and resume when it re-enters. This prevents the gallery
      // from advancing while the user views other sections.
      const visibilityObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // resume shortly to avoid immediate jumps
            scheduleResume();
          } else {
            pause();
          }
        });
      }, { threshold: 0.25 });
      visibilityObserver.observe(gallery);

      // Also pause when the tab becomes hidden and resume when visible
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) pause();
        else scheduleResume();
      });
    });
  }

  function animateMeters() {
    const meters = document.querySelectorAll('.meter > span[data-fill]');
    meters.forEach((bar) => {
      const pct = Number(bar.getAttribute('data-fill') || '0');
      bar.style.width = Math.max(0, Math.min(100, pct)) + '%';
    });
  }

  // Restore settings
  const savedTheme = localStorage.getItem('theme');
  const savedLang = localStorage.getItem('lang');

  applyTheme(savedTheme === 'dark' ? 'dark' : 'light');
  applyLanguage(savedLang === 'jp' ? 'jp' : 'en');
  animateMeters();
  try { initDetailsAnimation(); } catch (e) {}
  try { initScrollReveal(); } catch (e) {}
  try { initAutoGalleries(); } catch (e) {}

  // Hook up toggles
  const themeToggle = el('themeToggle');
  const langToggle = el('langToggle');

  if (langToggle) {
    const initialLang = savedLang === 'jp' ? 'jp' : 'en';
    langToggle.checked = initialLang === 'jp';
    langToggle.addEventListener('change', () => {
      const lang = langToggle.checked ? 'jp' : 'en';
      localStorage.setItem('lang', lang);
      applyLanguage(lang);
    });
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = document.body.classList.contains('theme-dark') ? 'light' : 'dark';
      localStorage.setItem('theme', next);
      applyTheme(next);
    });
  }
})();
