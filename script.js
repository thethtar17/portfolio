// Animate skill bars on scroll (optional)
document.addEventListener('DOMContentLoaded', function () {
    var skillBars = document.querySelectorAll('.bar-fill');
    skillBars.forEach(function (bar) {
        var width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(function () {
            bar.style.width = width;
        }, 500);
    });
});

// Initialize particles.js
if (typeof particlesJS === 'function') {
    particlesJS('particles-js', {
        particles: {
            number: { value: 100, density: { enable: true, value_area: 800 } },
            shape: {
                type: 'image',
                image: {
                    src: 'p.png',
                    width: 100,
                    height: 100,
                },
            },
            opacity: {
                value: 0.9,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
                value: 10,
                random: true,
                anim: { enable: false, speed: 50, size_min: 0.1, sync: false },
            },
            line_linked: {
                enable: false,
            },
            move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: { enable: true, mode: 'repulse' },
                onclick: { enable: true, mode: 'push' },
                resize: true,
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 50, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
            },
        },
        retina_detect: true,
    });
}

// Toggle dark mode
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeIcon = document.getElementById('dark-mode-icon');

    if (!darkModeToggle || !darkModeIcon) return;

    // Restore saved dark mode
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === '1') {
        document.body.classList.add('dark-mode');
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    }

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Toggle the icon between moon and sun
        if (document.body.classList.contains('dark-mode')) {
            darkModeIcon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('darkMode', '1');
        } else {
            darkModeIcon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('darkMode', '0');
        }
    });
});

// Content dictionary for translations
document.addEventListener('DOMContentLoaded', function () {
    const languageToggle = document.getElementById('language-toggle');
    const headerTitle = document.getElementById('header-title');
    const navLinks = document.querySelectorAll('#nav-links .nav-link');
    const aboutTitle = document.getElementById('about-title');
    const experienceTitle = document.getElementById('experience-title');
    const certificatesTitle = document.getElementById('certificates-title');
    const experienceItemTitleEls = [
        document.getElementById('exp-0-title'),
        document.getElementById('exp-1-title'),
        document.getElementById('exp-2-title'),
        document.getElementById('exp-3-title'),
    ];
    const experienceItemLocationEls = [
        document.getElementById('exp-0-location'),
        document.getElementById('exp-1-location'),
        document.getElementById('exp-2-location'),
        document.getElementById('exp-3-location'),
    ];
    const issuedByLabelEls = document.querySelectorAll('.issued-by-label');
    const certificateTitleEls = [
        document.getElementById('cert-0-title'),
        document.getElementById('cert-1-title'),
        document.getElementById('cert-2-title'),
        document.getElementById('cert-3-title'),
        document.getElementById('cert-4-title'),
        document.getElementById('cert-5-title'),
        document.getElementById('cert-6-title'),
        document.getElementById('cert-7-title'),
        document.getElementById('cert-8-title'),
        document.getElementById('cert-9-title'),
        document.getElementById('cert-10-title'),
    ];
    const aboutName = document.getElementById('about-name');
    const aboutPosition = document.getElementById('about-position');
    const aboutDescription = document.getElementById('about-description');
    const downloadCv = document.getElementById('download-cv');
    const skillstitle = document.getElementById('skills-title');
    const programminglanguagestitle = document.getElementById('programming-languages-title');
    const toolstitle = document.getElementById('tools-title');
    const frameworkstitle = document.getElementById('frameworks-title');
    const languagestitle = document.getElementById('languages-title');
    const databasetitle = document.getElementById('database-title');
    const langenglish = document.getElementById('lang-english');
    const langjapanese = document.getElementById('lang-japanese');
    const projecttitle = document.getElementById('project-title');
    const projectnametitleone = document.getElementById('project-name-title-one');
    const projectnametextone = document.getElementById('project-name-text-one');
    const projectviewone = document.getElementById('project-view-one');
    const projectviewtwo = document.getElementById('project-view-two');
    const projectModalLabel = document.getElementById('projectModalLabel');
    const projectonemodaltext = document.getElementById('project-one-modal-text');
    const keyFeatures = document.querySelectorAll('.keyfeatures');
    const listItems = document.querySelectorAll('#keyitemsOne li');
    const technologyUsedLabels = document.querySelectorAll('.technology-used');
    const roleLabels = document.querySelectorAll('.role');
    const techListItems = document.querySelectorAll('#techsOne li');
    // role/technology labels appear multiple times across modals
    const projectoneroletext = document.getElementById('project-one-role-text');
    const projectnametitletwo = document.getElementById('project-name-title-two');
    const projectnametexttwo = document.getElementById('project-name-text-two');
    const projectTwoModalLabel = document.getElementById('projectTwoModalLabel');
    const chatterdescription = document.getElementById('chatter-description');
    const keyfeaturestitle = document.getElementById('key-features-title');
    const keyfeatureslist = document.querySelectorAll('#key-features-list li');
    // const registrationauthentication=document.getElementById('registration-authentication');
    const technologiesusedtitle = document.getElementById('technologies-used-title');
    const technologiesusedlist = document.querySelectorAll('#technologies-used-list li');
    const roletitle = document.getElementById('role-title');
    const roledescription = document.getElementById('role-description');
    const closeOne = document.getElementById('close-one');
    const closeTwo = document.getElementById('close-two');
    const goOne = document.getElementById('go-to-project-one');
    const goTwo = document.getElementById('go-to-project-two');
    const netbuddyTitle = document.getElementById('netbuddy-name-title');
    const netbuddyText = document.getElementById('netbuddy-name-text');
    const netbuddyView = document.getElementById('netbuddy-view');
    const netbuddyModalLabel = document.getElementById('netBuddyModalLabel');
    const netbuddyModalText = document.getElementById('netbuddy-modal-text');
    const keyItemsNetBuddy = document.querySelectorAll('#keyitemsNetBuddy li');
    const techsNetBuddy = document.querySelectorAll('#techsNetBuddy li');
    const netbuddyRoleText = document.getElementById('netbuddy-role-text');
    const closeNetBuddy = document.getElementById('close-netbuddy');
    const goNetBuddy = document.getElementById('go-to-netbuddy-project');

    const productNameTitle = document.getElementById('product-name-title');
    const productNameText = document.getElementById('product-name-text');
    const productView = document.getElementById('product-view');
    const productModalLabel = document.getElementById('productManagementModalLabel');
    const productModalText = document.getElementById('product-management-modal-text');
    const productKeyTitle = document.getElementById('product-keyfeatures-title');
    const productKeyItems = document.querySelectorAll('#keyitemsProductManagement li');
    const productTechTitle = document.getElementById('product-technology-used-title');
    const productTechItems = document.querySelectorAll('#techsProductManagement li');
    const productRoleTitle = document.getElementById('product-role-title');
    const productRoleText = document.getElementById('product-management-role-text');
    const productClose = document.getElementById('close-product-management');
    const productGo = document.getElementById('go-to-product-management-project');

    const contacttitle = document.getElementById('contact-title');
    const namelabel = document.getElementById('name-label');
    const emaillabel = document.getElementById('email-label');
    const messagelabel = document.getElementById('message-label');
    const sendbtn = document.getElementById('send-btn');
    const foottile = document.getElementById('footer-title');
    const footaddresstitle = document.getElementById('footer-address-title');
    const footerrights = document.getElementById('footer-rights');

    const translations = {
        en: {
            header: 'Portfolio Website',
            navLinks: ['About', 'Projects', 'Experience', 'Certificate', 'Contact', 'Skill'],

            about: {
                title: 'About Me',
                name: 'THET HTAR SANN',
                position: 'System Engineer',
                description: 'I specialize in Java Spring Boot, PHP Laravel and C# ASP.NET.',
                cvText: 'Download CV',
                cvFile: 'タッターサン.pdf',
            },
            sectionTitles: {
                experience: 'Experience',
                certificates: 'Certificates',
            },
            experienceItems: [
                { title: 'System Engineer', location: 'Isehara, Kanagawa, Japan' },
                { title: 'Trainee', location: 'Lanmadaw, Yangon, Myanmar' },
                { title: 'Internship Trainee', location: 'Hlaing, Yangon, Myanmar' },
                { title: 'Instructor', location: 'North Dagon, Yangon, Myanmar' },
            ],
            certificates: {
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
                title: 'Programming Skills',
                programmingLanguages: 'Programming Languages',
                frameworks: 'Frameworks',
                tools: 'Tools',
                languages: 'Languages',
                database: 'Database',
                langJs: 'JavaScript',
                langPython: 'Python',
                langJava: 'Java',
                langPhp: 'PHP',
                langCsharp: 'C#',
                frameworkSpring: 'Spring Boot',
                frameworkLaravel: 'Laravel',
                frameworkReact: 'React',
                frameworkBootstrap: 'Bootstrap',
                frameworkVue: 'Vue',
                frameworkNode: 'Node',
                toolGit: 'Git',
                toolDocker: 'Docker',
                toolPostman: 'Postman',
                toolFigma: 'Figma',
                langEnglish: 'English',
                langJapanese: 'Japanese',
                dbMysql: 'MySQL',
                dbPostgresql: 'PostgreSQL',
            },
            projects: {
                title: 'Projects',
                viewProjectButton: 'View Project',
                keys: 'Key Features',
                role: 'Role:',
                technologyUsed: 'Technologies Used:',
                close: 'Close',
                goProject: 'Go to Project',
                productManagement: {
                    nameTitle: 'Product Management Project',
                    nameText:
                        'Product Management is a full-stack application for managing user accounts and product inventories. It enables users to register, log in, add products, and view products added by other users. The application combines C# for backend services, Vue.js for the frontend, and SQL Server for data storage.',
                    modalTitle: 'Product Management Application Overview',
                    modalText:
                        'Product Management is a full-stack application for managing user accounts and product inventories. It enables users to register, log in, add products, and view products added by other users. The application combines C# for backend services, Vue.js for the frontend, and SQL Server for data storage.',
                    keyTitle: 'Highlighted Features:',
                    keyItems: [
                        'User registration and login with JWT and session-based authentication.',
                        'Add, view, and manage products in a user-friendly interface.',
                        'Display products from other users in a public catalog.',
                    ],
                    techTitle: 'Technical Stack:',
                    techItems: [
                        '<strong>Frontend:</strong> Vue.js for a dynamic and responsive user interface.',
                        '<strong>Backend:</strong> C# for handling server-side logic and API endpoints.',
                        '<strong>Database:</strong> SQL Server for reliable and structured data storage.',
                        '<strong>Authentication:</strong> JWT and session management for secure user access.',
                    ],
                    roleTitle: 'My Contribution:',
                    roleText:
                        'Designed and implemented the backend using C# for API development and authentication.<br>Developed frontend components using Vue.js for seamless user experience.<br>Integrated SQL Server for data storage and retrieval.<br>Implemented JWT and session-based authentication for user security.',
                    goGithub: 'View on GitHub',
                },
                projectOne: {
                    name: 'Game Project',
                    description:
                        'This multiplayer gaming platform features three classic games: Tic Tac Toe, Four in a Row, and Checkers. The game allows two players to compete against each other locally on the same device. The application includes a scoring system that displays the winner of each match and maintains a record of winning results, enhancing the competitive experience.',
                    projectModalTitle: 'Game Project Details',
                    projectModalTest:
                        'This multiplayer gaming platform features three classic games: Tic Tac Toe, Four in a Row, and Checkers. The game allows two players to compete against each other locally on the same device. The application includes a scoring system that displays the winner of each match and maintains a record of winning results, enhancing the competitive experience.',
                    keyitemsOne: [
                        'Multiplayer gameplay for two players locally.',
                        'Players can enjoy games like Tic Tac Toe, Four in a Row, and Checkers.',
                        'Scoring system to track the winner of each match.',
                    ],
                    techsOne: [
                        '<strong>Backend:</strong> Java with Spring Boot for handling game logic, API requests, and user management.',
                        '<strong>Database:</strong> MySQL for storing player data, game sessions, and results.',
                    ],
                    projectOneRoleText:
                        'Developed the core gameplay mechanics for each game, ensuring smooth and interactive user experience.Implemented multiplayer game logic for two players, allowing them to compete locally or over a local network.<br> Created the scoring system and leaderboard to track winners and maintain game statistics.Worked on both the back-end (Spring Boot, MySQL) and front-end to ensure seamless gameplay. ',
                },
                projectTwo: {
                    projectNameTitle: 'Chatter',
                    projectNameText: `
                                Chatter is a messaging web application. The application allows registered users to log in, 
                                send and receive messages, use emojis, and share files. Its interactive interface and features 
                                make it user-friendly and engaging.
                            `,
                    projectModalTitleTwo: 'Chatter Project Details',
                    projectModalTestTwo:
                        'Chatter is a messaging web application that enables registered users to log in, send and receive messages, use emojis, and share files. Designed with a user-friendly interface, Chatter makes online communication more interactive and accessible.',
                    keyitemsTwo: [
                        'User Registration and Authentication: Secure registration and login system.',
                        'Messaging: Users can send and receive instant messages.',
                        'Emojis: Emoji support for a more expressive messaging experience.',
                        'File Sharing: Capability to send files directly in chats.',
                    ],
                    techsTwo: [
                        '<strong>Backend:</strong> Spring Boot (Java) for application logic and API endpoints',
                        '<strong>Database:</strong> MySQL for data storage',
                        '<strong>Frontend:</strong> React for an interactive user interface',
                    ],
                    projectTwoRoleText:
                        'Led the development of core messaging functionalities, including the emoji and file-sharing features. Built and integrated authentication using Spring Boot, ensuring secure login and user management. Enhanced the UI in React to make the application more engaging and responsive.',
                },
                projectThree: {
                    projectNameTitle: 'NetBuddy',
                    projectNameText:
                        `NetBuddy is a social media platform that enables smooth interaction between users, content sharing, and real-time communication. It integrates technologies like WebSocket, Google Drive, and SQL Server to offer ease of use and robust functionality.`,
                    projectModalTitleThree: 'NetBuddy Project Details',
                    projectModalTestThree:
                        'NetBuddy is a social media platform designed for users to share content, interact with others, and communicate in real-time. Integration with Google Drive API and WebSocket ensures seamless media management and real-time messaging.',
                    keyitemsThree: [
                        'User Registration and Profile Creation: Manage personal information with customizable details.',
                        'Content Sharing: Smooth sharing with media uploads stored on Google Drive.',
                        'Real-Time Messaging: Live messaging powered by WebSocket.',
                        'User Interaction: Follow other users, add friends, and utilize comment features.',
                        'Post Management: Manage posts and comments with edit and delete capabilities.',
                    ],
                    techsThree: [
                        '<strong>Frontend:</strong> Intuitive interface built with ASP.NET Razor Pages.',
                        '<strong>Backend:</strong> Server-side logic implemented with C# and ASP.NET Core.',
                        '<strong>Database:</strong> Data storage using SQL Server.',
                        '<strong>Real-Time Communication:</strong> Live communication powered by WebSocket.',
                        '<strong>File Integration:</strong> Media storage using Google Drive API.',
                    ],
                    projectThreeRoleText:
                        'Designed and implemented core features for user management, content sharing, and real-time communication. Integrated Google Drive API to provide seamless multimedia storage. Built real-time messaging using WebSocket and developed a robust backend with ASP.NET Core and SQL Server.',
                },
            },
            contact: {
                contactTitle: 'Contact',
                nameLabel: 'Name:',
                emailLabel: 'Email:',
                messageLabel: 'Message:',
                sendBtn: 'Send',
            },
            footer: {
                footerTitle: 'Find Me Here',
                footerAddressTitle: '<strong >Address:</strong> Sakura Dai, Isehara, Kanagawa, Japan',
                footerRights: '&copy; 2024 Portfolio Website. All rights reserved.',
            },
        },
        jp: {
            header: 'ポートフォリオサイト',
            navLinks: ['私について', 'プロジェクト', '経験', '証明書', '連絡先', 'スキル'],

            about: {
                title: '私について',
                name: 'タッターサン',
                position: 'システムエンジニア',
                description: 'Java Spring Boot と PHP Laravel を専門としています。',
                cvText: '履歴書をダウンロード',
                cvFile: 'タッターサン.pdf',
            },
            sectionTitles: {
                experience: '経験',
                certificates: '証明書',
            },
            experienceItems: [
                { title: 'システムエンジニア', location: '日本 神奈川県 伊勢原市' },
                { title: '研修生', location: 'ミャンマー ヤンゴン ランマドー' },
                { title: 'インターン研修生', location: 'ミャンマー ヤンゴン フライン' },
                { title: '講師', location: 'ミャンマー ヤンゴン ノースダゴン' },
            ],
            certificates: {
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
                title: 'プログラミングスキル',
                programmingLanguages: 'プログラミング言語',
                frameworks: 'フレームワーク',
                tools: 'ツール',
                languages: '言語',
                database: 'データベース',
                langJs: 'JavaScript',
                langPython: 'Python',
                langJava: 'Java',
                langPhp: 'PHP',
                langCsharp: 'C#',
                frameworkSpring: 'Spring Boot',
                frameworkLaravel: 'Laravel',
                frameworkReact: 'React',
                frameworkBootstrap: 'Bootstrap',
                frameworkVue: 'Vue',
                frameworkNode: 'Node',
                toolGit: 'Git',
                toolDocker: 'Docker',
                toolPostman: 'Postman',
                toolFigma: 'Figma',
                langEnglish: '英語',
                langJapanese: '日本語',
                dbMysql: 'MySQL',
                dbPostgresql: 'PostgreSQL',
            },
            projects: {
                title: 'プロジェクト',
                keys: '主な特徴',
                viewProjectButton: 'プロジェクトを見る',
                role: '役割:',
                technologyUsed: '使用技術:',
                close: '閉じる',
                goProject: 'プロジェクトへ移動',
                productManagement: {
                    nameTitle: '商品管理プロジェクト',
                    nameText:
                        '商品管理は、ユーザーアカウントと商品在庫を管理するフルスタックアプリケーションです。ユーザー登録、ログイン、商品の追加、他ユーザーが追加した商品の閲覧が可能です。バックエンドはC#、フロントエンドはVue.js、データベースはSQL Serverを使用しています。',
                    modalTitle: '商品管理アプリ概要',
                    modalText:
                        '商品管理は、ユーザーアカウントと商品在庫を管理するフルスタックアプリケーションです。ユーザー登録、ログイン、商品の追加、他ユーザーが追加した商品の閲覧が可能です。バックエンドはC#、フロントエンドはVue.js、データベースはSQL Serverを使用しています。',
                    keyTitle: '主な機能:',
                    keyItems: [
                        'JWTとセッション認証によるユーザー登録・ログイン機能。',
                        '使いやすいUIで商品の追加・閲覧・管理が可能。',
                        '公開カタログで他ユーザーの商品を表示。',
                    ],
                    techTitle: '技術スタック:',
                    techItems: [
                        '<strong>フロントエンド:</strong> Vue.js（動的でレスポンシブなUI）',
                        '<strong>バックエンド:</strong> C#（サーバー処理・APIエンドポイント）',
                        '<strong>データベース:</strong> SQL Server（信頼性の高い構造化データ管理）',
                        '<strong>認証:</strong> JWT とセッション管理',
                    ],
                    roleTitle: '担当:',
                    roleText:
                        'C#でAPI開発と認証を含むバックエンドを設計・実装しました。<br>Vue.jsでフロントエンドコンポーネントを開発し、スムーズなUXを実現しました。<br>SQL Serverを統合し、データ保存・取得を実装しました。<br>JWTとセッション認証でセキュアなアクセスを実現しました。',
                    goGithub: 'GitHubで見る',
                },
                projectOne: {
                    name: 'ゲームプロジェクト',
                    description:
                        'このマルチプレイヤーゲームプラットフォームは、三つのクラシックゲームを提供します：三目並べ、四つ並べ、チェッカー。 ゲームは、同じデバイスで二人のプレイヤーが対戦できるようになっています。 アプリケーションには、各試合の勝者を表示し、勝利結果を記録するスコアリングシステムが含まれており、競争の体験を向上させます。',
                    projectModalTitle: 'ゲームプロジェクトの内容',
                    projectModalTest:
                        'このマルチプレイヤーゲームプラットフォームは、三つのクラシックゲームを提供します：三目並べ、四つ並べ、チェッカー。 ゲームは、同じデバイスで二人のプレイヤーが対戦できるようになっています。 アプリケーションには、各試合の勝者を表示し、勝利結果を記録するスコアリングシステムが含まれており、競争の体験を向上させます。',
                    keyitemsOne: [
                        'ローカルで2人プレイ可能なマルチプレイヤーゲームプレイ。',
                        'プレイヤーは、三目並べ、四目並べ、チェッカーなどのゲームを楽しむことができます。',
                        '各試合の勝者を記録するスコアリングシステムを搭載。',
                    ],
                    techsOne: [
                        '<strong>バックエンド:</strong> ゲームロジック、APIリクエスト、ユーザー管理を処理するためのSpring Bootを使用したJava。',
                        '<strong>データベース:</strong> プレイヤーデータ、ゲームセッション、結果を保存するためのMySQL。',
                    ],
                    projectOneRoleText:
                        '  各ゲームのコアゲームプレイメカニクスを開発し、スムーズでインタラクティブなユーザー体験を実現しました。2人のプレイヤーがローカルまたはローカルネットワーク上で競い合うマルチプレイヤーゲームロジックを実装しました。勝者を追跡し、ゲーム統計を維持するためのスコアリングシステムとリーダーボードを作成しました。バックエンド（Spring Boot、MySQL）とフロントエンドの両方でシームレスなゲームプレイを実現しました。 ',
                },
                projectTwo: {
                    projectNameTitle: 'チャッター',
                    projectNameText: `
                                チャッターはメッセージングウェブアプリケーションです。アプリケーションは登録ユーザーがログインし、 
                                メッセージを送受信し、絵文字を使用し、ファイルを共有することを可能にします。インタラクティブなインターフェースと機能により、 
                                ユーザーフレンドリーで魅力的です。
                            `,
                    projectModalTitleTwo: 'チャッタープロジェクト詳細',
                    projectModalTestTwo:
                        'Chatterは、登録ユーザーがログインし、メッセージの送受信、絵文字の使用、ファイルの共有ができるメッセージングウェブアプリケーションです。ユーザーフレンドリーなインターフェースを備えたChatterは、オンラインコミュニケーションをよりインタラクティブでアクセス可能にします。',
                    keyitemsTwo: [
                        'ユーザー登録と認証: セキュアな登録とログインシステム。',
                        'メッセージング: ユーザーがインスタントメッセージを送受信できます。',
                        '絵文字: より表現力豊かなメッセージング体験のための絵文字サポート。',
                        'ファイル共有: チャット内で直接ファイルを送信する機能。',
                    ],
                    techsTwo: [
                        '<strong>バックエンド:</strong> アプリケーションロジックとAPIエンドポイントのためのSpring Boot（Java）',
                        '<strong>データベース:</strong> データストレージのためのMySQL',
                        '<strong>フロントエンド:</strong> インタラクティブなユーザーインターフェースのためのReact',
                    ],
                    projectTwoRoleText:
                        '絵文字およびファイル共有機能を含むコアメッセージング機能の開発を主導しました。Spring Bootを使用して認証機能を構築し、セキュアなログインとユーザー管理を実現しました。ReactでUIを強化し、アプリケーションをより魅力的で応答性の高いものにしました。',
                },
                projectThree: {
                    projectNameTitle: 'NetBuddy',
                    projectNameText:
                        `NetBuddyは、ユーザー同士のスムーズなインタラクション、コンテンツ共有、リアルタイムコミュニケーションを可能にするソーシャルメディアプラットフォームです。WebSocket、Google Drive、SQL Serverなどの技術を統合し、使いやすさと機能性を備えています。`,
                    projectModalTitleThree: 'NetBuddyプロジェクト詳細',
                    projectModalTestThree:
                        'NetBuddyは、ユーザーがコンテンツを共有し、他のユーザーと交流し、リアルタイムでコミュニケーションを取るために設計されたソーシャルメディアプラットフォームです。Google Drive APIとWebSocketの統合により、スムーズなメディア管理とリアルタイムメッセージングを実現します。',
                    keyitemsThree: [
                        'ユーザー登録とプロフィール作成: カスタマイズ可能な詳細で個人情報を管理。',
                        'コンテンツ共有: Google Driveに保存されたメディアアップロードによるスムーズな共有。',
                        'リアルタイムメッセージング: WebSocketを使用したライブメッセージング。',
                        'ユーザーインタラクション: 他のユーザーのフォロー、友達追加、コメント機能。',
                        '投稿管理: 編集および削除機能を備えた投稿とコメント管理。',
                    ],
                    techsThree: [
                        '<strong>フロントエンド:</strong> ASP.NET Razor Pagesで構築された直感的なインターフェース。',
                        '<strong>バックエンド:</strong> サーバーサイドロジックのためのC#およびASP.NET Core。',
                        '<strong>データベース:</strong> SQL Serverを使用したデータストレージ。',
                        '<strong>リアルタイム通信:</strong> WebSocketを使用したライブ通信。',
                        '<strong>ファイル統合:</strong> Google Drive APIを使用したメディアストレージ。',
                    ],
                    projectThreeRoleText:
                        'ユーザー管理、コンテンツ共有、リアルタイム通信のためのコア機能を設計および実装しました。Google Drive APIを統合し、シームレスなマルチメディアストレージを提供しました。また、WebSocketを利用してリアルタイムメッセージングを構築し、ASP.NET CoreとSQL Serverを使用して強力なバックエンドを開発しました。',
                },
            },
            contact: {
                contactTitle: 'お問い合わせ',
                nameLabel: '名前:',
                emailLabel: 'メール:',
                messageLabel: 'メッセージ:',
                sendBtn: '送信',
            },
            footer: {
                footerTitle: 'ここで見つけてください',
                footerAddressTitle: '　住所: 桜台　伊勢原　神奈川県',
                footerRights: ' 2024 ポートフォリオウェブサイト。全著作権所有。',
            },
        },
    };

    function switchLanguage(lang) {
        // Keep document language in sync for accessibility/SEO
        document.documentElement.lang = lang === 'jp' ? 'ja' : 'en';

        // Update header
        headerTitle.textContent = translations[lang].header;

        // Update navigation links
        navLinks.forEach((link, index) => {
            link.textContent = translations[lang].navLinks[index];
        });

        // Update About Me section
        aboutTitle.textContent = translations[lang].about.title;
        if (experienceTitle) experienceTitle.textContent = translations[lang].sectionTitles.experience;
        if (certificatesTitle) certificatesTitle.textContent = translations[lang].sectionTitles.certificates;

        if (translations[lang].experienceItems) {
            translations[lang].experienceItems.forEach((item, index) => {
                if (experienceItemTitleEls[index]) experienceItemTitleEls[index].textContent = item.title;
                if (experienceItemLocationEls[index]) experienceItemLocationEls[index].textContent = item.location;
            });
        }
        if (translations[lang].certificates) {
            issuedByLabelEls.forEach((el) => {
                el.textContent = translations[lang].certificates.issuedByLabel;
            });
            certificateTitleEls.forEach((el, index) => {
                if (!el) return;
                const title = translations[lang].certificates.titles[index];
                if (title) el.textContent = title;
            });
        }

        aboutName.textContent = translations[lang].about.name;
        aboutPosition.textContent = translations[lang].about.position;
        aboutDescription.textContent = translations[lang].about.description;
        downloadCv.textContent = translations[lang].about.cvText;
        downloadCv.setAttribute('download', translations[lang].about.cvFile);
        downloadCv.setAttribute('href', translations[lang].about.cvFile);
        skillstitle.textContent = translations[lang].skills.title;
        toolstitle.textContent = translations[lang].skills.tools;
        programminglanguagestitle.textContent = translations[lang].skills.programmingLanguages;
        frameworkstitle.textContent = translations[lang].skills.frameworks;
        languagestitle.textContent = translations[lang].skills.languages;
        databasetitle.textContent = translations[lang].skills.database;
        langenglish.textContent = translations[lang].skills.langEnglish;
        langjapanese.textContent = translations[lang].skills.langJapanese;
        projecttitle.textContent = translations[lang].projects.title;
        projectnametitleone.textContent = translations[lang].projects.projectOne.name;
        projectnametextone.textContent = translations[lang].projects.projectOne.description;
        projectviewone.textContent = translations[lang].projects.viewProjectButton;
        projectviewtwo.textContent = translations[lang].projects.viewProjectButton;

        projectModalLabel.textContent = translations[lang].projects.projectOne.projectModalTitle;
        projectonemodaltext.textContent = translations[lang].projects.projectOne.projectModalTest;
        keyFeatures.forEach((el) => {
            el.textContent = translations[lang].projects.keys;
        });
        listItems.forEach((li, index) => {
            li.textContent = translations[lang].projects.projectOne.keyitemsOne[index];
        });

        techListItems.forEach((li, index) => {
            li.innerHTML = translations[lang].projects.projectOne.techsOne[index];
        });

        technologyUsedLabels.forEach((el) => {
            el.textContent = translations[lang].projects.technologyUsed;
        });
        projectoneroletext.textContent = translations[lang].projects.projectOne.projectOneRoleText;

        projectnametitletwo.textContent = translations[lang].projects.projectTwo.projectNameTitle;
        projectnametexttwo.textContent = translations[lang].projects.projectTwo.projectNameText;
        projectTwoModalLabel.textContent = translations[lang].projects.projectTwo.projectNameTitle;
        chatterdescription.textContent = translations[lang].projects.projectTwo.projectNameText;
        keyfeaturestitle.textContent = translations[lang].projects.keys;
        keyfeatureslist.forEach((li, index) => {
            li.textContent = translations[lang].projects.projectTwo.keyitemsTwo[index];
        });
        technologiesusedtitle.textContent = translations[lang].projects.technologyUsed;
        technologiesusedlist.forEach((li, index) => {
            li.innerHTML = translations[lang].projects.projectTwo.techsTwo[index];
        });
        roletitle.textContent = translations[lang].projects.role;
        roledescription.textContent = translations[lang].projects.projectTwo.projectTwoRoleText;
        closeOne.textContent = translations[lang].projects.close;
        closeTwo.textContent = translations[lang].projects.close;
        goOne.textContent = translations[lang].projects.goProject;
        goTwo.textContent = translations[lang].projects.goProject;

        netbuddyTitle.textContent = translations[lang].projects.projectThree.projectNameTitle;
        netbuddyText.textContent = translations[lang].projects.projectThree.projectNameText;
        netbuddyView.textContent = translations[lang].projects.viewProjectButton;

        netbuddyModalLabel.textContent = translations[lang].projects.projectThree.projectModalTitleThree;
        netbuddyModalText.textContent = translations[lang].projects.projectThree.projectModalTestThree;

        keyItemsNetBuddy.forEach((li, index) => {
            li.textContent = translations[lang].projects.projectThree.keyitemsThree[index];
        });
        techsNetBuddy.forEach((li, index) => {
            li.innerHTML = translations[lang].projects.projectThree.techsThree[index];
        });

        roleLabels.forEach((el) => {
            el.textContent = translations[lang].projects.role;
        });
        netbuddyRoleText.textContent = translations[lang].projects.projectThree.projectThreeRoleText;

        closeNetBuddy.textContent = translations[lang].projects.close;
        goNetBuddy.textContent = translations[lang].projects.goProject;

        if (translations[lang].projects.productManagement) {
            const pm = translations[lang].projects.productManagement;
            if (productNameTitle) productNameTitle.textContent = pm.nameTitle;
            if (productNameText) productNameText.textContent = pm.nameText;
            if (productView) productView.textContent = translations[lang].projects.viewProjectButton;

            if (productModalLabel) productModalLabel.textContent = pm.modalTitle;
            if (productModalText) productModalText.textContent = pm.modalText;

            if (productKeyTitle) productKeyTitle.textContent = pm.keyTitle;
            productKeyItems.forEach((li, index) => {
                li.textContent = pm.keyItems[index] || '';
            });

            if (productTechTitle) productTechTitle.textContent = pm.techTitle;
            productTechItems.forEach((li, index) => {
                li.innerHTML = pm.techItems[index] || '';
            });

            if (productRoleTitle) productRoleTitle.textContent = pm.roleTitle;
            if (productRoleText) productRoleText.innerHTML = pm.roleText;

            if (productClose) productClose.textContent = translations[lang].projects.close;
            if (productGo) productGo.textContent = pm.goGithub;
        }

        contacttitle.textContent = translations[lang].contact.contactTitle;
        namelabel.textContent = translations[lang].contact.nameLabel;
        emaillabel.textContent = translations[lang].contact.emailLabel;
        messagelabel.textContent = translations[lang].contact.messageLabel;
        sendbtn.textContent = translations[lang].contact.sendBtn;

        foottile.textContent = translations[lang].footer.footerTitle;
        footaddresstitle.textContent = translations[lang].footer.footerAddressTitle;
        footerrights.textContent = translations[lang].footer.footerRights;
    }

    if (languageToggle) {
        // Restore saved language and apply it immediately
        const savedLang = localStorage.getItem('lang');
        const initialLang = savedLang === 'jp' || savedLang === 'en' ? savedLang : (languageToggle.checked ? 'jp' : 'en');
        languageToggle.checked = initialLang === 'jp';
        switchLanguage(initialLang);

        languageToggle.addEventListener('change', function () {
            if (languageToggle.checked) {
                localStorage.setItem('lang', 'jp');
                switchLanguage('jp');
            } else {
                localStorage.setItem('lang', 'en');
                switchLanguage('en');
            }
        });
    } else {
        // If the toggle is missing, still apply stored language if present
        const savedLang = localStorage.getItem('lang');
        if (savedLang === 'jp' || savedLang === 'en') {
            switchLanguage(savedLang);
        }
    }
});
