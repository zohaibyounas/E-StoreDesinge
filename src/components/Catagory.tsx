import CatagoryCard from "./CatagoryCard";

const data = [
  {
    id: 0,
    name: "Fresh Fruits",
    count: "9 Products",
    img: "https://raw.githubusercontent.com/thebravecoders/Assets__Creating-a-Responsive-eCommerce-Website-with-React-and-Tailwind-CSS-Hindi-Tutorial/main/category__1.webp",
  },
  {
    id: 1,
    name: "Fresh Vegs",
    count: "8 Products",
    img: "https://raw.githubusercontent.com/thebravecoders/Assets__Creating-a-Responsive-eCommerce-Website-with-React-and-Tailwind-CSS-Hindi-Tutorial/main/category__2.webp",
  },
  {
    id: 2,
    name: "Canned Goods",
    count: "10 Products",
    img: "https://raw.githubusercontent.com/thebravecoders/Assets__Creating-a-Responsive-eCommerce-Website-with-React-and-Tailwind-CSS-Hindi-Tutorial/main/category__3.webp",
  },
  {
    id: 3,
    name: "Bread & Bakery",
    count: "12 Products",
    img: "https://raw.githubusercontent.com/thebravecoders/Assets__Creating-a-Responsive-eCommerce-Website-with-React-and-Tailwind-CSS-Hindi-Tutorial/main/category__4.webp",
  },
  {
    id: 4,
    name: "Fishes",
    count: "10 Products",
    img: "https://raw.githubusercontent.com/thebravecoders/Assets__Creating-a-Responsive-eCommerce-Website-with-React-and-Tailwind-CSS-Hindi-Tutorial/main/category__5.webp",
  },
  {
    id: 5,
    name: "Eggs & Dairy",
    count: "7 Products",
    img: "https://raw.githubusercontent.com/thebravecoders/Assets__Creating-a-Responsive-eCommerce-Website-with-React-and-Tailwind-CSS-Hindi-Tutorial/main/category__6.webp",
  },
  {
    id: 6,
    name: "Soft Drinks",
    count: "5 Products",
    img: "https://raw.githubusercontent.com/thebravecoders/Assets__Creating-a-Responsive-eCommerce-Website-with-React-and-Tailwind-CSS-Hindi-Tutorial/main/category__7.webp",
  },
  {
    id: 7,
    name: "Fresh Fruits",
    count: "9 Products",
    img: "https://raw.githubusercontent.com/thebravecoders/Assets__Creating-a-Responsive-eCommerce-Website-with-React-and-Tailwind-CSS-Hindi-Tutorial/main/category__1.webp",
  },
];

const Catagory = () => {
  return (
    <div className="container pt-16 ">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((el) => (
        <CatagoryCard
          key={el.id}
          img={el.img}
          name={el.name}
          count={el.count}
        />
      ))}
    </div>
    </div>
  );
};

export default Catagory;
