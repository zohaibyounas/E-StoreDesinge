
const Banner = () => {
  return (
    <div className="container pt-16">
     <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="overflow-hidden rounded-lg">
            <img className="hover:scale-150 transition-transform"
            src="https://raw.githubusercontent.com/thebravecoders/Assets__Creating-a-Responsive-eCommerce-Website-with-React-and-Tailwind-CSS-Hindi-Tutorial/main/banner__1.webp"
             alt="banner"
              />
        </div>
        <div className="overflow-hidden rounded-lg">
            <img className="hover:scale-150 transition-transform"
            src="https://raw.githubusercontent.com/thebravecoders/Assets__Creating-a-Responsive-eCommerce-Website-with-React-and-Tailwind-CSS-Hindi-Tutorial/main/banner__2.webp"
             alt="banner"
              />
        </div>

     </div>
    </div>
  )
}

export default Banner
