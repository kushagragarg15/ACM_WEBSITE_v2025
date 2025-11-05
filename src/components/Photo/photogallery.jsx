// InfiniteSlider.js
import { imageAssets } from "../../assets/assets";
import Marquee from "react-fast-marquee";
import BackgroundGradient from "../ui/background-gradient";

const fallbackImage = "path/to/fallback/image.jpg"; // Replace with your fallback image path

const PhotoGallery = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-[#1F2321] to-[#020B05] dark:from-[#fbfbd3] dark:to-[#f0e9ba] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 dark:from-gray-800 dark:via-gray-600 dark:to-gray-800 bg-clip-text text-transparent mb-4">
            Event Gallery
          </h2>
          <p className="text-xl text-slate-300 dark:text-gray-600 max-w-2xl mx-auto">
            Capturing moments of innovation, learning, and community building
          </p>
        </div>

        {/* Gallery Marquees */}
        <div className="space-y-8">
          {/* First marquee */}
          <div className="relative">
            <Marquee pauseOnHover speed={80} gradient={false}>
              {imageAssets.slice(0, 6).map((item, index) => (
                <div key={index} className="mx-4">
                  <BackgroundGradient className="rounded-2xl p-1">
                    <div className="relative group overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm">
                      <img
                        className="h-48 w-80 md:h-56 md:w-96 object-cover transition-all duration-500 group-hover:scale-110"
                        src={item.image || fallbackImage}
                        alt={`Event ${index + 1}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium">Event Highlight</p>
                      </div>
                    </div>
                  </BackgroundGradient>
                </div>
              ))}
            </Marquee>
          </div>

          {/* Second marquee */}
          <div className="relative">
            <Marquee direction="right" pauseOnHover speed={80} gradient={false}>
              {imageAssets.slice(6, 12).map((item, index) => (
                <div key={index} className="mx-4">
                  <BackgroundGradient className="rounded-2xl p-1">
                    <div className="relative group overflow-hidden rounded-2xl bg-black/20 backdrop-blur-sm">
                      <img
                        className="h-48 w-80 md:h-56 md:w-96 object-cover transition-all duration-500 group-hover:scale-110"
                        src={item.image || fallbackImage}
                        alt={`Event ${index + 7}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-sm font-medium">Community Moment</p>
                      </div>
                    </div>
                  </BackgroundGradient>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button text="View Full Gallery" variant="outline" />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
