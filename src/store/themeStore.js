/* 260606 front프로젝트 시작 */
/* 260610 파일 생성 */

/* 17단계 Dark Mode */
/*  */
/*  */

import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: "light",

      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        })),
    }),
    {
      name: "admin-dashboard-theme",
    }
  )
);