import { Skeleton } from '~/components/ui/skeleton';

export function SpeakersTableSkeleton({ rows }: { rows: number }) {
  return (
    <div className="w-full  mx-auto rounded-xl overflow-hidden border bg-white">
      {/* Header */}
      <div className="flex items-center justify-start gap-12 p-6 border-b">
        <Skeleton className="h-8 w-24 mr-4" />
        <Skeleton className="h-8 w-16 mr-6" />
        <Skeleton className="h-8 w-24 mr-12" />
        <Skeleton className="h-8 w-12 mr-8" />
        <Skeleton className="h-8 w-24" />
      </div>

      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row md:items-center justify-between p-6 border-b"
        >
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Skeleton className="h-16 w-16 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-32" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto">
            <div className="md:w-48">
              <Skeleton className="h-4 w-40" />
            </div>

            <div className="md:w-48">
              <Skeleton className="h-4 w-40" />
            </div>

            <div className="flex items-center gap-2 my-3 md:my-0">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-6 w-6 rounded-full" />
              ))}
            </div>

            <div>
              <Skeleton className="h-9 w-28 rounded-full" />
            </div>

            <div className="flex items-center gap-1 mt-3 md:mt-0">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-5 w-5" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
