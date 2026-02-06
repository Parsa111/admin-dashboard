import { motion } from "framer-motion";
import { Users, DollarSign, ShoppingCart, TrendingUp, TrendingDown } from "lucide-react";
import { kpiData } from "@/lib/mock-data";

const icons = { Users, DollarSign, ShoppingCart, TrendingUp };
const gradients = ["kpi-gradient-1", "kpi-gradient-2", "kpi-gradient-3", "kpi-gradient-4"];

export function KpiCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {kpiData.map((kpi, i) => {
        const Icon = icons[kpi.icon as keyof typeof icons];
        return (
          <motion.div
            key={kpi.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.35 }}
            className="glass-card p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">{kpi.title}</span>
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${gradients[i]}`}>
                <Icon className="h-5 w-5 text-foreground" />
              </div>
            </div>
            <div className="mt-3">
              <span className="text-2xl font-bold text-foreground">{kpi.value}</span>
              <div className="mt-1 flex items-center gap-1">
                {kpi.trend === "up" ? (
                  <TrendingUp className="h-3.5 w-3.5 text-success" />
                ) : (
                  <TrendingDown className="h-3.5 w-3.5 text-destructive" />
                )}
                <span
                  className={`text-xs font-medium ${
                    kpi.trend === "up" ? "text-success" : "text-destructive"
                  }`}
                >
                  {kpi.change}
                </span>
                <span className="text-xs text-muted-foreground">vs last month</span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
