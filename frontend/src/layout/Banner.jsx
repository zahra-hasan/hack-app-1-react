import "./Banner.css";

const Banner = ({ title, message }) => {
  return (
    <header>
      <div className="text-overlay">
        <h2>{title}</h2>
        <h3>{message}</h3>
      </div>
    </header>
  );
};

export default Banner;
