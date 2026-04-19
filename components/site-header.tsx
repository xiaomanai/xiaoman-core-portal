import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { navItems } from "@/lib/site-content";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/72 backdrop-blur-xl">
      <div className="container-shell flex h-18 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="overflow-hidden rounded-2xl border border-sky-200/70 shadow-sm">
            <Image
              src="/profile.png"
              alt="Xiaoman logo"
              width={40}
              height={40}
              className="h-10 w-10 object-cover"
            />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-[0.16em] text-slate-900 uppercase">
              Xiaoman AI
            </div>
            <div className="text-xs text-muted-foreground">Decision Engine Portal</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-slate-900">
              {item.label}
            </Link>
          ))}
        </nav>

        <Button asChild size="sm">
          <Link href="#contact">
            预约演示
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </header>
  );
}
