export type CardType = {
  name: string;
  bio: string;
  skills: string[];
  distance: string;
  image_profile: { type: "image"; src: string };
  images: { type: "image" | "video"; src: string }[];
};
