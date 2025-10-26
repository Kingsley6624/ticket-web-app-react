import { features } from "../components/data";

const LandingPage = () => {
  return (
    <>
      <section className="relative bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-24 px-4 md:px-8 lg:px-16 clip-wave">
        <div className="absolute top-10 right-10 w-24 h-24 bg-white/20 rounded-full"></div>
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Effortless Ticketing Starts Here
          </h2>
          <p className="text-lg max-w-xl mb-8">
            Manage events, support requests, and travel bookings with one
            powerful dashboard. Fast, flexible, and built for scale.
          </p>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg">
              Get Started
            </button>
            <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg">
              Get Started
            </button>
          </div>
        </div>
        <svg
          className="absolute bottom-0 left-0  w-full"
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
        >
          <path
            fill="#f9fafb"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,160C672,181,768,235,864,240C960,245,1056,203,1152,186.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section className="grid md:grid-cols-3 gap-6 p-10 bg-gray-50">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default LandingPage;
