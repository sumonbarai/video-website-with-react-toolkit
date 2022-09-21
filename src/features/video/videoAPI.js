import axios from "../../Utilities/axios";
const getSingleVideo = async (id) => {
  const response = await axios.get(`/videos/${id}`);
  return response.data;
};

export const LikeIncrease = async (id, data) => {
  const response = await axios.patch(`/videos/${id}`, { likes: data });
  return response.data;
};
export const UnLikeIncrease = async (id, data) => {
  const response = await axios.patch(`/videos/${id}`, { unlikes: data });
  return response.data;
};

export default getSingleVideo;
