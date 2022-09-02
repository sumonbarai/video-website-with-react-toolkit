import axios from "../../Utilities/axios";
const getSingleVideo = async (id) => {
  const response = await axios.get(`/videos/${id}`);
  return response.data;
};
export default getSingleVideo;
