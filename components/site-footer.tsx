import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

import { navItems } from "@/lib/site-content";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="container-shell pt-8">
      <div className="glass-panel overflow-hidden px-6 py-8 sm:px-8">
        <div className="grid gap-10 border-b border-slate-200/70 pb-8 lg:grid-cols-[1.2fr_0.8fr_0.9fr]">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="overflow-hidden rounded-2xl border border-sky-200/70 shadow-sm">
                <Image
                  src="/profile.png"
                  alt="Xiaoman logo"
                  width={44}
                  height={44}
                  className="h-11 w-11 object-cover"
                />
              </div>
              <div>
                <div className="text-base font-semibold text-slate-950">{siteConfig.brandName}</div>
                <div className="text-sm text-muted-foreground">{siteConfig.name}</div>
              </div>
            </Link>

            <p className="max-w-md text-sm leading-7 text-slate-600">
              {siteConfig.tagline}。当前底部信息已做成可配置结构，后续你可以直接替换品牌主体、联系邮箱、地区、版权和协议链接。
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-[0.14em] text-slate-900 uppercase">站点导航</h2>
            <div className="grid gap-3 text-sm text-slate-600">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-slate-950">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold tracking-[0.14em] text-slate-900 uppercase">联系信息</h2>
            <div className="space-y-3 text-sm text-slate-600">
              <Link
                href={`mailto:${siteConfig.contactEmail}`}
                className="flex items-center gap-3 transition hover:text-slate-950"
              >
                <Mail className="h-4 w-4 text-sky-600" />
                <span>{siteConfig.contactEmail}</span>
              </Link>
              <Link
                href={`mailto:${siteConfig.demoEmail}`}
                className="flex items-center gap-3 transition hover:text-slate-950"
              >
                <Mail className="h-4 w-4 text-sky-600" />
                <span>{siteConfig.demoEmail}</span>
              </Link>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-sky-600" />
                <span>{siteConfig.locationLabel}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.copyrightName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {siteConfig.legalLinks.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-slate-800">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
