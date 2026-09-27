export default function CharactersListSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="h-54 bg-gray-200 animate-pulse rounded-lg"
        />
      ))}
    </div>
  );
}