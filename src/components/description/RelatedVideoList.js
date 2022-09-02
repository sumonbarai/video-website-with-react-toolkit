import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideosThunk } from "../../features/relatedVideos/relatedVideosSlice";
import RelatedVideo from "./RelatedVideo";

const RelatedVideoList = ({ id, tags }) => {
  const dispatch = useDispatch();
  const { relatedVideos, isLoading } = useSelector(
    (state) => state.relatedVideos
  );
  useEffect(() => {
    dispatch(
      fetchRelatedVideosThunk({
        currentId: id,
        tags: tags,
      })
    );
  }, [dispatch, id, tags]);

  let content = null;
  if (relatedVideos) {
    content = relatedVideos.map((videoItem) => (
      <RelatedVideo key={videoItem.id} videoItem={videoItem} />
    ));
  } else {
    content = <div>No Related Video Found</div>;
  }

  return <div>{content}</div>;
};

export default RelatedVideoList;
