import { motion } from "framer-motion";
import { Users as UsersIcon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { activityData } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";

const UsersPage = () => (
  <div className="mx-auto max-w-7xl space-y-6">
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold text-foreground">Users</h1>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search users..." className="w-64 pl-9 bg-secondary border-0" />
      </div>
    </div>
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="glass-card overflow-hidden">
      <div className="divide-y divide-border">
        {activityData.map((u) => (
          <div key={u.id} className="flex items-center justify-between px-5 py-4 transition-colors hover:bg-muted/50">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground">{u.avatar}</div>
              <div>
                <div className="font-medium text-foreground">{u.user}</div>
                <div className="text-xs text-muted-foreground">{u.email}</div>
              </div>
            </div>
            <Badge variant="outline" className="text-xs">Active</Badge>
          </div>
        ))}
      </div>
    </motion.div>
  </div>
);

export default UsersPage;
