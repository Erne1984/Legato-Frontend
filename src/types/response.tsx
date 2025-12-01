import { Genre } from "./genres";
import { Instrument } from "./skills";

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data: T;
}

export interface ExternalLinks {
  spotify?: string;
  soundcloud?: string;
  instagram?: string;
  youtube?: string;
  website?: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  country: string;
  updatedAt: string;
}

export interface User {
  data: any;
  id: number;
  email: string;
  username: string;
  displayName: string;
  profilePicture: string | undefined;
  profileBanner: string | undefined;
  photosCard: string[];
  sex: string | null;
  favoriteArtistsSpotifyId: string[];
  instruments: Instrument[];
  genres: Genre[];
  bio: string;
  goal: string | null;
  location: Location | null;
  links: ExternalLinks | null;
  createdAt: string;
  updatedAt: string;
  followersCount: number;
  followingCount: number;
  connectionsCount: number;
  blockedCount: number;
  sentRequestsCount: number;
  receivedRequestsCount: number;
  connectionIds: number[];
  followerIds: number[];
  followingIds: number[];
  postsIds: number[];
}

export interface AuthResponse {
  token: string;
  user: User;
}

// NOTIFICAÇAO

export type NotificationType =
  | "FOLLOW"
  | "LIKE"
  | "CONNECTION_REQUEST"
  | "CONNECTION_ACCEPTED";

export type NotificationTargetType =
  | "USER"
  | "POST"
  | "CONNECTION_REQUEST";

export interface Notification {
  id: number;
  senderName: string | null;
  message: string;
  read: boolean;
  timeAgo: string;

  type: NotificationType;
  targetType: NotificationTargetType;
  targetId: number | null;
}

export interface UpdateUserDTO {
  email?: string;
  username?: string;
  displayName?: string;
  profilePicture?: string;
  profileBanner?: string;
  photosCard?: string[];
  sex?: string | null;
  bio?: string;
  goal?: string | null;
  instruments?: string[];
  genres?: string[];
  location?: {
    city?: string;
    state?: string;
    country?: string;
  } | null;
  links?: {
    instagram?: string;
    spotify?: string;
    youtube?: string;
    website?: string;
  } | null;
}
