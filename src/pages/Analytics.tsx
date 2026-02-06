import { useState } from "react";
import { motion } from "framer-motion";
import {
  Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, PieChart, Pie, Cell,
} from "recharts";
import { ArrowUpRight, ArrowDownRight, TrendingUp, Eye, MousePointerClick, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const periods = ["7d", "30d", "90d"] as const;

const trafficData = [
  { day: "Mon", visitors: 1420, pageViews: 3200 },
  { day: "Tue", visitors: 1680, pageViews: 3800 },
  { day: "Wed", visitors: 1520, pageViews: 3500 },
  { day: "Thu", visitors: 1890, pageViews: 4100 },
  { day: "Fri", visitors: 2100, pageViews: 4800 },
  { day: "Sat", visitors: 1340, pageViews: 2900 },
  { day: "Sun", visitors: 1180, pageViews: 2600 },
];

const channelData = [
  { channel: "Organic", users: 4820 },
  { channel: "Direct", users: 3200 },
  { channel: "Referral", users: 2100 },
  { channel: "Social", users: 1750 },
  { channel: "Email", users: 1380 },
  { channel: "Paid", users: 980 },
];

const deviceData = [
  { name: "Desktop", value: 58, fill: "hsl(160, 84%, 39%)" },
  { name: "Mobile", value: 32, fill: "hsl(217, 91%, 60%)" },
  { name: "Tablet", value: 10, fill: "hsl(38, 92%, 50%)" },
];

const topPages = [
  { page: "/dashboard", views: 12840, bounce: "24%", avgTime: "4m 12s" },
  { page: "/products", views: 8920, bounce: "31%", avgTime: "3m 45s" },
  { page: "/pricing", views: 6430, bounce: "18%", avgTime: "5m 02s" },
  { page: "/blog/getting-started", views: 4210, bounce: "42%", avgTime: "2m 38s" },
  { page: "/signup", views: 3890, bounce: "12%", avgTime: "1m 55s" },
];

const metrics = [
  { label: "Page Views", value: "284K", change: "+14.2%", up: true, icon: Eye },
  { label: "Click Rate", value: "3.8%", change: "+0.6%", up: true, icon: MousePointerClick },
  { label: "Avg. Session", value: "3m 24s", change: "-8s", up: false, icon: Clock },
  { label: "Bounce Rate", value: "28.4%", change: "-2.1%", up: true, icon: TrendingUp },
];

const tooltipStyle = {
  backgroundColor: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "8px",
  fontSize: "12px",
};

const AnalyticsPage = () => {
  const [period, setPeriod] = useState<(typeof periods)[number]>("7d");

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
          <p className="text-sm text-muted-foreground">Track performance and user engagement</p>
        </div>
        <div className="flex gap-1 rounded-lg bg-secondary p-1">
          {periods.map((p) => (
            <Button
              key={p}
              variant={period === p ? "default" : "ghost"}
              size="sm"
              className="h-7 text-xs px-3"
              onClick={() => setPeriod(p)}
            >
              {p}
            </Button>
          ))}
        </div>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.35 }}
            className="glass-card p-5"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">{m.label}</span>
              <m.icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="mt-2 text-2xl font-bold text-foreground">{m.value}</div>
            <div className="mt-1 flex items-center gap-1">
              {m.up ? (
                <ArrowUpRight className="h-3.5 w-3.5 text-success" />
              ) : (
                <ArrowDownRight className="h-3.5 w-3.5 text-destructive" />
              )}
              <span className={`text-xs font-medium ${m.up ? "text-success" : "text-destructive"}`}>{m.change}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Traffic chart + Device breakdown */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="glass-card p-5 lg:col-span-2"
        >
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Traffic Overview</h3>
              <p className="text-xs text-muted-foreground">Visitors & page views</p>
            </div>
            <div className="flex gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" />Visitors</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-info" />Page Views</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={trafficData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="gVisitors" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="hsl(160, 84%, 39%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gPageViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0.2} />
                  <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 20%, 91%)" strokeOpacity={0.5} />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="hsl(215, 12%, 50%)" tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(215, 12%, 50%)" tickLine={false} axisLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="visitors" stroke="hsl(160, 84%, 39%)" strokeWidth={2} fill="url(#gVisitors)" />
              <Area type="monotone" dataKey="pageViews" stroke="hsl(217, 91%, 60%)" strokeWidth={2} fill="url(#gPageViews)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
          className="glass-card p-5"
        >
          <h3 className="text-sm font-semibold text-foreground">Devices</h3>
          <p className="mb-2 text-xs text-muted-foreground">Traffic by device type</p>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={deviceData} cx="50%" cy="50%" innerRadius={50} outerRadius={72} paddingAngle={4} dataKey="value" strokeWidth={0}>
                {deviceData.map((d, i) => <Cell key={i} fill={d.fill} />)}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} formatter={(v: number) => [`${v}%`, "Share"]} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-2 flex flex-wrap gap-3 justify-center">
            {deviceData.map((d) => (
              <span key={d.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: d.fill }} />{d.name} ({d.value}%)
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Channel bar chart + Top pages */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="glass-card p-5"
        >
          <h3 className="text-sm font-semibold text-foreground">Acquisition Channels</h3>
          <p className="mb-4 text-xs text-muted-foreground">Users by traffic source</p>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={channelData} layout="vertical" margin={{ top: 0, right: 5, left: 0, bottom: 0 }}>
              <CartesianGrid horizontal={false} strokeDasharray="3 3" stroke="hsl(215, 20%, 91%)" strokeOpacity={0.5} />
              <XAxis type="number" tick={{ fontSize: 12 }} stroke="hsl(215, 12%, 50%)" tickLine={false} axisLine={false} />
              <YAxis type="category" dataKey="channel" tick={{ fontSize: 12 }} stroke="hsl(215, 12%, 50%)" tickLine={false} axisLine={false} width={65} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="users" fill="hsl(160, 84%, 39%)" radius={[0, 4, 4, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.4 }}
          className="glass-card overflow-hidden"
        >
          <div className="border-b border-border px-5 py-4">
            <h3 className="text-sm font-semibold text-foreground">Top Pages</h3>
            <p className="text-xs text-muted-foreground">Most visited pages this period</p>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs font-medium text-muted-foreground">
                <th className="px-5 py-2.5">Page</th>
                <th className="px-5 py-2.5 text-right">Views</th>
                <th className="px-5 py-2.5 text-right hidden sm:table-cell">Bounce</th>
                <th className="px-5 py-2.5 text-right hidden md:table-cell">Avg. Time</th>
              </tr>
            </thead>
            <tbody>
              {topPages.map((p) => (
                <tr key={p.page} className="border-b border-border/50 last:border-0 hover:bg-muted/50 transition-colors">
                  <td className="px-5 py-3 font-medium text-foreground">{p.page}</td>
                  <td className="px-5 py-3 text-right text-muted-foreground">{p.views.toLocaleString()}</td>
                  <td className="px-5 py-3 text-right text-muted-foreground hidden sm:table-cell">{p.bounce}</td>
                  <td className="px-5 py-3 text-right text-muted-foreground hidden md:table-cell">{p.avgTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
