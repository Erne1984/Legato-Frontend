export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data: T;
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
  id: number;
  email: string;
  username: string;
  displayName: string;
  profilePicture: string | null;
  profileBanner: string | null;
  photosCard: string[];
  sex: string | null;
  instruments: string[];
  favoriteArtistsSpotifyId: string[];
  genres: string[];
  goal: string | null;
  location: Location | null;
  links: string | null;
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