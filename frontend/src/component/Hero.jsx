import HeroImg from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-wrap w-full justify-center">
        {/* Left side */}
        <div className="flex flex-wrap px-2 py-2 w-1/2">
          <h1 className="font-bold text-3xl">RivanCyber</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ducimus, architecto iusto provident harum hic! Officia aliquid a
            voluptas minima eos autem repellat vitae ipsa, quo itaque quam
            maiores fugiat.
          </p>
          <button className="bg-red-900 h-10 w-100 m-10 text-white">
            Enroll Now
          </button>
        </div>

        {/* right side */}
        <div>
          <img className="w-100 h-100 mt-10" src={HeroImg} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
