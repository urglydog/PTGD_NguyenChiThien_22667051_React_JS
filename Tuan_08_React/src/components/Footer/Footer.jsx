import logo from '../../img/white_chefify.png?url'
function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 rounded-lg">
      {/* Grid with 4 columns, About Us spans 2 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">

        {/* About Us: chiếm 2 cột */}
        <div className="md:col-span-2">
          <h2 className="text-lg font-bold mb-3">About Us</h2>
          <p className="text-sm mb-4">
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <div className="flex justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded px-3 py-1 text-black w-2/3 bg-white"
            />
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-1 ml-2 rounded">
              Send
            </button>
          </div>
          <div className=" mt-25   max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Chefify logo" className="h-6" />
            </div>
            <div className="my-2 md:my-0">2023 Chefify Company</div>
            <div className="space-x-4">
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* Learn More */}
        <div>
          <h2 className="text-lg font-bold mb-3">Learn More</h2>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Our Cooks</a></li>
            <li><a href="#" className="hover:underline">See Our Features</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>

          <h2 className="text-lg font-bold mt-6 mb-3">Shop</h2>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Gift Subscription</a></li>
            <li><a href="#" className="hover:underline">Send Us Feedback</a></li>
          </ul>
        </div>

        {/* Recipes */}
        <div>
          <h2 className="text-lg font-bold mb-3">Recipes</h2>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">What to Cook This Week</a></li>
            <li><a href="#" className="hover:underline">Pasta</a></li>
            <li><a href="#" className="hover:underline">Dinner</a></li>
            <li><a href="#" className="hover:underline">Healthy</a></li>
            <li><a href="#" className="hover:underline">Vegetarian</a></li>
            <li><a href="#" className="hover:underline">Vegan</a></li>
            <li><a href="#" className="hover:underline">Christmas</a></li>
          </ul>
        </div>
      </div>



    </footer>
  );
}

export default Footer;
