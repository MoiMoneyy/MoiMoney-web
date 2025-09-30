import { useEffect, useState } from "react";
import React from "react";
import naverLogo from "@assets/naver-logo.svg";
import kakaoLogo from "@assets/kakao-logo.svg";
import { useAuthStore } from "@/shared/store/auth";

type Provider = "naver" | "kakao";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [recentProvider, setRecentProvider] = useState<Provider | null>(null);
  const setLogin = useAuthStore((s)=> s.setLogin);

  useEffect(() => {
    const saved = localStorage.getItem(
      "recentLoginProvider"
    ) as Provider | null;
    if (saved === "naver" || saved === "kakao") {
      setRecentProvider(saved);
    }
  }, []);

  const loginButtonClick = (provider: Provider) => {
    localStorage.setItem("recentLoginProvider", provider);
    setRecentProvider(provider);
  
    if (provider === "naver") {
      const clientId = "_PG0G00u5_lxKPc17PB9";
      const redirectUri =
        import.meta.env.MODE === "production"
          ? encodeURIComponent("https://moi-money-web.vercel.app/naver/callback")
          : encodeURIComponent("http://localhost:5173/naver/callback");
  
      const state = Math.random().toString(36).substring(2, 15);
  
      const naverAuthUrl = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;
  
      window.location.href = naverAuthUrl;
      return;
    }
  };
  
  const handleGuestClick = async () => {
    try {
      setLoading(true);
      setLogin(true);
      // 예: window.location.href = '/';
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.loginContainer}>
      <div style={styles.mainDisplay}>
        <div style={styles.loginButtons}>
          <div style={styles.socialBtnWrapper}>
            {recentProvider === "naver" && (
              <div style={styles.recentBadge}>최근 로그인</div>
            )}
            <span
              style={styles.naverButton}
              onClick={() => loginButtonClick("naver")}
            >
              <img src={naverLogo} width={16} height={16} />
              네이버 로그인
            </span>
          </div>

          <div style={styles.socialBtnWrapper}>
            {recentProvider === "kakao" && (
              <div style={styles.recentBadge}>최근 로그인</div>
            )}
            <span
              style={styles.kakaoButton}
              onClick={() => loginButtonClick("kakao")}
            >
              <img src={kakaoLogo} width={18} height={18} />
              카카오 로그인
            </span>
          </div>

          <span style={styles.withoutText} onClick={handleGuestClick}>
            {loading ? "진입 중..." : "로그인 없이 이용하기"}
          </span>
        </div>
      </div>
    </div>
  );
};

const styles: { [k: string]: React.CSSProperties } = {
  loginContainer: {
    whiteSpace: "pre-wrap",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 40,
    margin: "0 auto",
    paddingTop: 390,
    marginBottom: 144,
    width: '70%',
    height: '60vh',
    backgroundColor: 'white'
  },
  mainDisplay: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 55,
    alignSelf: "stretch",
  },
  welcomeText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
    color: "#2E2E2E",
    textAlign: "center",
    fontFamily: '"Noto Sans KR"',
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "140%",
  },
  loginButtons: {
    display: "flex",
    width: 300,
    flexDirection: "column",
    gap: 10,
  },
  socialBtnWrapper: {
    position: "relative",
    display: "inline-block",
  },
  recentBadge: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "#ffd43b",
    color: "black",
    fontSize: 11,
    padding: "2px 6px",
    borderRadius: 12,
    boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
    zIndex: 1,
  },
  naverButton: {
    display: "flex",
    height: 45,
    padding: "0px 35px",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
    alignSelf: "stretch",
    borderRadius: 10,
    background: "#03C75A",
    color: "#FFF",
    fontFamily: '"Noto Sans KR"',
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "140%",
    cursor: "pointer",
  },
  kakaoButton: {
    display: "flex",
    height: 45,
    padding: "0px 14px",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    alignSelf: "stretch",
    borderRadius: 10,
    background: "#FEE500",
    color: "rgba(0, 0, 0, 0.85)",
    fontFamily: '"Noto Sans KR"',
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "140%",
    cursor: "pointer",
  },
  withoutText: {
    color: "#666",
    textAlign: "center",
    fontFamily: '"Noto Sans KR"',
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "140%",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationSkipInk: "none" as any,
    textDecorationThickness: "auto" as any,
    textUnderlineOffset: "25%",
    cursor: "pointer",
  },
};

export default LoginPage;
