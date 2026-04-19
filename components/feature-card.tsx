import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function FeatureCard({
  tag,
  title,
  description,
}: {
  tag: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="h-full bg-white/78 transition-transform duration-300 hover:-translate-y-1">
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <Badge>{tag}</Badge>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="rounded-2xl border border-sky-100 bg-gradient-to-r from-slate-50 to-sky-50/80 px-4 py-3 text-sm text-slate-600">
          面向业务落地的产品化能力组织，而不是孤立的模型展示。
        </div>
      </CardContent>
    </Card>
  );
}
