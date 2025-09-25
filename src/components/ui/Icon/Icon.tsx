
import { Home, Music, User, Search, Heart, Users } from "lucide-react"

const icons = {
  home: Home,
  music: Music,
  user: User,
  search: Search,
  heart: Heart,
  users: Users
};

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

export default function Icon({ name, size = 24, className }: IconProps) {
  const Component = icons[name];
  return <Component size={size} className={className} />;
}
