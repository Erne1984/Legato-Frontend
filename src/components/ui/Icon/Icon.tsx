import {
  Home,
  Music,
  User,
  Search,
  Heart,
  Users,
  Ellipsis,
  Link,
  X,
  MapPin,
  Plus,
  Bell,
  MessageSquare,
  Sun,
  Moon,
  Menu,
  Settings,
  LogOut,
  Share,
  Play,
  Pause,
  StepForward,
  StepBack,
  ArrowUp,
  ArrowDown,
  Clock,
  OctagonAlert,
  Ban,
  Facebook,
  Instagram,
} from "lucide-react";

const icons = {
  home: Home,
  music: Music,
  user: User,
  search: Search,
  heart: Heart,
  users: Users,
  ellipsis: Ellipsis,
  close: X,
  link: Link,
  mapPin: MapPin,
  plus: Plus,
  bell: Bell,
  message_square: MessageSquare,
  sun: Sun,
  moon: Moon,
  menu: Menu,
  settings: Settings,
  log_out: LogOut,
  share: Share,
  play: Play,
  circlePause: Pause,
  stepForward: StepForward,
  stepBack: StepBack,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  clock: Clock,
  octagonAlert: OctagonAlert,
  ban: Ban,
  facebook: Facebook,
  instagram: Instagram,
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
