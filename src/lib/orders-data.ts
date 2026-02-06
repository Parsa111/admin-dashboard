export type OrderStatus = "delivered" | "shipped" | "processing" | "cancelled" | "refunded";

export interface Order {
  id: string;
  customer: string;
  email: string;
  avatar: string;
  product: string;
  amount: string;
  status: OrderStatus;
  date: string;
  paymentMethod: string;
}

export const ordersData: Order[] = [
  { id: "ORD-7291", customer: "Sarah Chen", email: "sarah@example.com", avatar: "SC", product: "MacBook Pro 14\"", amount: "$2,499.00", status: "delivered", date: "Jan 28, 2025", paymentMethod: "Visa •••• 4242" },
  { id: "ORD-7290", customer: "Marcus Johnson", email: "marcus@example.com", avatar: "MJ", product: "iPhone 15 Pro", amount: "$1,199.00", status: "shipped", date: "Jan 27, 2025", paymentMethod: "Mastercard •••• 8888" },
  { id: "ORD-7289", customer: "Emily Rodriguez", email: "emily@example.com", avatar: "ER", product: "AirPods Pro", amount: "$249.00", status: "processing", date: "Jan 27, 2025", paymentMethod: "PayPal" },
  { id: "ORD-7288", customer: "Alex Kim", email: "alex@example.com", avatar: "AK", product: "iPad Air", amount: "$799.00", status: "cancelled", date: "Jan 26, 2025", paymentMethod: "Visa •••• 1234" },
  { id: "ORD-7287", customer: "James Wilson", email: "james@example.com", avatar: "JW", product: "Apple Watch Ultra", amount: "$799.00", status: "delivered", date: "Jan 25, 2025", paymentMethod: "Amex •••• 3456" },
  { id: "ORD-7286", customer: "Priya Patel", email: "priya@example.com", avatar: "PP", product: "Magic Keyboard", amount: "$299.00", status: "refunded", date: "Jan 25, 2025", paymentMethod: "Visa •••• 9012" },
  { id: "ORD-7285", customer: "Tom Anderson", email: "tom@example.com", avatar: "TA", product: "Studio Display", amount: "$1,599.00", status: "delivered", date: "Jan 24, 2025", paymentMethod: "Mastercard •••• 5678" },
  { id: "ORD-7284", customer: "Nina Lee", email: "nina@example.com", avatar: "NL", product: "HomePod mini", amount: "$99.00", status: "shipped", date: "Jan 24, 2025", paymentMethod: "PayPal" },
  { id: "ORD-7283", customer: "David Brown", email: "david@example.com", avatar: "DB", product: "Mac Mini M2", amount: "$599.00", status: "processing", date: "Jan 23, 2025", paymentMethod: "Visa •••• 7777" },
  { id: "ORD-7282", customer: "Lisa Wang", email: "lisa@example.com", avatar: "LW", product: "AirTag 4-Pack", amount: "$99.00", status: "delivered", date: "Jan 22, 2025", paymentMethod: "Amex •••• 2468" },
];

export const orderStats = [
  { label: "Total Orders", value: "1,284", change: "+12.5%" },
  { label: "Pending", value: "43", change: "-8.1%" },
  { label: "Delivered", value: "1,180", change: "+15.3%" },
  { label: "Revenue", value: "$48,392", change: "+8.2%" },
];
