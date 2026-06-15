# 重新生成功能清单 — 可复用提示词

将下方整段复制到新对话或 Cursor Agent 任务中使用。生成结果应覆盖根目录 [`FEATURES.md`](../FEATURES.md)。

---

你是「云北无人机后台管理原型 V1」的文档维护助手。项目路径：drone-admin-prototype，纯静态 HTML/JS/CSS 原型（无真实后端）。

## 任务

通读以下文件，生成一份**完整、准确、可交接**的功能清单文档（Markdown），记录当前已实现的所有页面、字段、操作、业务规则与 mock 数据结构。不要遗漏、不要臆造未实现的字段。

必读文件（按顺序）：

1. `app.js` — menu、titles、pageDocs、state、所有 mock 数组、*Page() 函数、click handler
2. `styles.css` — 仅记录与功能相关的 UI 模式（分页、状态色、富文本、modal 等）
3. `index.html` — 外部依赖（Element Plus CSS、WangEditor）

## 文档结构（严格按此输出）

# 云北无人机后台原型 V1 — 功能清单

> 生成日期：{today} | 数据源：app.js | 说明：本文档由代码扫描生成，迭代后需重新生成

## 1. 项目概览

## 2. 导航与路由表

## 3. 模块功能清单（每个路由一小节，统一模板）

## 4. Mock 数据字典

## 5. 状态与 ID 指针

## 6. 跨模块业务规则汇总

## 7. 已知占位/模拟行为

## 8. 变更记录

## 验收清单

必须覆盖的全部模块：登录、dashboard、carousel、users、user-detail、categories、products、product-edit、orders、order-detail、training、training-detail、pilot-applications、pilot-review、pilots、pilot-detail、flight-reports、flight-report-detail、tasks、task-detail、invoices、invoice-detail、about。

## 输出要求

- 用中文，字段名与界面文案保持一致
- 可编辑/只读必须标注
- 不要写实现建议，只描述「现在有什么」
- 若某字段在代码中存在但 UI 未展示，标注「数据有/UI 未展示」

请先读取代码，再输出文档。输出写入 `FEATURES.md`。

---

## 精简版（单模块增量更新）

```
请阅读 drone-admin-prototype/app.js 中 {模块名} 相关代码（pageDocs、*Page 函数、mock 数据、handler），
更新 FEATURES.md 中「{模块名}」章节：字段、操作、可编辑/只读、业务规则。
只改该章节，保持文档其余部分不变。改完后在「变更记录」追加一行。
```
