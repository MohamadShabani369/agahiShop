function SkeletonProduct() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">

      <div className="h-52 animate-pulse bg-slate-300 dark:bg-slate-700"></div>

      <div className="space-y-3 p-4">

        <div className="h-5 w-4/5 animate-pulse rounded bg-slate-300 dark:bg-slate-700"></div>

        <div className="h-4 w-2/5 animate-pulse rounded bg-slate-300 dark:bg-slate-700"></div>

        <div className="mt-6 h-10 animate-pulse rounded-xl bg-slate-300 dark:bg-slate-700"></div>

      </div>

    </div>
  );
}

export default SkeletonProduct;