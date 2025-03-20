import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

const interests = [
  {
    title: "Fractional Ownership",
    description:
      "Own a share of luxury yachts without the full cost of ownership",
    image: "/img/interests/fractional.jpg",
  },
  {
    title: "Guaranteed Returns",
    description: "Secure 12% annual returns on your yacht investment",
    image: "/img/interests/returns.jpg",
  },
  {
    title: "Professional Management",
    description: "Expert maintenance and charter management of your investment",
    image: "/img/interests/management.jpg",
  },
];

function InterestSkeleton() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Skeleton className="h-10 w-64 mb-12 mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col">
              <Skeleton className="aspect-video w-full mb-4" />
              <Skeleton className="h-6 w-48 mb-2" />
              <Skeleton className="h-16 w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function InterestSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Invest in Yacht Shares?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative aspect-video mb-4">
                <Image
                  src={interest.image}
                  alt={interest.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
              <p className="text-gray-600">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
