import { useState, useRef } from 'react';

const Ex2 = () => {
  const userInput = useRef();
  const titleInput = useRef();
  const [data, setData] = useState([]);
  const [user, setUser] = useState('');
  const [title, setTitle] = useState('');
  const [nextId, setNextId] = useState(data.length + 1);
  const [searchSelect, setSearchSelect] = useState('작성자');
  const [searchText, setSearchText] = useState('');
  const [schData, setSchData] = useState([]);
  const [total, setTotal] = useState(0);
  const [isResult, setIsResult] = useState(false);
  const nodataMsg = ['검색 결과가 없습니다.', '검색어를 입력 해 주세요.'];
  const [msg, setMsg] = useState('');

  const evtInput = (e) => {
    const { name, value } = e.target;
    name === 'user' && setUser(value);
    name === 'title' && setTitle(value);
    name === 'select' && setSearchSelect(value);
    name === 'query' && setSearchText(value);
    userInput.current.classList.remove('req');
    titleInput.current.classList.remove('req');
  };
  const evtAdd = (e) => {
    console.log(e);
    if (user.trim().length === 0) {
      userInput.current.classList.add('req');
      userInput.current.focus();
      return;
    }
    if (title.trim().length === 0) {
      titleInput.current.classList.add('req');
      titleInput.current.focus();
      return;
    }
    const newData = [...data, { id: nextId, user, title }]; //concat 축약 버전
    /* const newData = data.concat({
      id: nextId,
      user: user,
      title,
    }); */
    setNextId(nextId + 1);
    setData(newData);
    if (user.trim().length && title.trim().length) {
      setUser('');
      setTitle('');
    }
  };
  const search = () => {
    const newSchData = data.filter((item) => {
      console.log(item);
      console.log('searchText: ', searchText);
      console.log(item.user.includes(searchText));
      if (searchText.trim().length) {
        setMsg(nodataMsg[0]);

        if (searchSelect === '작성자' && item.user.includes(searchText)) {
          return item;
        }
        if (searchSelect === '제목' && item.title.includes(searchText)) {
          return item;
        }

        //풀이 : filter에서는 'return item'처럼 기본으로 해야하다보니 아래와 같이 작성.
        /* if (!item[searchType].includes(inputSearch)) {
          return null
        } */

        // 검색결과 있음; 검색결과(배열) 반환
      } else {
        setMsg(nodataMsg[1]);
        return null;
      }
      return false;
      // return item
    });

    setSchData(newSchData);
    setTotal(newSchData.length);
    setIsResult(true);
  };
  const searchAll = () => {
    console.log(data);
    setSchData(data); //전체 데이터
    setTotal(data.length);
    setIsResult(true);
  };

  const removeEl = (id) => {
    const nextData = data.filter((data) => {
      console.log(data.id !== id);
      return data.id !== id; //전체 리스트중 같지 않은것만 반환
    });
    setData(nextData);
  };

  console.log(data);
  console.log(!isResult);

  return (
    <>
      <dl>
        <dt>작성자 :</dt>
        <dd>
          <input
            type="text"
            name="user"
            required
            ref={userInput}
            onChange={evtInput}
            value={user}
          />
        </dd>
        <dt>제목 :</dt>
        <dd>
          <input
            type="text"
            name="title"
            required
            ref={titleInput}
            onChange={evtInput}
            onKeyDown={(e) => {
              console.log(user.length);
              if (e.nativeEvent.isComposing) return;
              let key = e.key || e.keyCode;
              key === 'Enter' && evtAdd();
            }}
            value={title}
          />
        </dd>
        <dd>
          <button onClick={evtAdd}>작성</button>
        </dd>
      </dl>
      <div className="filter">
        <select
          name="select"
          onChange={(e) => {
            setSearchSelect(e.target.value);
          }}
        >
          <option value="작성자">작성자</option>
          <option value="제목">제목</option>
        </select>
        <input
          type="text"
          name="query"
          onChange={evtInput}
          onKeyDown={(e) => {
            console.log(user.length);
            if (e.nativeEvent.isComposing) return;
            let key = e.key || e.keyCode;
            key === 'Enter' && search();
          }}
          placeholder="검색어"
        />
        <button onClick={search}>검색</button>
        <button onClick={searchAll}>전체</button>
      </div>

      <div>
        <table>
          <tbody>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
            {data.map((val, i) => {
              return (
                <tr key={i} onDoubleClick={() => removeEl(val.id)}>
                  <td>{val.id}</td>
                  <td>{val.title}</td>
                  <td>{val.user}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {isResult && (
          <div>
            <h2>검색 결과{total !== 0 && `(${total}개)`}</h2>
            {schData.length === 0 ? (
              <p>{msg}</p>
            ) : (
              <table>
                <tbody>
                  <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                  </tr>
                  {schData.map((val, i) => {
                    return (
                      <tr key={i}>
                        <td>{val.id}</td>
                        <td>{val.title}</td>
                        <td>{val.user}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Ex2;
