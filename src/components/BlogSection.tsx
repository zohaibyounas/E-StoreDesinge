import BlogCart from "./BlogCart";

const data = [
  {
    img: "https://raw.githubusercontent.com/thebravecoders/Assets__Creating-a-Responsive-eCommerce-Website-with-React-and-Tailwind-CSS-Hindi-Tutorial/main/post__1.webp",
    title: "Healthy Food Healthy Life",
    date: "Mar 5, 2024",
    comment: 8,
  },
  {
    img: "https://raw.githubusercontent.com/thebravecoders/Assets__Creating-a-Responsive-eCommerce-Website-with-React-and-Tailwind-CSS-Hindi-Tutorial/main/post__2.webp",
    title: "Healthy Food Healthy Life",
    date: "Mar 4, 2024",
    comment: 1,
  },
  {
    img: "https://raw.githubusercontent.com/thebravecoders/Assets__Creating-a-Responsive-eCommerce-Website-with-React-and-Tailwind-CSS-Hindi-Tutorial/main/post__3.webp",
    title: "Healthy Food Healthy Life",
    date: "Mar 7, 2024",
    comment: 6,
  },
];
const BlogSection = () => {
  return (
    <div className="container top-16">
      <h2 className="font-bold text-2xl">Latest News</h2>
      <p className="text-gray-500">
        Present posts in a best way to hoghlight interseting moments of your
        blog.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((el) => (
          <BlogCart 
            key={el.date}
            img={el.img}
            title={el.title}
            date={el.date}
            comment={el.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
