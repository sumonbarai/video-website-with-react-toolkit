import axios from "../../Utilities/axios";
const getVideo = async (selectedTag, inputText, authorName) => {
  let likeSearch = "";
  if (selectedTag.length > 0) {
    likeSearch += selectedTag.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (inputText !== "") {
    likeSearch += `&q=${inputText}`;
  }
  if (authorName !== "") {
    likeSearch = `author=${authorName}`;
  }

  const response = await axios.get(`/videos?${likeSearch}`);
  return response.data;
};
export default getVideo;
