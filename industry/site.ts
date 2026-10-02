// 站点身份和读者看得到的文案。换成你的行业时，先改这个文件。
// 网页和后端都读它；改完重新构建（docker compose up --build）即可生效。
// 域名不在这里：部署时用环境变量 SITE_URL 设置。

export const SITE = {
  /** 站名：导航、页面标题、分享图、RSS、MCP、后台都用它。 */
  name: "天阁",
  /**
   * 行业词：拼进默认说法里，比如“AI 日报”“AI 动态”。
   * 改成“法律”“HR”“黄金”之类，页面上就会变成“法律日报”“法律动态”。
   */
  subject: "电子信息与 AI",
  /** 首页的完整标题（浏览器标签、搜索结果）。 */
  homeTitle: "天阁 — 电子信息与 AI 行业动态",
  /** 一句话介绍：搜索引擎、分享卡片、RSS、llms.txt 会用。 */
  description: "面向电子信息学习者，追踪硬件、嵌入式软件、AI 模型与 Agent、AI 一人公司、企业 AI 整合和全栈工程，把行业变化整理成可学习、可实践的内容。",
  /** 首页左上角和侧边栏下面的一行小字。 */
  tagline: "从芯片到 Agent，把值得学习的变化筛出来",
  /** 界面语言（HTML lang、og:locale）。 */
  locale: "zh-CN",
  /** 默认域名，只在没设置 SITE_URL 时使用。 */
  defaultUrl: "http://localhost:3000",
  /**
   * MCP 工具名的前缀（小写字母、数字、下划线），工具会叫 tiange_get_latest、tiange_search……
   * 已经有人接入后就不要再改。
   */
  mcpPrefix: "tiange",
  /** 对外联系邮箱（选填）：使用规则、llms.txt、响应头里会写。 */
  contactEmail: null as string | null,
  /** 页脚的一行小字（选填）。 */
  footerNote: "面向电子信息学习与实践的独立资讯站",
  /** 中国大陆网站的 ICP 备案号（选填），填了就显示在页脚并链接到工信部备案系统。 */
  icp: null as string | null,
  /** 结构化数据里的网站运营者（搜索引擎用）。 */
  organization: {
    name: "天阁",
    /** 创始人（选填）：{ name, url, description }。 */
    founder: null as null | { name: string; url?: string; description?: string },
  },
  /** 抓取信源时报上的名字（User-Agent 里用），不要冒用别的站。 */
  crawlerName: "TiangeBot",
} as const;

/** 关于页的文案。数字（信源数、收录数、精选数、日报期数）来自站内实时统计，不用写在这里。 */
export const ABOUT = {
  kicker: `关于 ${SITE.name}`,
  /** 大标题：第一行正常颜色，第二行强调色。 */
  headline: ["电子信息每天都在变化，", "值得学习的，先替你筛出来。"] as [string, string],
  /** 标题下面的一段话。{sources} 会换成实时的信源数。 */
  lead: `${SITE.name} 替你盯着 {sources} 个信源：从芯片、硬件和嵌入式软件，到 AI 模型、Agent、企业 AI 与全栈工程，抓取、归并、筛选，每天早上 8 点整理一份日报。免费，不用注册。`,
  /** 信源河动画下面的四个环节。 */
  steps: {
    collect: "持续关注芯片、硬件、嵌入式软件、AI 模型与 Agent、企业 AI 和全栈工程的官方博客、技术媒体、研究机构与开发者社区。",
    store: "抓到的内容都会保存并去重，同一件事的多篇报道归到一起，方便从原始消息回看完整的技术和行业脉络。",
    select: "模型先判断内容是否与电子信息和 AI 实践相关、有没有具体信息和学习价值，再生成中文标题、摘要与推荐理由；营销稿和重复转发会被压低。",
    publish: "每天 08:00 发布日报，按主题整理值得学习的变化；重要的产品、技术和企业实践会保留原文入口，方便继续深入。",
  },
  /**
   * 作者块（选填），null 就不显示。
   * avatarSourceId：一个 X 账号信源的 id，头像取它的（选填）。
   * 二维码在后台“设置”里上传，或者放进 industry/brand/contact/；没有二维码就不显示那张卡片。
   */
  maker: null as null | {
    name: string;
    greeting: string[];
    avatarSourceId?: string | null;
    wechat?: { title: string; note: string };
    feishu?: { title: string; note: string };
  },
  /** 页面底部的版权与下架说明（结尾会接“反馈页”的链接）。 */
  copyright: `${SITE.name} 是聚合摘要和阅读索引，原文版权归各来源所有。如果你是来源方，希望更正、下架或调整展示方式，可以通过`,
} as const;

/** “AI 日报”这类说法：行业词和名词之间，英文词加空格，中文词不加。 */
export function withSubject(noun: string): string {
  return /[A-Za-z0-9]$/.test(SITE.subject) ? `${SITE.subject} ${noun}` : `${SITE.subject}${noun}`;
}
