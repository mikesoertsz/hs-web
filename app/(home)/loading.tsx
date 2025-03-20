import { Skeleton } from "@/components/ui/skeleton";

export default function HomeLoading() {
  return (
    <div className="space-y-10">
      {/* Hero Section Loading */}
      <div className="h-[600px] relative">
        <Skeleton className="w-full h-full" />
      </div>

      {/* Details Bar Loading */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-24" />
          ))}
        </div>
      </div>

      {/* Interest Section Loading */}
      <div className="container mx-auto px-4">
        <Skeleton className="h-8 w-1/3 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-64" />
          ))}
        </div>
      </div>

      {/* Calculator Section Loading */}
      <div className="container mx-auto px-4">
        <Skeleton className="h-96 max-w-2xl mx-auto" />
      </div>

      {/* CTA Section Loading */}
      <div className="container mx-auto px-4">
        <Skeleton className="h-48" />
      </div>
    </div>
  );
}
