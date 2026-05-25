export const apiurl = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/';
export const fileUrl = import.meta.env.VITE_FILE_URL || 'http://localhost:8000/';

export const token = () => {
  const userInfo = localStorage.getItem("userInfo");
  const data = JSON.parse(userInfo);
  return data.token;
};