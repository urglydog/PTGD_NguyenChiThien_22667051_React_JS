import '../component/Footer.css' // Import the specific CSS for Footer

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
    </div>
  );
};

export default Footer;