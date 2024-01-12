import { selector, useRecoilValue } from 'recoil';
import { currentUserIDState } from './MyApp';

const currentUserNameQuery = selector({
  key: 'CurrentUserName',
  get: async ({ get }) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // console.log(await res.json());
    const myDBQuery = await res.json();
    const response = await myDBQuery({
      userID: get(currentUserIDState),
    });
    console.log(response);
    return response.name;
  },
});

export default function CurrentUserInfo() {
  const userName = useRecoilValue(currentUserNameQuery);
  return <div>{userName}</div>;
}
