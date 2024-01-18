"use client";
import { useEffect } from "react";

export const MSWComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        require("@/mocks/browser");
      }
    }
  }, []);

  return null;
};

//동적 로딩: require는 런타임에 호출됩니다.
//이는 코드의 실행 도중에 모듈을 불러올 수 있다는 의미이며,
//따라서 조건부 로딩이나 런타임 중 모듈 로딩이 가능합니다.
