export function useMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return {
    title: `${title} | CarryOnMyWay!`,
    description:
      description ||
      "CarryOnMyWay!は、身軽な旅をテーマにした実践記録をお届けする旅行メディアです。",
  };
}
