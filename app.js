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
    { id: "flight-reports", label: "飞行报备管理" },
    { id: "tasks", label: "任务需求与意愿" },
    { id: "task-detail", label: "任务详情" }
  ]},
  { id: "invoices", label: "发票中心", icon: "票" },
  { id: "about", label: "关于我们", icon: "企" }
];

const titles = {
  dashboard: "工作台", carousel: "轮播图管理", users: "用户列表",
  "user-detail": "用户详情", categories: "商品分类管理", products: "商品列表",
  "product-edit": "创建 / 编辑商品", orders: "订单列表", "order-detail": "订单详情与派单",
  training: "培训报名线索", "training-detail": "培训报名详情", "pilot-applications": "飞手入驻申请", "pilot-review": "飞手审核详情",
  pilots: "已认证飞手", "pilot-detail": "飞手详情",
  "flight-reports": "飞行报备管理", "flight-report-detail": "飞行报备详情",
  tasks: "任务需求与意愿", "task-detail": "任务详情",
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
    summary: "查看与管理全部商品订单。列表「状态」为当前节点；完整流转路径因下单快照（在线支付 / 飞手服务）不同而不同。",
    operations: [
      "按订单号、用户、商品、状态、是否需要飞手筛选",
      "列表状态列 hover 可查看该单完整流转路径",
      "状态颜色：待付款/待评价=橙色，待派单=红色（需管理员操作），待服务/待交付=蓝色，已完成=绿色",
      "需飞手且待派单的订单，列表显示「去派单」，点击直接弹窗指派飞手（与详情「分配飞手」同一逻辑）",
      "点击「查看详情」进入订单详情，顶部步骤条展示动态流转进度",
      "待服务阶段在详情页「调整飞手」修改名单，状态不变"
    ],
    fields: [
      ["订单号", "系统唯一订单编号"],
      ["用户", "下单用户昵称或企业名"],
      ["商品/服务", "所购商品名称"],
      ["金额", "订单应付金额，线下报价类显示文案"],
      ["需要飞手", "下单时快照，表示是否需分配飞手"],
      ["状态", "当前流转节点；待派单为红色待办；合法值因快照组合而异，见订单详情说明"],
      ["流转路径（在线支付+飞手）", "订单生成 → 待付款 → 待派单 → 待服务 → 待评价 → 已完成"],
      ["流转路径（在线支付+无飞手）", "订单生成 → 待付款 → 待交付 → 待评价 → 已完成"],
      ["流转路径（非在线支付+飞手）", "订单生成 → 待派单 → 待服务 → 待评价 → 已完成"],
      ["流转路径（非在线支付+无飞手）", "订单生成 → 待交付 → 待评价 → 已完成"],
      ["需要预约", "不影响列表状态与步骤条，仅详情页展示「预约信息」面板"]
    ]
  },
  "order-detail": {
    summary: "查看单笔订单动态流转、信息快照、预约信息及飞手分配情况。",
    operations: [
      "顶部步骤条按下单快照（在线支付 / 飞手服务）动态生成，非固定 5 步",
      "步骤条下方展示本单完整流转路径摘要",
      "「订单信息快照」展示金额与业务属性（下单时保存，不可改）",
      "商品需预约时展示「预约信息」面板；无需预约则不展示",
      "需飞手服务时展示「飞手分配与履约」面板：待派单显示「分配飞手」，待服务显示「调整飞手」",
      "列表「去派单」与详情「分配飞手」为同一指派弹窗；调整飞手仅改名单，不改变订单状态",
      "无需飞手时跳过派单节点，使用「待交付」并隐藏飞手面板"
    ],
    fields: [
      ["订单状态步骤条", "按在线支付、飞手服务组合生成 4～6 个节点，高亮当前状态"],
      ["订单信息快照", "订单号、用户、商品、金额、在线支付、飞手需求、预约需求（均为下单快照）"],
      ["预约信息", "仅需要预约时展示；含日期、时段、联系手机号、地址、备注、备注照片（1 张）"],
      ["待交付", "无需飞手时的履约节点，后台标记交付完成后进入待评价"],
      ["飞手分配", "仅需要飞手时展示；已指派飞手及个人履约状态"]
    ]
  },
  training: {
    summary: "展示小程序用户提交的培训报名表单，后台仅只读查看，无跟进或状态变更操作。",
    operations: [
      "按联系人、手机号、课程筛选报名记录",
      "点击「查看详情」查看完整报名信息"
    ],
    fields: [
      ["线索编号", "报名记录唯一编号"],
      ["联系人", "报名人姓名或企业联系人"],
      ["课程意向", "用户感兴趣的课程类型"],
      ["手机号", "联系方式，脱敏展示"],
      ["报名时间", "用户在小程序提交报名的时间"],
      ["备注", "用户填写的补充说明"],
      ["来源", "表单提交来源，默认小程序"]
    ]
  },
  "training-detail": {
    summary: "查看单条培训报名表的完整提交内容，只读展示。",
    operations: [
      "展示用户在小程序填写的全部字段",
      "无编辑、跟进或状态变更功能"
    ],
    fields: [
      ["线索编号", "报名记录唯一编号"],
      ["联系人", "报名人姓名或企业联系人"],
      ["课程意向", "用户感兴趣的课程类型"],
      ["手机号", "联系方式，脱敏展示"],
      ["报名时间", "提交时间"],
      ["备注", "用户填写的补充说明"],
      ["来源", "表单提交来源"]
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
      ["所属主体", "个人或公司"],
      ["联系电话", "申请人手机号，脱敏展示"],
      ["出生年月", "申请人出生年月"],
      ["所在区域", "申请人主要服务区域"],
      ["身份证正反面", "小程序上传的身份证影像"],
      ["无人机操作执照", "小程序上传的操作执照"],
      ["无人机照片", "小程序上传的设备实拍图"],
      ["机型选择", "执飞无人机型号"],
      ["序列号", "无人机机身序列号"],
      ["唯一识别码", "无人机唯一识别码（UAS）"],
      ["公司名称", "主体为公司时填写"],
      ["公司联系电话", "主体为公司时填写"],
      ["公司所在区域", "主体为公司时填写"],
      ["公司地址", "主体为公司时填写"],
      ["水印执照", "主体为公司时上传的营业执照（含水印）"],
      ["申请时间", "提交入驻申请的时间"],
      ["状态", "待审核 / 已通过 / 已驳回"]
    ]
  },
  "pilot-review": {
    summary: "查看飞手入驻资料并完成审核决策。",
    operations: [
      "核对申请人信息、资质上传与设备信息",
      "主体为公司时额外核对公司信息与水印执照",
      "审核通过：飞手进入已认证列表，可参与派单",
      "驳回申请：需填写驳回原因，申请人可重新提交"
    ],
    fields: [
      ["申请信息", "申请人、所属主体、联系电话、出生年月、所在区域"],
      ["公司信息", "主体为公司时展示：公司名称、联系电话、所在区域、地址、水印执照"],
      ["资质资料", "身份证正反面、无人机操作执照、无人机照片上传状态"],
      ["设备信息", "机型选择、序列号、唯一识别码"]
    ]
  },
  pilots: {
    summary: "查看已通过审核的飞手列表及认证资料。",
    operations: [
      "按姓名、手机号、主体筛选飞手",
      "点击「查看详情」查看飞手完整资料与关联订单"
    ],
    fields: [
      ["飞手", "认证飞手姓名"],
      ["主体", "个人或公司"],
      ["所属公司", "公司飞手关联企业"],
      ["服务区域", "主要接单区域"],
      ["设备", "主要执飞机型"]
    ]
  },
  "pilot-detail": {
    summary: "查看单个飞手的完整资料与订单履约记录。",
    operations: [
      "查看飞手认证信息、资质上传与设备信息",
      "主体为公司时查看公司信息与水印执照",
      "下方列表展示已分配订单；个人状态为订单维度，表示该飞手在该单下是否接单及履约进度"
    ],
    fields: [
      ["飞手资料", "申请人、所属主体、联系电话、出生年月、所在区域、认证时间"],
      ["公司信息", "主体为公司时：公司名称、联系电话、所在区域、地址、水印执照"],
      ["资质资料", "身份证、操作执照、无人机照片上传记录"],
      ["设备信息", "机型选择、序列号、唯一识别码"],
      ["分配订单", "与该飞手关联的订单及各自订单状态"],
      ["个人状态", "订单维度：该飞手在该订单下是否接单及履约进度，非飞手全局字段"]
    ]
  },
  "flight-reports": {
    summary: "管理飞手在小程序提交的飞行报备数据，支持查看与确认，并可推送至第三方（待对接）。",
    operations: [
      "按报备编号、飞手姓名、机型、状态筛选",
      "点击「查看详情」查看完整报备信息与飞行器信息",
      "待确认报备可在详情页执行「确认报备」",
      "「推送第三方」为预留能力，点击仅提示待对接"
    ],
    fields: [
      ["报备编号", "飞行报备唯一编号"],
      ["起飞飞手", "提交报备的认证飞手姓名"],
      ["机型", "执飞无人机型号"],
      ["飞行架次", "本次报备的飞行架次"],
      ["飞行时长", "累计飞行时长"],
      ["报备时间", "飞手在小程序提交报备的时间"],
      ["状态", "待确认或已确认"]
    ]
  },
  "flight-report-detail": {
    summary: "查看单条飞行报备的完整内容与飞行器信息，并完成确认或第三方推送操作。",
    operations: [
      "展示飞手在小程序填写的飞行动态信息",
      "待确认时可点击「确认报备」标记为已确认",
      "「推送第三方」将飞手及报备信息推送外部系统（原型仅占位，待业务确认）"
    ],
    fields: [
      ["报备编号", "飞行报备唯一编号"],
      ["起飞飞手", "提交报备的认证飞手"],
      ["联系电话", "飞手联系方式，脱敏展示"],
      ["飞行区域", "计划或实际飞行区域"],
      ["飞行日期", "飞行作业日期"],
      ["飞行时段", "飞行起止时段"],
      ["飞行架次", "本次飞行架次"],
      ["飞行时长", "累计飞行时长"],
      ["备注", "飞手填写的补充说明"],
      ["报备时间", "小程序提交时间"],
      ["来源", "默认小程序"],
      ["状态", "待确认 / 已确认"],
      ["机型选择", "执飞无人机型号"],
      ["序列号", "无人机机身序列号"],
      ["唯一识别码", "无人机唯一识别码"]
    ]
  },
  tasks: {
    summary: "发布独立任务需求，收集飞手参与意愿，不关联商品订单。",
    operations: [
      "点击「发布任务需求」填写标题、服务时间、地址、备注与附文本说明",
      "点击「查看详情」查看任务完整展示内容",
      "点击「查看意愿」查看已提交参与的飞手名单",
      "任务可关闭征集；关闭后不再接受新意愿"
    ],
    fields: [
      ["需求编号", "任务唯一编号"],
      ["标题", "任务名称，面向飞手展示"],
      ["服务时间", "计划服务日期与时段"],
      ["地址", "任务执行地址"],
      ["备注", "补充说明，如设备或现场要求"],
      ["附文本说明", "富文本任务详情，面向飞手展示"],
      ["状态", "征集中或已关闭"],
      ["意愿人数", "已表达参与意向的飞手数量"]
    ]
  },
  "task-detail": {
    summary: "查看单个任务需求的完整展示内容。",
    operations: [
      "展示标题、服务时间、地址、备注与附文本说明",
      "附文本说明以富文本形式只读展示",
      "点击「返回列表」回到任务需求列表"
    ],
    fields: [
      ["需求编号", "任务唯一编号"],
      ["标题", "任务名称"],
      ["服务时间", "计划服务日期与时段"],
      ["地址", "任务执行地址"],
      ["备注", "补充说明"],
      ["附文本说明", "富文本任务详情"],
      ["状态", "征集中或已关闭"]
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
      "企业名称与企业 Logo 只读展示，来源于企业主体资料",
      "企业介绍使用富文本编辑器，支持字体、字号、排版与图文",
      "电话、地址等信息可在企业介绍正文中自行编排",
      "点击「预览」查看小程序端展示效果",
      "保存后更新线上展示内容"
    ],
    fields: [
      ["企业名称", "只读展示，小程序关于页标题"],
      ["企业 Logo", "只读展示，品牌标识"],
      ["企业介绍", "富文本正文，支持字体排版、字号与图文"]
    ]
  }
};

const state = {
  loggedIn: sessionStorage.getItem("droneAdminLogin") === "1",
  page: location.hash.replace("#/", "") || "dashboard",
  history: [],
  dashboardMetric: "today-orders",
  userTab: "orders",
  media: [
    { id: "v1", type: "视频", name: "平台品牌宣传视频.mp4", enabled: true },
    { id: "i1", type: "图片", name: "行业无人机解决方案.jpg", enabled: true },
    { id: "i2", type: "图片", name: "专业飞手服务.jpg", enabled: true },
    { id: "i3", type: "图片", name: "无人机培训报名.jpg", enabled: false }
  ],
  assignedPilots: [],
  categories: [
    { id: "c1", name: "上门服务", description: "无人机上门清洗、测绘、巡检等现场服务", icon: "./assets/icons/category-onsite.png", productCount: 12, sort: 1, enabled: true },
    { id: "c2", name: "维修保养", description: "设备保养、故障检测与维修服务", icon: "./assets/icons/category-repair.png", productCount: 6, sort: 2, enabled: true },
    { id: "c3", name: "代办服务", description: "空域申请、资质代办等代理服务", icon: "./assets/icons/category-agency.png", productCount: 4, sort: 3, enabled: true },
    { id: "c4", name: "企业服务", description: "面向企业的定制化无人机解决方案", icon: "./assets/icons/category-enterprise.png", productCount: 0, sort: 4, enabled: true }
  ],
  products: [
    {
      id: "p1", code: "SP26001", name: "高空清洗服务", category: "上门服务", status: "已上架", orderCount: 5,
      properties: { needAppointment: true, onlinePay: true, needPilot: true },
      specs: [
        { name: "标准服务", price: "899" },
        { name: "企业增强服务", price: "1599" }
      ],
      images: [
        { id: "pi1", name: "清洗现场1.jpg" },
        { id: "pi2", name: "清洗现场2.jpg" },
        { id: "pi3", name: "设备作业.jpg" }
      ],
      intro: "<p><strong>高空清洗服务</strong>适用于建筑外立面、光伏板等高空区域的无人机清洗。</p><ul><li>专业清洗设备，覆盖高空死角</li><li>持证飞手操作，安全合规</li><li>支持预约上门，在线支付</li></ul>",
      displayedReviewIds: []
    },
    {
      id: "p2", code: "SP26002", name: "无人机保养检测", category: "维修保养", status: "已上架", orderCount: 2,
      properties: { needAppointment: true, onlinePay: true, needPilot: false },
      specs: [
        { name: "基础保养", price: "899" },
        { name: "深度检测", price: "1299" }
      ],
      images: [{ id: "pi4", name: "保养检测1.jpg" }],
      intro: "<p>提供无人机全机保养与性能检测服务，含硬件检查、固件升级建议与检测报告。</p>",
      displayedReviewIds: []
    },
    {
      id: "p3", code: "SP26003", name: "空域代办服务", category: "代办服务", status: "已下架", orderCount: 0,
      properties: { needAppointment: true, onlinePay: false, needPilot: false },
      specs: [{ name: "标准代办", price: "3600" }],
      images: [],
      intro: "<p>空域申请、飞行计划报批等一站式代办，适用于企业航拍与工程测绘项目。</p>",
      displayedReviewIds: []
    }
  ],
  editingProductId: null,
  newProductDraft: null,
  editingCategoryId: null,
  categoryIconDraft: null,
  reviewDraft: [],
  reviewDraftProductId: null,
  listPages: {},
  productEditor: null,
  productToolbar: null,
  deletingCategoryId: null,
  deletingProductId: null,
  viewingUserId: "U20260612001",
  viewingOrderId: "YB26061318",
  viewingInvoiceId: "FP26061307",
  viewingPilotAppId: "FS26061305",
  viewingPilotId: "P001",
  viewingTrainingId: "PX26061301",
  viewingFlightReportId: "FB26061401",
  viewingTaskId: "RW26061301",
  aboutConfig: {
    name: "四川云北无人机科技有限公司",
    logoName: "yunbei-logo.png",
    intro: "<p><strong>四川云北无人机科技有限公司</strong>专注于无人机行业服务、飞手协作、技术培训与企业解决方案。</p><ul><li>低空经济综合服务</li><li>飞手协作与任务派发</li><li>企业级无人机应用解决方案</li></ul><p><strong>联系电话：</strong>028-8888 6626</p><p><strong>地址：</strong>四川省成都市高新区天府软件园</p>"
  },
  docPanelOpen: localStorage.getItem("droneAdminDocPanel") !== "0"
};

const users = [
  { id: "U20260612001", avatar: "唐", nickname: "唐先生", phone: "138****8821", gender: "男", birthday: "1990-05-18", region: "四川 · 成都", registeredAt: "2026-06-12 09:18" },
  { id: "U20260611018", avatar: "云", nickname: "云航科技", phone: "189****3016", gender: "—", birthday: "—", region: "四川 · 成都", registeredAt: "2026-06-11 15:42" },
  { id: "U20260610009", avatar: "张", nickname: "张女士", phone: "136****1175", gender: "女", birthday: "1995-11-02", region: "四川 · 绵阳", registeredAt: "2026-06-10 11:06" },
  { id: "U20260609005", avatar: "李", nickname: "李先生", phone: "137****5520", gender: "男", birthday: "1988-03-21", region: "四川 · 德阳", registeredAt: "2026-06-09 08:44" },
  { id: "U20260608003", avatar: "王", nickname: "王女士", phone: "135****9081", gender: "女", birthday: "1992-07-09", region: "四川 · 成都", registeredAt: "2026-06-08 19:12" },
  { id: "U20260607007", avatar: "林", nickname: "林先生", phone: "133****6618", gender: "男", birthday: "1985-12-30", region: "四川 · 眉山", registeredAt: "2026-06-07 13:27" }
];

const orderRecords = [
  {
    id: "YB26061326", user: "林先生", service: "高空清洗服务", amount: "¥1,599", needPilot: true, needAppointment: true,
    status: "待派单", onlinePay: true, assignedPilots: [],
    appointment: {
      date: "2026-06-14", slot: "09:00-11:00", phone: "139****5528",
      address: "成都市武侯区某园区 3 号楼",
      remark: "重点清洗北侧玻璃幕墙，现场有停车位。",
      remarkPhoto: { name: "北侧外立面.jpg" }
    }
  },
  {
    id: "YB26061318", user: "华景物业", service: "园区航拍测绘", amount: "¥3,600", needPilot: true, needAppointment: true,
    status: "待派单", onlinePay: true, assignedPilots: [],
    appointment: {
      date: "2026-06-15", slot: "14:00-16:00", phone: "138****6626",
      address: "成都市高新区天府软件园",
      remark: "需避开午间员工休息时间，从东门进入。",
      remarkPhoto: { name: "东门入口.jpg" }
    }
  },
  {
    id: "YB26061309", user: "赵女士", service: "无人机保养检测", amount: "¥899", needPilot: false, needAppointment: true,
    status: "待交付", onlinePay: true, assignedPilots: [],
    appointment: {
      date: "2026-06-16", slot: "10:00-11:30", phone: "136****1175",
      address: "成都市双流区某维修点",
      remark: "", remarkPhoto: null
    }
  },
  {
    id: "YB26061402", user: "李先生", service: "园区航拍测绘", amount: "¥2,800", needPilot: true, needAppointment: true,
    status: "待付款", onlinePay: true, assignedPilots: [],
    appointment: {
      date: "2026-06-17", slot: "09:00-11:00", phone: "137****5520",
      address: "成都市武侯区某园区",
      remark: "需航拍正射影像。",
      remarkPhoto: null
    }
  },
  {
    id: "YB26061401", user: "成都建工", service: "高空清洗服务", amount: "线下报价", needPilot: true, needAppointment: true,
    status: "待派单", onlinePay: false, assignedPilots: [],
    appointment: {
      date: "2026-06-18", slot: "14:00-16:00", phone: "028-55****90",
      address: "成都市天府新区某工地",
      remark: "需提前联系现场负责人。",
      remarkPhoto: { name: "工地入口.jpg" }
    }
  },
  {
    id: "YB26060803", user: "唐先生", service: "空域代办服务", amount: "线下报价", needPilot: false, needAppointment: false,
    status: "已完成", onlinePay: false, assignedPilots: []
  },
  {
    id: "YB26060711", user: "云航科技", service: "园区巡检服务", amount: "¥6,400", needPilot: true, needAppointment: true,
    status: "待评价", onlinePay: true,
    assignedPilots: [{ name: "王伟", area: "成都双流", device: "M350 RTK", status: "已完成" }],
    appointment: {
      date: "2026-06-07", slot: "11:00-13:00", phone: "189****3016",
      address: "成都市天府新区科创园",
      remark: "巡检完成后需提交 PDF 报告。",
      remarkPhoto: { name: "巡检范围.jpg" }
    }
  },
  {
    id: "YB26060605", user: "张女士", service: "高空清洗服务", amount: "¥899", needPilot: true, needAppointment: true,
    status: "已完成", onlinePay: true, assignedPilots: [],
    appointment: {
      date: "2026-06-06", slot: "09:30-11:30", phone: "136****1175",
      address: "绵阳市科创园 A 区",
      remark: "已完成服务，客户无异议。",
      remarkPhoto: null
    }
  }
];

const invoiceRecords = [
  {
    id: "FP26061307", user: "云航科技", title: "四川云航科技有限公司", orderCount: 3, amount: "¥18,600",
    appliedAt: "2026-06-13 16:08", status: "待处理", taxNo: "91510100MA****8K", email: "finance@example.com",
    type: "增值税普通发票"
  },
  {
    id: "FP26061303", user: "唐先生", title: "个人", orderCount: 1, amount: "¥1,599",
    appliedAt: "2026-06-13 10:21", status: "待处理", taxNo: "—", email: "tang@example.com",
    type: "增值税普通发票"
  },
  {
    id: "FP26061002", user: "张女士", title: "个人", orderCount: 2, amount: "¥2,498",
    appliedAt: "2026-06-10 11:06", status: "已开票", taxNo: "—", email: "zhang@example.com",
    type: "增值税普通发票"
  },
  {
    id: "FP26060901", user: "华景物业", title: "华景物业有限公司", orderCount: 1, amount: "¥3,600",
    appliedAt: "2026-06-09 14:22", status: "待上传", taxNo: "91510100MB****2X", email: "ap@example.com",
    type: "增值税普通发票"
  },
  {
    id: "FP26060804", user: "林先生", title: "个人", orderCount: 1, amount: "¥1,599",
    appliedAt: "2026-06-08 09:15", status: "已驳回", taxNo: "—", email: "lin@example.com",
    type: "增值税普通发票"
  }
];

const pilotApplications = [
  {
    id: "FS26061305", applicant: "陈宇", subject: "公司", phone: "138****2605", birthday: "1992-08", area: "成都高新",
    idCard: { uploaded: true, preview: "身份证正反面.jpg" },
    license: { uploaded: true, preview: "CAAC 超视距驾驶员.pdf" },
    dronePhoto: { uploaded: true, preview: "设备实拍.jpg" },
    droneModel: "DJI M350 RTK", serialNo: "3X****91", uniqueId: "UAS-****8821",
    company: {
      name: "四川云航科技有限公司", phone: "028-88****26", area: "成都高新",
      address: "成都市高新区天府大道中段 88 号",
      watermarkedLicense: { uploaded: true, preview: "营业执照（水印）.jpg" }
    },
    appliedAt: "2026-06-13 15:28", status: "待审核"
  },
  {
    id: "FS26061302", applicant: "刘洋", subject: "个人", phone: "139****1102", birthday: "1995-03", area: "成都双流",
    idCard: { uploaded: true, preview: "身份证正反面.jpg" },
    license: { uploaded: true, preview: "CAAC 视距内驾驶员.pdf" },
    dronePhoto: { uploaded: true, preview: "设备实拍.jpg" },
    droneModel: "Mavic 3E", serialNo: "1Z****42", uniqueId: "UAS-****3315",
    company: null,
    appliedAt: "2026-06-13 10:16", status: "待审核"
  },
  {
    id: "FS26061208", applicant: "李明", subject: "公司", phone: "138****9036", birthday: "1988-11", area: "成都高新",
    idCard: { uploaded: true, preview: "身份证正反面.jpg" },
    license: { uploaded: true, preview: "CAAC 超视距驾驶员.pdf" },
    dronePhoto: { uploaded: true, preview: "设备实拍.jpg" },
    droneModel: "Mavic 3E", serialNo: "1Z****08", uniqueId: "UAS-****1205",
    company: {
      name: "成都低空服务有限公司", phone: "028-66****18", area: "成都高新",
      address: "成都市高新区益州大道北段 168 号",
      watermarkedLicense: { uploaded: true, preview: "营业执照（水印）.jpg" }
    },
    appliedAt: "2026-06-12 09:06", status: "已通过"
  },
  {
    id: "FS26061103", applicant: "周航", subject: "个人", phone: "137****7720", birthday: "1990-06", area: "成都武侯",
    idCard: { uploaded: true, preview: "身份证正反面.jpg" },
    license: { uploaded: false, preview: "—" },
    dronePhoto: { uploaded: true, preview: "设备实拍.jpg" },
    droneModel: "M350 RTK", serialNo: "3X****55", uniqueId: "UAS-****7720",
    company: null,
    appliedAt: "2026-06-11 17:40", status: "已驳回"
  },
  {
    id: "FS26061001", applicant: "赵宇", subject: "个人", phone: "136****4412", birthday: "1993-12", area: "成都锦江",
    idCard: { uploaded: true, preview: "身份证正反面.jpg" },
    license: { uploaded: true, preview: "CAAC 视距内驾驶员.pdf" },
    dronePhoto: { uploaded: true, preview: "设备实拍.jpg" },
    droneModel: "Mavic 3E", serialNo: "1Z****19", uniqueId: "UAS-****4412",
    company: null,
    appliedAt: "2026-06-10 08:55", status: "待审核"
  }
];

const trainingRecords = [
  { id: "PX26061301", contact: "陈先生", course: "CAAC 执照培训", phone: "138****6612", appliedAt: "2026-06-13 10:26", remark: "希望周末班，有飞行基础", source: "小程序" },
  { id: "PX26061216", contact: "刘女士", course: "无人机测绘实训", phone: "186****2931", appliedAt: "2026-06-12 16:02", remark: "—", source: "小程序" },
  { id: "PX26061008", contact: "四川航测公司", course: "企业内训", phone: "189****8807", appliedAt: "2026-06-10 09:31", remark: "约 15 人，需上门培训", source: "小程序" },
  { id: "PX26060904", contact: "王先生", course: "农业植保培训", phone: "135****2208", appliedAt: "2026-06-09 13:18", remark: "—", source: "小程序" },
  { id: "PX26060802", contact: "李女士", course: "CAAC 执照培训", phone: "139****7711", appliedAt: "2026-06-08 15:44", remark: "咨询价格与开班时间", source: "小程序" },
  { id: "PX26060706", contact: "成都建工", course: "企业内训", phone: "028-55****90", appliedAt: "2026-06-07 11:02", remark: "需定制测绘方向课程", source: "小程序" }
];

const pilotRecords = [
  {
    id: "P001", name: "李明", subject: "公司", phone: "138****9036", birthday: "1988-11", area: "成都高新",
    idCard: { uploaded: true, preview: "身份证正反面.jpg" },
    license: { uploaded: true, preview: "CAAC 超视距驾驶员.pdf" },
    dronePhoto: { uploaded: true, preview: "设备实拍.jpg" },
    droneModel: "Mavic 3E", serialNo: "1Z****08", uniqueId: "UAS-****1205",
    company: {
      name: "成都低空服务有限公司", phone: "028-66****18", area: "成都高新",
      address: "成都市高新区益州大道北段 168 号",
      watermarkedLicense: { uploaded: true, preview: "营业执照（水印）.jpg" }
    },
    certifiedAt: "2026-05-22"
  },
  {
    id: "P002", name: "王伟", subject: "个人", phone: "186****5520", birthday: "1991-04", area: "成都双流",
    idCard: { uploaded: true, preview: "身份证正反面.jpg" },
    license: { uploaded: true, preview: "CAAC 视距内驾驶员.pdf" },
    dronePhoto: { uploaded: true, preview: "设备实拍.jpg" },
    droneModel: "M350 RTK", serialNo: "3X****22", uniqueId: "UAS-****5520",
    company: null,
    certifiedAt: "2026-05-18"
  },
  {
    id: "P003", name: "陈宇", subject: "公司", phone: "138****2605", birthday: "1992-08", area: "成都高新",
    idCard: { uploaded: true, preview: "身份证正反面.jpg" },
    license: { uploaded: true, preview: "CAAC 超视距驾驶员.pdf" },
    dronePhoto: { uploaded: true, preview: "设备实拍.jpg" },
    droneModel: "M350 RTK", serialNo: "3X****91", uniqueId: "UAS-****8821",
    company: {
      name: "四川云航科技有限公司", phone: "028-88****26", area: "成都高新",
      address: "成都市高新区天府大道中段 88 号",
      watermarkedLicense: { uploaded: true, preview: "营业执照（水印）.jpg" }
    },
    certifiedAt: "2026-05-15"
  },
  {
    id: "P004", name: "周航", subject: "个人", phone: "137****7720", birthday: "1990-06", area: "成都武侯",
    idCard: { uploaded: true, preview: "身份证正反面.jpg" },
    license: { uploaded: true, preview: "CAAC 超视距驾驶员.pdf" },
    dronePhoto: { uploaded: true, preview: "设备实拍.jpg" },
    droneModel: "M350 RTK", serialNo: "3X****55", uniqueId: "UAS-****7720",
    company: null,
    certifiedAt: "2026-05-10"
  },
  {
    id: "P005", name: "赵宇", subject: "个人", phone: "136****4412", birthday: "1993-12", area: "成都锦江",
    idCard: { uploaded: true, preview: "身份证正反面.jpg" },
    license: { uploaded: true, preview: "CAAC 视距内驾驶员.pdf" },
    dronePhoto: { uploaded: true, preview: "设备实拍.jpg" },
    droneModel: "Mavic 3E", serialNo: "1Z****19", uniqueId: "UAS-****4412",
    company: null,
    certifiedAt: "2026-05-08"
  },
  {
    id: "P006", name: "刘洋", subject: "个人", phone: "139****1102", birthday: "1995-03", area: "成都双流",
    idCard: { uploaded: true, preview: "身份证正反面.jpg" },
    license: { uploaded: true, preview: "CAAC 视距内驾驶员.pdf" },
    dronePhoto: { uploaded: true, preview: "设备实拍.jpg" },
    droneModel: "Mavic 3E", serialNo: "1Z****42", uniqueId: "UAS-****3315",
    company: null,
    certifiedAt: "2026-05-05"
  }
];

const flightReportRecords = [
  {
    id: "FB26061401", pilotName: "李明", pilotPhone: "138****9036", droneModel: "Mavic 3E",
    serialNo: "1Z****08", uniqueId: "UAS-****1205", flightArea: "成都高新区",
    flightDate: "2026-06-14", flightTime: "09:30-11:20", sorties: 3, duration: "1h 50min",
    remark: "园区航拍测绘作业", submittedAt: "2026-06-14 08:45", source: "小程序", status: "待确认"
  },
  {
    id: "FB26061302", pilotName: "王伟", pilotPhone: "186****5520", droneModel: "M350 RTK",
    serialNo: "3X****22", uniqueId: "UAS-****5520", flightArea: "成都双流",
    flightDate: "2026-06-13", flightTime: "14:00-16:30", sorties: 5, duration: "2h 30min",
    remark: "农田测绘巡检", submittedAt: "2026-06-13 13:20", source: "小程序", status: "已确认"
  },
  {
    id: "FB26061203", pilotName: "陈宇", pilotPhone: "138****2605", droneModel: "M350 RTK",
    serialNo: "3X****91", uniqueId: "UAS-****8821", flightArea: "成都天府新区",
    flightDate: "2026-06-12", flightTime: "08:00-10:15", sorties: 2, duration: "2h 15min",
    remark: "—", submittedAt: "2026-06-12 07:40", source: "小程序", status: "已确认"
  },
  {
    id: "FB26061104", pilotName: "周航", pilotPhone: "137****7720", droneModel: "M350 RTK",
    serialNo: "3X****55", uniqueId: "UAS-****7720", flightArea: "成都武侯区",
    flightDate: "2026-06-11", flightTime: "10:00-11:40", sorties: 4, duration: "1h 40min",
    remark: "电力线路初勘", submittedAt: "2026-06-11 09:15", source: "小程序", status: "待确认"
  },
  {
    id: "FB26061005", pilotName: "赵宇", pilotPhone: "136****4412", droneModel: "Mavic 3E",
    serialNo: "1Z****19", uniqueId: "UAS-****4412", flightArea: "成都锦江区",
    flightDate: "2026-06-10", flightTime: "15:20-16:50", sorties: 2, duration: "1h 30min",
    remark: "活动航拍 rehearsal", submittedAt: "2026-06-10 14:55", source: "小程序", status: "已确认"
  },
  {
    id: "FB26060906", pilotName: "刘洋", pilotPhone: "139****1102", droneModel: "Mavic 3E",
    serialNo: "1Z****42", uniqueId: "UAS-****3315", flightArea: "成都双流",
    flightDate: "2026-06-09", flightTime: "07:30-09:00", sorties: 3, duration: "1h 30min",
    remark: "—", submittedAt: "2026-06-09 07:10", source: "小程序", status: "待确认"
  }
];

const taskRecords = [
  {
    id: "RW26061301", title: "成都园区航拍需求", serviceTime: "2026-06-18 09:00-12:00",
    address: "成都市高新区天府软件园 B 区", remark: "需携带 RTK 设备，现场有门禁",
    description: "<p>独立发布需求并收集飞手参与意愿，不关联商品订单。</p><ul><li>航拍范围约 2 平方公里</li><li>需提交初步成果样片</li><li>作业高度不超过 120 米</li></ul>",
    status: "征集中", interest: 6
  },
  {
    id: "RW26061003", title: "农田植保飞防协作", serviceTime: "2026-06-20 07:00-11:30",
    address: "眉山市东坡区某农业示范园", remark: "提供统一药剂，飞手自备植保机",
    description: "<p>协助当地合作社完成<strong>300 亩</strong>水稻飞防作业。</p><p>要求飞手具备植保作业经验，服从现场调度。</p>",
    status: "征集中", interest: 12
  },
  {
    id: "RW26060508", title: "活动现场航拍", serviceTime: "2026-06-08 14:00-18:00",
    address: "成都市锦江区春熙路商圈", remark: "—",
    description: "<p>商业活动开幕航拍，需 1 名飞手配合地面导演完成指定机位拍摄。</p>",
    status: "已关闭", interest: 4
  },
  {
    id: "RW26060402", title: "桥梁巡检协助", serviceTime: "2026-06-22 08:30-12:00",
    address: "成都市双流区跨江大桥南段", remark: "需超视距执照，风力大于 5 级暂停作业",
    description: "<p>协助工程单位采集桥梁底部与墩柱影像资料。</p><ul><li>重点拍摄 3 处疑似裂缝位置</li><li>成果需按模板整理</li></ul>",
    status: "征集中", interest: 8
  },
  {
    id: "RW26060305", title: "电力线路初勘", serviceTime: "2026-06-25 06:30-10:30",
    address: "德阳市旌阳区 110kV 线路走廊", remark: "需提前报备飞行计划",
    description: "<p>对新建线路走廊进行航拍初勘，输出正射与视频素材。</p>",
    status: "征集中", interest: 5
  },
  {
    id: "RW26060201", title: "景区宣传拍摄", serviceTime: "2026-06-05 15:00-17:30",
    address: "乐山市市中区某景区入口", remark: "—",
    description: "<p>景区夏季宣传短片航拍素材采集，需配合景区开放时间作业。</p>",
    status: "已关闭", interest: 3
  }
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

function formatProductAttrs(product) {
  const props = product.properties || {};
  const parts = [];
  if (props.needAppointment) parts.push("预约");
  if (props.onlinePay) parts.push("在线支付");
  else parts.push("不在线支付");
  if (props.needPilot) parts.push("需要飞手");
  else parts.push("无需飞手");
  return parts.join(" / ");
}

function ensureProductShape(product) {
  if (!product.properties) product.properties = { needAppointment: true, onlinePay: true, needPilot: false };
  if (!product.specs) product.specs = [{ name: "标准服务", price: "0" }];
  if (!product.images) product.images = [];
  if (!product.displayedReviewIds) product.displayedReviewIds = [];
  return product;
}

function createEmptyProduct() {
  const defaultCategory = state.categories.find(item => item.enabled)?.name || "上门服务";
  return ensureProductShape({
    id: null,
    code: "",
    name: "",
    category: defaultCategory,
    status: "已下架",
    orderCount: 0,
    properties: { needAppointment: true, onlinePay: true, needPilot: false },
    specs: [{ name: "标准服务", price: "0" }],
    images: [],
    intro: "<p></p>",
    displayedReviewIds: []
  });
}

function isCreatingProduct() {
  return !state.editingProductId;
}

function activeProduct() {
  if (state.editingProductId) {
    const product = state.products.find(item => item.id === state.editingProductId);
    return ensureProductShape(product || state.products[0]);
  }
  if (!state.newProductDraft) state.newProductDraft = createEmptyProduct();
  return state.newProductDraft;
}

function activeOrder() {
  return orderRecords.find(item => item.id === state.viewingOrderId) || orderRecords[0];
}

function activeInvoice() {
  return invoiceRecords.find(item => item.id === state.viewingInvoiceId) || invoiceRecords[0];
}

function activePilotApplication() {
  return pilotApplications.find(item => item.id === state.viewingPilotAppId) || pilotApplications[0];
}

function activePilot() {
  return pilotRecords.find(item => item.id === state.viewingPilotId) || pilotRecords[0];
}

function activeTraining() {
  return trainingRecords.find(item => item.id === state.viewingTrainingId) || trainingRecords[0];
}

function activeFlightReport() {
  return flightReportRecords.find(item => item.id === state.viewingFlightReportId) || flightReportRecords[0];
}

function activeTask() {
  return taskRecords.find(item => item.id === state.viewingTaskId) || taskRecords[0];
}

function flightReportStatusTag(status) {
  return status === "已确认" ? tag("已确认") : tag("待确认");
}

function pilotCompanyName(profile) {
  return profile.company?.name || "—";
}

function pilotUploadStatus(file) {
  return file?.uploaded ? tag("已上传") : tag("未上传");
}

function pilotUploadRow(label, file) {
  return [label, file?.preview || "—", pilotUploadStatus(file)];
}

function pilotCompanyPanel(company) {
  if (!company) return "";
  return panel("公司信息", detailGrid([
    ["公司名称", company.name],
    ["联系电话", company.phone],
    ["所在区域", company.area],
    ["地址", company.address, true],
    ["水印执照", `${pilotUploadStatus(company.watermarkedLicense)}${company.watermarkedLicense?.preview ? `<span class="muted"> ${company.watermarkedLicense.preview}</span>` : ""}`]
  ]));
}

function pilotQualificationPanel(profile, actions = "") {
  return panel("资质与设备资料", `${table(["资料类型", "资料内容", "状态"], [
    pilotUploadRow("身份证正反面", profile.idCard),
    pilotUploadRow("无人机操作执照", profile.license),
    pilotUploadRow("无人机照片", profile.dronePhoto)
  ])}<div style="margin-top:16px">${detailGrid([
    ["机型选择", profile.droneModel || "—"],
    ["序列号", profile.serialNo || "—"],
    ["唯一识别码", profile.uniqueId || "—"]
  ])}</div>`, actions);
}

function categoryOptions(selected = "") {
  return state.categories
    .filter(item => item.enabled)
    .map(item => `<option${item.name === selected ? " selected" : ""}>${item.name}</option>`)
    .join("");
}

function formatOrderAppointmentBrief(order) {
  if (!order.needAppointment || !order.appointment) return "—";
  const { date, slot } = order.appointment;
  return [date, slot].filter(Boolean).join(" ");
}

function orderRemarkPhoto(order) {
  const photo = order.appointment?.remarkPhoto;
  if (!photo) return `<span class="muted">无</span>`;
  return `<button type="button" class="order-remark-photo" data-action="preview-order-remark-photo" data-order-id="${order.id}">
    <span class="thumb lg"><span class="thumb-img">图</span></span>
    <span class="muted">${photo.name}</span>
  </button>`;
}

function orderAppointmentPanel(order) {
  if (!order.needAppointment) return "";
  const appt = order.appointment || {};
  return panel("预约信息", detailGrid([
    ["预约日期", appt.date || "—"],
    ["预约时段", appt.slot || "—"],
    ["联系手机号", appt.phone || "—"],
    ["预约地址", appt.address || "—", true],
    ["信息备注", `<span class="order-remark-text">${appt.remark || "—"}</span>`, true],
    ["备注照片", orderRemarkPhoto(order), true]
  ]));
}

function getOrderFlow(order) {
  const steps = ["订单生成"];
  if (order.onlinePay) steps.push("待付款");
  if (order.needPilot) steps.push("待派单", "待服务");
  else steps.push("待交付");
  steps.push("待评价", "已完成");
  return steps;
}

function orderFlowSummary(order) {
  return getOrderFlow(order).join(" → ");
}

function statusTag(text) {
  const map = {
    "待付款": "amber",
    "待派单": "red",
    "待服务": "blue",
    "待交付": "blue",
    "待评价": "amber",
    "已完成": "green"
  };
  if (map[text]) return `<span class="tag ${map[text]}">${text}</span>`;
  return tag(text);
}

function orderStatusTag(order) {
  return statusTag(order.status);
}

function orderStatusCell(order) {
  return `<span title="本单流转：${orderFlowSummary(order)}">${statusTag(order.status)}</span>`;
}

function orderListActions(order) {
  const assign = order.needPilot && order.status === "待派单"
    ? button("去派单", "assign-pilots", "small primary", `data-order-id="${order.id}"`)
    : "";
  const detail = `<button class="button small" data-route="order-detail" data-order-id="${order.id}">查看详情</button>`;
  return `<div class="row-actions">${assign}${detail}</div>`;
}

function orderSteps(order) {
  const flow = getOrderFlow(order);
  const current = Math.max(0, flow.indexOf(order.status));
  return flow.map((label, index) => {
    let cls = "step";
    if (index < current) cls += " done";
    else if (index === current) cls += " active";
    return `<div class="${cls}">${label}</div>`;
  }).join("");
}

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
  return `<dl class="detail-grid">${items.map(([key, value, wide]) => `<div class="detail-item${wide ? " span-2" : ""}"><dt>${key}</dt><dd>${value}</dd></div>`).join("")}</dl>`;
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
  const todayOrderRows = orderRecords.map(item => [
    item.id, item.user, item.service, item.amount, item.needPilot ? "需要" : "不需要",
    orderStatusCell(item), orderListActions(item)
  ]);
  const pendingOrderRows = orderRecords.filter(item => item.status === "待派单").map((item, index) => [
    item.id, item.user, item.service, formatOrderAppointmentBrief(item), index ? "56min" : "2h 18min",
    orderListActions(item)
  ]);
  const pilotAppRows = pilotApplications.filter(item => item.status === "待审核").map(item => [
    item.id, item.applicant, item.subject, pilotCompanyName(item), item.appliedAt,
    opRoute("去审核", "pilot-review", "", `data-pilot-app-id="${item.id}"`)
  ]);
  const invoiceRows = invoiceRecords.filter(item => item.status === "待处理").map(item => [
    item.id, item.user, item.title, `${item.orderCount} 个`, item.amount,
    opRoute("去处理", "invoice-detail", "", `data-invoice-id="${item.id}"`)
  ]);
  const content = {
    "today-orders": panel("今日新增订单明细", paginatedTable(
      "dashboard-today-orders",
      ["订单号","用户","商品/服务","金额","需要飞手","状态","操作"],
      todayOrderRows
    )),
    "pending-orders": panel("待派单订单明细", paginatedTable(
      "dashboard-pending-orders",
      ["订单号","用户","商品/服务","预约时间","等待时长","操作"],
      pendingOrderRows
    )),
    "pilot-applications": panel("待审核飞手明细", paginatedTable(
      "dashboard-pilot-applications",
      ["申请编号","申请人","所属主体","公司","申请时间","操作"],
      pilotAppRows
    )),
    invoices: panel("待处理发票明细", paginatedTable(
      "dashboard-invoices",
      ["申请编号","申请用户","发票抬头","关联订单","申请金额","操作"],
      invoiceRows
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
  </div>${paginatedTable("users", ["头像","昵称","手机号","性别","生日","地区","注册时间","个人信息"], rows, "users-table")}`);
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
  </div>${paginatedTable("categories", ["排序","图标","分类名称","分类说明","商品数","状态","操作"], rows, "category-table")}`);
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

function destroyRichEditor() {
  state.richEditorToolbar?.destroy?.();
  state.richEditor?.destroy?.();
  state.richEditorToolbar = null;
  state.richEditor = null;
  state.productToolbar = null;
  state.productEditor = null;
}

function destroyProductEditor() {
  destroyRichEditor();
}

const defaultRichToolbarKeys = ["bold", "italic", "through", "|", "bulletedList", "numberedList", "|", "insertLink", "undo", "redo"];

const aboutRichToolbarKeys = [
  "headerSelect", "fontSize", "fontFamily", "lineHeight", "|",
  "bold", "italic", "underline", "through", "|",
  "color", "bgColor", "|",
  "bulletedList", "numberedList", "|",
  "justifyLeft", "justifyCenter", "justifyRight", "|",
  "insertLink", "insertImage", "|",
  "undo", "redo"
];

function initRichEditor({
  toolbarId = "product-intro-toolbar",
  editorId = "product-intro-editor",
  html = "<p></p>",
  readOnly = false,
  placeholder = "请输入内容...",
  onChange,
  toolbarKeys = defaultRichToolbarKeys
} = {}) {
  destroyRichEditor();
  const toolbarEl = document.getElementById(toolbarId);
  const editorEl = document.getElementById(editorId);
  const { createEditor, createToolbar } = window.wangEditor || {};
  if (!editorEl || !createEditor) return;

  const editor = createEditor({
    selector: `#${editorId}`,
    html,
    config: {
      placeholder,
      readOnly,
      onChange: onChange || undefined
    },
    mode: "default"
  });

  if (!readOnly && toolbarEl && createToolbar) {
    const toolbar = createToolbar({
      editor,
      selector: `#${toolbarId}`,
      config: { toolbarKeys }
    });
    state.richEditorToolbar = toolbar;
    state.productToolbar = toolbar;
  }

  state.richEditor = editor;
  state.productEditor = editor;
}

function initProductEditor() {
  const product = activeProduct();
  initRichEditor({
    html: product.intro || "<p></p>",
    placeholder: "请输入商品介绍...",
    onChange(ed) {
      product.intro = ed.getHtml();
    }
  });
}

function initTaskDescriptionViewer() {
  const task = activeTask();
  initRichEditor({
    toolbarId: "task-description-toolbar",
    editorId: "task-description-editor",
    html: task.description || "<p>—</p>",
    readOnly: true,
    placeholder: "暂无附文本说明"
  });
}

function initAboutEditor() {
  initRichEditor({
    toolbarId: "about-intro-toolbar",
    editorId: "about-intro-editor",
    html: state.aboutConfig.intro || "<p></p>",
    placeholder: "请输入企业介绍，支持字体、字号、排版与图文...",
    toolbarKeys: aboutRichToolbarKeys,
    onChange(ed) {
      state.aboutConfig.intro = ed.getHtml();
    }
  });
}

function richEditorContainer({
  toolbarId = "product-intro-toolbar",
  editorId = "product-intro-editor",
  readOnly = false
} = {}) {
  return `<div class="element-rich-editor${readOnly ? " is-readonly" : ""}">
    <div class="element-rich-editor__toolbar" id="${toolbarId}"></div>
    <div class="element-rich-editor__editor" id="${editorId}"></div>
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

function productDraftKey(product) {
  return product.id || "__new__";
}

function ensureReviewDraft(product) {
  const key = productDraftKey(product);
  if (state.reviewDraftProductId !== key) {
    state.reviewDraft = [...(product.displayedReviewIds || [])];
    state.reviewDraftProductId = key;
  }
  return state.reviewDraft;
}

function getListPage(key) {
  if (!state.listPages[key]) state.listPages[key] = { page: 1, pageSize: 5 };
  return state.listPages[key];
}

function paginateItems(items, key) {
  const config = getListPage(key);
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / config.pageSize));
  if (config.page > totalPages) config.page = totalPages;
  const start = (config.page - 1) * config.pageSize;
  return {
    items: items.slice(start, start + config.pageSize),
    total,
    page: config.page,
    pageSize: config.pageSize
  };
}

function listPagination({ total, page, pageSize, key }) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  return `<div class="list-pagination">
    <span class="list-pagination-total">总数：<strong>${total}</strong></span>
    <div class="list-pagination-controls">
      ${button("‹", "list-page-prev", "small", `data-list-key="${key}"${page <= 1 ? " disabled" : ""}`)}
      <span class="list-pagination-current">${page}</span>
      ${button("›", "list-page-next", "small", `data-list-key="${key}"${page >= totalPages ? " disabled" : ""}`)}
    </div>
    <label class="list-pagination-size"><select data-action="list-page-size" data-list-key="${key}">
      ${[5, 10, 20].map(size => `<option value="${size}"${size === pageSize ? " selected" : ""}>${size}</option>`).join("")}
    </select> / 页</label>
  </div>`;
}

function paginatedTable(key, headers, rows, cls = "") {
  const { items, total, page, pageSize } = paginateItems(rows, key);
  const tableHtml = total ? table(headers, items, cls) : `<p class="empty">无数据</p>`;
  const pagination = total ? listPagination({ total, page, pageSize, key }) : "";
  return `${tableHtml}${pagination}`;
}

function reviewListKey(product) {
  return `reviews:${productDraftKey(product)}`;
}

function reviewDraftDirty(product) {
  const saved = [...(product.displayedReviewIds || [])].sort().join(",");
  const draft = [...ensureReviewDraft(product)].sort().join(",");
  return saved !== draft;
}

function productReviewsPanel(product) {
  if (!product.id) {
    return panel("评价管理", `<p class="muted" style="margin:0">评价来自该商品的已完成订单。新建商品需先保存，保存后才可选择要展示的评价。</p>
      <p class="empty" style="margin-top:14px">暂无评价数据</p>`);
  }
  const reviews = productReviews.filter(item => item.productId === product.id);
  const listKey = reviewListKey(product);
  const { items: pageReviews, total, page, pageSize } = paginateItems(reviews, listKey);
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
  const pagination = total ? listPagination({ total, page, pageSize, key: listKey }) : "";
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
    item.specs.length,
    formatProductAttrs(item),
    tag(item.status),
    productActions(item)
  ]);
  return panel("商品列表", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="商品名称 / 编号"><select><option>全部分类</option>${state.categories.map(item => `<option>${item.name}</option>`).join("")}</select>
    <select><option>全部状态</option><option>已上架</option><option>已下架</option></select>${button("查询","filter","primary")}
    <span class="spacer"></span>${button("创建商品","create-product","primary")}
  </div>${paginatedTable("products", ["商品图","商品编号","商品名称","分类","规格数","业务属性","状态","操作"], rows, "products-table")}`);
}

function propertyRow(label, key, product) {
  const checked = product.properties?.[key];
  return `<label class="property-row"><span>${label}</span><input type="checkbox" data-action="toggle-product-property" data-key="${key}"${checked ? " checked" : ""}></label>`;
}

function productEditPage() {
  const product = activeProduct();
  const creating = isCreatingProduct();
  const specs = product.specs.map((spec, index) => [
    `<input data-field="spec-name" data-index="${index}" value="${spec.name}">`,
    `<input data-field="spec-price" data-index="${index}" value="${spec.price}">`,
    opButton("删除","remove-spec","danger",`data-index="${index}"`)
  ]);
  return panel(creating ? "创建商品" : "编辑商品", formGrid([
    { label: "商品名称", html: `<input data-field="product-name" value="${product.name}" placeholder="请输入商品名称">` },
    { label: "商品分类", html: `<select data-field="product-category">${categoryOptions(product.category)}</select>` },
    { label: "上架状态", html: `<select data-field="product-status"><option${product.status === "已上架" ? " selected" : ""}>已上架</option><option${product.status === "已下架" ? " selected" : ""}>已下架</option></select>` }
  ]), `${routeButton("返回商品列表","products","")}${button("保存商品","save-product","primary")}`)
  + productImagesPanel(product)
  + panel("商品介绍", richEditorContainer())
  + productReviewsPanel(product)
  + panel("多规格配置", `${table(["规格名称","价格（元）","操作"], specs)}<div style="margin-top:12px">${button("添加规格","add-spec")}</div>`)
  + panel("业务属性", `<div class="check-list">${propertyRow("是否需要预约","needAppointment",product)}${propertyRow("是否在线支付","onlinePay",product)}${propertyRow("是否需要飞手服务","needPilot",product)}</div>
    <p class="muted" style="margin:12px 0 0">业务属性与商品绑定。订单生成时保存最终属性快照，后续修改商品不会改变历史订单。</p>`);
}

function ordersPage() {
  const rows = orderRecords.map(item => [
    item.id, item.user, item.service, item.amount, item.needPilot ? "需要" : "不需要",
    orderStatusCell(item), orderListActions(item)
  ]);
  return panel("订单列表", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="订单号 / 用户 / 商品"><select><option>全部状态</option><option>待付款</option><option>待派单</option><option>待服务</option><option>待交付</option><option>待评价</option><option>已完成</option></select>
    <select><option>是否需要飞手</option><option>需要</option><option>不需要</option></select>${button("查询","filter","primary")}
  </div>${paginatedTable("orders", ["订单号","用户","商品/服务","金额","需要飞手","状态","操作"], rows)}`);
}

function orderDetailPage() {
  const order = activeOrder();
  const canAssignPilot = order.needPilot && ["待派单", "待服务"].includes(order.status);
  const pilotAction = canAssignPilot
    ? (order.status === "待派单" ? button("分配飞手", "assign-pilots", "primary") : button("调整飞手", "assign-pilots", "small"))
    : "";
  const pilots = order.assignedPilots.length
    ? table(["飞手","区域","设备","个人状态"], order.assignedPilots.map(p => [p.name, p.area, p.device, tag(p.status)]))
    : `<p class="empty">尚未分配飞手</p>`;
  const pilotPanel = order.needPilot
    ? panel("飞手分配与履约", pilots, pilotAction)
    : "";
  return panel("订单状态", `<div class="steps steps--flow">${orderSteps(order)}</div>
    <p class="muted order-flow-summary">本单流转：${orderFlowSummary(order)}</p>`, routeButton("返回订单列表","orders",""))
  + panel("订单信息快照", detailGrid([
    ["订单号", order.id], ["用户", order.user], ["商品/服务", order.service], ["订单金额", order.amount],
    ["在线支付", order.onlinePay ? "是（下单快照）" : "否（下单快照）"],
    ["需要飞手", order.needPilot ? "是（下单快照）" : "否（下单快照）"],
    ["需要预约", order.needAppointment ? "是（下单快照）" : "否（下单快照）"]
  ]))
  + orderAppointmentPanel(order)
  + pilotPanel;
}

function trainingPage() {
  const rows = trainingRecords.map(item => [
    item.id, item.contact, item.course, item.phone, item.appliedAt,
    opRoute("查看详情", "training-detail", "", `data-training-id="${item.id}"`)
  ]);
  return panel("报名线索", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="联系人 / 手机号 / 课程">${button("查询","filter","primary")}
  </div>${paginatedTable("training", ["线索编号","联系人","课程意向","手机号","报名时间","操作"], rows)}`);
}

function trainingDetailPage() {
  const item = activeTraining();
  return panel("报名信息", detailGrid([
    ["线索编号", item.id], ["联系人", item.contact], ["课程意向", item.course],
    ["手机号", item.phone], ["报名时间", item.appliedAt],
    ["备注", item.remark || "—", true], ["来源", item.source || "小程序"]
  ]), routeButton("返回列表", "training", ""));
}

function pilotApplicationsPage() {
  const rows = pilotApplications.map(item => [
    item.id, item.applicant, item.subject, pilotCompanyName(item), item.appliedAt, tag(item.status),
    opRoute(item.status === "待审核" ? "审核" : "查看", "pilot-review", "", `data-pilot-app-id="${item.id}"`)
  ]);
  return panel("入驻申请", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="申请人 / 手机号 / 公司"><select><option>全部主体</option><option>个人</option><option>公司</option></select><select><option>全部状态</option><option>待审核</option><option>已通过</option><option>已驳回</option></select>${button("查询","filter","primary")}
  </div>${paginatedTable("pilot-applications", ["申请编号","申请人","主体","所属公司","申请时间","状态","操作"], rows)}`);
}

function pilotReviewPage() {
  const app = activePilotApplication();
  const readonly = app.status !== "待审核";
  const actions = readonly
    ? `<span class="tag green">已审核 · 只读查看</span>`
    : `${button("驳回申请","reject-pilot","danger")}${button("审核通过","approve-pilot","primary")}`;
  return panel("申请信息", detailGrid([
    ["申请编号", app.id], ["申请人", app.applicant], ["所属主体", app.subject], ["联系电话", app.phone],
    ["出生年月", app.birthday], ["所在区域", app.area], ["申请时间", app.appliedAt], ["当前状态", tag(app.status)]
  ]), routeButton("返回申请列表","pilot-applications",""))
  + pilotCompanyPanel(app.company)
  + pilotQualificationPanel(app, actions);
}

function pilotsPage() {
  const rows = pilotRecords.map(item => [
    item.name, item.subject, pilotCompanyName(item), item.area, item.droneModel,
    opRoute("查看详情", "pilot-detail", "", `data-pilot-id="${item.id}"`)
  ]);
  return panel("已认证飞手", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="姓名 / 手机号 / 公司"><select><option>全部主体</option><option>个人</option><option>公司</option></select>${button("查询","filter","primary")}
  </div>${paginatedTable("pilots", ["飞手","主体","所属公司","服务区域","设备","操作"], rows)}`);
}

function flightReportsPage() {
  const rows = flightReportRecords.map(item => [
    item.id, item.pilotName, item.droneModel, item.sorties, item.duration, item.submittedAt,
    flightReportStatusTag(item.status),
    opRoute("查看详情", "flight-report-detail", "", `data-flight-report-id="${item.id}"`)
  ]);
  return panel("飞行报备", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="报备编号 / 飞手 / 机型"><select><option>全部状态</option><option>待确认</option><option>已确认</option></select>${button("查询","filter","primary")}
  </div>${paginatedTable("flight-reports", ["报备编号","起飞飞手","机型","飞行架次","飞行时长","报备时间","状态","操作"], rows)}`);
}

function flightReportDetailPage() {
  const report = activeFlightReport();
  const actions = [
    report.status === "待确认" ? button("确认报备", "confirm-flight-report", "primary") : "",
    button("推送第三方", "push-flight-report-third-party")
  ].filter(Boolean).join("");
  return panel("报备信息", detailGrid([
    ["报备编号", report.id], ["起飞飞手", report.pilotName], ["联系电话", report.pilotPhone],
    ["飞行区域", report.flightArea], ["飞行日期", report.flightDate], ["飞行时段", report.flightTime],
    ["飞行架次", String(report.sorties)], ["飞行时长", report.duration],
    ["备注", report.remark || "—", true], ["报备时间", report.submittedAt],
    ["来源", report.source || "小程序"], ["状态", flightReportStatusTag(report.status)]
  ]), routeButton("返回列表", "flight-reports", ""))
  + panel("飞行器信息", detailGrid([
    ["机型选择", report.droneModel], ["序列号", report.serialNo], ["唯一识别码", report.uniqueId]
  ]), actions);
}

function pilotDetailPage() {
  const pilot = activePilot();
  return panel("飞手资料", detailGrid([
    ["姓名", pilot.name], ["所属主体", pilot.subject], ["联系电话", pilot.phone],
    ["出生年月", pilot.birthday], ["所在区域", pilot.area], ["认证时间", pilot.certifiedAt]
  ]), routeButton("返回飞手列表","pilots",""))
  + pilotCompanyPanel(pilot.company)
  + pilotQualificationPanel(pilot)
  + panel("分配订单及个人完成状态", table(["订单号","服务","预约时间","订单状态","个人状态"], [
    ["YB26061318","园区航拍测绘",formatOrderAppointmentBrief(orderRecords.find(item => item.id === "YB26061318")),statusTag("待服务"),tag("服务中")],
    ["YB26060809","园区巡检","—",statusTag("已完成"),tag("已完成")]
  ]));
}

function tasksPage() {
  const rows = taskRecords.map(item => [
    item.id, item.title, item.serviceTime, item.address, tag(item.status), item.interest,
    taskListActions(item)
  ]);
  return panel("任务需求", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="需求标题 / 地址"><select><option>全部状态</option><option>征集中</option><option>已关闭</option></select>${button("查询","filter","primary")}
    <span class="spacer"></span>${button("发布任务需求","publish-task","primary")}
  </div>${paginatedTable("tasks", ["需求编号","标题","服务时间","地址","状态","意愿人数","操作"], rows)}
  <p class="muted" style="margin:14px 0 0">任务需求仅收集飞手参与意愿，不关联商品订单，也不改变商品订单状态。</p>`);
}

function taskListActions(task) {
  const detail = `<button class="button small" data-route="task-detail" data-task-id="${task.id}">查看详情</button>`;
  const interest = button("查看意愿", "task-interest", "small");
  return `<div class="row-actions">${detail}${interest}</div>`;
}

function taskDetailPage() {
  const task = activeTask();
  return panel("任务信息", detailGrid([
    ["需求编号", task.id], ["标题", task.title], ["服务时间", task.serviceTime],
    ["地址", task.address, true], ["备注", task.remark || "—", true], ["状态", tag(task.status)]
  ]), routeButton("返回列表", "tasks", ""))
  + panel("附文本说明", richEditorContainer({
    toolbarId: "task-description-toolbar",
    editorId: "task-description-editor",
    readOnly: true
  }));
}

function invoicesPage() {
  const rows = invoiceRecords.map(item => [
    item.id, item.user, item.title, item.orderCount, item.amount, item.appliedAt, tag(item.status),
    opRoute("查看详情", "invoice-detail", "", `data-invoice-id="${item.id}"`)
  ]);
  return panel("发票申请", `<div class="toolbar" style="margin-bottom:14px">
    <input placeholder="申请编号 / 用户 / 抬头"><select><option>全部状态</option><option>待处理</option><option>待上传</option><option>已开票</option><option>已驳回</option></select>${button("查询","filter","primary")}
  </div>${paginatedTable("invoices", ["申请编号","用户","发票抬头","订单数","金额","申请时间","状态","操作"], rows)}`);
}

function invoiceDetailPage() {
  const invoice = activeInvoice();
  const actions = invoice.status === "待处理"
    ? `${button("驳回","reject-invoice","danger")}${button("审核通过","approve-invoice","primary")}`
    : invoice.status === "待上传" ? button("上传发票文件","upload-invoice","primary") : "";
  return panel("申请信息", detailGrid([
    ["申请编号", invoice.id], ["申请用户", invoice.user], ["发票类型", invoice.type], ["发票抬头", invoice.title],
    ["税号", invoice.taxNo], ["申请金额", invoice.amount], ["接收邮箱", invoice.email], ["当前状态", tag(invoice.status)]
  ]), routeButton("返回发票列表","invoices",""))
  + panel("关联订单", table(["订单号","商品/服务","完成时间","可开票金额"], [
    ["YB26060811","园区航拍测绘","2026-06-09 18:20","¥8,600"],
    ["YB26060703","无人机巡检服务","2026-06-08 16:05","¥6,400"],
    ["YB26060518","空域代办服务","2026-06-06 11:30","¥3,600"]
  ]), actions);
}

function aboutLogoPreview(about) {
  return `<span class="about-logo-preview">${thumb(Boolean(about.logoName), { title: about.logoName || "企业 Logo" })}<span class="muted">${about.logoName || "—"}</span></span>`;
}

function aboutPage() {
  const about = state.aboutConfig;
  return panel("基础信息", detailGrid([
    ["企业名称", about.name],
    ["企业 Logo", aboutLogoPreview(about)]
  ]))
  + panel("企业介绍", richEditorContainer({
    toolbarId: "about-intro-toolbar",
    editorId: "about-intro-editor"
  }), `${button("预览", "preview-about")}${button("保存配置", "save-about", "primary")}`);
}

function pageContent() {
  const pages = {
    dashboard: dashboardPage, carousel: carouselPage, users: usersPage, "user-detail": userDetailPage,
    categories: categoriesPage, products: productsPage, "product-edit": productEditPage,
    orders: ordersPage, "order-detail": orderDetailPage, training: trainingPage, "training-detail": trainingDetailPage,
    "pilot-applications": pilotApplicationsPage, "pilot-review": pilotReviewPage,
    pilots: pilotsPage, "pilot-detail": pilotDetailPage,
    "flight-reports": flightReportsPage, "flight-report-detail": flightReportDetailPage,
    tasks: tasksPage, "task-detail": taskDetailPage,
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
  destroyRichEditor();
  app.innerHTML = `<div class="shell">${sidebar()}<main class="main">${topbar()}<div class="page-layout"><div class="page">${pageContent()}</div>${docPanel()}</div></main></div>`;
  if (state.page === "product-edit") requestAnimationFrame(() => initProductEditor());
  if (state.page === "task-detail") requestAnimationFrame(() => initTaskDescriptionViewer());
  if (state.page === "about") requestAnimationFrame(() => initAboutEditor());
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
  const url = URL.createObjectURL(file);
  state.categoryIconDraft = { url, name: file.name };
  const preview = document.querySelector(".category-icon-field .preview");
  const nameEl = document.getElementById("category-icon-name");
  if (preview) preview.innerHTML = `<img src="${url}" alt="分类图标">`;
  if (nameEl) nameEl.textContent = file.name;
  toast(`已选择：${file.name}`);
}

async function handleUploadInvoice() {
  const files = await pickLocalFile({ accept: ".pdf,.jpg,.jpeg,.png,image/*" });
  const file = files[0];
  if (!file) return;
  activeInvoice().status = "已开票";
  render();
  toast(`发票已上传：${file.name}`);
}

function readProductFormFromPage() {
  const product = activeProduct();
  const page = document.querySelector(".page");
  if (!page) return product;
  product.name = page.querySelector('[data-field="product-name"]')?.value.trim() || product.name;
  product.category = page.querySelector('[data-field="product-category"]')?.value || product.category;
  product.status = page.querySelector('[data-field="product-status"]')?.value || product.status;
  page.querySelectorAll('[data-field="spec-name"]').forEach(input => {
    const index = Number(input.dataset.index);
    if (product.specs[index]) product.specs[index].name = input.value.trim();
  });
  page.querySelectorAll('[data-field="spec-price"]').forEach(input => {
    const index = Number(input.dataset.index);
    if (product.specs[index]) product.specs[index].price = input.value.trim();
  });
  return product;
}

function saveCategoryFromModal() {
  const overlay = document.getElementById("overlay");
  const name = overlay.querySelector("#category-name")?.value.trim();
  if (!name) {
    toast("请填写分类名称");
    return false;
  }
  const description = overlay.querySelector("#category-description")?.value.trim() || "";
  const enabled = overlay.querySelector("#category-enabled")?.value === "启用";
  const icon = state.categoryIconDraft?.url
    || (state.editingCategoryId && state.categories.find(item => item.id === state.editingCategoryId)?.icon)
    || "./assets/icons/category-onsite.png";

  if (state.editingCategoryId) {
    const item = state.categories.find(entry => entry.id === state.editingCategoryId);
    if (item) {
      item.name = name;
      item.description = description;
      item.enabled = enabled;
      item.icon = icon;
    }
  } else {
    const maxSort = Math.max(0, ...state.categories.map(item => item.sort));
    state.categories.push({
      id: `c${Date.now()}`,
      name,
      description,
      icon,
      productCount: 0,
      sort: maxSort + 1,
      enabled
    });
  }
  state.editingCategoryId = null;
  state.categoryIconDraft = null;
  return true;
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
  destroyRichEditor();
  document.getElementById("overlay").innerHTML = "";
}

document.addEventListener("click", event => {
  const route = event.target.closest("[data-route]");
  if (route) {
    if (route.dataset.userId) state.viewingUserId = route.dataset.userId;
    if (route.dataset.route === "product-edit") {
      if (route.dataset.productId) {
        state.editingProductId = route.dataset.productId;
        state.newProductDraft = null;
      } else {
        state.editingProductId = null;
        state.newProductDraft = null;
        state.reviewDraftProductId = null;
      }
    }
    if (route.dataset.orderId) state.viewingOrderId = route.dataset.orderId;
    if (route.dataset.invoiceId) state.viewingInvoiceId = route.dataset.invoiceId;
    if (route.dataset.pilotAppId) state.viewingPilotAppId = route.dataset.pilotAppId;
    if (route.dataset.pilotId) state.viewingPilotId = route.dataset.pilotId;
    if (route.dataset.trainingId) state.viewingTrainingId = route.dataset.trainingId;
    if (route.dataset.flightReportId) state.viewingFlightReportId = route.dataset.flightReportId;
    if (route.dataset.taskId) state.viewingTaskId = route.dataset.taskId;
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
    state.editingCategoryId = null;
    state.categoryIconDraft = null;
    closeModal();
  } else if (action === "create-product") {
    state.editingProductId = null;
    state.newProductDraft = null;
    state.reviewDraftProductId = null;
    navigate("product-edit");
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
    const item = state.categories.find(x => x.id === target.dataset.id);
    state.editingCategoryId = item?.id || null;
    state.categoryIconDraft = null;
    const draft = item || { name: "", description: "", icon: "./assets/icons/category-onsite.png", sort: state.categories.length + 1, enabled: true };
    const iconPreview = isCategoryImage(draft.icon)
      ? `<img src="${draft.icon}" alt="${draft.name || "分类图标"}">`
      : `<span class="category-icon-text">${draft.icon || "分类"}</span>`;
    modal("商品分类", formGrid([
      { label: "分类名称", html: `<input id="category-name" value="${draft.name}" placeholder="请输入分类名称">` },
      { label: "分类状态", html: `<select id="category-enabled"><option${draft.enabled ? " selected" : ""}>启用</option><option${draft.enabled ? "" : " selected"}>停用</option></select>` },
      { label: "分类说明", wide: true, html: `<textarea id="category-description" placeholder="请输入分类说明，用于小程序分类页展示">${draft.description || ""}</textarea>` },
      { label: "分类图标", wide: true, html: `<div class="category-icon-field"><span class="category-icon preview">${iconPreview}</span>${button("选择图片", "pick-category-icon")}<span class="muted category-icon-name" id="category-icon-name">${item ? "保留当前图标或重新选择" : "未选择"}</span><span class="muted">建议 128×128 或更大，用于小程序分类入口展示</span></div>` }
    ]), `${button("取消","close-modal")}${button("保存分类","save-category","primary")}`, true);
  } else if (action === "save-category") {
    if (saveCategoryFromModal()) {
      closeModal();
      render();
      toast("分类已保存");
    }
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
    activeProduct().specs.push({ name: "新规格", price: "0" });
    render();
  } else if (action === "remove-spec") {
    activeProduct().specs.splice(Number(target.dataset.index), 1);
    render();
  } else if (action === "save-product") {
    const product = readProductFormFromPage();
    if (state.richEditor) product.intro = state.richEditor.getHtml();
    if (!product.name.trim()) {
      toast("请填写商品名称");
      return;
    }
    product.displayedReviewIds = [...ensureReviewDraft(product)];
    if (isCreatingProduct()) {
      const id = `p${Date.now()}`;
      product.id = id;
      product.code = `SP${String(state.products.length + 1).padStart(5, "0")}`;
      state.products.push(product);
      state.editingProductId = id;
      state.newProductDraft = null;
      toast("商品已创建并保存");
    } else {
      toast("商品已保存");
    }
    render();
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
    const { items: pageReviews } = paginateItems(reviews, reviewListKey(product));
    const draft = new Set(ensureReviewDraft(product));
    const allPageSelected = pageReviews.length > 0 && pageReviews.every(item => draft.has(item.id));
    pageReviews.forEach(item => {
      if (allPageSelected) draft.delete(item.id);
      else draft.add(item.id);
    });
    state.reviewDraft = [...draft];
    render();
  } else if (action === "list-page-prev") {
    const pg = getListPage(target.dataset.listKey);
    if (pg.page > 1) {
      pg.page--;
      render();
    }
  } else if (action === "list-page-next") {
    const pg = getListPage(target.dataset.listKey);
    pg.page++;
    render();
  } else if (action === "assign-pilots") {
    if (target.dataset.orderId) state.viewingOrderId = target.dataset.orderId;
    const order = activeOrder();
    const modalTitle = order.status === "待服务" ? "调整飞手" : "分配飞手";
    const pilots = [
      ["李明","成都高新 · Mavic 3E","空闲",true],["王伟","成都双流 · M350 RTK","空闲",true],
      ["周航","成都双流 · M350 RTK","服务中",false],["赵宇","成都武侯 · Mavic 3E","空闲",false]
    ];
    modal(modalTitle, `<p class="muted">可选择一个或多个审核通过的飞手。确认后立即生效，无需飞手再次确认。</p>
      ${pilots.map(p => `<label class="pilot-option"><input type="checkbox" name="pilot" value="${p[0]}" ${p[3] ? "checked" : ""}>
        <span><strong>${p[0]}</strong><br><span class="muted">${p[1]}</span></span>${tag(p[2])}</label>`).join("")}`,
      `${button("取消","close-modal")}${button("确认分配","confirm-assignment","primary")}`, true);
  } else if (action === "confirm-assignment") {
    const order = activeOrder();
    if (!order.needPilot) return;
    const selected = [...document.querySelectorAll("input[name='pilot']:checked")].map(x => x.value);
    if (!selected.length) {
      toast("请至少选择一名飞手");
      return;
    }
    const wasPending = order.status === "待派单";
    order.assignedPilots = selected.map((name, index) => ({
      name, area: index ? "成都双流" : "成都高新", device: index ? "M350 RTK" : "Mavic 3E", status: "待服务"
    }));
    if (wasPending) order.status = "待服务";
    closeModal();
    render();
    toast(wasPending ? `已分配 ${selected.length} 名飞手，订单进入待服务` : `已更新飞手名单（${selected.length} 名）`);
  } else if (action === "confirm-flight-report") {
    const report = activeFlightReport();
    if (report.status === "已确认") {
      toast("该报备已确认");
      return;
    }
    report.status = "已确认";
    render();
    toast("飞行报备已确认");
  } else if (action === "push-flight-report-third-party") {
    toast("第三方推送能力待确认，当前为占位按钮");
  } else if (action === "approve-pilot") {
    modal("确认审核通过", `<p>确认该申请资料完整并通过飞手入驻审核？</p>`,
      `${button("取消","close-modal")}${button("确认通过","confirm-pilot","primary")}`);
  } else if (action === "reject-pilot") {
    modal("驳回申请", `<div class="form-field"><label>驳回原因</label><textarea id="pilot-reject-reason" placeholder="请填写驳回原因"></textarea></div>`,
      `${button("取消","close-modal")}${button("确认驳回","confirm-reject-pilot","danger")}`);
  } else if (action === "confirm-reject-pilot") {
    activePilotApplication().status = "已驳回";
    closeModal();
    render();
    toast("飞手申请已驳回");
  } else if (action === "confirm-pilot") {
    activePilotApplication().status = "已通过";
    closeModal();
    render();
    toast("飞手申请已审核通过");
  } else if (action === "publish-task") {
    modal("发布独立任务需求", `${formGrid([
      { label: "标题", wide: true, html: `<input value="成都园区航拍需求">` },
      { label: "服务时间", html: `<input value="2026-06-18 09:00-12:00" placeholder="如 2026-06-18 09:00-12:00">` },
      { label: "地址", wide: true, html: `<input value="成都市高新区天府软件园 B 区">` },
      { label: "备注", wide: true, html: `<textarea placeholder="补充说明，如设备或现场要求">需携带 RTK 设备，现场有门禁</textarea>` }
    ])}<div class="form-field span-2"><label>附文本说明</label>${richEditorContainer({
      toolbarId: "task-publish-toolbar",
      editorId: "task-publish-editor"
    })}</div>`, `${button("取消","close-modal")}${button("发布需求","save-modal","primary")}`, true);
    requestAnimationFrame(() => initRichEditor({
      toolbarId: "task-publish-toolbar",
      editorId: "task-publish-editor",
      html: "<p>独立发布需求并收集飞手参与意愿，不关联商品订单。</p>",
      placeholder: "请输入附文本说明..."
    }));
  } else if (action === "task-interest") {
    modal("飞手参与意愿名单", table(["飞手","主体","区域","设备","提交时间"], [
      ["李明","公司","成都高新","Mavic 3E","2026-06-13 16:20"],
      ["王伟","个人","成都双流","M350 RTK","2026-06-13 15:48"],
      ["赵宇","个人","成都武侯","Mavic 3E","2026-06-13 13:06"]
    ]), button("关闭","close-modal"));
  } else if (action === "approve-invoice") {
    activeInvoice().status = "待上传";
    render();
    toast("审核通过，请上传发票文件");
  } else if (action === "reject-invoice") {
    modal("驳回发票申请", `<div class="form-field"><label>驳回原因</label><textarea id="invoice-reject-reason" placeholder="请填写驳回原因"></textarea></div>`,
      `${button("取消","close-modal")}${button("确认驳回","confirm-invoice-reject","danger")}`);
  } else if (action === "confirm-invoice-reject") {
    activeInvoice().status = "已驳回";
    closeModal();
    render();
    toast("发票申请已驳回");
  } else if (action === "pick-category-icon") {
    handlePickCategoryIcon();
  } else if (action === "upload-invoice") {
    handleUploadInvoice();
  } else if (action === "preview-order-remark-photo") {
    const order = orderRecords.find(item => item.id === target.dataset.orderId) || activeOrder();
    const photo = order.appointment?.remarkPhoto;
    if (!photo) return;
    modal("备注照片", `<div class="order-remark-preview">
      <span class="thumb order-remark-preview-img"><span class="thumb-img">备注图</span></span>
      <p class="muted">${photo.name}</p>
    </div>`, button("关闭", "close-modal"));
  } else if (action === "preview-about") {
    const about = state.aboutConfig;
    if (state.richEditor) about.intro = state.richEditor.getHtml();
    modal("小程序展示预览", `<div class="preview-card">${aboutLogoPreview(about)}<h2>${about.name}</h2>
      <div class="preview-rich">${about.intro || "<p>—</p>"}</div></div>`, button("关闭", "close-modal"));
  } else if (action === "save-about") {
    if (state.richEditor) state.aboutConfig.intro = state.richEditor.getHtml();
    toast("企业介绍配置已保存（模拟）");
  } else if (action === "save-modal") {
    closeModal();
    toast("操作已保存（模拟）");
  }
});

document.addEventListener("change", event => {
  const action = event.target.dataset.action;

  if (action === "toggle-media") {
    const item = state.media.find(entry => entry.id === event.target.dataset.id);
    if (item) {
      item.enabled = event.target.checked;
      render();
      toast(item.enabled ? "已启用该轮播内容" : "已停用该轮播内容");
    }
    return;
  }

  if (action === "toggle-product-property") {
    const product = activeProduct();
    product.properties[event.target.dataset.key] = event.target.checked;
    render();
    return;
  }

  if (action === "toggle-product-review") {
    const draft = new Set(ensureReviewDraft(activeProduct()));
    if (event.target.checked) draft.add(event.target.dataset.id);
    else draft.delete(event.target.dataset.id);
    state.reviewDraft = [...draft];
    render();
    return;
  }

  if (action === "list-page-size") {
    const pg = getListPage(event.target.dataset.listKey);
    pg.pageSize = Number(event.target.value);
    pg.page = 1;
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
