import { BrainCircuit, Network, Radar, ShieldCheck } from "lucide-react";

const nodes = [
  { icon: BrainCircuit, label: "模型能力", className: "left-8 top-12" },
  { icon: Network, label: "规则编排", className: "right-10 top-20" },
  { icon: ShieldCheck, label: "在线服务", className: "left-16 bottom-12" },
  { icon: Radar, label: "结果反馈", className: "right-14 bottom-16" },
];

export function HeroOrbit() {
  return (
    <div className="glass-panel relative overflow-hidden p-8 lg:p-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(81,111,255,0.12),transparent_26%),radial-gradient(circle_at_70%_32%,rgba(45,212,191,0.1),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.85),rgba(245,249,255,0.92))]" />
      <div className="relative min-h-[360px]">
        <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/60 bg-white/90 shadow-[0_0_80px_rgba(81,111,255,0.12)]" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-sky-200/70" />
        <div className="absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-sky-100/90" />

        <div className="absolute left-1/2 top-1/2 z-10 flex h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-gradient-to-br from-slate-950 to-slate-800 text-white shadow-[0_26px_80px_rgba(15,23,42,0.24)]">
          <div className="text-xs tracking-[0.2em] text-sky-200 uppercase">Xiaoman AI</div>
          <div className="mt-3 text-center text-2xl font-semibold leading-tight">
            决策编排
            <br />
            与在线服务中枢
          </div>
          <div className="mt-4 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs text-slate-200">
            Train · Rule · Infer · Operate
          </div>
        </div>

        <div className="absolute inset-x-10 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-sky-200 to-transparent" />
        <div className="absolute inset-y-10 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-sky-200 to-transparent" />

        {nodes.map(({ icon: Icon, label, className }) => (
          <div
            key={label}
            className={`float-soft absolute ${className} flex items-center gap-3 rounded-2xl border border-white/85 bg-white/88 px-4 py-3 shadow-[0_18px_36px_rgba(91,118,180,0.12)]`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 text-primary">
              <Icon className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900">{label}</div>
              <div className="text-xs text-muted-foreground">Structured Workflow</div>
            </div>
          </div>
        ))}

        <div className="running-line absolute left-1/2 top-[76px] h-[2px] w-[160px] -translate-x-1/2 overflow-hidden bg-transparent" />
      </div>
    </div>
  );
}
