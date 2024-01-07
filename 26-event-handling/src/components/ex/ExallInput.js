function ExallInput({ setData }) {
  const handleInput = (e) => {
    const content = e.target.value;
    setData((data) => {
      return { ...data, content };
    });
  };
  return (
    <div>
      내용 :{' '}
      <input
        type="text"
        name="content"
        onKeyUp={handleInput}
        placeholder="내용을 입력하세요."
      />
    </div>
  );
}
export default ExallInput;
