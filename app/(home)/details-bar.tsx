import { Skeleton } from "@/components/ui/skeleton";

const details = [
  {
    title: "Guaranteed Returns",
    value: "12%",
    description: "Annual return on investment",
  },
  {
    title: "Investment Period",
    value: "3-5 Years",
    description: "Flexible investment terms",
  },
  {
    title: "Minimum Investment",
    value: "$50,000",
    description: "Start your yacht investment journey",
  },
];

function DetailsBarSkeleton() {
  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <Skeleton className="h-6 w-32 mb-2" />
              <Skeleton className="h-8 w-16 mb-2" />
              <Skeleton className="h-4 w-48" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DetailsBar() {
  return (
    <div className="w-full bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {details.map((detail, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {detail.title}
              </h3>
              <p className="text-3xl font-bold text-brand mb-2">
                {detail.value}
              </p>
              <p className="text-sm text-gray-600">{detail.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
