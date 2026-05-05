import Link from "next/link";

type SidebarProps = {
  activePage: "dashboard" | "youtube" | "reddit" | "ideas" | "settings";
};

export default function Sidebar({ activePage }: SidebarProps) {
  const navItems = [
    { id: "dashboard" as const, href: "/dashboard", icon: "📊", label: "Dashboard" },
    { id: "youtube" as const, href: "/youtube", icon: "🎥", label: "YouTube Research" },
    { id: "reddit" as const, href: "/reddit", icon: "💬", label: "Reddit Research" },
    { id: "ideas" as const, href: "/ideas", icon: "💡", label: "Idea Library" },
    { id: "settings" as const, href: "/settings", icon: "⚙️", label: "Settings" },
  ];

  return (
    <aside className="w-64 bg-brand-surface border-r border-white/5 flex flex-col">
      <div className="p-6 border-b border-white/5">
        <h1 className="text-xl font-bold text-slate-50">Content Insights</h1>
        <p className="text-sm text-slate-400 mt-1">AISA</p>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = item.id === activePage;
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className={
                    isActive
                      ? "flex items-center gap-3 px-4 py-2.5 rounded-lg bg-brand-accentBlue/10 text-brand-accentBlue border border-brand-accentBlue/20 font-medium"
                      : "flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-400 hover:bg-brand-surfaceSoft hover:text-slate-50 transition-colors"
                  }
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-white/5">
        <div className="text-xs text-slate-500">v1.0.0 • Beta</div>
      </div>
    </aside>
  );
}
