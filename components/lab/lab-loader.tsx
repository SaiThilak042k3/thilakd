"use client"

import dynamic from "next/dynamic"

const GradientDescent = dynamic(() => import("./gradient-descent"), {
  ssr: false,
  loading: () => (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="aspect-square w-full animate-pulse rounded-[22px] bg-ink/[0.05] lg:col-span-7" />
      <div className="hidden lg:col-span-5 lg:block" />
    </div>
  ),
})

export function LabLoader() {
  return <GradientDescent />
}
