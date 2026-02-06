export const kpiData = [
  { title: "Total Users", value: "12,847", change: "+12.5%", trend: "up" as const, icon: "Users" },
  { title: "Revenue", value: "$48,392", change: "+8.2%", trend: "up" as const, icon: "DollarSign" },
  { title: "Orders", value: "1,284", change: "-3.1%", trend: "down" as const, icon: "ShoppingCart" },
  { title: "Conversion", value: "3.24%", change: "+0.8%", trend: "up" as const, icon: "TrendingUp" },
];

export const revenueData = [
  { month: "Jan", revenue: 18500, orders: 820 },
  { month: "Feb", revenue: 22300, orders: 932 },
  { month: "Mar", revenue: 19800, orders: 901 },
  { month: "Apr", revenue: 27600, orders: 1034 },
  { month: "May", revenue: 32100, orders: 1120 },
  { month: "Jun", revenue: 29400, orders: 1067 },
  { month: "Jul", revenue: 35200, orders: 1189 },
  { month: "Aug", revenue: 38900, orders: 1250 },
  { month: "Sep", revenue: 36700, orders: 1198 },
  { month: "Oct", revenue: 41200, orders: 1340 },
  { month: "Nov", revenue: 44500, orders: 1412 },
  { month: "Dec", revenue: 48392, orders: 1284 },
];

export const categoryData = [
  { name: "Electronics", value: 35, fill: "hsl(160, 84%, 39%)" },
  { name: "Clothing", value: 25, fill: "hsl(217, 91%, 60%)" },
  { name: "Home & Garden", value: 20, fill: "hsl(38, 92%, 50%)" },
  { name: "Sports", value: 12, fill: "hsl(280, 68%, 60%)" },
  { name: "Other", value: 8, fill: "hsl(350, 80%, 60%)" },
];

export type ActivityStatus = "completed" | "pending" | "cancelled" | "processing";

export interface ActivityItem {
  id: string;
  user: string;
  email: string;
  action: string;
  status: ActivityStatus;
  amount: string;
  date: string;
  avatar: string;
}

export const activityData: ActivityItem[] = [
  { id: "ORD-7291", user: "Sarah Chen", email: "sarah@example.com", action: "New order placed", status: "completed", amount: "$234.50", date: "2 min ago", avatar: "SC" },
  { id: "ORD-7290", user: "Marcus Johnson", email: "marcus@example.com", action: "Payment received", status: "completed", amount: "$1,200.00", date: "15 min ago", avatar: "MJ" },
  { id: "ORD-7289", user: "Emily Rodriguez", email: "emily@example.com", action: "Order shipped", status: "processing", amount: "$89.99", date: "1 hr ago", avatar: "ER" },
  { id: "ORD-7288", user: "Alex Kim", email: "alex@example.com", action: "Refund requested", status: "pending", amount: "$156.00", date: "2 hr ago", avatar: "AK" },
  { id: "ORD-7287", user: "James Wilson", email: "james@example.com", action: "Order cancelled", status: "cancelled", amount: "$420.00", date: "3 hr ago", avatar: "JW" },
  { id: "ORD-7286", user: "Priya Patel", email: "priya@example.com", action: "New order placed", status: "processing", amount: "$67.80", date: "4 hr ago", avatar: "PP" },
  { id: "ORD-7285", user: "Tom Anderson", email: "tom@example.com", action: "Payment received", status: "completed", amount: "$890.00", date: "5 hr ago", avatar: "TA" },
  { id: "ORD-7284", user: "Nina Lee", email: "nina@example.com", action: "Order delivered", status: "completed", amount: "$345.20", date: "6 hr ago", avatar: "NL" },
];
