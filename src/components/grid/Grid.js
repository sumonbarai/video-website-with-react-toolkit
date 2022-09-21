import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideosThunk } from "../../features/videos/videosSlice";
import GridVideoItem from "./GridVideoItem";

const Grid = () => {
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );
  const { selectedTag, inputText, authorName } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVideosThunk({ selectedTag, inputText, authorName }));
  }, [dispatch, inputText, selectedTag, authorName]);

  let content;
  if (isLoading) {
    content = <div className="col-span-12">Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  } else if (!isLoading && !isError && videos.length === 0) {
    content = <div className="col-span-12">No Video found</div>;
  } else if (!isLoading && !isError && videos.length > 0) {
    content = videos.map((video) => (
      <GridVideoItem key={video.id} video={video}></GridVideoItem>
    ));
  }

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
};

export default Grid;
