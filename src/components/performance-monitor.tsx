"use client";

import { useEffect } from "react";

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return;

    // Web Vitals monitoring
    const reportWebVitals = (metric: {
      name: string;
      id: string;
      value: number;
    }) => {
      // Send to analytics service (e.g., Google Analytics, Vercel Analytics)
      if (typeof window !== "undefined" && "gtag" in window) {
        const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag;
        gtag("event", metric.name, {
          event_category: "Web Vitals",
          event_label: metric.id,
          value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
          non_interaction: true,
        });
      }
    };

    // Import and initialize web-vitals
    import("web-vitals").then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(reportWebVitals);
      onFID(reportWebVitals);
      onFCP(reportWebVitals);
      onLCP(reportWebVitals);
      onTTFB(reportWebVitals);
    });

    // Performance observer for custom metrics
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Log performance entries for debugging
          console.log("Performance entry:", entry);
        }
      });

      observer.observe({ entryTypes: ["navigation", "paint", "largest-contentful-paint"] });
    }
  }, []);

  return null; // This component doesn't render anything
}
