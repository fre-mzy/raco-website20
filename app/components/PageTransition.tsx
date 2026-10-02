"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);

    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 40);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`page-transition ${
        visible ? "page-transition-visible" : "page-transition-hidden"
      }`}
    >
      {children}
    </div>
  );
}
