// ===== 影视剧数据 =====
const films = [
    {
        id: 1,
        title: "流浪地球2",
        type: "电影",
        genre: "科幻",
        year: 2023,
        rating: 8.3,
        director: "郭帆",
        poster: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20sci-fi%20movie%20poster%2C%20space%20station%2C%20earth%2C%20epic%2C%20cinematic&image_size=portrait_4_3",
        summary: "太阳即将毁灭，人类在地球表面建造出巨大的推进器，寻找新的家园。然而宇宙之路危机四伏，为了拯救地球，流浪地球时代的年轻人再次挺身而出。",
        description: "太阳即将毁灭，人类在地球表面建造出巨大的推进器，寻找新的家园。然而宇宙之路危机四伏，为了拯救地球，流浪地球时代的年轻人再次挺身而出，展开争分夺秒的生死之战。本片是《流浪地球》的前传，讲述了太阳危机初期，人类启动流浪地球计划的艰难历程。",
        actors: ["吴京", "刘德华", "李雪健", "沙溢", "宁理"],
        trailer: "https://www.bilibili.com/video/BV1YG411A7x7"
    },
    {
        id: 2,
        title: "繁花",
        type: "剧集",
        genre: "剧情",
        year: 2023,
        rating: 8.7,
        director: "王家卫",
        poster: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shanghai%201990s%20drama%20poster%2C%20retro%20cityscape%2C%20elegant%2C%20night&image_size=portrait_4_3",
        summary: "以阿宝的视角，讲述了上海九十年代的商战风云与都市情感故事。",
        description: "该剧改编自金宇澄的同名小说，故事将展开三条线：宝总（胡歌 饰）在黄河路的商战风云；来自东北农村的玲子（马伊琍 饰）在上海打拼的励志故事；以及汪小姐（唐嫣 饰）在外贸公司的成长经历。王家卫首次执导剧集，用独特的影像风格呈现九十年代上海的繁花似锦。",
        actors: ["胡歌", "马伊琍", "唐嫣", "辛芷蕾", "游本昌"],
        trailer: "https://www.bilibili.com/video/BV1Xb4y1V7tF"
    },
    {
        id: 3,
        title: "狂飙",
        type: "剧集",
        genre: "悬疑",
        year: 2023,
        rating: 8.5,
        director: "徐纪周",
        poster: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=crime%20thriller%20TV%20show%20poster%2C%20dark%20atmosphere%2C%20police%20vs%20gangster%2C%20intense&image_size=portrait_4_3",
        summary: "讲述了以一线刑警安欣为代表的正义力量，与黑恶势力展开二十年生死较量的故事。",
        description: "该剧讲述了以一线刑警安欣（张译 饰）为代表的正义力量，与黑恶势力展开二十年生死较量的故事。通过讲述警察安欣与黑帮老大高启强之间长达二十年的斗争，展现了扫黑除恶行动中的艰辛与牺牲。本剧2023年开年即成为爆款，引发全民追剧热潮。",
        actors: ["张译", "张颂文", "李一桐", "张志坚", "吴刚"],
        trailer: "https://www.bilibili.com/video/BV1e14y1j7zD"
    },
    {
        id: 4,
        title: "满江红",
        type: "电影",
        genre: "古装",
        year: 2023,
        rating: 7.0,
        director: "张艺谋",
        poster: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20warrior%20poster%2C%20red%20maple%20leaves%2C%20dynasty%20drama%2C%20epic&image_size=portrait_4_3",
        summary: "南宋绍兴年间，岳飞死后四年，秦桧率兵与金国会谈，会谈前夜，金国使者死在宰相驻地。",
        description: "南宋绍兴年间，岳飞死后四年，秦桧（雷佳音 饰）率兵与金国会谈。会谈前夜，金国使者死在宰相驻地，所携密信也不翼而飞。小兵张大（沈腾 饰）与亲兵营副统领孙均（易烊千玺 饰）机缘巧合被卷入这场巨大阴谋，两人不得不在层层谜局中找出真相。",
        actors: ["沈腾", "易烊千玺", "张译", "雷佳音", "王佳怡"],
        trailer: "https://www.bilibili.com/video/BV1pY4y1V7jA"
    },
    {
        id: 5,
        title: "长津湖",
        type: "电影",
        genre: "动作",
        year: 2021,
        rating: 7.4,
        director: "陈凯歌/徐克/林超贤",
        poster: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Korean%20war%20movie%20poster%2C%20soldiers%20in%20snow%2C%20epic%20battle%2C%20emotional&image_size=portrait_4_3",
        summary: "抗美援朝战争第二次战役中的长津湖战役，志愿军第九兵团在极寒环境下与美军王牌部队的殊死搏斗。",
        description: "该片以抗美援朝战争第二次战役中的长津湖战役为背景，讲述了一段波澜壮阔的历史：1950年11月，中国人民志愿军第九兵团远赴朝鲜，在极寒严酷环境下，东线作战部队凭着钢铁意志和英勇无畏的战斗精神，奋勇杀敌，扭转了战场态势，打出了军威国威。",
        actors: ["吴京", "易烊千玺", "段奕宏", "朱亚文", "李晨"],
        trailer: "https://www.bilibili.com/video/BV1jh411V7qD"
    },
    {
        id: 6,
        title: "你好，李焕英",
        type: "电影",
        genre: "喜剧",
        year: 2021,
        rating: 7.7,
        director: "贾玲",
        poster: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=heartwarming%20family%20comedy%20movie%20poster%2C%20mother%20and%20daughter%2C%201980s%20China%2C%20colorful&image_size=portrait_4_3",
        summary: "贾小玲穿越回1981年，与正值青春的母亲李焕英相遇，上演了一场奇妙又感人的亲情故事。",
        description: "影片改编自贾玲的亲身经历，讲述了刚考上大学的女孩贾小玲（贾玲 饰）意外穿越回1981年，与正值青春的母亲李焕英（张小斐 饰）相遇。为了让母亲开心，她竭尽全力促成母亲与厂长儿子的姻缘，却不知道母亲也有自己的心事。本片是贾玲首次执导，成为中国影史票房最高的女导演作品。",
        actors: ["贾玲", "张小斐", "沈腾", "陈赫", "魏翔"],
        trailer: "https://www.bilibili.com/video/BV1Xa4y1V7t5"
    },
    {
        id: 7,
        title: "庆余年第二季",
        type: "剧集",
        genre: "古装",
        year: 2024,
        rating: 7.9,
        director: "孙皓",
        poster: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ancient%20Chinese%20costume%20drama%20poster%2C%20imperial%20palace%2C%20power%20struggle%2C%20elegant&image_size=portrait_4_3",
        summary: "范闲在京都经历了种种风波后，即将踏上新的征程，面对更大的挑战和阴谋。",
        description: "本剧是《庆余年》的续作，改编自猫腻同名小说。范闲（张若昀 饰）在经历了京都的种种风波后，即将出使北齐，面对更大的挑战和阴谋。上季留下的悬念将在这一季一一揭晓，范闲的身世之谜也将逐渐浮出水面。陈道明、吴刚等老戏骨继续加盟，阵容强大。",
        actors: ["张若昀", "李沁", "陈道明", "吴刚", "田雨"],
        trailer: "https://www.bilibili.com/video/BV1Fv4y1L7nX"
    },
    {
        id: 8,
        title: "消失的她",
        type: "电影",
        genre: "悬疑",
        year: 2023,
        rating: 6.5,
        director: "崔睿/刘翔",
        poster: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=mystery%20thriller%20movie%20poster%2C%20woman%20in%20mask%2C%20dark%20sea%2C%20suspenseful&image_size=portrait_4_3",
        summary: "丈夫在结婚周年旅行中报案称妻子失踪，然而当妻子再次出现时，丈夫却声称眼前的女人并非自己的妻子。",
        description: "改编自苏联电影《为单身汉设下的陷阱》。丈夫何非（朱一龙 饰）在结婚周年旅行中报案称妻子李木子（黄子琪 饰）失踪，然而当妻子再次出现时，何非却声称眼前的女人并非自己的妻子。金牌律师陈麦（倪妮 饰）介入案件调查，真相却远比想象中更加扑朔迷离。",
        actors: ["朱一龙", "倪妮", "文咏珊", "杜江", "黄子琪"],
        trailer: "https://www.bilibili.com/video/BV1Ls4y1A7sE"
    },
    {
        id: 9,
        title: "我们的少年时代",
        type: "剧集",
        genre: "剧情",
        year: 2017,
        rating: 8.2,
        director: "成志超",
        poster: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=teenage%20baseball%20drama%20poster%2C%20high%20school%20students%2C%20sports%2C%20energetic&image_size=portrait_4_3",
        summary: "三个少年因棒球结缘，在成长路上经历友情、梦想与挫折的青春故事。",
        description: "这是一部讲述青少年成长的励志剧。TFBOYS组合王俊凯、王源、易烊千玺首次联袂主演，分别饰演邬童、班小松、尹柯三位棒球少年。故事围绕棒球运动展开，讲述了三位性格迥异的少年在棒球队中相遇、相知、共同成长的青春故事。李小璐、薛之谦等实力派演员倾情加盟。",
        actors: ["王俊凯", "王源", "易烊千玺", "李小璐", "薛之谦"],
        trailer: "https://www.bilibili.com/video/BV17x411x7Xa"
    },
    {
        id: 10,
        title: "封神第一部",
        type: "电影",
        genre: "动作",
        year: 2023,
        rating: 7.8,
        director: "乌尔善",
        poster: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Chinese%20mythology%20epic%20movie%20poster%2C%20ancient%20gods%2C%20warriors%2C%20fantasy&image_size=portrait_4_3",
        summary: "商王殷寿勾结狐妖妲己，暴虐无道，引发天谴。姜子牙携封神榜下山，寻找天下共主。",
        description: "《封神》三部曲的开篇之作。商王殷寿（费翔 饰）勾结狐妖妲己（娜然 饰），暴虐无道，引发天谴。昆仑仙人姜子牙（黄渤 饰）携封神榜下山，寻找天下共主，以救苍生。西岐质子姬发（于适 饰）逐渐发现殷寿的暴行，决定反抗。本片投资超30亿，历时十年打造，是中国电影史上投资最大的奇幻史诗巨制之一。",
        actors: ["费翔", "李雪健", "黄渤", "于适", "娜然"],
        trailer: "https://www.bilibili.com/video/BV1pX4y1V77B"
    },
    {
        id: 11,
        title: "你好，旧时光",
        type: "剧集",
        genre: "爱情",
        year: 2017,
        rating: 8.6,
        director: "沙漠",
        poster: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=high%20school%20romance%20drama%20poster%2C%20students%20walking%20together%2C%20sunny%20day%2C%20nostalgic&image_size=portrait_4_3",
        summary: "余周周与林杨在振华中学相遇，从小学到高中毕业，长达十年的青春成长故事。",
        description: "该剧改编自八月长安的同名小说，讲述了女孩余周周（李兰迪 饰）与男孩林杨（张新成 饰）从小学到高中毕业长达十年的青春成长故事。余周周是个想象力丰富的女孩，林杨则是阳光开朗的学霸。两人在振华中学相遇，共同经历了青春的喜怒哀乐。本剧被誉为「校园剧天花板」，口碑爆棚。",
        actors: ["李兰迪", "张新成", "周澄奥", "李牵", "许梦圆"],
        trailer: "https://www.bilibili.com/video/BV1hx411w7xG"
    },
    {
        id: 12,
        title: "独行月球",
        type: "电影",
        genre: "喜剧",
        year: 2022,
        rating: 6.7,
        director: "张吃鱼",
        poster: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lone%20astronaut%20on%20moon%2C%20comedy%20movie%20poster%2C%20space%20suit%2C%20earth%20in%20distance&image_size=portrait_4_3",
        summary: "人类为了抵御小行星撞击，启动月盾计划，独孤月却在撤离时被遗留在了月球。",
        description: "该片改编自韩国漫画家赵石创作的同名漫画。人类为了抵御小行星的撞击，启动了「月盾计划」，在月球部署核弹。维修工独孤月（沈腾 饰）却在撤离时被遗留在了月球。他在地球幸存者们的注视下，与一只同样被留下的袋鼠「刚子」相依为命，展开了一场荒诞又感人的月球求生之旅。",
        actors: ["沈腾", "马丽", "常远", "李诚儒", "黄才伦"],
        trailer: "https://www.bilibili.com/video/BV1qY4y1V7v3"
    }
];

// ===== 状态管理 =====
let currentFilter = "all";
let currentSearch = "";

// ===== 渲染函数 =====
function renderFilms() {
    const grid = document.getElementById("filmGrid");
    
    // 筛选
    let filtered = films.filter(film => {
        const matchType = currentFilter === "all" || film.genre === currentFilter;
        const matchSearch = currentSearch === "" || 
            film.title.includes(currentSearch) || 
            film.actors.some(a => a.includes(currentSearch)) ||
            film.genre.includes(currentSearch);
        return matchType && matchSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 60px; color: #888;">
            <h3>😢 没有找到匹配的影视剧</h3>
            <p>试试换个关键词吧~</p>
        </div>`;
        return;
    }

    grid.innerHTML = filtered.map(film => `
        <div class="film-card" onclick="openModal(${film.id})">
            <div class="film-poster">
                <img src="${film.poster}" alt="${film.title}" loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22240%22 height=%22340%22><rect fill=%22%232a2a3e%22 width=%22240%22 height=%22340%22/><text x=%22120%22 y=%22170%22 fill=%22%23888%22 font-size=%2214%22 text-anchor=%22middle%22>海报加载中...</text></svg>'">
                <span class="film-type">${film.type}</span>
                <span class="film-badge">${film.genre}</span>
            </div>
            <div class="film-info">
                <h3 class="film-title">${film.title}</h3>
                <div class="film-meta">
                    <span>${film.year}</span>
                    <span class="rating">${film.rating}</span>
                </div>
                <p class="film-summary">${film.summary}</p>
            </div>
        </div>
    `).join("");
}

// ===== 打开详情弹窗 =====
function openModal(id) {
    const film = films.find(f => f.id === id);
    if (!film) return;

    const content = document.getElementById("modalContent");
    content.innerHTML = `
        <div class="modal-hero">
            <div class="modal-poster">
                <img src="${film.poster}" alt="${film.title}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22280%22><rect fill=%22%232a2a3e%22 width=%22200%22 height=%22280%22/><text x=%22100%22 y=%22140%22 fill=%22%23888%22 font-size=%2214%22 text-anchor=%22middle%22>海报</text></svg>'">
            </div>
            <div class="modal-info">
                <h2 class="modal-title">${film.title}</h2>
                <div class="modal-meta">
                    <span>📺 ${film.type}</span>
                    <span>🎬 ${film.genre}</span>
                    <span>📅 ${film.year}</span>
                    <span>⭐ ${film.rating}</span>
                </div>
                <div class="modal-section">
                    <h3>🎯 基本信息</h3>
                    <p><strong>导演：</strong>${film.director}</p>
                </div>
                <div class="modal-section">
                    <h3>👥 主演阵容</h3>
                    <ul class="actor-list">
                        ${film.actors.map(a => `<li>${a}</li>`).join("")}
                    </ul>
                </div>
            </div>
        </div>
        <div class="modal-section">
            <h3>📖 剧情简介</h3>
            <p>${film.description}</p>
        </div>
        <div class="modal-section">
            <h3>🎬 观看预告片</h3>
            <div class="trailer-container">
                <p style="margin-bottom:10px; color:#888;">👉 
                    <a href="${film.trailer}" target="_blank" rel="noopener" style="color:#ff6b35; text-decoration:underline;">点击此处观看 ${film.title} 预告</a>
                </p>
                <iframe src="${film.trailer.replace('www.bilibili.com/video/', 'player.bilibili.com/player.html?bvid=').split('?')[0]}" 
                        scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms">
                </iframe>
            </div>
        </div>
    `;

    document.getElementById("modalOverlay").classList.add("active");
    document.body.style.overflow = "hidden";
}

// ===== 关闭弹窗 =====
function closeModal() {
    document.getElementById("modalOverlay").classList.remove("active");
    document.body.style.overflow = "";
}

// ===== 搜索功能 =====
function searchFilms() {
    currentSearch = document.getElementById("searchInput").value.trim();
    renderFilms();
}

// ===== 筛选按钮事件 =====
document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.type;
        renderFilms();
    });
});

// ===== 回车搜索 =====
document.getElementById("searchInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") searchFilms();
});

// ===== 点击遮罩关闭 =====
document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "modalOverlay") closeModal();
});

// ===== ESC关闭 =====
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});

// ===== 初始化 =====
renderFilms();

console.log("%c🎬 热门影视剧简介 页面加载完成!", "color: #ff6b35; font-size: 16px; font-weight: bold;");
console.log("共加载 " + films.length + " 部影视剧数据");
