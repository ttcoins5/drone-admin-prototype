const menu = [
  { id: "dashboard", label: "工作台", icon: "台" },
  { id: "carousel", label: "轮播图管理", icon: "播" },
  { id: "users", label: "用户管理", icon: "用", children: [
    { id: "users", label: "用户列表" }
  ]},
  { id: "categories", label: "商品管理", icon: "商", children: [
    { id: "categories", label: "商品分类管理" },
    { id: "products", label: "商品列表" },
    { id: "product-edit", label: "创建 / 编辑商品" }
  ]},
  { id: "orders", label: "订单管理", icon: "单", children: [
    { id: "orders", label: "订单列表" },
    { id: "order-detail", label: "订单详情与派单" }
  ]},
  { id: "training", label: "培训管理", icon: "培" },
  { id: "pilot-applications", label: "飞手管理", icon: "飞", children: [
    { id: "pilot-applications", label: "入驻申请" },
    { id: "pilots", label: "已认证飞手" },
    { id: "tasks", label: "任务需求与意愿" }
  ]},
  { id: "invoices", label: "发票中心", icon: "票" },
  { id: "about", label: "关于我们", icon: "企" }
];

const titles = {
  dashboard: "工作台", carousel: "轮播图管理", users: "用户列表",
  "user-detail": "用户详情", categories: "商品分类管理", products: "商品列表",
  "product-edit": "创建 / 编辑商品", orders: "订单列表", "order-detail": "订单详情与派单",
  training: "培训报名线索", "pilot-applications": "飞手入驻申请", "pilot-review": "飞手审核详情",
  pilots: "已认证飞手", "pilot-detail": "飞手详情", tasks: "任务需求与意愿",
  invoices: "发票中心", "invoice-detail": "发票申请详情", about: "关于我们"
};

const state = {
  loggedIn: sessionStorage.getItem("droneAdminLogin") === "1",
  page: location.hash.replace("#/", "") || "dashboard",
  history: [],
  dashboardMetric: "today-orders",
  userTab: "orders",
  invoiceStatus: "待处理",
  productCategory: "上门服务",
  specs: [
    { name: "标准服务", price: "899" },
    { name: "企业增强服务", price: "1599" }
  ],
  media: [
    { id: "v1", type: "视频", name: "平台品牌宣传视频.mp4", enabled: true },
    { id: "i1", type: "图片", name: "行业无人机解决方案.jpg", enabled: true },
    { id: "i2", type: "图片", name: "专业飞手服务.jpg", enabled: true },
    { id: "i3", type: "图片", name: "无人机培训报名.jpg", enabled: false }
  ],
  assignedPilots: [
    { name: "李明", area: "成都高新", device: "Mavic 3E", status: "服务中" },
    { name: "王伟", area: "成都双流", device: "M350 RTK", status: "待服务" }
  ]
};

const users = [
  ["U20260612001", "唐先生", "138****8821", "2026-06-12 09:18", "2026-06-13 16:42", "4"],
  ["U20260611018", "云航科技", "189****3016", "2026-06-11 15:42", "2026-06-13 14:08", "7"],
  ["U20260610009", "张女士", "136****1175", "2026-06-10 11:06", "2026-06-12 20:16", "2"]
];

const orders = [
  ["YB26061326", "林先生", "高空清洗服务", "¥1,599", "需要", "待派单"],
  ["YB26061318", "华景物业", "园区航拍测绘", "¥3,600", "需要", "待派单"],
  ["YB26061309", "赵女士", "无人机保养检测", "¥899", "不需要", "待服务"],
  ["YB26060803", "唐先生", "空域代办服务", "线下报价", "不需要", "已完成"]
];

function logo(size = "") {
  return `<span class="logo ${size}">
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="12" cy="13" r="6"></circle><circle cx="36" cy="13" r="6"></circle>
      <circle cx="12" cy="35" r="6"></circle><circle cx="36" cy="35" r="6"></circle>
      <path d="M16 16l5 5m11-5-5 5m-11 11 5-5m11 5-5-5M18 24h12"></path>
      <rect x="20" y="19" width="8" height="10" rx="3"></rect>
    </svg>
  </span>`;
}

function button(text, action, cls = "", attrs = "") {
  return `<button class="button ${cls}" data-action="${action}" ${attrs}>${text}</button>`;
}

function routeButton(text, route, cls = "link") {
  return `<button class="button ${cls}" data-route="${route}">${text}</button>`;
}

function tag(text) {
  const cls = /完成|通过|上架|转化|开票/.test(text) ? "green"
    : /待|审核|联系/.test(text) ? "amber"
    : /驳回|下架|关闭/.test(text) ? "red" : "blue";
  return `<span class="tag ${cls}">${text}</span>`;
}

function table(headers, rows) {
  return `<table><thead><tr>${headers.map(x => `<th>${x}</th>`).join("")}</tr></thead>
    <tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
}

function panel(title, body, actions = "") {
  return `<section class="panel"><div class="panel-head"><h2>${title}</h2><div class="toolbar">${actions}</div></div><div class="panel-body">${body}</div></section>`;
}

function detailGrid(items) {
  return `<dl class="detail-grid">${items.map(([key, value]) => `<div class="detail-item"><dt>${key}</dt><dd>${value}</dd></div>`).join("")}</dl>`;
}

function formGrid(fields) {
  return `<div class="form-grid">${fields.map(field => `<div class="form-field ${field.wide ? "span-2" : ""}">
    <label>${field.label}</label>${field.html}
  </div>`).join("")}</div>`;
}

function loginPage() {
  return `<main class="login-page"><section class="login-card">
    <div class="login-intro">
      <div>
        <div class="login-brand">${logo("large")}<h1>云北无人机平台</h1></div>
        <p>后台管理交互原型<br>用于确认页面结构、功能范围与核心业务流程。</p>
      </div>
      <small>Prototype V1 · 静态演示数据</small>
    </div>
    <form class="login-form" id="loginForm">
      <h2>管理员登录</h2><p>请输入后台账号和密码</p>
      <div class="form-field"><label>账号</label><input name="account" value="admin" required></div>
      <div class="form-field"><label>密码</label><input name="password" type="password" value="123456" required></div>
      <label class="switch"><input type="checkbox" checked> 记住账号</label>
      <button class="login-button" type="submit">登录后台</button>
      <div class="login-tip">原型演示：输入任意非空账号和密码即可登录</div>
    </form>
  </section></main>`;
}

function sidebar() {
  return `<aside class="sidebar">
    <div class="brand">${logo()}<div><strong>云北无人机平台</strong><small>后台管理原型</small></div></div>
    <nav class="nav">${menu.map(item => {
      const children = item.children || [];
      return `<div class="nav-group">
        <button class="nav-parent" data-route="${children[0]?.id || item.id}"><span>${item.icon}</span>${item.label}${children.length ? `<span class="arrow">⌄</span>` : ""}</button>
        ${children.length ? `<div class="nav-children">${children.map(child => `<button class="nav-child ${state.page === child.id ? "active" : ""}" data-route="${child.id}">${child.label}</button>`).join("")}</div>` : ""}
      </div>`;
    }).join("")}</nav>
    <div class="sidebar-foot"><div class="admin-chip"><span class="avatar">管</span><span>平台管理员<br><small>单一管理员视角</small></span></div></div>
  </aside>`;
}

function topbar() {
  return `<header class="topbar">
    <div><div class="crumb">云北无人机后台 / ${titles[state.page] || "工作台"}</div><h1>${titles[state.page] || "工作台"}</h1></div>
    <div class="top-actions"><span class="tag">低保真 V1</span>${button("复制页面链接", "copy-link")}${button("退出", "logout")}</div>
  </header>`;
}

function dashboardPage() {
  const content = {
    "today-orders": panel("今日新增订单明细", table(
      ["订单号","用户","商品/服务","金额","需要飞手","状态","操作"],
      orders.slice(0, 3).map(row => [...row.slice(0, 5), tag(row[5]), routeButton("查看详情", "order-detail")])
    )),
    "pending-orders": panel("待派单订单明细", table(
      ["订单号","用户","商品/服务","预约时间","等待时长","操作"],
      [
        ["YB26061201","唐先生","高空清洗服务","2026-06-14 09:00","2h 18min",routeButton("去派单","order-detail")],
        ["YB26061318","华景物业","园区航拍测绘","2026-06-15 14:00","56min",routeButton("去派单","order-detail")]
      ]
    )),
    "pilot-applications": panel("待审核飞手明细", table(
      ["申请编号","申请人","所属主体","公司","申请时间","操作"],
      [
        ["FS26061305","陈宇","公司","四川云航科技有限公司","2026-06-13 15:28",routeButton("去审核","pilot-review")],
        ["FS26061302","刘洋","个人","—","2026-06-13 10:16",routeButton("去审核","pilot-review")]
      ]
    )),
    invoices: panel("待处理发票明细", table(
      ["申请编号","申请用户","发票抬头","关联订单","申请金额","操作"],
      [
        ["FP26061307","云航科技","四川云航科技有限公司","3 个","¥18,600",routeButton("去处理","invoice-detail")],
        ["FP26061303","唐先生","个人","1 个","¥1,599",routeButton("去处理","invoice-detail")]
      ]
    ))
  };
  return `<div class="metrics">
    <button class="metric ${state.dashboardMetric === "today-orders" ? "active" : ""}" data-action="dashboard-metric" data-key="today-orders"><span>今日新增订单</span><strong>26</strong><small>其中 7 单需要飞手</small></button>
    <button class="metric ${state.dashboardMetric === "pending-orders" ? "active" : ""}" data-action="dashboard-metric" data-key="pending-orders"><span>待派单订单</span><strong>9</strong><small>最长等待 2h 18min</small></button>
    <button class="metric ${state.dashboardMetric === "pilot-applications" ? "active" : ""}" data-action="dashboard-metric" data-key="pilot-applications"><span>待审核飞手</span><strong>12</strong><small>今日新增申请 5 人</small></button>
    <button class="metric ${state.dashboardMetric === "invoices" ? "active" : ""}" data-action="dashboard-metric" data-key="invoices"><span>待处理发票</span><strong>7</strong><small>合计 ¥48,620</small></button>
  </div>${content[state.dashboardMetric]}`;
}

function carouselPage() {
  const rows = state.media.map((item, index) => `<div class="media-row">
    <div class="drag">${item.type === "视频" ? "锁定" : "☷"}</div>
    <div class="media-preview">${item.type}</div>
    <div><strong>${item.name}</strong><br><span class="muted">${item.type === "视频" ? "固定轮播首位" : `图片序号 ${index}`}</span></div>
    <label class="switch"><input type="checkbox" data-action="toggle-media" data-id="${item.id}" ${item.enabled ? "checked" : ""}> ${item.enabled ? "已启用" : "已停用"}</label>
    <div class="actions">
      ${item.type === "图片" ? button("上移","move-media","small",`data-id="${item.id}" data-dir="-1"`) + button("下移","move-media","small",`data-id="${item.id}" data-dir="1"`) : ""}
      ${button("删除","delete-media","small danger",`data-id="${item.id}"`)}
    </div>
  </div>`).join("");
  return panel("轮播内容配置", `<div class="toolbar" style="margin-bottom:14px">
    ${button("上传视频","add-video","primary")}${button(`上传图片（${state.media.filter(x => x.type === "图片").length}/5）`,"add-image","primary")}
    <span class="muted">视频最多 1 个，图片最多 5 张</span>
  </div><div class="media-list">${rows}</div>`);
}

function usersPage() {
  const rows = users.map(row => [...row, routeButton("查看详情","user-detail")]);
  return panel("用户列表", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="昵称 / 手机号 / 用户编号">${button("查询","filter","primary")}
    <span class="spacer"></span><span class="muted">共 1,286 位用户 · 只读</span>
  </div>${table(["用户编号","用户","手机号","注册时间","最近登录时间","订单数","操作"], rows)}`);
}

function userDetailPage() {
  const records = state.userTab === "orders"
    ? table(["订单号","商品/服务","金额","状态"], [["YB26061326","高空清洗服务","¥1,599",tag("待派单")],["YB26060803","空域代办服务","线下报价",tag("已完成")]])
    : table(["申请编号","抬头","金额","状态"], [["FP26061303","个人","¥1,599",tag("待处理")]]);
  return panel("用户基本资料", detailGrid([
    ["用户编号","U20260612001"],["昵称","唐先生"],["手机号","138****8821"],
    ["注册时间","2026-06-12 09:18"],["最近登录时间","2026-06-13 16:42"]
  ]), routeButton("返回列表","users","small"))
  + panel("业务记录", `<div class="tabs">
    ${button("订单记录","user-tab",state.userTab === "orders" ? "primary" : "",`data-tab="orders"`)}
    ${button("发票记录","user-tab",state.userTab === "invoices" ? "primary" : "",`data-tab="invoices"`)}
  </div>${records}`);
}

function categoriesPage() {
  return panel("商品分类", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="分类名称">${button("查询","filter","primary")}<span class="spacer"></span>${button("新增分类","category-edit","primary")}
  </div>${table(["分类名称","商品数","默认预约","默认在线支付","默认需要飞手","状态","操作"], [
    ["上门服务","12","是","是","是",tag("启用"),button("编辑","category-edit","link")],
    ["维修保养","6","是","是","否",tag("启用"),button("编辑","category-edit","link")],
    ["代办服务","4","是","否","否",tag("启用"),button("编辑","category-edit","link")]
  ])}`);
}

function productsPage() {
  return panel("商品列表", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="商品名称 / 编号"><select><option>全部分类</option><option>上门服务</option><option>维修保养</option></select>
    <select><option>全部状态</option><option>已上架</option><option>已下架</option></select>${button("查询","filter","primary")}
    <span class="spacer"></span>${routeButton("创建商品","product-edit","primary")}
  </div>${table(["商品编号","商品名称","分类","规格数","业务属性","状态","操作"], [
    ["SP26001","高空清洗服务","上门服务","2","预约 / 在线支付 / 需要飞手",tag("已上架"),routeButton("编辑","product-edit")],
    ["SP26002","无人机保养检测","维修保养","2","预约 / 在线支付 / 无需飞手",tag("已上架"),routeButton("编辑","product-edit")],
    ["SP26003","空域代办服务","代办服务","1","预约 / 不在线支付 / 无需飞手",tag("已下架"),routeButton("编辑","product-edit")]
  ])}`);
}

function propertyRow(label, defaultValue) {
  return `<div class="check-row"><input type="checkbox" checked><strong>${label}</strong><select><option>${defaultValue}</option><option>${defaultValue === "需要" ? "不需要" : "需要"}</option></select></div>`;
}

function productEditPage() {
  const specs = state.specs.map((spec, index) => [
    `<input value="${spec.name}">`, `<input value="${spec.price}">`,
    button("删除","remove-spec","small danger",`data-index="${index}"`)
  ]);
  return panel("基础信息", formGrid([
    { label: "商品名称", html: `<input value="高空清洗服务">` },
    { label: "商品分类", html: `<select data-action="product-category"><option>上门服务</option><option>维修保养</option><option>代办服务</option></select>` },
    { label: "商品简介", wide: true, html: `<textarea>适用于建筑外立面、光伏板等高空区域的无人机清洗服务。</textarea>` }
  ]), `${routeButton("返回商品列表","products","small")}${button("保存商品","save-product","primary")}`)
  + panel("多规格配置", `${table(["规格名称","价格（元）","操作"], specs)}<div style="margin-top:12px">${button("添加规格","add-spec")}</div>`)
  + panel("业务属性", `<div class="check-list">${propertyRow("是否需要预约","需要")}${propertyRow("是否在线支付","需要")}${propertyRow("是否需要飞手服务","需要")}</div>
    <p class="muted" style="margin:12px 0 0">订单生成时保存最终业务属性快照，后续修改分类或商品不会改变历史订单。</p>`);
}

function ordersPage() {
  const rows = orders.map(row => [...row.slice(0,5), tag(row[5]), routeButton("查看详情","order-detail")]);
  return panel("订单列表", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="订单号 / 用户 / 商品"><select><option>全部状态</option><option>待付款</option><option>待派单</option><option>待服务</option><option>待评价</option><option>已完成</option></select>
    <select><option>是否需要飞手</option><option>需要</option><option>不需要</option></select>${button("查询","filter","primary")}
  </div>${table(["订单号","用户","商品/服务","金额","需要飞手","状态","操作"], rows)}`);
}

function orderDetailPage() {
  const pilots = table(["飞手","区域","设备","个人状态"], state.assignedPilots.map(p => [p.name,p.area,p.device,tag(p.status)]));
  return panel("订单状态", `<div class="steps">
    <div class="step done">订单生成</div><div class="step done">待派单</div><div class="step done">待服务</div><div class="step">全部完成</div><div class="step">待评价</div>
  </div>`, routeButton("返回订单列表","orders","small"))
  + panel("订单信息快照", detailGrid([
    ["订单号","YB26061318"],["用户","华景物业"],["服务","园区航拍测绘"],["订单金额","¥3,600"],
    ["预约时间","2026-06-15 14:00"],["服务地址","成都市高新区天府软件园"],
    ["在线支付","是（下单快照）"],["需要飞手","是（下单快照）"]
  ]))
  + panel("飞手分配与履约", pilots, button("分配 / 调整飞手","assign-pilots","primary"));
}

function trainingPage() {
  return panel("报名线索", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="联系人 / 手机号 / 课程"><select><option>全部状态</option><option>待联系</option><option>已联系</option><option>已转化</option><option>已关闭</option></select>${button("查询","filter","primary")}
  </div>${table(["线索编号","联系人","课程意向","手机号","报名时间","状态","操作"], [
    ["PX26061301","陈先生","CAAC 执照培训","138****6612","2026-06-13 10:26",tag("待联系"),button("查看 / 跟进","training-follow","link")],
    ["PX26061216","刘女士","无人机测绘实训","186****2931","2026-06-12 16:02",tag("已联系"),button("查看 / 跟进","training-follow","link")],
    ["PX26061008","四川航测公司","企业内训","189****8807","2026-06-10 09:31",tag("已转化"),button("查看 / 跟进","training-follow","link")]
  ])}`);
}

function pilotApplicationsPage() {
  return panel("入驻申请", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="申请人 / 手机号 / 公司"><select><option>全部主体</option><option>个人</option><option>公司</option></select><select><option>全部状态</option><option>待审核</option><option>已通过</option><option>已驳回</option></select>${button("查询","filter","primary")}
  </div>${table(["申请编号","申请人","主体","所属公司","申请时间","状态","操作"], [
    ["FS26061305","陈宇","公司","四川云航科技有限公司","2026-06-13 15:28",tag("待审核"),routeButton("审核","pilot-review")],
    ["FS26061302","刘洋","个人","—","2026-06-13 10:16",tag("待审核"),routeButton("审核","pilot-review")],
    ["FS26061208","李明","公司","成都低空服务有限公司","2026-06-12 09:06",tag("已通过"),routeButton("查看","pilot-review")]
  ])}`);
}

function pilotReviewPage() {
  return panel("申请信息", detailGrid([
    ["申请编号","FS26061305"],["申请人","陈宇"],["联系电话","138****2605"],["所属主体","公司"],
    ["公司名称","四川云航科技有限公司"],["公司电话","028-88****26"],["所在区域","成都高新"],["申请时间","2026-06-13 15:28"]
  ]), routeButton("返回申请列表","pilot-applications","small"))
  + panel("资质与设备资料", table(["资料类型","资料内容","状态"], [
    ["身份证","身份证正反面",tag("已上传")],["操作执照","CAAC 超视距驾驶员",tag("已上传")],
    ["无人机","DJI M350 RTK · SN: 3X****91",tag("已上传")]
  ]), `${button("驳回申请","reject-pilot","danger")}${button("审核通过","approve-pilot","primary")}`);
}

function pilotsPage() {
  return panel("已认证飞手", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="姓名 / 手机号 / 公司"><select><option>全部主体</option><option>个人</option><option>公司</option></select><select><option>全部状态</option><option>空闲</option><option>服务中</option></select>${button("查询","filter","primary")}
  </div>${table(["飞手","主体","所属公司","服务区域","设备","状态","操作"], [
    ["李明","公司","成都低空服务有限公司","成都高新","Mavic 3E",tag("服务中"),routeButton("查看详情","pilot-detail")],
    ["王伟","个人","—","成都双流","M350 RTK",tag("空闲"),routeButton("查看详情","pilot-detail")],
    ["陈宇","公司","四川云航科技有限公司","成都高新","M350 RTK",tag("空闲"),routeButton("查看详情","pilot-detail")]
  ])}`);
}

function pilotDetailPage() {
  return panel("飞手资料", detailGrid([
    ["姓名","李明"],["所属主体","公司"],["所属公司","成都低空服务有限公司"],["联系电话","138****9036"],
    ["服务区域","成都高新"],["主要设备","Mavic 3E"],["认证时间","2026-05-22"],["当前状态",tag("服务中")]
  ]), routeButton("返回飞手列表","pilots","small"))
  + panel("分配订单及个人完成状态", table(["订单号","服务","预约时间","订单状态","个人状态"], [
    ["YB26061318","园区航拍测绘","2026-06-15 14:00",tag("待服务"),tag("服务中")],
    ["YB26060809","园区巡检","2026-06-09 09:00",tag("已完成"),tag("已完成")]
  ]));
}

function tasksPage() {
  return panel("任务需求", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="需求标题"><select><option>全部状态</option><option>征集中</option><option>已关闭</option></select>${button("查询","filter","primary")}
    <span class="spacer"></span>${button("发布任务需求","publish-task","primary")}
  </div>${table(["需求编号","需求标题","服务日期","区域","状态","意愿人数","操作"], [
    ["RW26061301","成都园区航拍需求","2026-06-18","成都高新",tag("征集中"),"6",button("查看意愿","task-interest","link")],
    ["RW26061003","农田植保飞防协作","2026-06-20","眉山",tag("征集中"),"12",button("查看意愿","task-interest","link")],
    ["RW26060508","活动现场航拍","2026-06-08","成都锦江",tag("已关闭"),"4",button("查看意愿","task-interest","link")]
  ])}<p class="muted" style="margin:14px 0 0">任务需求仅收集飞手参与意愿，不关联商品订单，也不改变商品订单状态。</p>`);
}

function invoicesPage() {
  return panel("发票申请", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="申请编号 / 用户 / 抬头"><select><option>全部状态</option><option>待处理</option><option>待上传</option><option>已开票</option><option>已驳回</option></select>${button("查询","filter","primary")}
  </div>${table(["申请编号","用户","发票抬头","订单数","金额","申请时间","状态","操作"], [
    ["FP26061307","云航科技","四川云航科技有限公司","3","¥18,600","2026-06-13 16:08",tag("待处理"),routeButton("查看详情","invoice-detail")],
    ["FP26061303","唐先生","个人","1","¥1,599","2026-06-13 10:21",tag("待处理"),routeButton("查看详情","invoice-detail")],
    ["FP26061002","张女士","个人","2","¥2,498","2026-06-10 11:06",tag("已开票"),routeButton("查看详情","invoice-detail")]
  ])}`);
}

function invoiceDetailPage() {
  const actions = state.invoiceStatus === "待处理"
    ? `${button("驳回","reject-invoice","danger")}${button("审核通过","approve-invoice","primary")}`
    : state.invoiceStatus === "待上传" ? button("上传发票文件","upload-invoice","primary") : "";
  return panel("申请信息", detailGrid([
    ["申请编号","FP26061307"],["申请用户","云航科技"],["发票类型","增值税普通发票"],["发票抬头","四川云航科技有限公司"],
    ["税号","91510100MA****8K"],["申请金额","¥18,600"],["接收邮箱","finance@example.com"],["当前状态",tag(state.invoiceStatus)]
  ]), routeButton("返回发票列表","invoices","small"))
  + panel("关联订单", table(["订单号","商品/服务","完成时间","可开票金额"], [
    ["YB26060811","园区航拍测绘","2026-06-09 18:20","¥8,600"],
    ["YB26060703","无人机巡检服务","2026-06-08 16:05","¥6,400"],
    ["YB26060518","空域代办服务","2026-06-06 11:30","¥3,600"]
  ]), actions);
}

function aboutPage() {
  return panel("企业介绍配置", formGrid([
    { label: "企业名称", html: `<input value="四川云北无人机科技有限公司">` },
    { label: "联系电话", html: `<input value="028-8888 6626">` },
    { label: "企业地址", wide: true, html: `<input value="四川省成都市高新区天府软件园">` },
    { label: "企业 Logo", html: `<input type="file">` },
    { label: "小程序展示状态", html: `<select><option>展示</option><option>隐藏</option></select>` },
    { label: "企业简介", wide: true, html: `<textarea>专注于无人机行业服务、飞手协作、技术培训与企业解决方案。</textarea>` }
  ]), `${button("预览","preview-about")}${button("保存配置","save-about","primary")}`);
}

function pageContent() {
  const pages = {
    dashboard: dashboardPage, carousel: carouselPage, users: usersPage, "user-detail": userDetailPage,
    categories: categoriesPage, products: productsPage, "product-edit": productEditPage,
    orders: ordersPage, "order-detail": orderDetailPage, training: trainingPage,
    "pilot-applications": pilotApplicationsPage, "pilot-review": pilotReviewPage,
    pilots: pilotsPage, "pilot-detail": pilotDetailPage, tasks: tasksPage,
    invoices: invoicesPage, "invoice-detail": invoiceDetailPage, about: aboutPage
  };
  return (pages[state.page] || dashboardPage)();
}

function render() {
  const app = document.getElementById("app");
  if (!state.loggedIn) {
    app.innerHTML = loginPage();
    document.getElementById("loginForm").addEventListener("submit", event => {
      event.preventDefault();
      state.loggedIn = true;
      sessionStorage.setItem("droneAdminLogin", "1");
      render();
    });
    return;
  }
  app.innerHTML = `<div class="shell">${sidebar()}<main class="main">${topbar()}<div class="page">${pageContent()}</div></main></div>`;
}

function navigate(route) {
  if (route === state.page) return;
  state.history.push(state.page);
  state.page = route;
  location.hash = `#/${route}`;
  render();
}

function toast(message) {
  const node = document.getElementById("toast");
  node.textContent = message;
  node.hidden = false;
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => { node.hidden = true; }, 2200);
}

function modal(title, body, footer = "", wide = false) {
  document.getElementById("overlay").innerHTML = `<div class="overlay">
    <section class="modal ${wide ? "wide" : ""}">
      <div class="modal-head"><h2>${title}</h2><button class="close" data-action="close-modal">×</button></div>
      <div class="modal-body">${body}</div>
      ${footer ? `<div class="modal-foot">${footer}</div>` : ""}
    </section>
  </div>`;
}

function closeModal() {
  document.getElementById("overlay").innerHTML = "";
}

document.addEventListener("click", event => {
  const route = event.target.closest("[data-route]");
  if (route) {
    navigate(route.dataset.route);
    return;
  }
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  if (action === "logout") {
    state.loggedIn = false;
    sessionStorage.removeItem("droneAdminLogin");
    render();
  } else if (action === "copy-link") {
    navigator.clipboard?.writeText(location.href);
    toast("当前页面链接已复制");
  } else if (action === "dashboard-metric") {
    state.dashboardMetric = target.dataset.key;
    render();
  } else if (action === "filter") {
    toast("已按当前条件筛选（模拟）");
  } else if (action === "close-modal") {
    closeModal();
  } else if (action === "add-video") {
    if (state.media.some(x => x.type === "视频")) toast("视频最多上传 1 个");
    else {
      state.media.unshift({ id: `v${Date.now()}`, type: "视频", name: "新宣传视频.mp4", enabled: true });
      render();
    }
  } else if (action === "add-image") {
    if (state.media.filter(x => x.type === "图片").length >= 5) toast("图片最多上传 5 张");
    else {
      state.media.push({ id: `i${Date.now()}`, type: "图片", name: "新轮播图片.jpg", enabled: true });
      render();
    }
  } else if (action === "delete-media") {
    state.media = state.media.filter(x => x.id !== target.dataset.id);
    render();
    toast("轮播内容已删除");
  } else if (action === "move-media") {
    const index = state.media.findIndex(x => x.id === target.dataset.id);
    const next = index + Number(target.dataset.dir);
    if (next > 0 && next < state.media.length) {
      [state.media[index], state.media[next]] = [state.media[next], state.media[index]];
      render();
    }
  } else if (action === "user-tab") {
    state.userTab = target.dataset.tab;
    render();
  } else if (action === "category-edit") {
    modal("商品分类", formGrid([
      { label: "分类名称", html: `<input value="上门服务">` },
      { label: "分类状态", html: `<select><option>启用</option><option>停用</option></select>` },
      { label: "默认业务属性", wide: true, html: `<div class="check-list">${propertyRow("是否需要预约","需要")}${propertyRow("是否在线支付","需要")}${propertyRow("是否需要飞手服务","需要")}</div>` }
    ]), `${button("取消","close-modal")}${button("保存分类","save-modal","primary")}`, true);
  } else if (action === "add-spec") {
    state.specs.push({ name: "新规格", price: "0" });
    render();
  } else if (action === "remove-spec") {
    state.specs.splice(Number(target.dataset.index), 1);
    render();
  } else if (action === "save-product") {
    toast("商品已保存（模拟）");
  } else if (action === "assign-pilots") {
    const pilots = [
      ["李明","成都高新 · Mavic 3E","空闲",true],["王伟","成都双流 · M350 RTK","空闲",true],
      ["周航","成都双流 · M350 RTK","服务中",false],["赵宇","成都武侯 · Mavic 3E","空闲",false]
    ];
    modal("分配飞手", `<p class="muted">可选择一个或多个审核通过的飞手。确认后立即生效，无需飞手再次确认。</p>
      ${pilots.map(p => `<label class="pilot-option"><input type="checkbox" name="pilot" value="${p[0]}" ${p[3] ? "checked" : ""}>
        <span><strong>${p[0]}</strong><br><span class="muted">${p[1]}</span></span>${tag(p[2])}</label>`).join("")}`,
      `${button("取消","close-modal")}${button("确认分配","confirm-assignment","primary")}`, true);
  } else if (action === "confirm-assignment") {
    const selected = [...document.querySelectorAll("input[name='pilot']:checked")].map(x => x.value);
    if (!selected.length) {
      toast("请至少选择一名飞手");
      return;
    }
    state.assignedPilots = selected.map((name, index) => ({
      name, area: index ? "成都双流" : "成都高新", device: index ? "M350 RTK" : "Mavic 3E", status: "待服务"
    }));
    closeModal();
    render();
    toast(`已分配 ${selected.length} 名飞手，订单进入待服务`);
  } else if (action === "training-follow") {
    modal("培训报名跟进", formGrid([
      { label: "联系人", html: `<input value="陈先生" disabled>` },
      { label: "当前状态", html: `<select><option>待联系</option><option>已联系</option><option>已转化</option><option>已关闭</option></select>` },
      { label: "跟进记录", wide: true, html: `<textarea placeholder="填写本次沟通结果"></textarea>` }
    ]), `${button("取消","close-modal")}${button("保存跟进","save-modal","primary")}`);
  } else if (action === "approve-pilot") {
    modal("确认审核通过", `<p>确认该申请资料完整并通过飞手入驻审核？</p>`,
      `${button("取消","close-modal")}${button("确认通过","confirm-pilot","primary")}`);
  } else if (action === "reject-pilot") {
    modal("驳回申请", `<div class="form-field"><label>驳回原因</label><textarea placeholder="请填写驳回原因"></textarea></div>`,
      `${button("取消","close-modal")}${button("确认驳回","save-modal","danger")}`);
  } else if (action === "confirm-pilot") {
    closeModal();
    toast("飞手申请已审核通过");
  } else if (action === "publish-task") {
    modal("发布独立任务需求", formGrid([
      { label: "需求标题", wide: true, html: `<input value="成都园区航拍需求">` },
      { label: "服务类型", html: `<select><option>工程测绘</option><option>活动拍摄</option><option>农业植保</option></select>` },
      { label: "服务日期", html: `<input type="date" value="2026-06-18">` },
      { label: "需求说明", wide: true, html: `<textarea>独立发布需求并收集飞手参与意愿，不关联商品订单。</textarea>` }
    ]), `${button("取消","close-modal")}${button("发布需求","save-modal","primary")}`, true);
  } else if (action === "task-interest") {
    modal("飞手参与意愿名单", table(["飞手","主体","区域","设备","提交时间"], [
      ["李明","公司","成都高新","Mavic 3E","2026-06-13 16:20"],
      ["王伟","个人","成都双流","M350 RTK","2026-06-13 15:48"],
      ["赵宇","个人","成都武侯","Mavic 3E","2026-06-13 13:06"]
    ]), button("关闭","close-modal"));
  } else if (action === "approve-invoice") {
    state.invoiceStatus = "待上传";
    render();
    toast("审核通过，请上传发票文件");
  } else if (action === "reject-invoice") {
    modal("驳回发票申请", `<div class="form-field"><label>驳回原因</label><textarea placeholder="请填写驳回原因"></textarea></div>`,
      `${button("取消","close-modal")}${button("确认驳回","confirm-invoice-reject","danger")}`);
  } else if (action === "confirm-invoice-reject") {
    state.invoiceStatus = "已驳回";
    closeModal();
    render();
    toast("发票申请已驳回");
  } else if (action === "upload-invoice") {
    modal("上传发票文件", `<div class="form-field"><label>发票文件</label><input type="file" accept=".pdf,.jpg,.jpeg,.png"></div>`,
      `${button("取消","close-modal")}${button("确认上传","confirm-upload","primary")}`);
  } else if (action === "confirm-upload") {
    state.invoiceStatus = "已开票";
    closeModal();
    render();
    toast("发票已上传并完成开票");
  } else if (action === "preview-about") {
    modal("小程序展示预览", `<div class="preview-card"><h2>四川云北无人机科技有限公司</h2>
      <p>专注于无人机行业服务、飞手协作、技术培训与企业解决方案。</p>
      <p><strong>联系电话：</strong>028-8888 6626</p><p><strong>地址：</strong>四川省成都市高新区天府软件园</p></div>`, button("关闭","close-modal"));
  } else if (action === "save-about") {
    toast("企业介绍配置已保存（模拟）");
  } else if (action === "save-modal") {
    closeModal();
    toast("操作已保存（模拟）");
  }
});

window.addEventListener("hashchange", () => {
  const route = location.hash.replace("#/", "");
  if (route && route !== state.page) {
    state.page = route;
    render();
  }
});

render();
