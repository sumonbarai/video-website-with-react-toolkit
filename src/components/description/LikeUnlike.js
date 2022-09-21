import React from "react";
import { useDispatch } from "react-redux";
import likeSvg from "../../assets/like.svg";
import UnLikeSvg from "../../assets/unlike.svg";

import {
  likeIncreaseThunk,
  UnlikeIncreaseThunk,
} from "../../features/video/videoSlice";

const LikeUnlike = ({ likes, unlikes, id }) => {
  const dispatch = useDispatch();
  const handleLike = () => {
    const data = likes + 1;
    dispatch(likeIncreaseThunk({ id, data }));
  };
  const handleUnlikes = () => {
    const data = unlikes + 1;
    dispatch(UnlikeIncreaseThunk({ id, data }));
  };

  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0 cursor-pointer" onClick={handleLike}>
          <img className="w-5 block" src={likeSvg} alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {likes}
        </div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0 cursor-pointer" onClick={handleUnlikes}>
          <img className="w-5 block" src={UnLikeSvg} alt="Unlike" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {unlikes}
        </div>
      </div>
    </div>
  );
};

export default LikeUnlike;
