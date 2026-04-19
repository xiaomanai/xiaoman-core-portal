export const siteConfig = {
  name: "小满 AI 决策引擎",
  brandName: "XiaoMan AI",
  headerSubtitle: "Decision Engine Portal",
  tagline: "面向企业 AI 决策落地的产品官网与说明站点",
  description:
    "面向企业 AI 决策落地的产品官网，帮助团队从业务场景定义、输入配置、模型接入到服务发布与在线反馈，建立完整可运营的 AI 决策闭环。",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://xiaoman.ai",
  ogImage: "/cover.png",
  companyName: "小满 AI",
  contactEmail: "hello@xiaoman.ai",
  demoEmail: "demo@xiaoman.ai",
  locationLabel: "中国 · 上海",
  copyrightName: "Xiaoman AI",
  legalLinks: [
    { label: "隐私政策", href: "#" },
    { label: "服务条款", href: "#" },
  ],
  keywords: [
    "小满AI",
    "AI决策引擎",
    "企业AI",
    "智能决策",
    "模型推理",
    "规则引擎",
    "AI落地",
    "AI决策平台",
  ],
};
