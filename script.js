// 导航栏滚动态
const navbar = document.getElementById("navbar");

const onScroll = () => {
  navbar.classList.toggle("scrolled", window.scrollY > 24);
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// 滚动进入视口时淡入
const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("in-view"));
}

// ---------- 项目详情弹层 ----------
const projectData = {
  metersbonwe: {
    title: "美特斯邦威 · 华南区抖音矩阵",
    role: "新媒体内容运营",
    period: "2024.07 – 2026.03",
    platforms: "平台：抖音 / 小红书",
    summary: "主导两广地区抖音矩阵账号全域运营，统筹内容生产、流量投放及直播转化全链路，打造“短视频 + 直播”双引擎增长模型，成功孵化 2 个百万级流量账号。",
    highlights: [
      "【福利推荐官】冷启动单条爆款播放破 300W+，自然流量占比达 95%，创 48 小时直播 GMV 500W+ 纪录，月均 GMV 40–50W，粉丝月增 210%。",
      "【深圳 kktime】从 0–1 搭建账号体系，7 天完成内容模型验证，首播即达成 30W GMV。",
      "统筹门店内容培训、素材激励与账号复盘，搭建区域内容标准化流程。"
    ],
    gallery: [
      { src: "assets/project-metersbonwe.jpg", alt: "美特斯邦威 爆款与直播数据" },
      { src: "assets/project-metersbonwe-2.jpg", alt: "美特斯邦威 内容截图" },
      { src: "assets/project-metersbonwe-3.jpg", alt: "美特斯邦威 账号矩阵" },
      { src: "assets/project-metersbonwe-4.jpg", alt: "美特斯邦威 门店内容" }
    ]
  },
  ai: {
    title: "私域引擎 · 创始人 AI 数字人",
    role: "内容主管",
    period: "2024.01 – 2024.07",
    platforms: "平台：抖音 / 视频号",
    summary: "为多个不同行业的创始人策划并拍摄生成式 AI 数字人，负责从需求分析、脚本撰写、拍摄执行到后期制作的全流程管理，确保数字人形象与品牌定位高度契合。",
    highlights: [
      "覆盖科技、医美、电商、政府职能部门等多个领域。",
      "从需求 → 脚本 → 拍摄 → 后期的全流程把控。",
      "打造多个行业标杆案例。"
    ],
    gallery: [
      { src: "assets/project-ai.png", alt: "AI 数字人案例" }
    ]
  },
  ip: {
    title: "头道汤 · 董事长 IP 打造",
    role: "编导",
    period: "2022.09 – 2023.12",
    platforms: "平台：抖音",
    summary: "负责集团董事长 IP 打造，参与策划脚本与制作；并赴贵州拍摄企业宣传剧情片，担任灯光组及道具组负责人。",
    highlights: [
      "单条视频播放量 180W+，45 天涨粉 1.3 万。",
      "转化数百名客户。",
      "企业宣传片：统筹灯光与道具，保证拍摄进度。"
    ],
    gallery: [
      { src: "assets/project-ip.png", alt: "头道汤 IP 作品截图" }
    ]
  },
  doctor: {
    title: "海外商家 + 医生 IP 矩阵",
    role: "独立操盘",
    period: "2026.03 – 至今",
    platforms: "平台：Facebook / Instagram / 抖音",
    summary: "海外阶段负责 Facebook 商家运营与泰国公益项目；回国后以自有资源自接 24 位医生 IP 账号，完成定位、内容规划与日常运维的独立操盘。",
    highlights: [
      "海外 Facebook 商家运营 + 泰国公益项目。",
      "24 位医生 IP 账号矩阵，覆盖中医、骨科、风湿、甲状腺等科室。",
      "从账号分级、内容方向到运营要求的全流程梳理。"
    ],
    gallery: [
      { src: "assets/project-overseas-1.png", alt: "海外商家运营" },
      { src: "assets/project-overseas-2.png", alt: "海外商家运营" },
      { src: "assets/project-overseas-3.jpg", alt: "泰国公益项目" },
      { src: "assets/project-doctor-6.jpg", alt: "医生 IP 矩阵" },
      { src: "assets/project-doctor.jpg", alt: "医生 IP 矩阵" },
      { src: "assets/project-doctor-2.jpg", alt: "医生 IP 内容" },
      { src: "assets/project-doctor-3.jpg", alt: "医生 IP 内容" },
      { src: "assets/project-doctor-4.jpg", alt: "医生 IP 内容" },
      { src: "assets/project-doctor-5.jpg", alt: "医生 IP 内容" }
    ]
  }
};

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalRole = document.getElementById("modalRole");
const modalPeriod = document.getElementById("modalPeriod");
const modalPlatforms = document.getElementById("modalPlatforms");
const modalSummary = document.getElementById("modalSummary");
const modalHighlights = document.getElementById("modalHighlights");
const modalGallery = document.getElementById("modalGallery");

function openModal(key) {
  const data = projectData[key];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalRole.textContent = data.role;
  modalPeriod.textContent = data.period;
  modalPlatforms.textContent = data.platforms;
  modalSummary.textContent = data.summary;

  modalHighlights.innerHTML = "";
  data.highlights.forEach((h) => {
    const li = document.createElement("li");
    li.textContent = h;
    modalHighlights.appendChild(li);
  });

  modalGallery.innerHTML = "";
  data.gallery.forEach((img) => {
    const image = document.createElement("img");
    image.src = img.src;
    image.alt = img.alt;
    image.loading = "lazy";
    modalGallery.appendChild(image);
  });

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll(".project[data-project]").forEach((card) => {
  const open = () => openModal(card.dataset.project);
  card.addEventListener("click", open);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open();
    }
  });
});

modal.querySelectorAll("[data-close]").forEach((el) => {
  el.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  if (lightbox.classList.contains("open")) {
    closeLightbox();
  } else if (modal.classList.contains("open")) {
    closeModal();
  }
});


// ---------- 图片放大 lightbox ----------
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt || "";
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}

modalGallery.addEventListener("click", (e) => {
  const img = e.target.closest("img");
  if (img) openLightbox(img.src, img.alt);
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target.closest("[data-lightbox-close]")) {
    closeLightbox();
  }
});
