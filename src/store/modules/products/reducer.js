import adidog from "../../../images/cachorro-grande-roupa-capuz.jpg";
import pikachuCapuz from "../../../images/roupa-pet-pikachu-com-capuz.jpg";
import pikachu from "../../../images/roupa-pet-pikachu2.jpg";
import elegance from "../../../images/roupa-pet-elegance.jpg";
import panda from "../../../images/roupa-pet-panda-porte-pequeno.jpg";
import dinossauroMedio from "../../../images/roupa-pet-dinossauro-porte-medio.jpg";
import dinossauroGrande from "../../../images/roupa-pet-dinossauro-porte-grande.jpg";
import alien from "../../../images/roupa-pet-alien-com-capuz.jpg";
import unicornio from "../../../images/roupa-pet-unicorn.jpg";
import caminhaCoroas from "../../../images/caminha-pet-coroas.jpg";
import caminhaGrafite from "../../../images/caminha-pet-grafite.jpg";
import cabana from "../../../images/cabana-pet-porte-pequeno.jpg";

const defaultState = [
  {
    id: 1,
    name: "Moletom Adidog c/ capuz - cães de porte grande",
    price: 50,
    image: adidog
  },
  {
    id: 2,
    name: "Roupa Pikachu c/ capuz - cães de pequeno porte",
    price: 39,
    image: pikachuCapuz
  },
  {
    id: 3,
    name: "Roupa Pikachu - cães de pequeno porte",
    price: 36,
    image: pikachu
  },
  {
    id: 4,
    name: "Roupa pet Elegance - cães de porte médio",
    price: 50,
    image: elegance
  },
  {
    id: 5,
    name: "Roupa panda - porte pequeno",
    price: 38,
    image: panda
  },
  {
    id: 6,
    name: "Roupa Dinossauro - cães de porte médio",
    price: 42,
    image: dinossauroMedio
  },
  {
    id: 7,
    name: "Roupa Dinossauro - cães de porte grande",
    price: 52,
    image: dinossauroGrande
  },
  {
    id: 8,
    name: "Roupa Alien - cães de porte médio",
    price: 42,
    image: alien
  },
  {
    id: 9,
    name: "Roupa Unicornio - cães de pequeno porte",
    price: 42,
    image: unicornio
  },
  {
    id: 10,
    name: "Caminha pet coroas - tamanho médio",
    price: 49.9,
    image: caminhaCoroas
  },
  {
    id: 11,
    name: "Caminha pet grafite - tamanho médio",
    price: 49.9,
    image: caminhaGrafite
  },
  {
    id: 12,
    name: "Cabana pet - pequena",
    price: 59.9,
    image: cabana
  }
];

const productsReducer = (state = defaultState, action) => {
  return state;
};

export default productsReducer;
