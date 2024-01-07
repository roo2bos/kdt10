function ExallSelect({ setData }) {
  return (
    <div style={{ padding: '20px', lineHeight: 1.5 }}>
      과일 :{' '}
      <select
        name="fruit"
        onChange={(e) => {
          //data state 값의 fruit 값을 변경하기
          console.log(e.target.value);
          setData((data) => {
            return { ...data, fruit: e.target.value };
          });
        }}
      >
        <option value="apple">사과</option>
        <option value="kiwi">키위</option>
        <option value="pineapple">파인애플</option>
      </select>
      &nbsp; 배경색 :&nbsp;
      <select
        name="bgc"
        onChange={(e) => {
          //data state 값의 fruit 값을 변경하기
          console.log(e.target.value);
          setData((data) => {
            return { ...data, bgc: e.target.value };
          });
        }}
      >
        <option value="black">검정</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="navy">남색</option>
        <option value="purple">보라</option>
      </select>
      &nbsp; 글자색 :&nbsp;
      <select
        name="colorText"
        onChange={(e) => {
          //data state 값의 fruit 값을 변경하기
          console.log(e.target.value);
          setData((data) => {
            return { ...data, colorText: e.target.value };
          });
        }}
      >
        <option value="black">검정</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="navy">남색</option>
        <option value="purple">보라</option>
      </select>
      &nbsp;
    </div>
  );
}
export default ExallSelect;
