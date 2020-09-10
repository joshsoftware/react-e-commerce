import apiHelper from "./apiHelper";

const login = ({ email, password }) => {
  let username = email;
  console.log("in api", email, password)
  return apiHelper("post", "https://api.taiga.io/api/v1/auth", {
    username,
    password,
    type: "normal",
  });
};
export default login;
