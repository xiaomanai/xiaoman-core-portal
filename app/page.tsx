import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  CircleDotDashed,
  Sparkles,
} from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { FeatureCard } from "@/components/feature-card";
import { HeroOrbit } from "@/components/hero-orbit";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { WorkflowStep } from "@/components/workflow-step";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StructuredData } from "@/components/structured-data";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import {
  backgroundCards,
  capabilities,
  heroMetrics,
  painPoints,
  scenarios,
  valueCards,
  workflowSteps,
} from "@/lib/site-content";

export const metadata: Metadata = buildPageMetadata({
  title: "企业 AI 决策引擎官网",
  description:
    "小满 AI 决策引擎官网，介绍企业 AI 决策系统的需求背景、核心能力、使用流程、适用场景与产品价值。",
  path: "/",
  keywords: ["企业AI决策系统", "AI官网", "AI决策流程", "AI产品说明"],
});

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: absoluteUrl("/"),
    image: absoluteUrl(siteConfig.ogImage),
    description:
      "面向企业 AI 决策落地的官网入口，展示需求背景、核心能力、使用引导和适用场景。",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "CNY",
    },
  };

  return (
    <div className="pb-16">
      <StructuredData data={homeSchema} />
      <SiteHeader />

      <main className="space-y-24 pt-10 sm:pt-14">
        <section className="container-shell fade-up">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_540px] lg:items-center">
            <div className="space-y-8">
              <div className="section-eyebrow">
                <Sparkles className="h-3.5 w-3.5" />
                AI Decision Engine
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                  把模型能力、业务规则与在线服务
                  <span className="bg-gradient-to-r from-slate-950 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
                    串成真正可落地的 AI 决策系统
                  </span>
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600">
                  小满 AI 决策引擎面向企业智能决策落地，帮助团队从业务场景定义、输入配置、模型接入到服务发布与在线反馈，建立一条清晰、完整、可运营的产品化路径。
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/product">
                    查看完整产品说明
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#workflow">
                    查看使用引导
                    <CircleDotDashed className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {heroMetrics.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-white/80 bg-white/70 p-5 shadow-sm">
                    <div className="text-lg font-semibold text-slate-950">{item.value}</div>
                    <div className="mt-2 text-sm leading-6 text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <HeroOrbit />
          </div>
        </section>

        <section id="background" className="container-shell space-y-8">
          <SectionHeading
            eyebrow="Background"
            title="为什么企业需要一套真正面向落地的 AI 决策引擎"
            description="企业并不缺模型概念，真正缺的是一条从业务需求到线上应用的清晰路径。官网第一版在这里先完整讲清楚需求背景，后续你可以直接替换为更贴近行业的背景文案。"
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {backgroundCards.map((card) => (
              <Card key={card.title} className="bg-white/78">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-slate-950">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="pain-points" className="container-shell space-y-8">
          <SectionHeading
            eyebrow="Pain Points"
            title="企业痛点区块已预留，可直接替换为后续行业文案"
            description="这一部分先保留清晰的结构化表达，帮助你后面补充更具体的客户语言。现在页面已经为问题陈述、团队协同痛点和实施障碍预留了视觉承载位。"
          />

          <div className="grid gap-4 lg:grid-cols-2">
            {painPoints.map((point) => (
              <div
                key={point}
                className="flex gap-4 rounded-3xl border border-white/80 bg-white/76 p-6 shadow-sm"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-sky-600" />
                <p className="text-sm leading-7 text-slate-600">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container-shell space-y-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="围绕决策编排、模型接入、规则控制与在线服务组织产品能力"
            description="官网首页先给出能力总览，帮助第一次接触产品的人快速建立理解，再通过详情页展开完整说明。"
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item) => (
              <FeatureCard
                key={item.title}
                tag={item.tag}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>

        <section id="workflow" className="container-shell space-y-8">
          <SectionHeading
            eyebrow="Workflow"
            title="清晰完整的产品使用引导"
            description="第一版首页用 5 步串起产品如何落地使用，让访问者不仅知道产品“是什么”，还知道产品“怎么用”。"
          />

          <div className="grid gap-5 lg:grid-cols-5">
            {workflowSteps.map((step) => (
              <WorkflowStep
                key={step.index}
                index={step.index}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </section>

        <section className="container-shell grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Scenarios"
              title="适用于高价值、强流程、可持续优化的企业决策场景"
              description="不把官网写成空泛的 AI 介绍，而是明确产品适合承载哪些业务类型。"
            />

            <div className="grid gap-4">
              {scenarios.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/80 bg-white/78 px-5 py-4 text-base font-medium text-slate-800 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {valueCards.map((card) => (
              <Card key={card.title} className="bg-gradient-to-br from-white/88 to-sky-50/78">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-slate-950">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <CtaBand />
      </main>
    </div>
  );
}
