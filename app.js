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

const pageDocs = {
  dashboard: {
    summary: "运营工作台，汇总今日关键待办，点击指标卡片切换下方明细列表。",
    operations: [
      "点击顶部指标卡片，切换查看对应明细列表",
      "明细列表中点击「查看详情 / 去派单 / 去审核 / 去处理」跳转至对应业务页",
      "顶部「复制页面链接」可分享当前页面地址"
    ],
    fields: [
      ["今日新增订单", "当日 0 点至当前新生成的订单总数，含需飞手与无需飞手订单"],
      ["待派单订单", "已付款且需要分配飞手的订单，按等待时长排序"],
      ["待审核飞手", "飞手提交入驻申请后尚未审核的数量"],
      ["待处理发票", "用户提交开票申请、尚未审核或上传发票的数量"]
    ]
  },
  carousel: {
    summary: "配置小程序首页轮播内容，支持 1 个视频 + 最多 5 张图片。",
    operations: [
      "上传视频：最多 1 个，固定展示在轮播首位",
      "上传图片：最多 5 张，可通过上移 / 下移调整顺序",
      "启用 / 停用：控制该条内容是否在小程序端展示",
      "删除：移除对应轮播素材"
    ],
    fields: [
      ["素材类型", "视频或图片，视频仅允许 1 条"],
      ["素材名称", "后台识别用，展示文件名或上传后自动命名"],
      ["启用状态", "关闭后小程序端不展示该条轮播"],
      ["排序", "图片支持拖拽式上移 / 下移；视频位置固定"]
    ]
  },
  users: {
    summary: "查看平台注册用户列表，仅只读，不支持后台新建或编辑用户。",
    operations: [
      "按昵称、手机号搜索用户",
      "点击「个人信息」进入用户详情页，查看完整资料及订单 / 发票记录"
    ],
    fields: [
      ["头像", "用户在小程序上传或系统默认头像"],
      ["昵称", "小程序端展示名称"],
      ["手机号", "注册绑定手机号，列表脱敏展示"],
      ["性别", "用户自行填写的性别信息"],
      ["生日", "用户自行填写的出生日期"],
      ["地区", "用户所在省 / 市"],
      ["注册时间", "首次完成注册的时间"],
      ["个人信息", "操作入口，跳转查看用户完整资料与业务记录"]
    ]
  },
  "user-detail": {
    summary: "查看单个用户的完整个人信息及业务往来记录。",
    operations: [
      "展示头像、昵称、手机号、性别、生日、地区、注册时间等基础资料",
      "切换「订单记录 / 发票记录」查看不同业务数据",
      "点击「返回列表」回到用户列表"
    ],
    fields: [
      ["头像", "用户头像，只读展示"],
      ["昵称", "小程序端昵称"],
      ["手机号", "绑定手机号，脱敏展示"],
      ["性别", "用户填写的性别"],
      ["生日", "用户填写的出生日期"],
      ["地区", "用户填写的所在地区"],
      ["注册时间", "账号注册时间"],
      ["订单记录", "该用户全部订单及当前状态"],
      ["发票记录", "该用户提交的开票申请及处理状态"]
    ]
  },
  categories: {
    summary: "维护商品分类，控制小程序分类入口的名称、图标与展示顺序。业务属性不在此配置。",
    operations: [
      "新增分类：填写名称、分类说明、上传图标、设置启用状态",
      "点击「编辑」：打开弹窗，修改名称、说明、图标与状态",
      "上移 / 下移：调整列表序号与小程序端分类展示顺序",
      "点击「删除」：仅当商品数为 0 时可删除，否则提示「该分类下还有商品，不可删除」",
      "删除前弹出确认框，确认后永久移除分类（原型模拟）"
    ],
    fields: [
      ["排序", "列表序号，仅通过上移 / 下移调整，数字越小越靠前"],
      ["图标", "分类入口展示图标，建议 128×128，列表中以较大尺寸预览"],
      ["分类名称", "后台与小程序端展示名称"],
      ["分类说明", "分类简介文案，用于小程序分类页展示"],
      ["商品数", "该分类下已关联商品数量，大于 0 时不可删除"],
      ["状态", "停用后小程序端不展示该分类入口"]
    ]
  },
  products: {
    summary: "管理平台全部商品 / 服务，含上架状态与业务属性概览。",
    operations: [
      "按名称、编号、分类、状态筛选商品",
      "列表默认展示轮播图第一张作为商品封面",
      "点击「创建商品」或列表「编辑」进入商品编辑页",
      "点击「删除」：仅当关联订单数为 0 时可删除，否则提示「该商品已有关联订单，不可删除」",
      "删除前弹出确认框，确认后永久移除商品（原型模拟）",
      "列表「业务属性」为商品级配置摘要，非分类默认值"
    ],
    fields: [
      ["商品图", "轮播图第一张，无图时显示「暂无」"],
      ["商品编号", "系统唯一编号"],
      ["商品名称", "小程序端展示名称"],
      ["分类", "所属商品分类"],
      ["规格数", "该商品配置的规格数量"],
      ["业务属性", "预约 / 在线支付 / 飞手需求等，与商品绑定"],
      ["状态", "已上架可在小程序购买，已下架不可见"],
      ["关联订单", "该商品产生的历史订单数；大于 0 时不允许删除商品"]
    ]
  },
  "product-edit": {
    summary: "创建或编辑商品，配置轮播图、富文本介绍、评价展示、规格价格及业务属性。",
    operations: [
      "上传 / 排序 / 删除轮播图，第一张为列表封面与详情首图",
      "商品介绍使用 Element Admin 常用的 WangEditor 富文本组件编辑",
      "评价管理：分页浏览订单评价列表，多选后随「保存商品」一并生效；默认全不展示",
      "添加 / 删除规格，每个规格独立定价",
      "业务属性通过勾选配置：是否需要预约、在线支付、飞手服务",
      "保存后更新商品；历史订单保留下单时属性快照"
    ],
    fields: [
      ["商品名称", "对外展示的服务名称"],
      ["商品分类", "决定商品归属与小程序分类入口"],
      ["轮播图", "商品详情顶部轮播，最多 9 张，顺序可调"],
      ["商品介绍", "WangEditor 富文本详情，小程序详情页展示"],
      ["评价管理", "来自已完成订单的用户评价列表，多选后随保存商品一并生效"],
      ["规格名称 / 价格", "多规格 SKU，用户下单时选择"],
      ["是否需要预约", "勾选表示下单需选择服务时间"],
      ["是否在线支付", "勾选表示支持线上下单支付"],
      ["是否需要飞手服务", "勾选表示订单需后台派单给飞手"]
    ]
  },
  orders: {
    summary: "查看与管理全部商品订单，支持按状态与飞手需求筛选。",
    operations: [
      "按订单号、用户、商品、状态、是否需要飞手筛选",
      "点击「查看详情」进入订单详情，可进行派单等操作"
    ],
    fields: [
      ["订单号", "系统唯一订单编号"],
      ["用户", "下单用户昵称或企业名"],
      ["商品/服务", "所购商品名称"],
      ["金额", "订单应付金额，线下报价类显示文案"],
      ["需要飞手", "下单时快照，表示是否需分配飞手"],
      ["状态", "待付款 → 待派单 → 待服务 → 已完成 → 待评价"]
    ]
  },
  "order-detail": {
    summary: "查看单笔订单全流程状态、信息快照及飞手分配情况。",
    operations: [
      "顶部步骤条展示订单当前进度",
      "点击「分配 / 调整飞手」选择一名或多名飞手，确认后立即生效",
      "飞手无需二次确认；分配后订单进入待服务"
    ],
    fields: [
      ["订单信息快照", "下单时保存的金额、预约时间、地址、业务属性，后续修改商品不影响"],
      ["预约时间", "用户选择的服务时间"],
      ["在线支付 / 需要飞手", "下单时业务属性快照"],
      ["飞手分配", "已指派飞手及其个人履约状态"]
    ]
  },
  training: {
    summary: "管理培训报名线索，记录联系跟进与转化结果。",
    operations: [
      "按联系人、手机号、课程、状态筛选线索",
      "点击「查看 / 跟进」填写跟进记录并更新线索状态",
      "状态流转：待联系 → 已联系 → 已转化 / 已关闭"
    ],
    fields: [
      ["线索编号", "报名记录唯一编号"],
      ["联系人", "报名人姓名或企业联系人"],
      ["课程意向", "用户感兴趣的课程类型"],
      ["手机号", "联系方式，脱敏展示"],
      ["报名时间", "用户在小程序提交报名的时间"],
      ["状态", "当前跟进阶段"]
    ]
  },
  "pilot-applications": {
    summary: "审核飞手入驻申请，通过后进入已认证飞手池。",
    operations: [
      "按申请人、手机号、主体类型、审核状态筛选",
      "点击「审核 / 查看」进入审核详情页",
      "待审核申请可执行通过或驳回"
    ],
    fields: [
      ["申请编号", "入驻申请唯一编号"],
      ["申请人", "飞手姓名"],
      ["主体", "个人或公司"],
      ["所属公司", "公司主体时填写的企业名称"],
      ["申请时间", "提交入驻申请的时间"],
      ["状态", "待审核 / 已通过 / 已驳回"]
    ]
  },
  "pilot-review": {
    summary: "查看飞手入驻资料并完成审核决策。",
    operations: [
      "核对身份证、执照、设备等资质资料",
      "审核通过：飞手进入已认证列表，可参与派单",
      "驳回申请：需填写驳回原因，申请人可重新提交"
    ],
    fields: [
      ["申请信息", "申请人、联系方式、主体与公司信息"],
      ["资质与设备资料", "身份证、操作执照、无人机设备信息及上传状态"],
      ["所在区域", "主要服务区域，用于派单匹配"]
    ]
  },
  pilots: {
    summary: "查看已通过审核的飞手列表及当前服务状态。",
    operations: [
      "按姓名、手机号、主体、状态筛选飞手",
      "点击「查看详情」查看飞手资料与历史 / 进行中订单"
    ],
    fields: [
      ["飞手", "认证飞手姓名"],
      ["主体", "个人或公司"],
      ["所属公司", "公司飞手关联企业"],
      ["服务区域", "主要接单区域"],
      ["设备", "主要执飞设备型号"],
      ["状态", "空闲或服务中"]
    ]
  },
  "pilot-detail": {
    summary: "查看单个飞手的完整资料与订单履约记录。",
    operations: [
      "查看飞手认证信息与当前状态",
      "下方列表展示已分配订单及个人完成进度"
    ],
    fields: [
      ["飞手资料", "姓名、主体、公司、联系方式、区域、设备、认证时间"],
      ["分配订单", "与该飞手关联的订单及各自履约状态"],
      ["个人状态", "飞手在该订单中的服务进度，与订单总状态独立"]
    ]
  },
  tasks: {
    summary: "发布独立任务需求，收集飞手参与意愿，不关联商品订单。",
    operations: [
      "点击「发布任务需求」创建新的征集任务",
      "点击「查看意愿」查看已提交参与的飞手名单",
      "任务可关闭征集；关闭后不再接受新意愿"
    ],
    fields: [
      ["需求编号", "任务唯一编号"],
      ["需求标题", "任务名称，面向飞手展示"],
      ["服务日期", "计划执行日期"],
      ["区域", "任务所在区域"],
      ["状态", "征集中或已关闭"],
      ["意愿人数", "已表达参与意向的飞手数量"]
    ]
  },
  invoices: {
    summary: "处理用户提交的发票申请，审核通过后上传发票文件。",
    operations: [
      "按申请编号、用户、抬头、状态筛选",
      "点击「查看详情」进入审核与开票流程"
    ],
    fields: [
      ["申请编号", "发票申请唯一编号"],
      ["用户", "提交申请的小程序用户"],
      ["发票抬头", "个人或企业抬头名称"],
      ["订单数", "本次申请关联的已完成订单数"],
      ["金额", "可开票合计金额"],
      ["状态", "待处理 → 待上传 → 已开票 / 已驳回"]
    ]
  },
  "invoice-detail": {
    summary: "审核发票申请、查看关联订单并完成开票。",
    operations: [
      "待处理：可审核通过或驳回（需填原因）",
      "审核通过后进入待上传，需上传发票 PDF / 图片",
      "上传完成即标记为已开票，用户可在小程序查看"
    ],
    fields: [
      ["申请信息", "抬头、税号、金额、接收邮箱等开票要素"],
      ["关联订单", "本次开票包含的已完成订单及各自可开票金额"],
      ["当前状态", "驱动后续可操作按钮展示"]
    ]
  },
  about: {
    summary: "配置「关于我们」页面内容，同步至小程序企业介绍模块。",
    operations: [
      "编辑企业名称、电话、地址、简介及 Logo",
      "设置小程序展示状态：展示或隐藏",
      "点击「预览」查看小程序端展示效果",
      "保存后更新线上展示内容"
    ],
    fields: [
      ["企业名称", "小程序关于页标题"],
      ["联系电话", "对外展示电话"],
      ["企业地址", "线下地址信息"],
      ["企业 Logo", "品牌标识图片"],
      ["小程序展示状态", "控制是否在小程序显示该模块"],
      ["企业简介", "企业介绍正文"]
    ]
  }
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
  ],
  categories: [
    { id: "c1", name: "上门服务", description: "无人机上门清洗、测绘、巡检等现场服务", icon: "./assets/icons/category-onsite.png", productCount: 12, sort: 1, enabled: true },
    { id: "c2", name: "维修保养", description: "设备保养、故障检测与维修服务", icon: "./assets/icons/category-repair.png", productCount: 6, sort: 2, enabled: true },
    { id: "c3", name: "代办服务", description: "空域申请、资质代办等代理服务", icon: "./assets/icons/category-agency.png", productCount: 4, sort: 3, enabled: true },
    { id: "c4", name: "企业服务", description: "面向企业的定制化无人机解决方案", icon: "./assets/icons/category-enterprise.png", productCount: 0, sort: 4, enabled: true }
  ],
  products: [
    {
      id: "p1", code: "SP26001", name: "高空清洗服务", category: "上门服务", specCount: 2,
      attrs: "预约 / 在线支付 / 需要飞手", status: "已上架", orderCount: 5,
      images: [
        { id: "pi1", name: "清洗现场1.jpg" },
        { id: "pi2", name: "清洗现场2.jpg" },
        { id: "pi3", name: "设备作业.jpg" }
      ],
      intro: "<p><strong>高空清洗服务</strong>适用于建筑外立面、光伏板等高空区域的无人机清洗。</p><ul><li>专业清洗设备，覆盖高空死角</li><li>持证飞手操作，安全合规</li><li>支持预约上门，在线支付</li></ul>",
      displayedReviewIds: []
    },
    {
      id: "p2", code: "SP26002", name: "无人机保养检测", category: "维修保养", specCount: 2,
      attrs: "预约 / 在线支付 / 无需飞手", status: "已上架", orderCount: 2,
      images: [{ id: "pi4", name: "保养检测1.jpg" }],
      intro: "<p>提供无人机全机保养与性能检测服务，含硬件检查、固件升级建议与检测报告。</p>",
      displayedReviewIds: []
    },
    {
      id: "p3", code: "SP26003", name: "空域代办服务", category: "代办服务", specCount: 1,
      attrs: "预约 / 不在线支付 / 无需飞手", status: "已下架", orderCount: 0,
      images: [],
      intro: "<p>空域申请、飞行计划报批等一站式代办，适用于企业航拍与工程测绘项目。</p>",
      displayedReviewIds: []
    }
  ],
  editingProductId: "p1",
  reviewDraft: [],
  reviewDraftProductId: null,
  reviewPage: 1,
  reviewPageSize: 5,
  reviewPageProductId: null,
  productEditor: null,
  productToolbar: null,
  deletingCategoryId: null,
  deletingProductId: null,
  viewingUserId: "U20260612001",
  docPanelOpen: localStorage.getItem("droneAdminDocPanel") !== "0"
};

const users = [
  { id: "U20260612001", avatar: "唐", nickname: "唐先生", phone: "138****8821", gender: "男", birthday: "1990-05-18", region: "四川 · 成都", registeredAt: "2026-06-12 09:18" },
  { id: "U20260611018", avatar: "云", nickname: "云航科技", phone: "189****3016", gender: "—", birthday: "—", region: "四川 · 成都", registeredAt: "2026-06-11 15:42" },
  { id: "U20260610009", avatar: "张", nickname: "张女士", phone: "136****1175", gender: "女", birthday: "1995-11-02", region: "四川 · 绵阳", registeredAt: "2026-06-10 11:06" }
];

const orders = [
  ["YB26061326", "林先生", "高空清洗服务", "¥1,599", "需要", "待派单"],
  ["YB26061318", "华景物业", "园区航拍测绘", "¥3,600", "需要", "待派单"],
  ["YB26061309", "赵女士", "无人机保养检测", "¥899", "不需要", "待服务"],
  ["YB26060803", "唐先生", "空域代办服务", "线下报价", "不需要", "已完成"]
];

const productReviews = [
  { id: "rv1", productId: "p1", orderNo: "YB26060803", user: "唐先生", rating: 5, content: "清洗很专业，高空死角也处理到位，飞手沟通及时，推荐。", time: "2026-06-09 18:20" },
  { id: "rv2", productId: "p1", orderNo: "YB26060512", user: "华景物业", rating: 4, content: "整体满意，预约流程顺畅，外立面清洁效果明显。", time: "2026-06-06 11:05" },
  { id: "rv3", productId: "p1", orderNo: "YB26060308", user: "云航科技", rating: 5, content: "第二次合作了，团队很专业，报告也详细。", time: "2026-06-03 15:42" },
  { id: "rv7", productId: "p1", orderNo: "YB26060218", user: "张女士", rating: 5, content: "高空作业很规范，现场管理到位，会再次预约。", time: "2026-06-02 10:15" },
  { id: "rv8", productId: "p1", orderNo: "YB26060105", user: "成都建工", rating: 4, content: "清洗效率不错，就是预约时段希望再多一些选择。", time: "2026-06-01 16:40" },
  { id: "rv9", productId: "p1", orderNo: "YB26052811", user: "李先生", rating: 5, content: "光伏板清洗后发电效率明显提升，值得推荐。", time: "2026-05-28 11:22" },
  { id: "rv10", productId: "p1", orderNo: "YB26052507", user: "四川航测", rating: 5, content: "团队响应快，作业前后都有详细说明和照片反馈。", time: "2026-05-25 09:08" },
  { id: "rv11", productId: "p1", orderNo: "YB26052003", user: "王女士", rating: 4, content: "服务整体不错，个别边角还可以再细致一些。", time: "2026-05-20 14:55" },
  { id: "rv4", productId: "p2", orderNo: "YB26061309", user: "赵女士", rating: 5, content: "保养检测很细致，问题点标注清楚，放心。", time: "2026-06-13 09:40" },
  { id: "rv5", productId: "p2", orderNo: "YB26061002", user: "王伟", rating: 4, content: "检测速度快，师傅讲解耐心。", time: "2026-06-10 14:18" },
  { id: "rv6", productId: "p3", orderNo: "YB26060108", user: "林先生", rating: 5, content: "空域代办效率很高，全程省心。", time: "2026-06-02 16:18" }
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

function routeButton(text, route, cls = "") {
  return `<button class="button ${cls}" data-route="${route}">${text}</button>`;
}

function opButton(text, action, cls = "", attrs = "") {
  const styles = cls ? `small ${cls}` : "small";
  return `<div class="actions">${button(text, action, styles, attrs)}</div>`;
}

function opRoute(text, route, cls = "", attrs = "") {
  return `<div class="actions"><button class="button ${cls || "small"}" data-route="${route}" ${attrs}>${text}</button></div>`;
}

function tag(text) {
  const cls = /完成|通过|上架|转化|开票/.test(text) ? "green"
    : /待|审核|联系/.test(text) ? "amber"
    : /驳回|下架|关闭/.test(text) ? "red" : "blue";
  return `<span class="tag ${cls}">${text}</span>`;
}

function table(headers, rows, cls = "") {
  return `<table class="${cls}"><thead><tr>${headers.map(x => `<th>${x}</th>`).join("")}</tr></thead>
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

function docPanel() {
  const doc = pageDocs[state.page] || pageDocs.dashboard;
  const open = state.docPanelOpen;
  const fieldRows = doc.fields.map(([name, desc]) => `<div class="doc-field"><dt>${name}</dt><dd>${desc}</dd></div>`).join("");
  if (!open) {
    return `<aside class="doc-panel collapsed"><button class="doc-tab" data-action="toggle-doc-panel">说明</button></aside>`;
  }
  return `<aside class="doc-panel">
    <div class="doc-panel-body">
      <div class="doc-panel-head">
        <div><strong>页面说明</strong><span class="muted">${titles[state.page] || "工作台"}</span></div>
        <button class="button small" data-action="toggle-doc-panel">收起</button>
      </div>
      <div class="doc-panel-content">
        <section class="doc-block"><h3>页面概述</h3><p>${doc.summary}</p></section>
        <section class="doc-block"><h3>操作逻辑</h3><ol>${doc.operations.map(item => `<li>${item}</li>`).join("")}</ol></section>
        <section class="doc-block"><h3>字段说明</h3><dl class="doc-fields">${fieldRows}</dl></section>
      </div>
    </div>
  </aside>`;
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
      orders.slice(0, 3).map(row => [...row.slice(0, 5), tag(row[5]), opRoute("查看详情", "order-detail")])
    )),
    "pending-orders": panel("待派单订单明细", table(
      ["订单号","用户","商品/服务","预约时间","等待时长","操作"],
      [
        ["YB26061201","唐先生","高空清洗服务","2026-06-14 09:00","2h 18min",opRoute("去派单","order-detail")],
        ["YB26061318","华景物业","园区航拍测绘","2026-06-15 14:00","56min",opRoute("去派单","order-detail")]
      ]
    )),
    "pilot-applications": panel("待审核飞手明细", table(
      ["申请编号","申请人","所属主体","公司","申请时间","操作"],
      [
        ["FS26061305","陈宇","公司","四川云航科技有限公司","2026-06-13 15:28",opRoute("去审核","pilot-review")],
        ["FS26061302","刘洋","个人","—","2026-06-13 10:16",opRoute("去审核","pilot-review")]
      ]
    )),
    invoices: panel("待处理发票明细", table(
      ["申请编号","申请用户","发票抬头","关联订单","申请金额","操作"],
      [
        ["FP26061307","云航科技","四川云航科技有限公司","3 个","¥18,600",opRoute("去处理","invoice-detail")],
        ["FP26061303","唐先生","个人","1 个","¥1,599",opRoute("去处理","invoice-detail")]
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
    <div class="media-meta"><strong>${item.name}</strong><span class="muted">${item.type === "视频" ? "固定轮播首位" : `图片序号 ${index}`}</span></div>
    <label class="switch"><input type="checkbox" data-action="toggle-media" data-id="${item.id}" ${item.enabled ? "checked" : ""}> ${item.enabled ? "已启用" : "已停用"}</label>
    ${item.type === "图片"
      ? rowActions({ moveAction: "move-media", deleteAction: "delete-media", id: item.id, index, total: state.media.length })
      : `<div class="row-actions">${button("删除","delete-media","small danger",`data-id="${item.id}"`)}</div>`}
  </div>`).join("");
  return panel("轮播内容配置", `<div class="toolbar" style="margin-bottom:14px">
    ${button("上传视频","add-video","primary")}${button(`上传图片（${state.media.filter(x => x.type === "图片").length}/5）`,"add-image","primary")}
    <span class="muted">视频最多 1 个，图片最多 5 张</span>
  </div><div class="media-list">${rows}</div>`);
}

function userAvatar(text) {
  return `<span class="user-avatar">${text}</span>`;
}

function usersPage() {
  const rows = users.map(user => [
    userAvatar(user.avatar),
    user.nickname,
    user.phone,
    user.gender,
    user.birthday,
    user.region,
    user.registeredAt,
    opRoute("个人信息", "user-detail", "", `data-user-id="${user.id}"`)
  ]);
  return panel("用户列表", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="昵称 / 手机号">${button("查询","filter","primary")}
  </div>${table(["头像","昵称","手机号","性别","生日","地区","注册时间","个人信息"], rows, "users-table")}`);
}

function userDetailPage() {
  const user = users.find(item => item.id === state.viewingUserId) || users[0];
  const records = state.userTab === "orders"
    ? table(["订单号","商品/服务","金额","状态"], [["YB26061326","高空清洗服务","¥1,599",tag("待派单")],["YB26060803","空域代办服务","线下报价",tag("已完成")]])
    : table(["申请编号","抬头","金额","状态"], [["FP26061303","个人","¥1,599",tag("待处理")]]);
  return panel("用户基本资料", detailGrid([
    ["头像", userAvatar(user.avatar)],["昵称", user.nickname],["手机号", user.phone],["性别", user.gender],
    ["生日", user.birthday],["地区", user.region],["注册时间", user.registeredAt]
  ]), routeButton("返回列表","users",""))
  + panel("业务记录", `<div class="tabs">
    ${button("订单记录","user-tab",state.userTab === "orders" ? "primary" : "",`data-tab="orders"`)}
    ${button("发票记录","user-tab",state.userTab === "invoices" ? "primary" : "",`data-tab="invoices"`)}
  </div>${records}`);
}

function isCategoryImage(icon) {
  return /\.(png|jpg|jpeg|svg|webp)$/i.test(icon) || String(icon).includes("/");
}

function categoryIcon(icon, name = "") {
  const label = name || "分类图标";
  const content = isCategoryImage(icon)
    ? `<img src="${icon}" alt="${label}">`
    : `<span class="category-icon-text">${icon}</span>`;
  return `<span class="category-icon">${content}</span>`;
}

function categoryActions(item, index, total) {
  return rowActions({ edit: "category-edit", moveAction: "move-category", deleteAction: "delete-category", id: item.id, index, total });
}

function categoriesPage() {
  const sorted = [...state.categories].sort((a, b) => a.sort - b.sort);
  const rows = sorted.map((item, index) => [
    item.sort,
    categoryIcon(item.icon, item.name),
    item.name,
    `<span class="category-desc">${item.description || "—"}</span>`,
    item.productCount,
    tag(item.enabled ? "启用" : "停用"),
    categoryActions(item, index, sorted.length)
  ]);
  return panel("商品分类", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="分类名称">${button("查询","filter","primary")}<span class="spacer"></span>${button("新增分类","category-edit","primary")}
  </div>${table(["排序","图标","分类名称","分类说明","商品数","状态","操作"], rows, "category-table")}`);
}

function activeProduct() {
  return state.products.find(item => item.id === state.editingProductId) || state.products[0];
}

function imageMissingIcon() {
  return `<svg class="img-missing-icon" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" rx="2"></rect>
    <circle cx="8.5" cy="9.5" r="1.6"></circle>
    <path d="M21 16l-5-5-6 6-3-3-4 4"></path>
    <path class="img-missing-slash" d="M4 4l16 16"></path>
  </svg>`;
}

function thumb(hasImage, { title = "", size = "" } = {}) {
  const cls = `thumb ${size} ${hasImage ? "" : "thumb-missing"}`.trim();
  const inner = hasImage ? `<span class="thumb-img">图</span>` : imageMissingIcon();
  const attr = title ? ` title="${title}"` : "";
  return `<span class="${cls}"${attr}>${inner}</span>`;
}

function productThumb(product) {
  const first = product.images?.[0];
  return thumb(Boolean(first), { title: first ? first.name : "暂无图片" });
}

function rowActions({ edit, moveAction, deleteAction, id, index, total }) {
  const editBtn = edit ? button("编辑", edit, "small", `data-id="${id}"`) : "";
  const up = button("上移", moveAction, "small", `data-id="${id}" data-dir="-1"${index === 0 ? " disabled" : ""}`);
  const down = button("下移", moveAction, "small", `data-id="${id}" data-dir="1"${index === total - 1 ? " disabled" : ""}`);
  return `<div class="row-actions">${editBtn}${up}${down}${button("删除", deleteAction, "small danger", `data-id="${id}"`)}</div>`;
}

function destroyProductEditor() {
  state.productToolbar?.destroy?.();
  state.productEditor?.destroy?.();
  state.productToolbar = null;
  state.productEditor = null;
}

function initProductEditor() {
  const product = activeProduct();
  const toolbarEl = document.getElementById("product-intro-toolbar");
  const editorEl = document.getElementById("product-intro-editor");
  const { createEditor, createToolbar } = window.wangEditor || {};
  if (!toolbarEl || !editorEl || !createEditor || !createToolbar) return;

  const editor = createEditor({
    selector: "#product-intro-editor",
    html: product.intro || "<p></p>",
    config: {
      placeholder: "请输入商品介绍...",
      onChange(ed) {
        product.intro = ed.getHtml();
      }
    },
    mode: "default"
  });
  const toolbar = createToolbar({
    editor,
    selector: "#product-intro-toolbar",
    config: { toolbarKeys: ["bold", "italic", "through", "|", "bulletedList", "numberedList", "|", "insertLink", "undo", "redo"] }
  });
  state.productEditor = editor;
  state.productToolbar = toolbar;
}

function richEditorContainer() {
  return `<div class="element-rich-editor">
    <div id="product-intro-toolbar"></div>
    <div id="product-intro-editor"></div>
  </div>`;
}

function productImagesPanel(product) {
  const images = product.images || [];
  const rows = images.map((item, index) => `<div class="media-row media-row--sort">
    <div class="drag">☷</div>
    <div class="media-preview">图</div>
    <div class="media-meta"><strong>${item.name}</strong><span class="muted">${index === 0 ? "列表默认展示此图" : `轮播第 ${index + 1} 张`}</span></div>
    ${rowActions({ moveAction: "move-product-image", deleteAction: "delete-product-image", id: item.id, index, total: images.length })}
  </div>`).join("");
  return panel("轮播图管理", `<div class="toolbar" style="margin-bottom:14px">
    ${button("上传图片","add-product-image","primary")}
    <span class="muted">最多 9 张 · 第一张为列表封面与详情首图</span>
  </div><div class="media-list">${rows || `<p class="empty">暂无轮播图，请上传</p>`}</div>`);
}

function ensureReviewDraft(product) {
  if (state.reviewDraftProductId !== product.id) {
    state.reviewDraft = [...(product.displayedReviewIds || [])];
    state.reviewDraftProductId = product.id;
  }
  return state.reviewDraft;
}

function ensureReviewPage(product, total) {
  if (state.reviewPageProductId !== product.id) {
    state.reviewPage = 1;
    state.reviewPageProductId = product.id;
  }
  const totalPages = Math.max(1, Math.ceil(total / state.reviewPageSize));
  if (state.reviewPage > totalPages) state.reviewPage = totalPages;
  return state.reviewPage;
}

function listPagination({ total, page, pageSize, prefix }) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  return `<div class="list-pagination">
    <span class="list-pagination-total">总数：<strong>${total}</strong></span>
    <div class="list-pagination-controls">
      ${button("‹", `${prefix}-prev`, "small", page <= 1 ? "disabled" : "")}
      <span class="list-pagination-current">${page}</span>
      ${button("›", `${prefix}-next`, "small", page >= totalPages ? "disabled" : "")}
    </div>
    <label class="list-pagination-size"><select data-action="${prefix}-size">
      ${[5, 10, 20].map(size => `<option value="${size}"${size === pageSize ? " selected" : ""}>${size}</option>`).join("")}
    </select> / 页</label>
  </div>`;
}

function reviewDraftDirty(product) {
  const saved = [...(product.displayedReviewIds || [])].sort().join(",");
  const draft = [...ensureReviewDraft(product)].sort().join(",");
  return saved !== draft;
}

function productReviewsPanel(product) {
  const reviews = productReviews.filter(item => item.productId === product.id);
  const total = reviews.length;
  const page = ensureReviewPage(product, total);
  const pageSize = state.reviewPageSize;
  const start = (page - 1) * pageSize;
  const pageReviews = reviews.slice(start, start + pageSize);
  const draft = new Set(ensureReviewDraft(product));
  const saved = new Set(product.displayedReviewIds || []);
  const draftCount = reviews.filter(item => draft.has(item.id)).length;
  const savedCount = reviews.filter(item => saved.has(item.id)).length;
  const dirty = reviewDraftDirty(product);
  const allSelected = pageReviews.length > 0 && pageReviews.every(item => draft.has(item.id));
  const actions = reviews.length ? button(allSelected ? "取消全选" : "全选本页", "select-all-reviews") : "";
  const list = pageReviews.map(item => {
    const checked = draft.has(item.id);
    const published = saved.has(item.id);
    return `<label class="review-option${checked ? " is-on" : ""}">
      <input type="checkbox" data-action="toggle-product-review" data-id="${item.id}"${checked ? " checked" : ""}>
      <span class="review-main">
        <span class="review-head"><strong>${item.user}</strong><span class="review-stars">${"★".repeat(item.rating)}${"☆".repeat(5 - item.rating)}</span></span>
        <p>${item.content}</p>
        <span class="muted">订单 ${item.orderNo} · ${item.time}</span>
      </span>
      <span class="review-status ${published ? "on" : "off"}">${published ? "展示中" : "未展示"}</span>
    </label>`;
  }).join("");
  const dirtyTip = dirty ? `<span class="tag amber">有未保存的勾选变更</span>` : "";
  const pagination = total ? listPagination({ total, page, pageSize, prefix: "review-page" }) : "";
  return panel("评价管理", `<p class="muted" style="margin:0 0 14px">评价均来自该商品的已完成订单。列表分页浏览，多选后点击顶部「保存商品」在小程序商品详情页生效。当前勾选 <strong>${draftCount}</strong> 条，已保存展示 <strong>${savedCount}</strong> 条。 ${dirtyTip}</p>
    <div class="review-list">${list || `<p class="empty">暂无来自订单的评价</p>`}</div>${pagination}`, actions);
}

function productActions(item) {
  return `<div class="row-actions"><button class="button small" data-route="product-edit" data-product-id="${item.id}">编辑</button>
    ${button("删除","delete-product","small danger",`data-id="${item.id}"`)}</div>`;
}

function productsPage() {
  const rows = state.products.map(item => [
    productThumb(item),
    item.code,
    item.name,
    item.category,
    item.specCount,
    item.attrs,
    tag(item.status),
    productActions(item)
  ]);
  return panel("商品列表", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="商品名称 / 编号"><select><option>全部分类</option><option>上门服务</option><option>维修保养</option></select>
    <select><option>全部状态</option><option>已上架</option><option>已下架</option></select>${button("查询","filter","primary")}
    <span class="spacer"></span>${routeButton("创建商品","product-edit","primary")}
  </div>${table(["商品图","商品编号","商品名称","分类","规格数","业务属性","状态","操作"], rows, "products-table")}`);
}

function propertyRow(label, checked = true) {
  return `<label class="property-row"><span>${label}</span><input type="checkbox"${checked ? " checked" : ""}></label>`;
}

function productEditPage() {
  const product = activeProduct();
  if (!product.images) product.images = [];
  if (!product.displayedReviewIds) product.displayedReviewIds = [];
  const specs = state.specs.map((spec, index) => [
    `<input value="${spec.name}">`, `<input value="${spec.price}">`,
    opButton("删除","remove-spec","danger",`data-index="${index}"`)
  ]);
  return panel("基础信息", formGrid([
    { label: "商品名称", html: `<input value="${product.name}">` },
    { label: "商品分类", html: `<select data-action="product-category"><option${product.category === "上门服务" ? " selected" : ""}>上门服务</option><option${product.category === "维修保养" ? " selected" : ""}>维修保养</option><option${product.category === "代办服务" ? " selected" : ""}>代办服务</option></select>` }
  ]), `${routeButton("返回商品列表","products","")}${button("保存商品","save-product","primary")}`)
  + productImagesPanel(product)
  + panel("商品介绍", richEditorContainer())
  + productReviewsPanel(product)
  + panel("多规格配置", `${table(["规格名称","价格（元）","操作"], specs)}<div style="margin-top:12px">${button("添加规格","add-spec")}</div>`)
  + panel("业务属性", `<div class="check-list">${propertyRow("是否需要预约","需要")}${propertyRow("是否在线支付","需要")}${propertyRow("是否需要飞手服务","需要")}</div>
    <p class="muted" style="margin:12px 0 0">业务属性与商品绑定。订单生成时保存最终属性快照，后续修改商品不会改变历史订单。</p>`);
}

function ordersPage() {
  const rows = orders.map(row => [...row.slice(0,5), tag(row[5]), opRoute("查看详情","order-detail")]);
  return panel("订单列表", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="订单号 / 用户 / 商品"><select><option>全部状态</option><option>待付款</option><option>待派单</option><option>待服务</option><option>待评价</option><option>已完成</option></select>
    <select><option>是否需要飞手</option><option>需要</option><option>不需要</option></select>${button("查询","filter","primary")}
  </div>${table(["订单号","用户","商品/服务","金额","需要飞手","状态","操作"], rows)}`);
}

function orderDetailPage() {
  const pilots = table(["飞手","区域","设备","个人状态"], state.assignedPilots.map(p => [p.name,p.area,p.device,tag(p.status)]));
  return panel("订单状态", `<div class="steps">
    <div class="step done">订单生成</div><div class="step done">待派单</div><div class="step done">待服务</div><div class="step">全部完成</div><div class="step">待评价</div>
  </div>`, routeButton("返回订单列表","orders",""))
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
    ["PX26061301","陈先生","CAAC 执照培训","138****6612","2026-06-13 10:26",tag("待联系"),opButton("查看 / 跟进","training-follow")],
    ["PX26061216","刘女士","无人机测绘实训","186****2931","2026-06-12 16:02",tag("已联系"),opButton("查看 / 跟进","training-follow")],
    ["PX26061008","四川航测公司","企业内训","189****8807","2026-06-10 09:31",tag("已转化"),opButton("查看 / 跟进","training-follow")]
  ])}`);
}

function pilotApplicationsPage() {
  return panel("入驻申请", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="申请人 / 手机号 / 公司"><select><option>全部主体</option><option>个人</option><option>公司</option></select><select><option>全部状态</option><option>待审核</option><option>已通过</option><option>已驳回</option></select>${button("查询","filter","primary")}
  </div>${table(["申请编号","申请人","主体","所属公司","申请时间","状态","操作"], [
    ["FS26061305","陈宇","公司","四川云航科技有限公司","2026-06-13 15:28",tag("待审核"),opRoute("审核","pilot-review")],
    ["FS26061302","刘洋","个人","—","2026-06-13 10:16",tag("待审核"),opRoute("审核","pilot-review")],
    ["FS26061208","李明","公司","成都低空服务有限公司","2026-06-12 09:06",tag("已通过"),opRoute("查看","pilot-review")]
  ])}`);
}

function pilotReviewPage() {
  return panel("申请信息", detailGrid([
    ["申请编号","FS26061305"],["申请人","陈宇"],["联系电话","138****2605"],["所属主体","公司"],
    ["公司名称","四川云航科技有限公司"],["公司电话","028-88****26"],["所在区域","成都高新"],["申请时间","2026-06-13 15:28"]
  ]), routeButton("返回申请列表","pilot-applications",""))
  + panel("资质与设备资料", table(["资料类型","资料内容","状态"], [
    ["身份证","身份证正反面",tag("已上传")],["操作执照","CAAC 超视距驾驶员",tag("已上传")],
    ["无人机","DJI M350 RTK · SN: 3X****91",tag("已上传")]
  ]), `${button("驳回申请","reject-pilot","danger")}${button("审核通过","approve-pilot","primary")}`);
}

function pilotsPage() {
  return panel("已认证飞手", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="姓名 / 手机号 / 公司"><select><option>全部主体</option><option>个人</option><option>公司</option></select><select><option>全部状态</option><option>空闲</option><option>服务中</option></select>${button("查询","filter","primary")}
  </div>${table(["飞手","主体","所属公司","服务区域","设备","状态","操作"], [
    ["李明","公司","成都低空服务有限公司","成都高新","Mavic 3E",tag("服务中"),opRoute("查看详情","pilot-detail")],
    ["王伟","个人","—","成都双流","M350 RTK",tag("空闲"),opRoute("查看详情","pilot-detail")],
    ["陈宇","公司","四川云航科技有限公司","成都高新","M350 RTK",tag("空闲"),opRoute("查看详情","pilot-detail")]
  ])}`);
}

function pilotDetailPage() {
  return panel("飞手资料", detailGrid([
    ["姓名","李明"],["所属主体","公司"],["所属公司","成都低空服务有限公司"],["联系电话","138****9036"],
    ["服务区域","成都高新"],["主要设备","Mavic 3E"],["认证时间","2026-05-22"],["当前状态",tag("服务中")]
  ]), routeButton("返回飞手列表","pilots",""))
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
    ["RW26061301","成都园区航拍需求","2026-06-18","成都高新",tag("征集中"),"6",opButton("查看意愿","task-interest")],
    ["RW26061003","农田植保飞防协作","2026-06-20","眉山",tag("征集中"),"12",opButton("查看意愿","task-interest")],
    ["RW26060508","活动现场航拍","2026-06-08","成都锦江",tag("已关闭"),"4",opButton("查看意愿","task-interest")]
  ])}<p class="muted" style="margin:14px 0 0">任务需求仅收集飞手参与意愿，不关联商品订单，也不改变商品订单状态。</p>`);
}

function invoicesPage() {
  return panel("发票申请", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="申请编号 / 用户 / 抬头"><select><option>全部状态</option><option>待处理</option><option>待上传</option><option>已开票</option><option>已驳回</option></select>${button("查询","filter","primary")}
  </div>${table(["申请编号","用户","发票抬头","订单数","金额","申请时间","状态","操作"], [
    ["FP26061307","云航科技","四川云航科技有限公司","3","¥18,600","2026-06-13 16:08",tag("待处理"),opRoute("查看详情","invoice-detail")],
    ["FP26061303","唐先生","个人","1","¥1,599","2026-06-13 10:21",tag("待处理"),opRoute("查看详情","invoice-detail")],
    ["FP26061002","张女士","个人","2","¥2,498","2026-06-10 11:06",tag("已开票"),opRoute("查看详情","invoice-detail")]
  ])}`);
}

function invoiceDetailPage() {
  const actions = state.invoiceStatus === "待处理"
    ? `${button("驳回","reject-invoice","danger")}${button("审核通过","approve-invoice","primary")}`
    : state.invoiceStatus === "待上传" ? button("上传发票文件","upload-invoice","primary") : "";
  return panel("申请信息", detailGrid([
    ["申请编号","FP26061307"],["申请用户","云航科技"],["发票类型","增值税普通发票"],["发票抬头","四川云航科技有限公司"],
    ["税号","91510100MA****8K"],["申请金额","¥18,600"],["接收邮箱","finance@example.com"],["当前状态",tag(state.invoiceStatus)]
  ]), routeButton("返回发票列表","invoices",""))
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
    { label: "企业 Logo", html: `<div class="file-picker-field">${button("上传 Logo", "pick-about-logo")}<span class="muted" id="about-logo-name">未选择</span></div>` },
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
    destroyProductEditor();
    app.innerHTML = loginPage();
    document.getElementById("loginForm").addEventListener("submit", event => {
      event.preventDefault();
      state.loggedIn = true;
      sessionStorage.setItem("droneAdminLogin", "1");
      render();
    });
    return;
  }
  destroyProductEditor();
  app.innerHTML = `<div class="shell">${sidebar()}<main class="main">${topbar()}<div class="page-layout"><div class="page">${pageContent()}</div>${docPanel()}</div></main></div>`;
  if (state.page === "product-edit") requestAnimationFrame(() => initProductEditor());
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

function pickLocalFile({ accept = "", multiple = false } = {}) {
  return new Promise(resolve => {
    const input = document.createElement("input");
    input.type = "file";
    if (accept) input.accept = accept;
    input.multiple = multiple;
    input.hidden = true;
    document.body.appendChild(input);

    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      const files = [...(input.files || [])];
      input.remove();
      window.removeEventListener("focus", onFocus);
      resolve(files);
    };

    const onFocus = () => setTimeout(done, 300);

    input.addEventListener("change", done, { once: true });
    window.addEventListener("focus", onFocus, { once: true });
    input.click();
  });
}

async function handleAddVideo() {
  if (state.media.some(item => item.type === "视频")) {
    toast("视频最多上传 1 个");
    return;
  }
  const files = await pickLocalFile({ accept: "video/*" });
  const file = files[0];
  if (!file) return;
  state.media.unshift({ id: `v${Date.now()}`, type: "视频", name: file.name, enabled: true });
  render();
  toast(`已选择视频：${file.name}`);
}

async function handleAddCarouselImage() {
  const current = state.media.filter(item => item.type === "图片").length;
  if (current >= 5) {
    toast("图片最多上传 5 张");
    return;
  }
  const files = await pickLocalFile({ accept: "image/*", multiple: true });
  if (!files.length) return;
  const slots = 5 - current;
  files.slice(0, slots).forEach((file, index) => {
    state.media.push({ id: `i${Date.now() + index}`, type: "图片", name: file.name, enabled: true });
  });
  render();
  if (files.length > slots) toast(`最多还可上传 ${slots} 张，已添加 ${slots} 张`);
  else toast(`已选择 ${Math.min(files.length, slots)} 张图片`);
}

async function handleAddProductImage() {
  const product = activeProduct();
  if (!product.images) product.images = [];
  if (product.images.length >= 9) {
    toast("轮播图最多上传 9 张");
    return;
  }
  const files = await pickLocalFile({ accept: "image/*", multiple: true });
  if (!files.length) return;
  const slots = 9 - product.images.length;
  files.slice(0, slots).forEach((file, index) => {
    product.images.push({ id: `pi${Date.now() + index}`, name: file.name });
  });
  render();
  if (files.length > slots) toast(`最多还可上传 ${slots} 张，已添加 ${slots} 张`);
  else toast(`已选择 ${Math.min(files.length, slots)} 张图片`);
}

async function handlePickCategoryIcon() {
  const files = await pickLocalFile({ accept: "image/*" });
  const file = files[0];
  if (!file) return;
  const preview = document.querySelector(".category-icon-field .preview");
  const nameEl = document.getElementById("category-icon-name");
  if (preview) preview.innerHTML = `<img src="${URL.createObjectURL(file)}" alt="分类图标">`;
  if (nameEl) nameEl.textContent = file.name;
  toast(`已选择：${file.name}`);
}

async function handlePickAboutLogo() {
  const files = await pickLocalFile({ accept: "image/*" });
  const file = files[0];
  if (!file) return;
  const nameEl = document.getElementById("about-logo-name");
  if (nameEl) nameEl.textContent = file.name;
  toast(`已选择 Logo：${file.name}`);
}

async function handleUploadInvoice() {
  const files = await pickLocalFile({ accept: ".pdf,.jpg,.jpeg,.png,image/*" });
  const file = files[0];
  if (!file) return;
  state.invoiceStatus = "已开票";
  render();
  toast(`发票已上传：${file.name}`);
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
    if (route.dataset.userId) state.viewingUserId = route.dataset.userId;
    if (route.dataset.productId) state.editingProductId = route.dataset.productId;
    navigate(route.dataset.route);
    return;
  }
  const target = event.target.closest("[data-action]");
  if (!target || target.disabled) return;
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
  } else if (action === "toggle-doc-panel") {
    state.docPanelOpen = !state.docPanelOpen;
    localStorage.setItem("droneAdminDocPanel", state.docPanelOpen ? "1" : "0");
    render();
  } else if (action === "filter") {
    toast("已按当前条件筛选（模拟）");
  } else if (action === "close-modal") {
    state.deletingCategoryId = null;
    state.deletingProductId = null;
    closeModal();
  } else if (action === "add-video") {
    handleAddVideo();
  } else if (action === "add-image") {
    handleAddCarouselImage();
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
    const item = state.categories.find(x => x.id === target.dataset.id) || { name: "", description: "", icon: "./assets/icons/category-onsite.png", sort: state.categories.length + 1, enabled: true };
    const iconPreview = isCategoryImage(item.icon)
      ? `<img src="${item.icon}" alt="${item.name || "分类图标"}">`
      : `<span class="category-icon-text">${item.icon || "分类"}</span>`;
    modal("商品分类", formGrid([
      { label: "分类名称", html: `<input value="${item.name}" placeholder="请输入分类名称">` },
      { label: "分类状态", html: `<select><option ${item.enabled ? "selected" : ""}>启用</option><option ${item.enabled ? "" : "selected"}>停用</option></select>` },
      { label: "分类说明", wide: true, html: `<textarea placeholder="请输入分类说明，用于小程序分类页展示">${item.description || ""}</textarea>` },
      { label: "分类图标", wide: true, html: `<div class="category-icon-field"><span class="category-icon preview">${iconPreview}</span>${button("选择图片", "pick-category-icon")}<span class="muted category-icon-name" id="category-icon-name">未选择</span><span class="muted">建议 128×128 或更大，用于小程序分类入口展示</span></div>` }
    ]), `${button("取消","close-modal")}${button("保存分类","save-modal","primary")}`, true);
  } else if (action === "move-category") {
    const sorted = [...state.categories].sort((a, b) => a.sort - b.sort);
    const index = sorted.findIndex(x => x.id === target.dataset.id);
    const next = index + Number(target.dataset.dir);
    if (next >= 0 && next < sorted.length) {
      const current = sorted[index];
      const neighbor = sorted[next];
      [current.sort, neighbor.sort] = [neighbor.sort, current.sort];
      render();
      toast("分类排序已更新");
    }
  } else if (action === "delete-category") {
    const item = state.categories.find(x => x.id === target.dataset.id);
    if (!item) return;
    if (item.productCount > 0) {
      toast("该分类下还有商品，不可删除");
      return;
    }
    state.deletingCategoryId = item.id;
    modal("确认删除", `<p>确认删除分类「${item.name}」？删除后不可恢复。</p>`,
      `${button("取消","close-modal")}${button("确认删除","confirm-delete-category","danger")}`);
  } else if (action === "confirm-delete-category") {
    state.categories = state.categories.filter(x => x.id !== state.deletingCategoryId);
    state.deletingCategoryId = null;
    closeModal();
    render();
    toast("分类已删除");
  } else if (action === "delete-product") {
    const item = state.products.find(x => x.id === target.dataset.id);
    if (!item) return;
    if (item.orderCount > 0) {
      toast("该商品已有关联订单，不可删除");
      return;
    }
    state.deletingProductId = item.id;
    modal("确认删除", `<p>确认删除商品「${item.name}」？删除后不可恢复。</p>`,
      `${button("取消","close-modal")}${button("确认删除","confirm-delete-product","danger")}`);
  } else if (action === "confirm-delete-product") {
    state.products = state.products.filter(x => x.id !== state.deletingProductId);
    state.deletingProductId = null;
    closeModal();
    render();
    toast("商品已删除");
  } else if (action === "add-spec") {
    state.specs.push({ name: "新规格", price: "0" });
    render();
  } else if (action === "remove-spec") {
    state.specs.splice(Number(target.dataset.index), 1);
    render();
  } else if (action === "save-product") {
    if (state.productEditor) activeProduct().intro = state.productEditor.getHtml();
    const product = activeProduct();
    product.displayedReviewIds = [...ensureReviewDraft(product)];
    toast("商品已保存（模拟）");
  } else if (action === "add-product-image") {
    handleAddProductImage();
  } else if (action === "delete-product-image") {
    const product = activeProduct();
    product.images = product.images.filter(item => item.id !== target.dataset.id);
    render();
    toast("轮播图已删除");
  } else if (action === "move-product-image") {
    const product = activeProduct();
    const index = product.images.findIndex(item => item.id === target.dataset.id);
    const next = index + Number(target.dataset.dir);
    if (next >= 0 && next < product.images.length) {
      [product.images[index], product.images[next]] = [product.images[next], product.images[index]];
      render();
      toast("轮播图顺序已更新");
    }
  } else if (action === "select-all-reviews") {
    const product = activeProduct();
    const reviews = productReviews.filter(item => item.productId === product.id);
    const page = ensureReviewPage(product, reviews.length);
    const start = (page - 1) * state.reviewPageSize;
    const pageReviews = reviews.slice(start, start + state.reviewPageSize);
    const draft = new Set(ensureReviewDraft(product));
    const allPageSelected = pageReviews.length > 0 && pageReviews.every(item => draft.has(item.id));
    pageReviews.forEach(item => {
      if (allPageSelected) draft.delete(item.id);
      else draft.add(item.id);
    });
    state.reviewDraft = [...draft];
    render();
  } else if (action === "review-page-prev") {
    if (state.reviewPage > 1) {
      state.reviewPage--;
      render();
    }
  } else if (action === "review-page-next") {
    const product = activeProduct();
    const total = productReviews.filter(item => item.productId === product.id).length;
    const totalPages = Math.ceil(total / state.reviewPageSize);
    if (state.reviewPage < totalPages) {
      state.reviewPage++;
      render();
    }
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
  } else if (action === "pick-category-icon") {
    handlePickCategoryIcon();
  } else if (action === "pick-about-logo") {
    handlePickAboutLogo();
  } else if (action === "upload-invoice") {
    handleUploadInvoice();
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

document.addEventListener("change", event => {
  if (event.target.dataset.action === "toggle-product-review") {
    const draft = new Set(ensureReviewDraft(activeProduct()));
    if (event.target.checked) draft.add(event.target.dataset.id);
    else draft.delete(event.target.dataset.id);
    state.reviewDraft = [...draft];
    render();
    return;
  }
  if (event.target.dataset.action === "review-page-size") {
    state.reviewPageSize = Number(event.target.value);
    state.reviewPage = 1;
    render();
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
