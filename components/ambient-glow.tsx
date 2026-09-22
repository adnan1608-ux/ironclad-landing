// Decorative background glows shared across pages.
export function AmbientGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-60" aria-hidden="true">
      <div className="absolute left-[-12rem] top-[-14rem] h-[34rem] w-[34rem] rounded-full bg-[var(--iron-accent-soft)] blur-[130px]" />
      <div className="absolute right-[-10rem] top-[38rem] h-[30rem] w-[30rem] rounded-full bg-emerald-500/[0.06] blur-[130px]" />
    </div>
  )
}
