import React from "react";
import RelatedVideo from "../components/description/RelatedVideo";
import VideoDescription from "../components/description/VideoDescription";
import VideoPlayer from "../components/description/VideoPlayer";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";

const Video = () => {
  return (
    <div>
      <NavBar />
      <section class="pt-6 pb-20">
        <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div class="grid grid-cols-3 gap-2 lg:gap-8">
            <div class="col-span-full w-full space-y-8 lg:col-span-2">
              <VideoPlayer />
              <VideoDescription />
            </div>
            <RelatedVideo />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Video;
