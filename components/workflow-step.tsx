import { Card, CardContent } from "@/components/ui/card";

export function WorkflowStep({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="relative h-full overflow-hidden bg-white/84">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400" />
      <CardContent className="flex h-full flex-col gap-4 pt-8">
        <div className="text-sm font-semibold tracking-[0.22em] text-sky-700 uppercase">{index}</div>
        <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
        <p className="text-sm leading-7 text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
