import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import RelatedVideoList from "../components/description/RelatedVideoList";
import VideoDescription from "../components/description/VideoDescription";
import VideoPlayer from "../components/description/VideoPlayer";

import { fetchVideoThunk } from "../features/video/videoSlice";

const Video = () => {
  const dispatch = useDispatch();
  const { VideoId } = useParams();
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );

  const { id, link, title, tags } = video || {};

  useEffect(() => {
    dispatch(fetchVideoThunk(VideoId));
  }, [VideoId, dispatch]);

  let content = null;
  if (isLoading) {
    content = <div className="col-span-12">Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  } else if (!isLoading && !isError && !video?.id) {
    content = <div className="col-span-12">No Video found</div>;
  } else if (!isLoading && !isError && video?.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <VideoPlayer link={link} title={title} />
          <VideoDescription video={video} />
        </div>
        <RelatedVideoList id={id} tags={tags}></RelatedVideoList>
      </div>
    );
  }

  return (
    <div>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {content}
        </div>
      </section>
    </div>
  );
};

export default Video;
