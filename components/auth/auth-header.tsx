type AuthHeaderProps = {
  title: string;
  subtitle?: string;
};

export function AuthHeader({
  title,
  subtitle,
}: AuthHeaderProps) {
  return (
    <header className="mb-8">
      <h1 className="text-[28px] font-bold tracking-tight text-gray-900">
        {title}
      </h1>

      {subtitle && (
        <p className="mt-2 text-sm text-gray-500">
          {subtitle}
        </p>
      )}
    </header>
  );
}