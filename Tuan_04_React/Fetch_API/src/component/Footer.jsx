import '../css/Footer.css' // Import the specific CSS for Footer
import logo from "../img/white_chefify.png?url"
const Footer = () => {
  return (
    <div className="footer">
      <div className="about-us">About Us</div>
      <div className="welcome">
        Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
      </div>
      <div className="email">
        <input type="text" placeholder="Enter Your Email" />
      </div>
      <button className="send">Send Me</button>
      <div className="down_left">
        <img src={logo} alt="" />
        <span>2023  Chefify Company</span>
        <span>Terms of Service | Pravacy Policy</span>
      </div>
      <div className="footer_right">
        <div className="d1">
          <div className="d1_ul1">
            <h3 className="ul_title">Learn More</h3>
            <ul>
              <li><a href="">Our Cooks</a></li>
              <li><a href="">See Our Features</a></li>
              <li><a href="">FAQ</a></li>
            </ul>
          </div>
          <div className="d1_ul2">
            <h3 className="ul_title">Shop</h3>
            <ul>
              <li><a href="">Gift Subscription</a></li>
              <li><a href="">Send Us Feedback</a></li>
              <li><a href=""></a></li>
            </ul>
          </div>
        </div>
        <div className="d2">
        <h3 className="ul_title">Recipes</h3>
          <ul>
            <li><a href="">WHat to Cook This Week</a></li>
            <li><a href="">Pasta</a></li>
            <li><a href="">Dinner</a></li>
            <li><a href="">Healthy</a></li>
            <li><a href="">Vegetarian</a></li>
            <li><a href="">Vegan</a></li>
            <li><a href="">Christmas</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;