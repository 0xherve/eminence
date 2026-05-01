import { type Icon as TablerIcon } from "@tabler/icons-react";

interface IconProps {
  icon: TablerIcon;
  size?: number;
  className?: string;
}

export function Icon({ icon: IconComponent, size = 18, className }: IconProps) {
  return <IconComponent size={size} className={className} />;
}
