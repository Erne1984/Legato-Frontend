export type CardType = {
  name: string;
  bio: string;
  gender: string;
  age: number;
  skills: string[];
  musicGenres: string[];
  distance: number;
  image_profile: { type: "image"; src: string };
  images: { type: "image" | "video"; src: string }[];
};

export type SwipeEvent = {
  card: CardType;
  action: "match" | "pass";
  timestamp: Date;
};
