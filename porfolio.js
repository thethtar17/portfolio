(function () {
  const translations = {
    en: {
      header: 'Portfolio Website',
      navLinks: ['About', 'Projects', 'Experience', 'Certificate', 'Skill', 'Contact'],
      about: {
        title: 'About Me',
        mini: 'A quick introduction',
        description: 'Specializing in Java Spring Boot and PHP Laravel, and also working on business automation using AI agent development (Copilot Studio).',
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
          'FE (Fundamental Information Technology Engineer) Certification',
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
        aiWorkflow: {
          coverTitle: 'AI Workflow Automation',
          coverSub: 'Microsoft Copilot Studio • Power Automate • Microsoft 365',
          nameTitle: 'AI Workflow Automation Platform',
          nameText:
            'Designed and implemented AI-powered automation agents using Microsoft Copilot Studio to automate business workflows, email processing, and document management across Microsoft 365 services.',
          keyFeatures: [
            'Built multiple AI agents with multi-step conversational flows, triggers, branching logic, variables, and memory handling.',
            'Integrated with Power Automate for event-driven, scheduled, and background workflows with error handling and recovery.',
            'Automated email processing: extract content/attachments, route messages, generate replies, and send Teams/email notifications.',
            'Automated documents and files: generate Word/PDF, update Excel as a data store, fill templates, rename/move files, and manage metadata.',
            'Connected Microsoft 365 services (Outlook, OneDrive, SharePoint, Teams, Excel Online) and external REST APIs (JSON/webhooks).',
          ],
          technologies: [
            '<strong>AI Platform:</strong> Microsoft Copilot Studio',
            '<strong>Automation:</strong> Microsoft Power Automate',
            '<strong>Microsoft 365:</strong> Outlook, Teams, OneDrive, SharePoint, Excel Online',
            '<strong>Integration:</strong> REST APIs / JSON, webhooks',
            '<strong>Skills:</strong> AI prompt engineering, workflow automation',
          ],
          roleText:
            'Designed, built, and deployed production-ready automation agents and workflows, including prompt design, integrations, monitoring, and version management.',
        },
        productManagement: {
          nameTitle: 'Product Management Project',
          nameText:
            'Product Management is a full-stack application for managing user accounts and product inventories. It enables users to register, log in, add products, and view products added by other users. The application combines C# for backend services, Vue.js for the frontend, and SQL Server for data storage.',
          keyFeatures: [
            'User registration and login with JWT and session-based authentication.',
            'Add, view, and manage products in a user-friendly interface.',
            'Display products from other users in a public catalog.',
          ],
          keyTitle: 'Highlighted Features:',
          techTitle: 'Technical Stack:',
          technologies: [
            '<strong>Frontend:</strong> Vue.js for a dynamic and responsive user interface.',
            '<strong>Backend:</strong> C# for handling server-side logic and API endpoints.',
            '<strong>Database:</strong> SQL Server for reliable and structured data storage.',
            '<strong>Authentication:</strong> JWT and session management for secure user access.',
          ],
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
          keyFeatures: [
            'Multiplayer gameplay for two players locally.',
            'Players can enjoy games like Tic Tac Toe, Four in a Row, and Checkers.',
            'Scoring system to track the winner of each match.',
          ],
          technologies: [
            '<strong>Backend:</strong> Java with Spring Boot for handling game logic, API requests, and user management.',
            '<strong>Database:</strong> MySQL for storing player data, game sessions, and results.',
          ],
        },
        projectTwo: {
          name: 'Chatter',
          description:
            'Chatter is a messaging web application. The application allows registered users to log in, send and receive messages, use emojis, and share files. Its interactive interface and features make it user-friendly and engaging.',
          roleText:
            'Led the development of core messaging functionalities, including the emoji and file-sharing features. Built and integrated authentication using Spring Boot, ensuring secure login and user management. Enhanced the UI in React to make the application more engaging and responsive.',
          keyFeatures: [
            'User Registration and Authentication: Secure registration and login system.',
            'Messaging: Users can send and receive instant messages.',
            'Emojis: Emoji support for a more expressive messaging experience.',
            'File Sharing: Capability to send files directly in chats.',
          ],
          technologies: [
            '<strong>Backend:</strong> Spring Boot (Java) for application logic and API endpoints',
            '<strong>Database:</strong> MySQL for data storage',
            '<strong>Frontend:</strong> React for an interactive user interface',
          ],
        },
        projectThree: {
          name: 'NetBuddy Project',
          description:
            'NetBuddy is a social media platform designed for seamless user interaction, content sharing, and real-time communication. The platform integrates modern technologies like WebSocket for real-time messaging, Google Drive for media storage, and SQL Server for data management. It offers a rich feature set for users to share content, interact with others, and communicate effectively.',
          roleText:
            'Designed and developed the core features for user management, content sharing, and real-time communication. Integrated Google Drive API for storing multimedia files and ensuring seamless media management. Implemented WebSocket for real-time messaging and user interactions. Worked on both the back-end (ASP.NET Core, SQL Server) and front-end to create an intuitive user experience.',
          keyFeatures: [
            'User registration and profile creation with customizable details.',
            'Content sharing with media uploads saved to Google Drive.',
            'Real-time messaging between friends using WebSocket.',
            'Follow, friend, and interact with other users.',
            'Post and comment management with edit and delete options.',
          ],
          technologies: [
            '<strong>Frontend:</strong> ASP.NET Razor Pages for user interface and interactions.',
            '<strong>Backend:</strong> C# with ASP.NET Core for server-side processing.',
            '<strong>Database:</strong> SQL Server for storing user data, posts, and comments.',
            '<strong>Real-Time Communication:</strong> WebSocket for live messaging.',
            '<strong>File Integration:</strong> Google Drive API for multimedia storage.',
          ],
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
        description: 'Java Spring Boot と PHP Laravel を専門とし、AIエージェント開発（Microsoft Copilot Studio）を活用した業務自動化にも取り組んでいます。',
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
          { title: 'システムエンジニア', location: '日本 神奈川県' },
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
          '基本情報技術者試験(基本情報/FE試験)',
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
        aiWorkflow: {
          coverTitle: 'AI業務フロー自動化',
          coverSub: 'Microsoft Copilot Studio • Power Automate • Microsoft 365',
          nameTitle: 'AIワークフロー自動化プラットフォーム',
          nameText:
            'Microsoft Copilot Studio を用いてAI自動化エージェントを設計・実装し、Microsoft 365 各サービス上の業務ワークフロー、メール処理、ドキュメント管理を自動化しました。',
          keyFeatures: [
            '複数のAIエージェントを構築（多段会話フロー、トリガー、分岐ロジック、変数、メモリ管理）。',
            'Power Automate と連携し、イベント駆動・スケジュール・バックグラウンドのワークフローを実装（エラー処理と復旧を含む）。',
            'メール処理を自動化（本文/添付抽出、振り分け、返信文生成、Teams/メール通知）。',
            'ドキュメント/ファイルの自動化（Word/PDF生成、Excelをデータストアとして更新、テンプレート反映、リネーム/移動、メタデータ管理）。',
            'Microsoft 365（Outlook、OneDrive、SharePoint、Teams、Excel Online）および外部REST API（JSON/Webhook）と統合。',
          ],
          technologies: [
            '<strong>AIプラットフォーム:</strong> Microsoft Copilot Studio',
            '<strong>自動化:</strong> Microsoft Power Automate',
            '<strong>Microsoft 365:</strong> Outlook, Teams, OneDrive, SharePoint, Excel Online',
            '<strong>連携:</strong> REST API / JSON, Webhook',
            '<strong>スキル:</strong> プロンプト設計、ワークフロー自動化',
          ],
          roleText:
            'プロンプト設計、各種連携、監視、バージョン管理を含む、本番運用を想定した自動化エージェントとワークフローを設計・構築・展開しました。',
        },
        productManagement: {
          nameTitle: '商品管理プロジェクト',
          nameText:
            '商品管理は、ユーザーアカウントと商品在庫を管理するフルスタックアプリケーションです。ユーザー登録、ログイン、商品の追加、他ユーザーが追加した商品の閲覧が可能です。バックエンドはC#、フロントエンドはVue.js、データベースはSQL Serverを使用しています。',
          keyFeatures: [
            'JWTおよびセッションベースの認証を用いたユーザー登録とログイン。',
            'ユーザーフレンドリーなインターフェースで商品の追加・表示・管理が可能。',
            '他ユーザーが追加した商品を公開カタログで表示。',
          ],
          keyTitle: '主な特徴',
          techTitle: '使用技術',
          technologies: [
            '<strong>フロントエンド:</strong> Vue.js を使用した動的で応答性の高い UI。',
            '<strong>バックエンド:</strong> C# によるサーバーサイドロジックと API エンドポイントの実装。',
            '<strong>データベース:</strong> 信頼性の高い構造化データ保存のための SQL Server。',
            '<strong>認証:</strong> JWT とセッション管理による安全なアクセス制御。',
          ],
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
          keyFeatures: [
            'ローカルで2人プレイヤー向けのマルチプレイヤーゲームプレイ。',
            'プレイヤーは三目並べ、四目並べ、チェッカーなどのゲームを楽しめます。',
            '各試合の勝者を記録するスコアリングシステム。',
          ],
          technologies: [
            '<strong>バックエンド:</strong> Java と Spring Boot によるゲームロジック、API、およびユーザー管理。',
            '<strong>データベース:</strong> MySQL を使用してプレイヤーデータ、ゲームセッション、結果を保存。',
          ],
        },
        projectTwo: {
          name: 'チャッター',
          description:
            'チャッターはメッセージングウェブアプリケーションです。登録ユーザーがログインし、メッセージの送受信、絵文字の使用、ファイルの共有ができます。ユーザーフレンドリーで魅力的なUIです。',
          roleText:
            '絵文字およびファイル共有機能を含むコアメッセージング機能の開発を主導しました。Spring Bootで認証機能を構築し、ReactでUIを強化しました。',
          keyFeatures: [
            'ユーザー登録と認証：安全な登録とログインシステム。',
            'メッセージング：ユーザーはメッセージを送受信できます。',
            '絵文字：より表現豊かなメッセージ体験のための絵文字サポート。',
            'ファイル共有：チャット内でファイルを送信可能。',
          ],
          technologies: [
            '<strong>バックエンド:</strong> Spring Boot（Java）によるアプリケーションロジックと API エンドポイント',
            '<strong>データベース:</strong> データ保存に MySQL を使用',
            '<strong>フロントエンド:</strong> React によるインタラクティブな UI',
          ],
        },
        projectThree: {
          name: 'NetBuddyプロジェクト',
          description:
            'NetBuddyは、ユーザー同士のスムーズなインタラクション、コンテンツ共有、リアルタイムコミュニケーションを可能にするソーシャルメディアプラットフォームです。WebSocket、Google Drive、SQL Serverなどの技術を統合しています。',
          roleText:
            'ユーザー管理、コンテンツ共有、リアルタイム通信のためのコア機能を設計・実装しました。Google Drive APIを統合し、WebSocketでリアルタイムメッセージングを構築しました。',
          keyFeatures: [
            'ユーザー登録とプロフィール作成（カスタマイズ可能）。',
            'メディアアップロードを Google Drive に保存してコンテンツ共有。',
            'WebSocket を使った友達間のリアルタイムメッセージング。',
            'ユーザーのフォロー、フレンド、相互作用。',
            '投稿とコメントの編集・削除機能を含む管理。',
          ],
          technologies: [
            '<strong>フロントエンド:</strong> ASP.NET Razor Pages による UI とインタラクション。',
            '<strong>バックエンド:</strong> ASP.NET Core（C#）によるサーバー処理。',
            '<strong>データベース:</strong> SQL Server によるユーザーデータや投稿の保存。',
            '<strong>リアルタイム通信:</strong> ライブメッセージングのための WebSocket。',
            '<strong>ファイル連携:</strong> マルチメディア保存のための Google Drive API。',
          ],
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
        footerAddressTitle: '　住所: 　神奈川県',
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

    // Replace tech lists for project one if translations provided
    if (t.projects.projectOne && Array.isArray(t.projects.projectOne.technologies)) {
      const list = el('techsOne');
      if (list) {
        list.innerHTML = '';
        t.projects.projectOne.technologies.forEach((it) => {
          const li = document.createElement('li');
          li.innerHTML = it;
          list.appendChild(li);
        });
      }
    }

    // Populate key features list for project one (Game Project)
    if (t.projects.projectOne && Array.isArray(t.projects.projectOne.keyFeatures)) {
      const keyListOne = el('keyitemsOne');
      if (keyListOne) {
        keyListOne.innerHTML = '';
        t.projects.projectOne.keyFeatures.forEach((it) => {
          const li = document.createElement('li');
          li.textContent = it;
          keyListOne.appendChild(li);
        });
      }
    }

    el('project-name-title-two').textContent = t.projects.projectTwo.name;
    el('project-name-text-two').textContent = t.projects.projectTwo.description;
    el('key-features-title').textContent = t.projects.keys;
    el('technologies-used-title').textContent = t.projects.technologyUsed;
    el('role-title').textContent = t.projects.role;
    el('role-description').textContent = t.projects.projectTwo.roleText;
    el('project-two-go').textContent = t.projects.goProject;

    if (t.projects.projectTwo && Array.isArray(t.projects.projectTwo.technologies)) {
      const list2 = el('technologies-used-list');
      if (list2) {
        list2.innerHTML = '';
        t.projects.projectTwo.technologies.forEach((it) => {
          const li = document.createElement('li');
          li.innerHTML = it;
          list2.appendChild(li);
        });
      }
    }

    // Populate key features list for project two (Chatter)
    if (t.projects.projectTwo && Array.isArray(t.projects.projectTwo.keyFeatures)) {
      const keyList = el('key-features-list');
      if (keyList) {
        keyList.innerHTML = '';
        t.projects.projectTwo.keyFeatures.forEach((it) => {
          const li = document.createElement('li');
          li.textContent = it;
          keyList.appendChild(li);
        });
      }
    }

    el('netbuddy-name-title').textContent = t.projects.projectThree.name;
    el('netbuddy-name-text').textContent = t.projects.projectThree.description;
    el('netbuddy-keys-title').textContent = t.projects.keys;
    el('netbuddy-tech-title').textContent = t.projects.technologyUsed;
    el('netbuddy-role-title').textContent = t.projects.role;
    el('netbuddy-role-text').textContent = t.projects.projectThree.roleText;
    el('netbuddy-go').textContent = t.projects.goProject;

    if (t.projects.projectThree && Array.isArray(t.projects.projectThree.technologies)) {
      const list3 = el('techsNetBuddy');
      if (list3) {
        list3.innerHTML = '';
        t.projects.projectThree.technologies.forEach((it) => {
          const li = document.createElement('li');
          li.innerHTML = it;
          list3.appendChild(li);
        });
      }
    }

    // Populate key features list for NetBuddy
    if (t.projects.projectThree && Array.isArray(t.projects.projectThree.keyFeatures)) {
      const keyListNet = el('keyitemsNetBuddy');
      if (keyListNet) {
        keyListNet.innerHTML = '';
        t.projects.projectThree.keyFeatures.forEach((it) => {
          const li = document.createElement('li');
          li.textContent = it;
          keyListNet.appendChild(li);
        });
      }
    }

    el('product-name-title').textContent = t.projects.productManagement.nameTitle;
    el('product-name-text').textContent = t.projects.productManagement.nameText;
    el('product-keyfeatures-title').textContent = t.projects.productManagement.keyTitle;
    el('product-technology-used-title').textContent = t.projects.productManagement.techTitle;
    el('product-role-title').textContent = t.projects.productManagement.roleTitle;
    el('product-management-role-text').textContent = t.projects.productManagement.roleText;
    el('product-go').textContent = t.projects.productManagement.goGithub;

    if (t.projects.productManagement && Array.isArray(t.projects.productManagement.technologies)) {
      const listP = el('techsProductManagement');
      if (listP) {
        listP.innerHTML = '';
        t.projects.productManagement.technologies.forEach((it) => {
          const li = document.createElement('li');
          li.innerHTML = it;
          listP.appendChild(li);
        });
      }
    }

    // Populate key features list for Product Management
    if (t.projects.productManagement && Array.isArray(t.projects.productManagement.keyFeatures)) {
      const keyListP = el('keyitemsProductManagement');
      if (keyListP) {
        keyListP.innerHTML = '';
        t.projects.productManagement.keyFeatures.forEach((it) => {
          const li = document.createElement('li');
          li.textContent = it;
          keyListP.appendChild(li);
        });
      }
    }

    // AI Workflow Automation project (safe updates: only if the section exists)
    const setText = (id, text) => {
      const node = el(id);
      if (node) node.textContent = text;
    };

    const setHTML = (id, html) => {
      const node = el(id);
      if (node) node.innerHTML = html;
    };

    const setList = (id, items, mode = 'text') => {
      const list = el(id);
      if (!list) return;
      list.innerHTML = '';
      items.forEach((item) => {
        const li = document.createElement('li');
        if (mode === 'html') li.innerHTML = item;
        else li.textContent = item;
        list.appendChild(li);
      });
    };

    if (t.projects.aiWorkflow) {
      setText('ai-cover-title', t.projects.aiWorkflow.coverTitle);
      setText('ai-cover-sub', t.projects.aiWorkflow.coverSub);
      setText('ai-name-title', t.projects.aiWorkflow.nameTitle);
      setText('ai-name-text', t.projects.aiWorkflow.nameText);
      setText('ai-details', t.projects.details);
      setText('ai-summary', t.projects.detailsSummary);
      setText('ai-keys-title', t.projects.keys);
      setText('ai-tech-title', t.projects.technologyUsed);
      setText('ai-role-title', t.projects.role);
      setText('ai-role-text', t.projects.aiWorkflow.roleText);

      if (Array.isArray(t.projects.aiWorkflow.keyFeatures)) {
        setList('keyitemsAI', t.projects.aiWorkflow.keyFeatures, 'text');
      }
      if (Array.isArray(t.projects.aiWorkflow.technologies)) {
        setList('techsAI', t.projects.aiWorkflow.technologies, 'html');
      }
    }

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

        // IMPORTANT: Do not use scrollIntoView() here.
        // It can scroll the entire page to the gallery, which feels like the
        // user's viewport is being "dragged" when the slideshow advances.
        const prefersReducedMotion =
          typeof window !== 'undefined' &&
          typeof window.matchMedia === 'function' &&
          window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const behavior = prefersReducedMotion ? 'auto' : 'smooth';
        const targetLeft = images[index].offsetLeft;

        try {
          gallery.scrollTo({ left: targetLeft, behavior });
        } catch {
          // Fallback for older browsers
          gallery.scrollLeft = targetLeft;
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
