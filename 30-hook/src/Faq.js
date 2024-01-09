import useToggle from './hooks/useToggle';
function Faq() {
  const [isFaqOpen, setIsFaqOpen] = useToggle();
  console.log(useToggle());
  return (
    <>
      <h1>Custom Hook(useToggle) ex</h1>
      <div onClick={setIsFaqOpen} style={{ cursor: 'pointer' }}>
        Q. 리액트에서 커스텀 훅 만들 수 있나?
      </div>
      {isFaqOpen && <div>A. 답변 입니다</div>}
    </>
  );
}
export default Faq;
