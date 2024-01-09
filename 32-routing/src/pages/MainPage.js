import React from 'react';
import { useSearchParams } from 'react-router-dom';

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('mode')); // Dark or null
  // URL이 / 일때 => null
  // URL이 /?mode=Dark 일때 => Dark
  return (
    <main className={['Main', searchParams.get('mode')].join(' ')}>
      <h1>Main Page</h1>
      <button
        onClick={() => {
          //{mode:dark} 설정
          // console.log('');
          setSearchParams({ mode: 'Dark' });
        }}
      >
        Dark Mode
      </button>
    </main>
  );
};

export default MainPage;
