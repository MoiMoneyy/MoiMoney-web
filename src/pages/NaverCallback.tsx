// src/pages/NaverCallback.tsx
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAuthStore } from "@/shared/store/auth";

export default function NaverCallback() {
  const [searchParams] = useSearchParams();
  const setLogin = useAuthStore((s) => s.setLogin); // 로그인 상태 바꾸는 액션 (직접 구현해둬야 함)

  useEffect(() => {
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    if (code && state) {
    
      setLogin(true);
    }
  }, [searchParams, setLogin]);

  return <div>네이버 로그인 처리 중...</div>;
}
