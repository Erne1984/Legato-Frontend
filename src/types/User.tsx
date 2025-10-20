export type Location = {
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  country: string;
};

export type ExternalLinks = {
  spotify?: string;
  soundcloud?: string;
  instagram?: string;
  youtube?: string;
};

export type UserSkillLevel = "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "PROFESSIONAL";

export type User = {
  id: string;
  username: string;
  email?: string;
  bio?: string;

  /** Dados visuais e multimídia */
  profilePicture?: string; 
  profileBanner?: string; 
  photosCards: string[];
  mediaPortfolio?: {
    id: string;
    type: "AUDIO" | "VIDEO" | "IMAGE";
    url: string;
    title?: string;
  }[];

  /** Música e preferências */
  instruments: string[];
  favoriteArtists?: string[];
  genres: string[];
  skillLevel: UserSkillLevel;
  goals: string[];

  /** Localização */
  location: Location;
  distanceKm?: number; 

  /** Conexões sociais */
  followers?: number; 
  following?: number;
  isFollowing?: boolean; 
  connections?: string[]; 
  blockedUsers?: string[];

  /** Links externos */
  links?: ExternalLinks;

  /** Estado e controle */
  emailVerified?: boolean;
  createdAt?: string;
  updatedAt?: string;

  /** Campos utilitários para frontend */
  isOnline?: boolean;
  lastActive?: string;
  isBlocked?: boolean;
};
