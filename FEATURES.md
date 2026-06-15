# 云北无人机后台原型 V1 — 功能清单

> 生成日期：2026-06-14 | 数据源：`app.js` | 说明：本文档由代码扫描生成，迭代后请用 [`docs/regenerate-features-prompt.md`](docs/regenerate-features-prompt.md) 重新生成

---

## 1. 项目概览

| 项 | 说明 |
|----|------|
| 技术栈 | 纯静态 HTML + `app.js` + `styles.css`，无真实后端 API |
| 路由 | Hash 路由 `#/{routeId}`，如 `#/orders` |
| 登录 | `sessionStorage.droneAdminLogin`；任意非空账号密码可登录 |
| 右侧说明 | `pageDocs` 驱动可折叠 panel，状态存 `localStorage.droneAdminDocPanel` |
| 外部依赖 | Element Plus CSS（样式）、WangEditor 5.1.23（富文本） |

**全局 UI 模式**

- **分页**：`paginatedTable`，每页 5/10/20，key 存 `state.listPages`
- **状态 Tag**：订单专用 `statusTag()`；通用 `tag()` 用于其他业务
- **富文本**：`element-rich-editor` + WangEditor；商品/任务/关于我们/任务详情只读
- **Modal**：`#overlay` 弹窗；`closeModal` 时销毁富文本实例
- **Toast**：操作反馈（多数为「模拟」提示）

---

## 2. 导航与路由表

| 菜单分组 | 路由 ID | 页面标题 | 类型 | 侧栏可见 |
|---------|---------|---------|------|---------|
| 工作台 | `dashboard` | 工作台 | 仪表盘 | 是 |
| 轮播图管理 | `carousel` | 轮播图管理 | 配置 | 是 |
| 用户管理 | `users` | 用户列表 | 列表 | 是 |
| | `user-detail` | 用户详情 | 详情 | 否 |
| 商品管理 | `categories` | 商品分类管理 | 列表 | 是 |
| | `products` | 商品列表 | 列表 | 是 |
| | `product-edit` | 创建 / 编辑商品 | 表单 | 是 |
| 订单管理 | `orders` | 订单列表 | 列表 | 是 |
| | `order-detail` | 订单详情与派单 | 详情 | 是 |
| 培训管理 | `training` | 培训报名线索 | 列表 | 是 |
| | `training-detail` | 培训报名详情 | 详情 | 否 |
| 飞手管理 | `pilot-applications` | 飞手入驻申请 | 列表 | 是 |
| | `pilot-review` | 飞手审核详情 | 详情 | 否 |
| | `pilots` | 已认证飞手 | 列表 | 是 |
| | `pilot-detail` | 飞手详情 | 详情 | 否 |
| | `flight-reports` | 飞行报备管理 | 列表 | 是 |
| | `flight-report-detail` | 飞行报备详情 | 详情 | 否 |
| | `tasks` | 任务需求与意愿 | 列表 | 是 |
| | `task-detail` | 任务详情 | 详情 | 是 |
| 发票中心 | `invoices` | 发票中心 | 列表 | 是 |
| | `invoice-detail` | 发票申请详情 | 详情 | 否 |
| 关于我们 | `about` | 关于我们 | 配置 | 是 |

**详情页 ID 绑定**：路由点击时设置 `data-*-id` → `state.viewing*Id`

---

## 3. 模块功能清单

### 登录页（无路由）

**用途：** 管理员登录入口（原型模拟）

**字段：** 账号、密码、记住账号（checkbox 无逻辑） | **可编辑：** 账号/密码 | **只读：** —

**操作：** 提交 → 写入 sessionStorage，进入工作台

---

### dashboard — 工作台

**用途：** 运营待办汇总，指标卡切换明细表

**数据来源：** `orderRecords`、`pilotApplications`、`invoiceRecords`（过滤）

**指标卡：** 今日新增订单(26)、待派单(9)、待审核飞手(12)、待处理发票(7)

| 指标 key | 列表列 | 操作 |
|----------|--------|------|
| today-orders | 订单号、用户、商品/服务、金额、需要飞手、状态 | 去派单、查看详情 |
| pending-orders | 订单号、用户、商品/服务、预约时间、等待时长 | 去派单、查看详情 |
| pilot-applications | 申请编号、申请人、主体、公司、申请时间 | 去审核 |
| invoices | 申请编号、用户、发票抬头、关联订单、金额 | 去处理 |

**可编辑：** 指标卡切换 | **只读：** 数字与明细数据

**pageDocs 摘要：** 点击指标切换明细；明细可跳转业务页；支持复制页面链接

---

### carousel — 轮播图管理

**用途：** 小程序首页轮播，1 视频 + 最多 5 图片

**数据来源：** `state.media[]`

**列表：** 拖拽柄、预览类型、素材名称、启用开关、操作（上移/下移/删除）

**规则：** 视频固定首位且最多 1 条；图片最多 5 张；视频不可移动

**可编辑：** 启停、图片排序、增删 | **只读：** 视频位置

---

### users — 用户列表

**用途：** 查看注册用户（后台不可新建/编辑）

**数据来源：** `users[]`

**列表列：** 头像、昵称、手机号、性别、生日、地区、注册时间、个人信息

**筛选：** 昵称 / 手机号（UI 占位）

**操作：** 个人信息 → `user-detail`

**可编辑：** 无 | **只读：** 全部

---

### user-detail — 用户详情

**用途：** 单用户资料 + 业务记录

**详情字段（只读）：** 头像、昵称、手机号、性别、生日、地区、注册时间

**Tab 订单记录：** 订单号、商品/服务、金额、状态

**Tab 发票记录：** 申请编号、抬头、金额、状态

**操作：** 返回列表；Tab 切换

---

### categories — 商品分类管理

**用途：** 分类名称、图标、说明、排序、启用

**数据来源：** `state.categories[]`

**列表列：** 排序、图标、分类名称、分类说明、商品数、状态、操作

**弹窗 新增/编辑：** 分类名称、状态、说明、图标（选图）

**规则：** `productCount === 0` 才可删除

**可编辑：** 分类全字段、排序 | **只读：** 商品数（mock）

---

### products — 商品列表

**用途：** 商品/服务管理概览

**数据来源：** `state.products[]`

**列表列：** 商品图、商品编号、商品名称、分类、规格数、业务属性、状态、操作

**操作：** 创建商品、编辑、删除（`orderCount === 0`）

**可编辑：** 删除（无订单时）| **只读：** 列表展示

---

### product-edit — 创建/编辑商品

**用途：** 商品完整配置

**表单（可编辑）：** 商品名称、商品分类、上架状态

**轮播图面板：** 最多 9 张；上传、排序、删除

**商品介绍：** WangEditor 富文本（可编辑）

**评价管理：** 分页多选已完成订单评价；随「保存商品」生效

**多规格：** 规格名称、价格；添加/删除

**业务属性 checkbox：** 是否需要预约、是否在线支付、是否需要飞手服务

**操作：** 返回列表、保存商品

---

### orders — 订单列表

**用途：** 全部商品订单管理

**数据来源：** `orderRecords[]`

**列表列：** 订单号、用户、商品/服务、金额、需要飞手、状态、操作

**筛选：** 订单号/用户/商品、状态、是否需要飞手

**操作：** 去派单（需飞手且待派单）、查看详情

**状态颜色：** 待付款/待评价=橙；待派单=红；待服务/待交付=蓝；已完成=绿

**状态列 hover：** 显示完整流转路径摘要

---

### order-detail — 订单详情与派单

**用途：** 单笔订单流转、快照、预约、飞手分配

**步骤条（只读）：** 按 `onlinePay` + `needPilot` 动态 4～6 步

**订单信息快照（只读）：** 订单号、用户、商品/服务、金额、在线支付、需要飞手、需要预约

**预约信息（只读，条件显示）：** 仅 `needAppointment`：日期、时段、手机号、地址、备注、备注照片（1 张，可点击预览）

**飞手分配（条件显示）：** 仅 `needPilot`；表格：飞手、区域、设备、个人状态

**可编辑操作：**
- 待派单 → **分配飞手**（primary）
- 待服务 → **调整飞手**（small，状态不变）

**弹窗 分配/调整飞手：** 多选飞手；待派单确认后 → 待服务

**规则：** 列表「去派单」与详情「分配飞手」同一弹窗逻辑

---

### training — 培训报名线索

**用途：** 小程序培训报名表单，**只读**，无跟进

**数据来源：** `trainingRecords[]`（小程序）

**列表列：** 线索编号、联系人、课程意向、手机号、报名时间、操作

**筛选：** 联系人 / 手机号 / 课程

**操作：** 查看详情

**可编辑：** 无

---

### training-detail — 培训报名详情

**详情（只读）：** 线索编号、联系人、课程意向、手机号、报名时间、备注、来源

**操作：** 返回列表

---

### pilot-applications — 飞手入驻申请

**用途：** 审核飞手入驻

**数据来源：** `pilotApplications[]`

**列表列：** 申请编号、申请人、主体、所属公司、申请时间、状态、操作

**筛选：** 申请人/手机/公司、主体、状态

**操作：** 待审核→「审核」；其他→「查看」→ `pilot-review`

---

### pilot-review — 飞手审核详情

**申请信息（只读）：** 申请编号、申请人、所属主体、联系电话、出生年月、所在区域、申请时间、当前状态

**公司信息（只读，主体=公司）：** 公司名称、联系电话、所在区域、地址、水印执照

**资质与设备（只读）：** 身份证正反面、操作执照、无人机照片（上传状态）；机型、序列号、唯一识别码

**可编辑（待审核）：** 驳回申请、审核通过

**弹窗：** 确认通过；驳回（填原因）

---

### pilots — 已认证飞手

**用途：** 已通过审核的飞手列表

**数据来源：** `pilotRecords[]`

**列表列：** 飞手、主体、所属公司、服务区域、设备、操作

**说明：** **无全局「空闲/服务中」状态列**（已移除）

**操作：** 查看详情

---

### pilot-detail — 飞手详情

**飞手资料（只读）：** 姓名、主体、联系电话、出生年月、所在区域、认证时间

**公司/资质/设备（只读）：** 同审核页结构

**分配订单表（只读）：** 订单号、服务、预约时间、订单状态、**个人状态**（订单维度）

---

### flight-reports — 飞行报备管理

**用途：** 飞手小程序飞行报备，查看与确认

**数据来源：** `flightReportRecords[]`

**列表列：** 报备编号、起飞飞手、机型、飞行架次、飞行时长、报备时间、状态、操作

**筛选：** 报备编号/飞手/机型、状态（待确认/已确认）

**操作：** 查看详情

---

### flight-report-detail — 飞行报备详情

**报备信息（只读）：** 编号、飞手、电话、飞行区域、日期、时段、架次、时长、备注、报备时间、来源、状态

**飞行器信息（只读）：** 机型、序列号、唯一识别码

**可编辑：** 待确认时「确认报备」→ 已确认

**占位：** 「推送第三方」→ toast 待对接

---

### tasks — 任务需求与意愿

**用途：** 独立任务发布，收集飞手意愿（不关联商品订单）

**数据来源：** `taskRecords[]`

**列表列：** 需求编号、标题、服务时间、地址、状态、意愿人数、操作

**筛选：** 标题/地址、状态

**操作：** 查看详情、查看意愿；发布任务需求

**弹窗 发布任务（可编辑）：** 标题、服务时间、地址、备注、附文本说明（WangEditor）

**弹窗 查看意愿（只读）：** 飞手、主体、区域、设备、提交时间

---

### task-detail — 任务详情

**任务信息（只读）：** 需求编号、标题、服务时间、地址、备注、状态

**附文本说明（只读）：** `element-rich-editor` + WangEditor 只读展示

**操作：** 返回列表

---

### invoices — 发票中心

**数据来源：** `invoiceRecords[]`

**列表列：** 申请编号、用户、发票抬头、订单数、金额、申请时间、状态、操作

**操作：** 查看详情

**状态：** 待处理 → 待上传 → 已开票 / 已驳回

---

### invoice-detail — 发票申请详情

**申请信息（只读）：** 申请编号、用户、发票类型、抬头、税号、金额、邮箱、状态

**关联订单（只读）：** 订单号、商品/服务、完成时间、可开票金额

**可编辑：**
- 待处理：审核通过、驳回
- 待上传：上传发票文件（PDF/图片）

---

### about — 关于我们

**基础信息（只读）：** 企业名称、企业 Logo（缩略图 + 文件名）

**企业介绍（可编辑）：** WangEditor 扩展工具栏（标题、字号、字体、颜色、对齐、图片等）

**操作：** 预览（小程序展示预览弹窗）、保存配置（模拟）

**说明：** 电话、地址等信息编排进富文本正文，不在基础信息区单独维护

---

## 4. Mock 数据字典

### orderRecords[]

```javascript
{
  id, user, service, amount,
  needPilot: boolean,
  needAppointment: boolean,
  status: "待付款"|"待派单"|"待服务"|"待交付"|"待评价"|"已完成",
  onlinePay: boolean,
  assignedPilots: [{ name, area, device, status }],
  appointment?: {
    date, slot, phone, address, remark,
    remarkPhoto: { name } | null
  }
}
```

### pilotApplications[] / pilotRecords[]

```javascript
{
  id, applicant/name, subject: "个人"|"公司",
  phone, birthday, area,
  idCard: { uploaded, preview },
  license: { uploaded, preview },
  dronePhoto: { uploaded, preview },
  droneModel, serialNo, uniqueId,
  company: {
    name, phone, area, address,
    watermarkedLicense: { uploaded, preview }
  } | null,
  appliedAt, status  // 申请：待审核|已通过|已驳回
  certifiedAt        // 仅 pilotRecords
}
```

### trainingRecords[]

```javascript
{ id, contact, course, phone, appliedAt, remark, source }
```

### flightReportRecords[]

```javascript
{
  id, pilotName, pilotPhone, droneModel, serialNo, uniqueId,
  flightArea, flightDate, flightTime, sorties, duration,
  remark, submittedAt, source, status: "待确认"|"已确认"
}
```

### taskRecords[]

```javascript
{
  id, title, serviceTime, address, remark,
  description: string (HTML),
  status: "征集中"|"已关闭", interest: number
}
```

### state.products[]

```javascript
{
  id, code, name, category, status, orderCount,
  properties: { needAppointment, onlinePay, needPilot },
  specs: [{ name, price }],
  images: [{ id, name }],
  intro: string (HTML),
  displayedReviewIds: string[]
}
```

### state.categories[]

```javascript
{ id, name, description, icon, productCount, sort, enabled }
```

### state.media[]

```javascript
{ id, type: "视频"|"图片", name, enabled }
```

### state.aboutConfig

```javascript
{ name, logoName, intro: string (HTML) }
```

### invoiceRecords[]

```javascript
{
  id, user, title, orderCount, amount, appliedAt,
  status: "待处理"|"待上传"|"已开票"|"已驳回",
  taxNo, email, type
}
```

### users[]

```javascript
{ id, avatar, nickname, phone, gender, birthday, region, registeredAt }
```

---

## 5. 状态与 ID 指针

| 字段 | 用途 | 默认值示例 |
|------|------|-----------|
| `viewingUserId` | 用户详情 | U20260612001 |
| `viewingOrderId` | 订单详情 | YB26061318 |
| `viewingInvoiceId` | 发票详情 | FP26061307 |
| `viewingPilotAppId` | 飞手审核 | FS26061305 |
| `viewingPilotId` | 飞手详情 | P001 |
| `viewingTrainingId` | 培训详情 | PX26061301 |
| `viewingFlightReportId` | 飞行报备详情 | FB26061401 |
| `viewingTaskId` | 任务详情 | RW26061301 |
| `editingProductId` | 商品编辑 | null=新建 |
| `dashboardMetric` | 工作台指标 | today-orders |
| `listPages[key]` | 分页 | { page:1, pageSize:5 } |

---

## 6. 跨模块业务规则汇总

### 订单状态颜色

| 状态 | 颜色 |
|------|------|
| 待付款、待评价 | amber（橙） |
| 待派单 | red（红，待办） |
| 待服务、待交付 | blue（蓝） |
| 已完成 | green（绿） |

### 订单流转四种路径

1. 在线支付 + 飞手：生成 → 待付款 → 待派单 → 待服务 → 待评价 → 已完成
2. 在线支付 + 无飞手：生成 → 待付款 → 待交付 → 待评价 → 已完成
3. 非在线支付 + 飞手：生成 → 待派单 → 待服务 → 待评价 → 已完成
4. 非在线支付 + 无飞手：生成 → 待交付 → 待评价 → 已完成

### 派单规则

- 列表「去派单」= 详情「分配飞手」= 同一弹窗
- 待派单确认分配 → 状态变待服务
- 待服务「调整飞手」仅改 `assignedPilots`，状态不变

### 数据来源

| 模块 | 来源 |
|------|------|
| 培训报名 | 小程序表单，后台只读 |
| 飞行报备 | 小程序飞手填写 |
| 任务意愿 | 飞手小程序提交（原型 mock） |

### 飞手状态

- 已认证飞手列表**无**全局空闲/服务中
- 「个人状态」仅在订单/飞手详情订单表中，表示该飞手在该单下的履约进度

### 关于我们

- 企业名称、Logo **只读**
- 企业介绍富文本 **可编辑**；其他信息（电话、地址等）写入富文本

---

## 7. 已知占位/模拟行为

- 登录、筛选、保存多数为 toast「模拟」
- `save-modal` 关闭弹窗不落库（含发布任务）
- 飞行报备「推送第三方」仅占位按钮
- 商品/分类/订单/发票等删除与审核会改 mock 内存数据，刷新页面重置

---

## 8. 变更记录

| 日期 | 变更摘要 | 影响模块 |
|------|---------|---------|
| 2026-06-14 | 初版功能清单文档建立 | 全模块 |

---

## 验收清单

- [x] 登录
- [x] dashboard
- [x] carousel
- [x] users / user-detail
- [x] categories / products / product-edit
- [x] orders / order-detail
- [x] training / training-detail
- [x] pilot-applications / pilot-review / pilots / pilot-detail
- [x] flight-reports / flight-report-detail
- [x] tasks / task-detail
- [x] invoices / invoice-detail
- [x] about
- [x] Mock 数据字典
- [x] 跨模块业务规则

---

## 附录：如何更新本文档

1. 打开 [`docs/regenerate-features-prompt.md`](docs/regenerate-features-prompt.md)
2. 复制完整提示词到新 Agent 对话
3. 让 AI 读取 `app.js` 后覆盖更新本文件
4. 在「变更记录」追加一行

后续改需求时可在对话开头使用：

```
请先阅读 FEATURES.md 和 app.js，基于 V1 功能清单继续…
```
