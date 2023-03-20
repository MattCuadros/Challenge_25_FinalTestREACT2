import "../assets/css/Banner.css";

export default function Banner() {
  return (
    <div className="container-fluid banner m-0 p-4 text-center text-white">
      <img src="../banner.png" alt="Banner" className="w-75 h-100" />
      <h2 className="display-2 p-1">
        <strong>¡Pizzería Mamma Mía!</strong>
        <br />
        <span className="display-6">
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </span>
        <hr className="mx-5" />
      </h2>
    </div>
  );
}
