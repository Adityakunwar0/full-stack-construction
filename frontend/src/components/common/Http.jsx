export const apiurl = import.meta.env.VITE_API_URL + "/api/";
export const fileUrl = import.meta.env.VITE_API_URL + "/";

export const token = () => {
  const userInfo = localStorage.getItem("userInfo");
  const data = JSON.parse(userInfo);
  return data.token;
};