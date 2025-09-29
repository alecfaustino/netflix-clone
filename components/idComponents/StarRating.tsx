import { Star } from "lucide-react";

interface RatingDisplayProps {
  rating: number;
}

export default function Rating({ rating }: RatingDisplayProps) {
  const stars = 5;

  return (
    <div className="flex relative w-[120px] h-[24px]">
      {" "}
      {/* total width = stars * icon size */}
      {/* Background stars */}
      {Array.from({ length: stars }).map((_, i) => (
        <Star
          key={i}
          size={24}
          className="text-gray-300 absolute"
          style={{ left: i * 24 }}
        />
      ))}
      {/* Overlay stars */}
      {Array.from({ length: stars }).map((_, i) => {
        const starFill = Math.min(Math.max(rating - i, 0), 1); // 0 to 1
        return (
          <div
            key={i}
            className="absolute overflow-hidden text-yellow-500"
            style={{ width: 24 * starFill, left: i * 24 }}>
            <Star size={24} fill="oklch(79.5% 0.184 86.047)" />
          </div>
        );
      })}
    </div>
  );
}
