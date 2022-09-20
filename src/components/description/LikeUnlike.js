import React from "react";
import { useDispatch } from "react-redux";
import likeSvg from "../../assets/like.svg";
import UnLikeSvg from "../../assets/unlike.svg";
import { likeIncreaseThunk } from "../../features/video/videoSlice";

const LikeUnlike = ({ likes, unlikes, id }) => {
  const dispatch = useDispatch();
  // const handleIncrease = () => {
  //   dispatch(likeIncreaseThunk({ id, data: likes + 1 }));
  // };

  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1">
        <div className="shrink-0">
          <img className="w-5 block" src={likeSvg} alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {likes}
        </div>
      </div>
      <div className="flex gap-1">
        <div className="shrink-0">
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
