import { cn } from "@/lib/utils"

type SectionProps = { title?: string; className?: string; children?: React.ReactNode }

export function Section({ title, className, children }: SectionProps) {
  return (
    <section className={cn("mt-6", className)}>
      {title ? (
        <h2 className="font-heading text-[24px] md:text-[28px]">{title}</h2>
      ) : null}
      <div className="mt-3 grid gap-3 text-[15px] md:text-[16px] leading-7 text-[#0b0b0b]/90">{children}</div>
    </section>
  )
}
