import hero from "../assets/hero.jpg";
export default function Hero() {
  return (
    <div>
      <img src={hero} alt="hero" className=" w-full max-h-[600px] object-cover" />
    </div>
  );
}
