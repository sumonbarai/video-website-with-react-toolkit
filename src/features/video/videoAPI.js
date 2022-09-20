import axios from "../../Utilities/axios";
const getSingleVideo = async (id) => {
  const response = await axios.get(`/videos/${id}`);
  return response.data;
};

export const updateLike = async (id, data) => {
  const response = await axios.put(`/videos/${id}`, data);
  return response.data;
};
export default getSingleVideo;
