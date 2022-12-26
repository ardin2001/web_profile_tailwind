import Profile from "../../assets/ardin.png";
const Banner = () => {
  return (
    <section id="home" className="pt-10 mt-16">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary">
              Hello Friend 👋, Introduce, my name is Ardin Nugraha
              <span className="block font-bold text-secondary text-4xl mt-1">
                Ardin Nugraha
              </span>
            </h1>
            <h2 className="font-medium text-third text-lg mt-1 mb-5">
              Student | Frontend Web
            </h2>
            <p className="font-medium text-third mb-10 leading-relaxed">
              I'm an Undergraduate Information Technology Student, Ryperlab
              Laboratory Assistant, Mediatek Staff Of HIMATIF UNEJ
            </p>
            <a
              href="https:www.com"
              className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80"
            >
              Contact Me
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="mt-10">
              <img
                src={Profile}
                alt="ardin nugraha"
                className="w-1/2 mx-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
