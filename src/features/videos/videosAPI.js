import axios from "../../Utilities/axios";
const getVideo = async () => {
  const response = await axios.get("/videos");
  return response.data;
};
export default getVideo;
