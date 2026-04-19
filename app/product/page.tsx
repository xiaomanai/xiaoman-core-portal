import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Layers3, Workflow } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StructuredData } from "@/components/structured-data";
import { absoluteUrl, buildPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import {
  faqItems,
  faqPlaceholders,
  implementationModes,
  productHighlights,
  productModules,
  workflowSteps,
} from "@/lib/site-content";

export const metadata: Metadata = buildPageMetadata({
  title: "产品说明与使用指南",
  description:
    "查看小满 AI 决策引擎的产品定位、目标用户、完整使用流程、模块说明、接入方式和 FAQ。",
  path: "/product",
  keywords: ["AI产品说明", "AI使用指南", "AI决策引擎模块", "AI实施方式"],
});

export default function ProductPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "首页",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "产品说明",
        item: absoluteUrl("/product"),
      },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: siteConfig.name,
    description:
      "面向企业 AI 决策落地的产品层，连接业务输入、策略规则、模型能力和在线服务。",
    brand: {
      "@type": "Brand",
      name: siteConfig.brandName,
    },
    category: "AI Decision Engine",
    image: absoluteUrl(siteConfig.ogImage),
    url: absoluteUrl("/product"),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="pb-16">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={productSchema} />
      <StructuredData data={faqSchema} />
      <SiteHeader />

      <main className="space-y-24 pt-10 sm:pt-14">
        <section className="container-shell space-y-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <Link href="/" className="inline-flex items-center gap-2 transition hover:text-slate-950">
              <ArrowLeft className="h-4 w-4" />
              返回首页
            </Link>
            <span className="text-slate-300">/</span>
            <span>产品说明</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div className="space-y-6">
              <div className="section-eyebrow">Product Guide</div>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                一页看清小满 AI 决策引擎是什么、解决什么问题，以及如何在企业里落地使用
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-600">
                这一页承担“产品说明书”的角色，覆盖产品定位、目标用户、使用流程、模块结构与实施方式。后续补充行业案例或客户文案时，可以直接在现有分区上扩展。
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="#full-workflow">
                    查看完整流程
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="#modules">查看模块说明</Link>
                </Button>
              </div>
            </div>

            <Card className="overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
              <CardContent className="pt-8">
                <div className="flex items-center gap-3 text-sky-200">
                  <Workflow className="h-5 w-5" />
                  <span className="text-sm tracking-[0.16em] uppercase">Decision Flow</span>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    业务场景定义
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    输入指标与规则配置
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    模型接入与能力发布
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/6 p-4">
                    在线调用、反馈与持续优化
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="container-shell space-y-8">
          <SectionHeading
            eyebrow="Overview"
            title="产品定位与目标用户"
            description="先回答最核心的问题：它是什么，为谁而做，为什么值得企业投入。"
          />

          <div className="grid gap-5 md:grid-cols-3">
            {productHighlights.map((item) => (
              <Card key={item.title} className="bg-white/78">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="full-workflow" className="container-shell space-y-8">
          <SectionHeading
            eyebrow="Full Workflow"
            title="完整使用流程"
            description="这部分不仅用于官网展示，也可以作为销售介绍、方案汇报和后续产品文档的骨架。"
          />

          <div className="grid gap-5 lg:grid-cols-5">
            {workflowSteps.map((step) => (
              <Card key={step.index} className="h-full bg-white/84">
                <CardContent className="pt-6">
                  <div className="text-sm font-semibold tracking-[0.2em] text-sky-700 uppercase">
                    {step.index}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="modules" className="container-shell space-y-8">
          <SectionHeading
            eyebrow="Modules"
            title="模块说明"
            description="围绕场景、输入、策略、模型和服务 5 层组织，帮助访问者快速理解产品边界与协同关系。"
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {productModules.map((module) => (
              <Card key={module.title} className="bg-white/80">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-primary">
                      <Layers3 className="h-4 w-4" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-950">{module.title}</h3>
                  </div>

                  <div className="mt-5 space-y-3">
                    {module.points.map((point) => (
                      <div key={point} className="flex gap-3 text-sm leading-7 text-slate-600">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-sky-600" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container-shell grid gap-8 xl:grid-cols-[1fr_1fr]">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Implementation"
              title="常见接入方式与实施路径"
              description="给企业一个更清晰的实施认知，知道这不是一套停留在概念层的展示产品。"
            />
            <div className="space-y-4">
              {implementationModes.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/80 bg-white/78 px-5 py-4 text-sm leading-7 text-slate-600 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <SectionHeading
              eyebrow="Expandable"
              title="后续扩展区块已预留"
              description="FAQ、行业方案、客户案例这些内容后面可以直接往里补，不需要重做结构。"
            />
            <div className="grid gap-4">
              {faqPlaceholders.map((item) => (
                <Card key={item} className="bg-gradient-to-r from-white/85 to-sky-50/78">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-slate-950">{item}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      当前为预留内容位，后续补充正式文案即可直接上线使用。
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="container-shell space-y-8">
          <SectionHeading
            eyebrow="FAQ"
            title="便于搜索与 AI 引用的常见问题区块"
            description="这部分既是给用户看的简明回答，也方便搜索引擎与 AI 搜索直接抽取结构化问答。后续你可以把占位答案替换成更真实的业务表达。"
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {faqItems.map((item) => (
              <Card key={item.question} className="bg-white/82">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-slate-950">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
