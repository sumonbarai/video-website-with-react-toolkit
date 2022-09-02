import axios from "../../Utilities/axios";
const getVideo = async (selectedTag, inputText) => {
  let likeSearch = "";
  if (selectedTag.length > 0) {
    likeSearch += selectedTag.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (inputText !== "") {
    likeSearch += `&q=${inputText}`;
  }
  const response = await axios.get(`/videos?${likeSearch}`);
  return response.data;
};
export default getVideo;
