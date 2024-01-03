function Practice(props) {
  const { evtHandler, fruit, bgc, colorText, content } = props;

  return (
    <div style={{ padding: '20px', lineHeight: 1.5 }}>
      <div style={{ fontSize: '5rem' }}>
        {/* <img src={fruit} alt="" width="150" /> */}
        {fruit}
      </div>
      과일 :
      <select name="fruit" onChange={evtHandler}>
        <option value="0">사과</option>
        <option value="1">키위</option>
        <option value="2">파인애플</option>
      </select>
      배경색 :
      <select name="bgc" onChange={evtHandler}>
        <option value="black">검정</option>
        <option value="blue">파랑</option>
        <option value="red">빨강</option>
      </select>
      글자색 :
      <select name="colorText" onChange={evtHandler}>
        <option value="black">검정</option>
        <option value="blue">파랑</option>
        <option value="red">빨강</option>
      </select>
      <br />
      내용 :
      <input
        type="text"
        name="content"
        onKeyUp={evtHandler}
        placeholder="내용을 입력하세요."
      />
      <p
        style={{
          backgroundColor: bgc,
          color: colorText,
          textShadow:
            'rgb(255, 255, 255) 1px 1px 1px, rgb(255, 255, 255) -1px -1px 1px,rgb(255, 255, 255) -1px 1px 1px,rgb(255, 255, 255) 1px -1px 1px',
          padding: '10px',
          fontWeight: 'bold',
        }}
      >
        {content}
      </p>
    </div>
  );
}
export default Practice;
