import React, { useEffect, useRef, useState } from 'react';

const Create = () => {
  const [name, setName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const hasSpace = /\s/.test(name);
  const isValid = !hasSpace && /^[A-Za-z0-9가-힣]{1,10}$/.test(name);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
     <div style={styles.loginContainer}>
      <div style={styles.title}>
        <h5>먼저 포트폴리오를 생성해주세요</h5>
        <h5>포트폴리오 이름을 설정해주세요</h5>
      </div>
      <div style={styles.tabContainer}>
        <input
          ref={inputRef}
          type="text"
          style={styles.tab}
          placeholder="직접 입력해주세요"
          value={name}
          maxLength={10}
          aria-invalid={!isValid}
          onChange={(e) => setName(e.target.value)}
        />
        <div style={styles.helperRow}>
          <span style={hasSpace ? styles.helperErrorText : styles.helperText}>
            {hasSpace ? '공백 없이 입력해주세요' : '최대 10글자'}
          </span>
        </div>
      </div>


      <div
        role="button"
        aria-disabled={!isValid}
        style={{
          ...styles.button,
          ...(isValid ? styles.buttonEnabled : styles.buttonDisabled)
        }}
        onClick={isValid ? () => { /* TODO: submit */ } : undefined}
        onMouseEnter={isValid ? (e) => { e.currentTarget.style.backgroundColor = '#f0f0f0'; } : undefined}
        onMouseLeave={isValid ? (e) => { e.currentTarget.style.backgroundColor = 'gray'; } : undefined}
      >
        다음
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
    width: '60vh',
    height: '80vh',
    backgroundColor: 'white'
  },
  title: {
    marginLeft: '-15vh',
    fontSize: 23
  },
  tabContainer: {    
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: '10px 0',
    zIndex: 1000,
  },
  tab: {
    width: '45vh',
    padding: '6px 20px',
    cursor: 'text',
    borderRadius: '1rem',
    border: '1px solid #f0f0f0',
    fontSize: '16px',
    transition: 'background-color 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '50px'
  },
  helperRow: {
    width: '98%',
    marginTop: '6px',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  helperText: {
    color: '#9e9e9e',
    fontSize: '12px'
  },
  helperErrorText: {
    color: '#d32f2f',
    fontSize: '12px'
  },
  button: {
    width: '45vh',
    marginTop: 'auto',
    marginBottom: '1rem',
    padding: '4px 20px',
    cursor: 'pointer',
    borderRadius: '1rem',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    minHeight: '50px',
    backgroundColor: 'gray',
    justifyContent: 'center',
    color: 'white'
  },
  buttonEnabled: {
    backgroundColor: '#000052'
  },
  buttonDisabled: {
    backgroundColor: 'gray'
  }
}

export default Create;