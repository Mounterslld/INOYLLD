// Данные об играх
const games = [
{
        id: 1,
        title: "The Witcher 3: Wild Hunt",
        genre: "rpg",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg",
        description: "Эпическая RPG от CD Projekt Red. Геральт из Ривии ищет пропавшую Цири, сражаясь с чудовищами и принимая морально сложные решения. Игра с открытым миром, богатым сюжетом и дополнениями «Hearts of Stone» и «Blood and Wine»."
    },
    {
        id: 2,
        title: "Baldur’s Gate 3",
        genre: "rpg",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1086940/header.jpg",
        description: "Продолжение легендарной серии RPG от Larian Studios. Глубокие диалоги, тактические бои на основе D&D 5e и свобода выбора, которая влияет на мир."
    },
    {
        id: 3,
        title: "Divinity: Original Sin 2",
        genre: "rpg",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/435150/header.jpg",
        description: "Лучшая cRPG современности. Кооператив на 4 игрока, интерактивный мир, где можно поджигать воду или телепортировать врагов в лаву."
    },
    {
        id: 4,
        title: "Dragon Age: Origins",
        genre: "rpg",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/47810/header.jpg",
        description: "Классика BioWare. Тактические бои, ветвящийся сюжет и запоминающиеся спутники вроде Морриган и Алистера."
    },
    {
        id: 5,
        title: "Mass Effect: Legendary Edition",
        genre: "rpg",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1328670/header.jpg",
        description: "Трилогия в 4K. Шепард, Реперы и романсы с инопланетянами. Влияние решений на все три игры."
    },
    {
        id: 6,
        title: "Fallout: New Vegas",
        genre: "rpg",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/22380/header.jpg",
        description: "Лучший Fallout по мнению фанатов. Пустоши Мохаве, война между NCR и Легионом, и тонны чёрного юмора."
    },
    // Шутеры
    {
        id: 7,
        title: "Counter-Strike 2",
        genre: "shooter",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
        description: "Киберспортивный хит Valve. Деффы против террористов на картах Dust II и Mirage."
    },    
    {
        id: 8,
        title: "Lions Of War",
        genre: "shooter",
        image: "https://a.imgfoto.host/2025/06/22/photo_2025-04-13_14-20-24.md.jpeg",
        description: "Данная игра повествует войну Леонида"
    },
    
    // Стратегии
    {
        id: 9,
        title: "Stellaris",
        genre: "strategy",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/281990/header.jpg",
        description: "Глобальная стратегия с исследованием галактики и уничтожением разумных рас (по желанию)."
    },
    // Инди
    {
        id: 10,
        title: "Hollow Knight",
        genre: "indie",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg",
        description: "Метроидвания с атмосферой и сложными боссами. Червячки с мечами!"
    },
    {
        id: 11,
        title: "HUNT: SHOWDOWN 1896",
        genre: "shooter",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/594650/header.jpg",
        description: "Хардкорный PvPvE-шутер с атмосферой Луизианских болот. Охота на монстров, добыча трофеев и побег — пока вас не убили другие охотники."
    },
    {
        id: 12,
        title: "Battlefield V",
        genre: "shooter",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1238810/header.jpg",
        description: "Масштабные сражения Второй мировой с разрушаемостью и тактическими режимами. «Роттердам» и «Огненный шторм» ждут!"
    },
    {
        id: 13,
        title: "Arma 3",
        genre: "shooter",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/107410/header.jpg",
        description: "Симулятор военных действий с открытым миром. Реалистичная баллистика, моды вроде «DayZ» и «Exile», кооперативные миссии."
    },
    {
        id: 14,
        title: "Arma Reforger",
        genre: "shooter",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1874880/header.jpg",
        description: "Обновлённая версия классики с движком Enfusion. Конфликт на острове Эверон в режимах PvP и PvE."
    },
    {
        id: 15,
        title: "Deep Rock Galactic",
        genre: "shooter",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/548430/header.jpg",
        description: "Кооперативный шутер про гномов-шахтёров. Добывайте минералы, отбивайтесь от жуков и кричите «За Камень и Камень!»."
    },
    {
        id: 16,
        title: "GTFO",
        genre: "shooter",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/493520/header.jpg",
        description: "Хоррор-шутер для 4 игроков. Вы — заключённые, которых отправили в подземный комплекс с мутантами. Тишина — ваше оружие."
    },
    {
        id: 17,
        title: "Overwatch 2",
        genre: "shooter",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2357570/header.jpg",
        description: "Командный hero-шутер от Blizzard. Новые герои, режим «Push» и ежеквартальные ивенты."
    },
    {
        id: 18,
        title: "Bodycam",
        genre: "shooter",
        image: "https://avatars.mds.yandex.net/i?id=c77076b2393f0b6a653803e0823ac00b_l-5287893-images-thumbs&n=13",
        description: "Хардкорный шутер от первого лица с гиперреалистичной графикой. Каждый выстрел на вес золота."
    },
    {
        id: 19,
        title: "Dota 2",
        genre: "strategy",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg",
        description: "Легендарная MOBA от Valve. 120+ героев, киберспортивные турниры с миллионными призами и бесконечная глубина тактик.",
        downloadLink: "https://store.steampowered.com/app/570"
    },
    {
        id: 20,
        title: "Hearts of Iron IV",
        genre: "strategy",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/394360/header.jpg",
        description: "Глобальная стратегия про Вторую мировую войну. Управляйте страной, разрабатывайте танки и меняйте историю.",
        downloadLink: "https://store.steampowered.com/app/394360"
    },
    {
        id: 21,
        title: "Broken Arrow",
        genre: "strategy",
        image: "https://avatars.mds.yandex.net/i?id=b1182189cd5f8e3994b50f0d81063e23_l-8200828-images-thumbs&n=13",
        description: "Тактическая стратегия о современных конфликтах. Реалистичные боевые единицы и динамичные сражения.",
        downloadLink: "https://store.steampowered.com/app/1392080"
    },
    {
        id: 22,
        title: "Victoria 3",
        genre: "strategy",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/529340/header.jpg",
        description: "Экономическая и политическая стратегия XIX века. Управляйте промышленностью, реформами и колониями.",
        downloadLink: "https://store.steampowered.com/app/529340"
    },
    {
        id: 23,
        title: "Warhammer 40,000: Rogue Trader",
        genre: "strategy",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2186680/header.jpg",
        description: "CRPG во вселенной Warhammer 40K. Возглавьте династию торговцев и исследуйте мрачную галактику.",
        downloadLink: "https://store.steampowered.com/app/2186680"
    },
    {
        id: 24,
        title: "Northgard",
        genre: "strategy",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/466560/header.jpg",
        description: "Стратегия с викингами и мифологией. Осваивайте земли, сражайтесь с валькириями и переживите зиму.",
        downloadLink: "https://store.steampowered.com/app/466560"
    },
    {
        id: 25,
        title: "Tropico 6",
        genre: "strategy",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/492720/header.jpg",
        description: "Симулятор диктатора тропического острова. Стройте дворцы, подавляйте восстания и торгуйте с сверхдержавами.",
        downloadLink: "https://store.steampowered.com/app/492720"
    },
    {
        id: 26,
        title: "Kenshi",
        genre: "strategy",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/233860/header.jpg",
        description: "Пост-апокалиптический sandbox с элементами RPG. Создайте отряд выживших, станьте работорговцем или... добычей.",
        downloadLink: "https://store.steampowered.com/app/233860"
    },
    {
        id: 27,
        title: "Katana ZERO",
        genre: "indie",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/460950/header.jpg",
        description: "Стильный нео-нуар экшен с замедлением времени. Убивайте врагов одним ударом, перематывайте время и раскрывайте мрачный сюжет.",
        downloadLink: "https://store.steampowered.com/app/460950"
    },
    {
        id: 28,
        title: "The Binding of Isaac: Rebirth",
        genre: "indie",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/250900/header.jpg",
        description: "Культовый roguelike с пробивным геймплеем и тёмным юмором. 500+ предметов, жуткие боссы и бесконечная реиграбельность.",
        downloadLink: "https://store.steampowered.com/app/250900"
    },
    {
        id: 29,
        title: "Balatro",
        genre: "indie",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2379780/header.jpg",
        description: "Гениальный гибрид покера и roguelike. Собирайте артефакты, ломайте игру и создавайте невозможные комбинации.",
        downloadLink: "https://store.steampowered.com/app/2379780"
    },
    {
        id: 30,
        title: "R.E.P.O.",
        genre: "indie",
        image: "https://avatars.mds.yandex.net/i?id=d99de769d017490c5240888cc4732cdd_l-4892849-images-thumbs&n=13",
        description: " игроки берут на себя роль роботов, которые выполняют приказы искусственного интеллекта по прозвищу Taxman. Их отправляют в мрачные локации, где необходимо добывать ценные предметы, оставшиеся после исчезновения человечества.",
        downloadLink: "https://store.steampowered.com/app/2652730"
    },
    {
        id: 31,
        title: "Don't Starve",
        genre: "indie",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/219740/header.jpg",
        description: "Выживание в готическом мультяшном мире. Стройте базы, сражайтесь с монстрами и не сходите с ума от голода.",
        downloadLink: "https://store.steampowered.com/app/219740"
    },
    {
        id: 32,
        title: "Content Warning",
        genre: "indie",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2881650/header.jpg",
        description: "Кооперативный хоррор для стримеров. Снимайте видео с монстрами, чтобы стать вирусным — если выживете.",
        downloadLink: "https://store.steampowered.com/app/2881650"
    },
    {
        id: 33,
        title: "Черная Книга",
        genre: "indie",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1138660/header.jpg",
        description: "RPG по славянским мифам. Играйте за юную ведьму, заключайте договора с демонами и решайте моральные дилеммы.",
        downloadLink: "https://store.steampowered.com/app/1138660"
    },
    {
        id: 34,
        title: "Dead Cells",
        genre: "indie",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/588650/header.jpg",
        description: "Метроидвания × roguelike с идеальным контролем. Каждое прохождение уникально, а смерть — это только начало.",
        downloadLink: "https://store.steampowered.com/app/588650"
    },
    {
        id: 35,
        title: "Sifu",
        genre: "indie",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2138710/header.jpg",
        description: "Жесткий экшен про кунг-фу. Старейте с каждой смертью, но становитесь сильнее. Месть требует мастерства.",
        downloadLink: "https://store.steampowered.com/app/2138710"
    },
    {
        id: 36,
        title: "Inscryption",
        genre: "indie",
        image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1092790/header.jpg",
        description: "Карточная игра с психоделическим хоррором. Сбегите из избушки Сумасшедшего Лесника... если сможете.",
        downloadLink: "https://store.steampowered.com/app/1092790"
    }
];

// Заполняем сетку игр
const gamesGrid = document.getElementById('gamesGrid');
const modal = document.getElementById('gameModal');
const modalTitle = document.querySelector('.modal-title');
const modalImage = document.querySelector('.modal-image');
const modalDescription = document.querySelector('.modal-description');
const modalGenre = document.querySelector('.modal-genre');
const closeBtn = document.querySelector('.close-btn');

function renderGames(genre = 'all') {
    gamesGrid.innerHTML = '';
    const filteredGames = genre === 'all' ? games : games.filter(game => game.genre === genre);
    
    filteredGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <div class="game-info">
                <h3>${game.title}</h3>
                <p>${game.genre.toUpperCase()}</p>
            </div>
        `;
        gameCard.addEventListener('click', () => openModal(game));
        gamesGrid.appendChild(gameCard);
    });
}

// Открытие модального окна
function openModal(game) {
    modalTitle.textContent = game.title;
    modalImage.src = game.image;
    modalDescription.textContent = game.description;
    modalGenre.textContent = `Жанр: ${game.genre.toUpperCase()}`;
    modal.style.display = 'flex';
}

// Закрытие модального окна
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Фильтрация по жанрам
document.querySelectorAll('.genre-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.genre-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGames(btn.dataset.genre);
    });
});

// Первоначальная загрузка
renderGames();