/* 260606 front프로젝트 시작 */
/* 260610 파일 생성 */

/* 10단계 API / Hook 구조 분리 */
/*  */
/*  */

import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/users";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
};