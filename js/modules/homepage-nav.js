const homepageNavDefaults = {
  backgroundColor: "#FFFFFF",
  items: [
    { id: "nav-sales", size: "large", title: "无人机销售", subtitle: "专业设备选购", image: "./assets/icons/category-enterprise.png", imageName: "无人机销售.png", jumpType: "product", target: "DJI Matrice 350 RTK", enabled: true },
    { id: "nav-rental", size: "large", title: "无人机租赁", subtitle: "灵活租期方案", image: "./assets/icons/category-onsite.png", imageName: "无人机租赁.png", jumpType: "category", target: "设备租赁", enabled: true },
    { id: "nav-repair", size: "large", title: "保养维修", subtitle: "专业检测养护", image: "./assets/icons/category-repair.png", imageName: "保养维修.png", jumpType: "page", target: "/pages/repair/index", enabled: true },
    { id: "nav-insurance", size: "large", title: "无人机保险", subtitle: "设备飞行保障", image: "./assets/icons/category-agency.png", imageName: "无人机保险.png", jumpType: "custom", target: "/pages/insurance/index", enabled: true },
    { id: "nav-airspace", size: "small", title: "空域代办", subtitle: "", image: "./assets/icons/category-agency.png", imageName: "空域代办.png", jumpType: "page", target: "/pages/airspace/index", enabled: true },
    { id: "nav-battery", size: "small", title: "共享电池", subtitle: "", image: "./assets/icons/category-enterprise.png", imageName: "共享电池.png", jumpType: "product", target: "无人机智能电池租赁", enabled: true },
    { id: "nav-training", size: "small", title: "培训服务", subtitle: "", image: "./assets/icons/category-onsite.png", imageName: "培训服务.png", jumpType: "category", target: "培训服务", enabled: true },
    { id: "nav-all", size: "small", title: "全部服务", subtitle: "", image: "./assets/icons/category-repair.png", imageName: "全部服务.png", jumpType: "page", target: "/pages/services/index", enabled: true }
  ]
};

function cloneHomepageNavDefaults() {
  return {
    backgroundColor: homepageNavDefaults.backgroundColor,
    items: homepageNavDefaults.items.map(item => ({ ...item }))
  };
}

state.homepageNav = cloneHomepageNavDefaults();
state.selectedHomepageNavId = state.homepageNav.items[0].id;
state.homepageNavImageUrls = [];
state.homepageConfigTab = "carousel";

function homepageNavEscape(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function selectedHomepageNavItem() {
  return state.homepageNav.items.find(item => item.id === state.selectedHomepageNavId)
    || state.homepageNav.items[0];
}

function homepageNavImage(item, className = "") {
  if (!item.image) {
    return `<span class="homepage-nav-image homepage-nav-image--missing ${className}">${imageMissingIcon()}</span>`;
  }
  return `<span class="homepage-nav-image ${className}"><img src="${homepageNavEscape(item.image)}" alt="${homepageNavEscape(item.title)}"></span>`;
}

function homepageNavLargeCard(item) {
  return `<button class="mini-nav-card${item.enabled ? "" : " is-disabled"}${item.id === state.selectedHomepageNavId ? " is-selected" : ""}" data-action="select-homepage-nav" data-id="${item.id}">
    ${homepageNavImage(item, "mini-nav-card__image")}
    <span class="mini-nav-card__copy">
      <strong data-homepage-preview-title="${item.id}">${homepageNavEscape(item.title)}</strong>
      <small data-homepage-preview-subtitle="${item.id}">${homepageNavEscape(item.subtitle)}</small>
    </span>
    <span class="mini-nav-card__arrow">↗</span>
    ${item.enabled ? "" : `<span class="mini-nav-disabled-label">已停用</span>`}
  </button>`;
}

function homepageNavSmallItem(item) {
  return `<button class="mini-nav-shortcut${item.enabled ? "" : " is-disabled"}${item.id === state.selectedHomepageNavId ? " is-selected" : ""}" data-action="select-homepage-nav" data-id="${item.id}">
    ${homepageNavImage(item, "mini-nav-shortcut__image")}
    <span data-homepage-preview-title="${item.id}">${homepageNavEscape(item.title)}</span>
    ${item.enabled ? "" : `<span class="mini-nav-disabled-label">已停用</span>`}
  </button>`;
}

function homepageCarouselPreview() {
  const enabledItems = state.media.filter(item => item.enabled);
  const activeItem = enabledItems[0];
  const fallbackPoster = activeItem?.poster || "./assets/banners/home-hero.png";
  const media = !activeItem
    ? `<img src="./assets/banners/home-hero.png" alt="奉飞飞无人机服务">`
    : activeItem.type === "视频" && activeItem.url
      ? `<video src="${homepageNavEscape(activeItem.url)}" poster="${homepageNavEscape(fallbackPoster)}" muted playsinline></video>`
      : activeItem.type === "视频"
        ? `<img src="${homepageNavEscape(fallbackPoster)}" alt="${homepageNavEscape(activeItem.name)}">`
      : activeItem.type === "图片" && activeItem.url
        ? `<img src="${homepageNavEscape(activeItem.url)}" alt="${homepageNavEscape(activeItem.name)}">`
        : `<img src="./assets/banners/home-hero.png" alt="奉飞飞无人机服务">`;
  return `<button class="mini-carousel${state.homepageConfigTab === "carousel" ? " is-selected" : ""}" data-action="set-homepage-config-tab" data-tab="carousel">
    <span class="mini-carousel__media">${media}</span>
    <span class="mini-carousel__content">
      <span class="mini-carousel__brand">
        <span class="mini-carousel__brand-mark"><i></i><i></i><i></i></span>
        <span><strong>FENGFEIFEI</strong><small>奉飞飞低空科技</small></span>
      </span>
      <span class="mini-carousel__eyebrow">DRONE INDUSTRY SERVICE</span>
      <span class="mini-carousel__headline">专业飞行服务<br>连接产业新场景</span>
      <span class="mini-carousel__subline">设备、服务与专业飞手一站连接</span>
      <span class="mini-carousel__cta" data-action="homepage-preview-about">关于我们 <b>→</b></span>
    </span>
    <span class="mini-carousel__media-name">${activeItem ? homepageNavEscape(activeItem.name) : "默认品牌主视觉"}</span>
    <span class="mini-carousel__dots">${enabledItems.map((item, index) => `<i class="${index === 0 ? "active" : ""}"></i>`).join("")}</span>
  </button>`;
}

function homepageFixedActions() {
  return `<div class="mini-fixed-actions">
    <button class="mini-fixed-card mini-fixed-card--pilot" data-action="homepage-fixed-entry" data-entry="pilot">
      <span class="mini-fixed-card__icon">飞</span>
      <span class="mini-fixed-card__copy"><small>PILOT SERVICE</small><strong>飞手加入</strong><em>认证入驻 · 承接任务</em></span>
      <span class="mini-fixed-card__arrow">→</span>
    </button>
    <button class="mini-fixed-card mini-fixed-card--report" data-action="homepage-fixed-entry" data-entry="report">
      <span class="mini-fixed-card__icon">报</span>
      <span class="mini-fixed-card__copy"><small>FLIGHT REPORT</small><strong>飞行报备</strong><em>材料提交 · 进度跟进</em></span>
      <span class="mini-fixed-card__arrow">→</span>
    </button>
  </div>`;
}

function homepageNavPreview() {
  const largeItems = state.homepageNav.items.filter(item => item.size === "large");
  const smallItems = state.homepageNav.items.filter(item => item.size === "small");
  return `<div class="homepage-phone">
    <div class="homepage-phone__bar"><span>9:41</span><strong>小程序首页</strong><span>•••</span></div>
    <div class="homepage-phone__screen" data-homepage-preview-bg style="background:${homepageNavEscape(state.homepageNav.backgroundColor)}">
      ${homepageCarouselPreview()}
      <section class="mini-home-section${state.homepageConfigTab === "nav" ? " is-selected" : ""}" data-action="set-homepage-config-tab" data-tab="nav">
        <div class="mini-home-section__label">CORE BUSINESS</div>
        <div class="mini-home-section__head"><strong>商品分类</strong><span>全部 →</span></div>
        <div class="mini-nav-grid">${largeItems.map(homepageNavLargeCard).join("")}</div>
        <div class="mini-nav-divider"></div>
        <div class="mini-nav-shortcuts">${smallItems.map(homepageNavSmallItem).join("")}</div>
      </section>
      ${homepageFixedActions()}
    </div>
    <div class="homepage-phone__home"></div>
  </div>`;
}

function homepageNavTargetField(item) {
  if (item.jumpType === "custom") {
    return `<input data-homepage-field="target" value="${homepageNavEscape(item.target)}" placeholder="请输入以 / 开头的小程序路径">`;
  }

  const options = {
    page: ["/pages/repair/index", "/pages/airspace/index", "/pages/services/index", "/pages/training/index"],
    product: ["DJI Matrice 350 RTK", "无人机智能电池租赁", "基础保养服务", "飞行责任保险"],
    category: ["无人机销售", "设备租赁", "维修保养", "培训服务"]
  }[item.jumpType] || [];

  return `<select data-action="homepage-nav-field" data-homepage-field="target">
    ${options.map(option => `<option${item.target === option ? " selected" : ""}>${homepageNavEscape(option)}</option>`).join("")}
  </select>`;
}

function homepageNavItemList() {
  return `<div class="homepage-nav-item-list">${state.homepageNav.items.map((item, index) => `
    <button class="homepage-nav-item-option${item.id === state.selectedHomepageNavId ? " active" : ""}" data-action="select-homepage-nav" data-id="${item.id}">
      <span class="homepage-nav-item-option__index">${index + 1}</span>
      ${homepageNavImage(item)}
      <span><strong>${homepageNavEscape(item.title)}</strong><small>${item.size === "large" ? "大卡片" : "小入口"} · ${item.enabled ? "已启用" : "已停用"}</small></span>
    </button>`).join("")}</div>`;
}

function homepageNavEditor() {
  const item = selectedHomepageNavItem();
  const sameSizeItems = state.homepageNav.items.filter(entry => entry.size === item.size);
  const sameSizeIndex = sameSizeItems.findIndex(entry => entry.id === item.id);
  return `<div class="homepage-nav-editor">
    <div class="homepage-nav-editor__heading">
      <div><strong>${homepageNavEscape(item.title)}</strong><span class="muted">${item.size === "large" ? "大卡片入口" : "小图标入口"}</span></div>
      <div class="row-actions">
        ${button("上移", "move-homepage-nav", "small", `data-id="${item.id}" data-dir="-1"${sameSizeIndex === 0 ? " disabled" : ""}`)}
        ${button("下移", "move-homepage-nav", "small", `data-id="${item.id}" data-dir="1"${sameSizeIndex === sameSizeItems.length - 1 ? " disabled" : ""}`)}
      </div>
    </div>
    <div class="homepage-nav-image-field">
      ${homepageNavImage(item, "homepage-nav-image--editor")}
      <div><strong>导航图片</strong><span class="muted">${homepageNavEscape(item.imageName || "未选择图片")}</span></div>
      ${button("选择图片", "pick-homepage-nav-image", "", `data-id="${item.id}"`)}
    </div>
    <div class="form-grid">
      <div class="form-field"><label>导航标题</label><input data-homepage-field="title" value="${homepageNavEscape(item.title)}" maxlength="8"></div>
      ${item.size === "large"
        ? `<div class="form-field"><label>导航副标题</label><input data-homepage-field="subtitle" value="${homepageNavEscape(item.subtitle)}" maxlength="12"></div>`
        : `<div class="form-field"><label>入口类型</label><input value="小图标入口" disabled></div>`}
      <div class="form-field"><label>跳转类型</label><select data-action="homepage-nav-field" data-homepage-field="jumpType">
        <option value="page"${item.jumpType === "page" ? " selected" : ""}>小程序页面</option>
        <option value="product"${item.jumpType === "product" ? " selected" : ""}>商品</option>
        <option value="category"${item.jumpType === "category" ? " selected" : ""}>商品分类</option>
        <option value="custom"${item.jumpType === "custom" ? " selected" : ""}>自定义路径</option>
      </select></div>
      <div class="form-field"><label>跳转目标</label>${homepageNavTargetField(item)}</div>
    </div>
    <label class="homepage-nav-enabled"><span><strong>启用该入口</strong><small>停用后小程序保留位置并显示为不可用</small></span><input type="checkbox" data-action="toggle-homepage-nav" data-id="${item.id}"${item.enabled ? " checked" : ""}></label>
  </div>`;
}

function homepageNavPage() {
  const isCarousel = state.homepageConfigTab === "carousel";
  const configActions = isCarousel
    ? ""
    : `${button("重置", "reset-homepage-nav")}${button("保存配置", "save-homepage-nav", "primary")}`;
  const configBody = isCarousel
    ? `<div class="homepage-config-tip"><strong>轮播图配置</strong><span>修改素材、状态和排序后，左侧手机预览同步更新。</span></div>${carouselConfigBody()}`
    : `<div class="homepage-nav-template">
        <div><strong>固定模板</strong><span class="muted">4 个大卡片 + 4 个小入口</span></div>
        <label>背景颜色 <input type="color" data-action="homepage-nav-field" data-homepage-field="backgroundColor" value="${homepageNavEscape(state.homepageNav.backgroundColor)}"></label>
      </div>
      ${homepageNavItemList()}
      ${homepageNavEditor()}`;
  return `<div class="homepage-nav-workspace">
    <section class="panel homepage-nav-preview-panel">
      <div class="panel-head"><h2>小程序首页整体预览</h2><span class="muted">点击轮播区或导航入口可快速编辑</span></div>
      <div class="panel-body">${homepageNavPreview()}</div>
    </section>
    <section class="panel homepage-nav-config-panel">
      <div class="panel-head"><h2>首页内容配置</h2><div class="toolbar">${configActions}</div></div>
      <div class="panel-body">
        <div class="homepage-config-tabs">
          <button class="${isCarousel ? "active" : ""}" data-action="set-homepage-config-tab" data-tab="carousel">轮播图配置</button>
          <button class="${isCarousel ? "" : "active"}" data-action="set-homepage-config-tab" data-tab="nav">导航配置</button>
        </div>
        ${configBody}
      </div>
    </section>
  </div>`;
}

function moveHomepageNavItem(id, direction) {
  const item = state.homepageNav.items.find(entry => entry.id === id);
  if (!item) return;
  const group = state.homepageNav.items.filter(entry => entry.size === item.size);
  const groupIndex = group.findIndex(entry => entry.id === id);
  const nextGroupIndex = groupIndex + direction;
  if (nextGroupIndex < 0 || nextGroupIndex >= group.length) return;
  const currentIndex = state.homepageNav.items.findIndex(entry => entry.id === id);
  const nextIndex = state.homepageNav.items.findIndex(entry => entry.id === group[nextGroupIndex].id);
  [state.homepageNav.items[currentIndex], state.homepageNav.items[nextIndex]] = [state.homepageNav.items[nextIndex], state.homepageNav.items[currentIndex]];
}

function updateHomepageNavPreview(field, value) {
  if (field === "backgroundColor") {
    const screen = document.querySelector("[data-homepage-preview-bg]");
    if (screen) screen.style.background = value;
    return;
  }
  const item = selectedHomepageNavItem();
  const selector = field === "subtitle" ? "subtitle" : "title";
  const node = document.querySelector(`[data-homepage-preview-${selector}="${item.id}"]`);
  if (node) node.textContent = value;
  const optionTitle = document.querySelector(`.homepage-nav-item-option.active strong`);
  if (field === "title" && optionTitle) optionTitle.textContent = value || "未命名入口";
}

function validateHomepageNav() {
  for (const item of state.homepageNav.items) {
    if (!item.title.trim()) return "请填写全部导航标题";
    if (item.size === "large" && !item.subtitle.trim()) return `请填写「${item.title}」的副标题`;
    if (!item.target.trim()) return `请配置「${item.title}」的跳转目标`;
    if ((item.jumpType === "page" || item.jumpType === "custom") && !item.target.startsWith("/")) {
      return `「${item.title}」的小程序路径需要以 / 开头`;
    }
  }
  return "";
}

function bindHomepageNavLiveInputs() {
  document.querySelectorAll("[data-homepage-field]").forEach(input => {
    if (input.tagName === "SELECT" || input.type === "checkbox") return;
    input.addEventListener("input", event => {
      const field = event.target.dataset.homepageField;
      const value = event.target.value;
      if (field === "backgroundColor") {
        state.homepageNav.backgroundColor = value;
      } else {
        selectedHomepageNavItem()[field] = value;
      }
      updateHomepageNavPreview(field, value);
    });
  });
}

DroneAdmin.registerModule({
  id: "homepage-nav",
  routes: ["homepage-nav", "carousel"],
  titles: {
    "homepage-nav": "首页配置",
    "carousel": "首页配置"
  },
  docs: {
    "homepage-nav": {
      summary: "统一配置小程序首页轮播图和服务导航，并通过同一台手机实时查看首页整体效果。",
      operations: [
        "通过轮播图配置和导航配置 Tab 切换当前编辑区域",
        "上传、启停、删除或排序轮播素材，手机顶部轮播区同步更新",
        "点击手机导航入口或入口列表，选择需要编辑的导航项",
        "修改图片、标题、副标题、跳转类型和跳转目标，预览同步更新",
        "启用或停用入口，并在同类型入口范围内通过上移、下移调整顺序",
        "保存前校验标题、副标题和跳转目标；重置可恢复默认演示配置"
      ],
      fields: [
        ["轮播素材", "支持 1 个视频和最多 5 张图片；视频固定首位，图片可以排序"],
        ["导航图片", "入口展示图；大卡片和小入口使用不同展示尺寸"],
        ["标题 / 副标题", "大卡片展示标题和副标题，小入口仅展示标题"],
        ["入口类型", "固定为大卡片或小入口，不支持跨类型移动"],
        ["跳转类型", "支持小程序页面、商品、商品分类和自定义路径"],
        ["跳转目标", "根据跳转类型选择演示目标；页面路径必须以 / 开头"],
        ["启用状态", "停用后入口保留模板位置，并在预览中标记为不可用"],
        ["排序", "大卡片和小入口分别进行组内排序，不改变固定模板结构"]
      ]
    },
    "carousel": {
      summary: "统一配置小程序首页轮播图和服务导航，并通过同一台手机实时查看首页整体效果。",
      operations: [
        "通过轮播图配置和导航配置 Tab 切换当前编辑区域",
        "上传、启停、删除或排序轮播素材，手机顶部轮播区同步更新",
        "点击手机中的导航区域可切换到导航配置"
      ],
      fields: [
        ["轮播素材", "支持 1 个视频和最多 5 张图片；视频固定首位，图片可以排序"],
        ["启用状态", "关闭后该素材不在手机轮播预览中展示"],
        ["首页导航", "固定为 4 个大卡片和 4 个小入口，可在导航配置 Tab 中编辑"]
      ]
    }
  },
  pages: {
    "homepage-nav": homepageNavPage,
    "carousel": homepageNavPage
  },
  actions: {
    "homepage-preview-about": function () {
      toast("模拟进入小程序「关于我们」");
    },
    "homepage-fixed-entry": function (target) {
      toast(target.dataset.entry === "pilot"
        ? "模拟进入小程序「飞手加入」"
        : "模拟进入小程序「飞行报备」");
    },
    "set-homepage-config-tab": function (target) {
      state.homepageConfigTab = target.dataset.tab;
      render();
    },
    "select-homepage-nav": function (target) {
      state.homepageConfigTab = "nav";
      state.selectedHomepageNavId = target.dataset.id;
      render();
    },
    "pick-homepage-nav-image": async function (target) {
      const item = state.homepageNav.items.find(entry => entry.id === target.dataset.id);
      if (!item) return;
      const files = await pickLocalFile({ accept: "image/*" });
      const file = files[0];
      if (!file) {
        toast("未选择图片");
        return;
      }
      if (item.image?.startsWith("blob:")) URL.revokeObjectURL(item.image);
      const url = URL.createObjectURL(file);
      state.homepageNavImageUrls.push(url);
      item.image = url;
      item.imageName = file.name;
      render();
      toast(`已选择图片：${file.name}`);
    },
    "move-homepage-nav": function (target) {
      moveHomepageNavItem(target.dataset.id, Number(target.dataset.dir));
      render();
      toast("导航排序已更新");
    },
    "save-homepage-nav": function () {
      const error = validateHomepageNav();
      if (error) {
        toast(error);
        return;
      }
      toast("首页导航配置已保存");
    },
    "reset-homepage-nav": function () {
      modal("重置首页导航", "<p>确认恢复默认的 8 个首页导航入口？当前修改将被清除。</p>",
        `${button("取消", "close-modal")}${button("确认重置", "confirm-reset-homepage-nav", "danger")}`);
    },
    "confirm-reset-homepage-nav": function () {
      state.homepageNavImageUrls.forEach(url => URL.revokeObjectURL(url));
      state.homepageNavImageUrls = [];
      state.homepageNav = cloneHomepageNavDefaults();
      state.selectedHomepageNavId = state.homepageNav.items[0].id;
      closeModal();
      render();
      toast("已恢复默认首页导航");
    }
  },
  changeActions: {
    "homepage-nav-field": function (target) {
      const field = target.dataset.homepageField;
      const value = target.value;
      if (field === "backgroundColor") {
        state.homepageNav.backgroundColor = value;
        updateHomepageNavPreview(field, value);
        return;
      }
      const item = selectedHomepageNavItem();
      item[field] = value;
      if (field === "jumpType") {
        item.target = {
          page: "/pages/services/index",
          product: "DJI Matrice 350 RTK",
          category: "无人机销售",
          custom: "/pages/custom/index"
        }[value];
        render();
      }
    },
    "toggle-homepage-nav": function (target) {
      const item = state.homepageNav.items.find(entry => entry.id === target.dataset.id);
      if (!item) return;
      item.enabled = target.checked;
      render();
      toast(item.enabled ? "已启用该导航入口" : "已停用该导航入口");
    }
  },
  afterRender: {
    "homepage-nav": bindHomepageNavLiveInputs,
    "carousel": bindHomepageNavLiveInputs
  },
  beforeNavigate: null,
  onClose: null
});
