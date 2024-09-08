import { docsConfig } from "@/config/doc";
import Link from "next/link";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex gap-4">
      <aside className="max-w-64 w-full p-4 max-h-[calc(100vh-64px)] overflow-auto sticky top-16">
        <ul>
          {docsConfig.sidebar.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
              {item.items && (
                <ul className="pl-4 mt-3 space-y-2">
                  {item.items.map((subItem) => (
                    <li className="text-sm text-default-500" key={subItem.href}>
                      <Link href={subItem.href}>{subItem.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1">
        {children}
      </main>
    </section>
  );
}
