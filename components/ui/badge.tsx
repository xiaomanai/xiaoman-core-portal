import * as React from "react";

import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-sky-200/70 bg-sky-50/80 px-2.5 py-1 text-xs font-medium text-sky-700",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
