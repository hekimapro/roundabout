import image from "@/images/resources/destinations-details-img-1.jpg";
import image2 from "@/images/resources/destinations-details__discount-img.jpg";

const text1 =
"Tucked in Tanzania's northeast, Arusha National Park stands as a testament to natural wonder. In its embrace, an enchanting mosaic of beauty and biodiversity unfolds. Spanning approximately 552 square kilometers, this compact gem lies just a stone's throw from Arusha city. Iconic Mount Meru watches over the park, a regal backdrop to picturesque landscapes. Amidst its boundaries, a kaleidoscope of habitats awaits – from the vibrant forests to the glimmering lakes, each corner whispers tales of life's abundance.";
const text2 =
  "Adventure knows no bounds here. Engage in exhilarating game drives, where the wilderness comes alive with each sighting. Or tread hiking trails that lead you to the heart of nature's symphony. Arusha National Park caters to explorers and thrill-seekers alike. With the company of abundant wildlife and vistas that steal breaths, Arusha National Park holds the promise of an unforgettable expedition. Proximity to the famed Serengeti and Kilimanjaro adds another layer of allure. For all who dare to venture, this haven offers an experience that etches its magic into your heart forever.";

export const destinationsDetailsLeft = {
  image,
  discoverTitle: "Discover Arusha Park",
  texts: [text1, text2],
};

export const destinationsDetailsRight = {
  title: "Last Minute",
  lists: [
    {
      id: 1,
      image: "td-img-1.jpg",
      price: "380",
      title: "Africa 2 Days Tour",
      subtitle: "Los Angeles",
    },
    {
      id: 2,
      image: "td-img-2.jpg",
      price: "380",
      title: "Africa 2 Days Tour",
      subtitle: "Los Angeles",
    },
    {
      id: 3,
      image: "td-img-3.jpg",
      price: "380",
      title: "Africa 2 Days Tour",
      subtitle: "Los Angeles",
    },
  ],
  discount: {
    image: image2,
    percent: "30%",
    title: "Discount on Spain \n Tours",
  },
};
