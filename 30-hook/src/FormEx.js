import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register, //input할당, value 변경 감지할때 사용
    handleSubmit, //form submit 이벤트시 호출
    formState: { errors }, //폼 상태 객체(그 안에 에러 객체)
    watch, //특정 폼 필드의 값을 실시간으로 사용
  } = useForm();
  // console.log('erros', errors);
  console.log('watch: ', watch('username'));
  const onValid = (data) => {
    // console.log('onValid: ', data);
    console.log(data);
  };
  const onInValid = (err) => {
    // console.log('onInValid: ', err);
    console.log('error: ', err);
  };
  return (
    <>
      <h1>react-hook-form 실습</h1>
      {/* handleSubmit(func A [, func B)]) : 두개의 함수를 받을 수 있음
        - func A : 필수 , 유효할때 실행,
        - func B : 선택 , 유효하지 않을때 사용,
      */}
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <input
          type="text"
          placeholder="이름"
          //register: 원래 name="username"와 같음
          {...register('username', {
            required: '이름은 필수 항목 입니다',
          })}
        />
        {/* 에러메세지 */}
        {errors.username?.message}
        <br />
        <input
          type="number"
          placeholder="나이"
          {...register('age', {
            validate: {
              useAge: (value) => {
                return value >= 0 || '0이상의 숫자만 입력 가능 합니다'; //type="text"로 받을때는 return value >= 0 를 Number(value) >= 0 으로 가능
              },
            },
          })}
        />
        {errors.age?.message}
        <br />
        <button type="submit">제출</button>
      </form>
    </>
  );
};

export default Form;
