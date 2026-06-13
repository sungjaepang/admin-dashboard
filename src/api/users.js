/* 260606 front프로젝트 시작 */
/* 260610 파일 생성 */

/* 10단계 API / Hook 구조 분리 */
/*  */
/*  */

// import { users } from "../constants/users";    /*axios로 변경*/
import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get(
    "https://dummyjson.com/users"
  );

  // return users;    /*axios로 변경*/
  return response.data.users;
};


// 나중에 이런 식으로 변경 가능
// import axios from "axios";

// export const getUsers = async () => {
//   const response = await axios.get("/users");
//   return response.data;
// };