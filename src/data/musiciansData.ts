import { CardType } from "@/types/cards";

export const musiciansData: CardType[] = [
  {
    name: "Renan",
    bio: "Sou cantor e compositor, apaixonado por transformar sentimentos em música.",
    gender: "Masculino",
    age: 27,
    skills: ["Vocalista", "Guitarrista"],
    musicGenres: ["MPB", "Pop", "Samba"],
    distance: 3,
    image_profile: { type: "image", src: "/imgs/black_boy_profile_image.png" },
    images: [
      { type: "image", src: "/imgs/black-boy-playing-guitar_1.jpg" },
      { type: "image", src: "/imgs/black-boy-playing-guitar_2.jpg" },
      { type: "image", src: "/imgs/black-boy-playing-guitar_3.jpg" },
    ],
  },
  {
    name: "Ana",
    bio: "Cantora apaixonada por rock e música brasileira.",
    gender: "Feminino",
    age: 24,
    skills: ["Compositora", "Vocalista"],
    musicGenres: ["Rock", "MPB"],
    distance: 1,
    image_profile: { type: "image", src: "/imgs/white_girl_image_profile.png" },
    images: [
      { type: "image", src: "/imgs/white-girl-singing_1.jpg" },
      { type: "image", src: "/imgs/white-girl-singing_2.jpg" },
      { type: "image", src: "/imgs/white-girl-singing_3.jpg" },
      { type: "image", src: "/imgs/white-girl-singing_4.jpg" },
    ],
  },
  {
    name: "David",
    bio: "Baterista já há 5 anos interessado em juntar uma banda de rock progressivo.",
    gender: "Masculino",
    age: 30,
    skills: ["Baterista", "Vocalista"],
    musicGenres: ["Rock", "Progressivo"],
    distance: 7,
    image_profile: { type: "image", src: "/imgs/latino_guy_image_profile.png" },
    images: [
      { type: "image", src: "/imgs/latino-guy-playing-drum_1.jpg" },
      { type: "image", src: "/imgs/latino-guy-playing-drum_2.jpg" },
      { type: "image", src: "/imgs/latino-guy-playing-drum_3.jpg" },
    ],
  },
];
