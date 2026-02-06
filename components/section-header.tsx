interface SectionHeaderProps {
  title: string;
  subtitle: string;
  action?: {
    label: string;
    href: string;
  };
}

export function SectionHeader({ title, subtitle, action }: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between gap-4 mb-10">
      <div>
        <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
          {title}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      </div>
      {action && (
        <a
          href={action.href}
          className="shrink-0 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          {action.label}
        </a>
      )}
    </div>
  );
}
