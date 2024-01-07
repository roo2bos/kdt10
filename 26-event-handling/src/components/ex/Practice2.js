function Practice2(props) {
  const { evtHandler, data, colors } = props;
  console.log(data);
  return (
    <div style={{ padding: '20px', lineHeight: 1.5 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '150px',
          fontSize: '5rem',
        }}
      >
        <img src={data['fruit']} alt="" height="100%" />
        {/* {fruit} */} {/* 에모지 버전 */}
      </div>
      과일 :&nbsp;
      <select name="fruit" onChange={evtHandler}>
        <option value="0">사과</option>
        <option value="1">키위</option>
        <option value="2">파인애플</option>
      </select>
      &nbsp; 배경색 :&nbsp;
      <select name="bgc" onChange={evtHandler}>
        {colors.map((obj, i) => (
          <option key={i} value={obj.color}>
            {obj.name}
          </option>
        ))}
      </select>
      &nbsp; 글자색 :&nbsp;
      <select name="colorText" onChange={evtHandler}>
        {colors.map((obj, i) => (
          <option key={i} value={obj.color}>
            {obj.name}
          </option>
        ))}
      </select>
      &nbsp;
      <br />
      내용 :&nbsp;
      <input
        type="text"
        name="content"
        onKeyUp={evtHandler}
        placeholder="내용을 입력하세요."
      />
      <p
        style={{
          backgroundColor: data['bgc'],
          color: data['colorText'],
          textShadow:
            'rgb(255, 255, 255) 1px 1px 0, rgb(255, 255, 255) -1px -1px 0,rgb(255, 255, 255) -1px 1px 0,rgb(255, 255, 255) 1px -1px 0',
          padding: '10px',
          fontSize: '2rem',
          fontWeight: 'bold',
        }}
      >
        {data['content']}
      </p>
    </div>
  );
}
export default Practice2;
