import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react";
import { activityData, type ActivityStatus } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const statusStyles: Record<ActivityStatus, string> = {
  completed: "bg-success/10 text-success border-success/20",
  processing: "bg-info/10 text-info border-info/20",
  pending: "bg-warning/10 text-warning border-warning/20",
  cancelled: "bg-destructive/10 text-destructive border-destructive/20",
};

export function ActivityTable() {
  const [page, setPage] = useState(0);
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const pageSize = 5;

  const sorted = [...activityData].sort((a, b) =>
    sortDir === "asc" ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id)
  );
  const paged = sorted.slice(page * pageSize, (page + 1) * pageSize);
  const totalPages = Math.ceil(sorted.length / pageSize);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.4 }}
      className="glass-card overflow-hidden"
    >
      <div className="flex items-center justify-between border-b border-border p-5 pb-4">
        <div>
          <h3 className="text-sm font-semibold text-foreground">Recent Activity</h3>
          <p className="text-xs text-muted-foreground">Latest transactions and events</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setSortDir(sortDir === "asc" ? "desc" : "asc")}
          className="text-xs text-muted-foreground"
        >
          <ArrowUpDown className="mr-1 h-3.5 w-3.5" />
          Sort
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs font-medium text-muted-foreground">
              <th className="px-5 py-3">Order</th>
              <th className="px-5 py-3">User</th>
              <th className="px-5 py-3 hidden sm:table-cell">Action</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3 text-right">Amount</th>
              <th className="px-5 py-3 text-right hidden md:table-cell">Time</th>
            </tr>
          </thead>
          <tbody>
            {paged.map((item) => (
              <tr
                key={item.id}
                className="border-b border-border/50 transition-colors last:border-0 hover:bg-muted/50"
              >
                <td className="px-5 py-3 font-medium text-foreground">{item.id}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground">
                      {item.avatar}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{item.user}</div>
                      <div className="text-xs text-muted-foreground hidden lg:block">{item.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3 text-muted-foreground hidden sm:table-cell">{item.action}</td>
                <td className="px-5 py-3">
                  <Badge variant="outline" className={`text-[11px] font-medium capitalize ${statusStyles[item.status]}`}>
                    {item.status}
                  </Badge>
                </td>
                <td className="px-5 py-3 text-right font-medium text-foreground">{item.amount}</td>
                <td className="px-5 py-3 text-right text-muted-foreground hidden md:table-cell">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-border px-5 py-3">
        <span className="text-xs text-muted-foreground">
          Page {page + 1} of {totalPages}
        </span>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7" disabled={page === 0} onClick={() => setPage(page - 1)}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7" disabled={page >= totalPages - 1} onClick={() => setPage(page + 1)}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
