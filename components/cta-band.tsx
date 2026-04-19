import Link from "next/link";
import { ArrowRight, CalendarCheck2, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function CtaBand() {
  return (
    <section id="contact" className="container-shell">
      <div className="glass-panel relative overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(81,111,255,0.14),transparent_56%)]" />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <div className="section-eyebrow">Next Step</div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
              从一个高价值业务场景开始，把 AI 决策真正落到线上流程里。
            </h2>
            <p className="text-base leading-7 text-muted-foreground">
              第一版官网先保留清晰的产品说明与演示入口，后续你可以直接替换行业文案、场景案例和客户表达，不需要改页面骨架。
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/product">
                查看产品说明
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={`mailto:${siteConfig.contactEmail}`}>
                联系咨询
                <Mail className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <Link href={`mailto:${siteConfig.demoEmail}`}>
                预约演示
                <CalendarCheck2 className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
