export default function LoadingProject() {
  return (
    <main className="mx-auto w-[min(94vw,68rem)] pt-32 pb-20 md:pt-36">
      <div className="glass-panel animate-pulse rounded-3xl p-8">
        <div className="h-8 w-2/5 rounded bg-white/10" />
        <div className="mt-6 h-4 w-full rounded bg-white/10" />
        <div className="mt-3 h-4 w-4/5 rounded bg-white/10" />
      </div>
    </main>
  );
}
