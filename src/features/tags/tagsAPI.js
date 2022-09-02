import axios from "../../Utilities/axios";
const getTag = async () => {
  const response = await axios.get("/tags");
  return response.data;
};
export default getTag;
