import React, { useState } from "react";

const Tmp = () => {
  const [selectedTab, setSelectedTab] = useState<string>("");

  const portfolioTypes = [
    "직접입력 포트폴리오",
    "성장형 포트폴리오",
    "안정형 포트폴리오",
    "공격형 포트폴리오",
    "분산형 포트폴리오",
  ];

  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };

  return (
    <>
      <div style={styles.loginContainer}>
        <div style={styles.title}>
          <h5>먼저 포트폴리오를 생성해주세요</h5>
          <h5>포트폴리오 이름을 설정해주세요</h5>
        </div>
        <div style={styles.tabContainer}>
          {portfolioTypes.map((type, index) => (
            <div
              key={index}
              style={{
                ...styles.tab,
                backgroundColor:
                  selectedTab === type ? "#f0f0f0" : "transparent",
              }}
              onClick={() => handleTabClick(type)}
              onMouseEnter={(e) => {
                if (selectedTab !== type) {
                  e.currentTarget.style.backgroundColor = "#f0f0f0";
                }
              }}
              onMouseLeave={(e) => {
                if (selectedTab !== type) {
                  e.currentTarget.style.backgroundColor = "transparent";
                }
              }}
            >
              {type}
            </div>
          ))}
        </div>
        <div
          style={{
            ...styles.button,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#f0f0f0";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "gray";
          }}
        >
          선택하기
        </div>
      </div>
    </>
  );
};

const styles: { [k: string]: React.CSSProperties } = {
  loginContainer: {
    whiteSpace: "pre-wrap",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto",
    paddingTop: 40,
    marginBottom: 144,
    width: "60vh",
    height: "80vh",
    backgroundColor: "white",
  },
  title: {
    marginLeft: "-15vh",
    fontSize: 23,
  },
  tabContainer: {
    flexDirection: "column",
    backgroundColor: "white",
    padding: "10px 0",
    zIndex: 1000,
  },
  tab: {
    width: "45vh",
    padding: "6px 20px",
    cursor: "pointer",
    borderRadius: "1rem",
    border: "1px solid #f0f0f0",
    fontSize: "16px",
    transition: "background-color 0.2s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "50px",
  },
  button: {
    width: "45vh",
    marginTop: "1rem",
    padding: "4px 20px",
    cursor: "pointer",
    borderRadius: "1rem",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    minHeight: "50px",
    backgroundColor: "gray",
    justifyContent: "center",
    color: "white",
  },
};

export default Tmp;
