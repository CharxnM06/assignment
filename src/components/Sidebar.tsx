"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldAlert, UserCheck, LayoutDashboard, Settings, Users, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  const isAdFraud = pathname.startsWith("/ad-fraud");
  const isIdentity = pathname.startsWith("/identity");

  // Determine which menu items to show based on the active module
  // Or just show all if we want a unified sidebar. Let's make it contextual to the module or global.
  // The screenshots show different sidebars.
  // Ad Fraud sidebar: Dashboard, Reports, Campaigns, Alerts, Settings
  // Identity sidebar: Dashboard, Users, Verification, Activity Logs, Settings
  
  // We will combine them or show globally.
  // Actually, let's use a unified sidebar for navigation between the two major apps, 
  // and maybe sub-navigation. But let's keep it simple: 
  // Top level: Ad Fraud, Identity.

  const navItems = [
    {
      title: "Ad Fraud",
      href: "/ad-fraud",
      icon: ShieldAlert,
    },
    {
      title: "Identity Verification",
      href: "/identity",
      icon: UserCheck,
    },
  ];

  const adFraudSubNav = [
    { title: "Dashboard", href: "/ad-fraud", icon: LayoutDashboard },
    // others...
  ];

  const identitySubNav = [
    { title: "Dashboard", href: "/identity/dashboard", icon: LayoutDashboard },
    { title: "Users", href: "/identity/users", icon: Users },
    { title: "Verification", href: "/identity", icon: UserCheck },
    { title: "Activity Logs", href: "/identity/logs", icon: Activity },
    { title: "Settings", href: "/identity/settings", icon: Settings },
  ];

  return (
    <div className="flex h-full w-64 flex-col border-r bg-card text-card-foreground">
      <div className="flex h-16 items-center px-6 border-b">
        <ShieldAlert className="mr-2 h-6 w-6 text-primary" />
        <span className="text-lg font-bold">FRAUDSHIELD</span>
      </div>
      
      <div className="flex-1 overflow-auto py-4">
        <div className="px-4 mb-4">
          <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Modules</h2>
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  pathname.startsWith(item.href) ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                )}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        {isIdentity && (
          <div className="px-4 mt-8">
            <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Identity Menu</h2>
            <nav className="space-y-1">
              {identitySubNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                  )}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {isAdFraud && (
          <div className="px-4 mt-8">
            <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Ad Fraud Menu</h2>
            <nav className="space-y-1">
              {adFraudSubNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                    pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                  )}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}
