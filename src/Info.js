import React, { useEffect, useState } from 'react';




const Info = () => {
  const[name, setName] = useState('');
  const[nickname, setNickname] = useState('');

  // 렌더링 된 이후에 동작될 useEffect 구문
  useEffect(() => {
    // console.log('렌더링이 완료되었습니다!');
    // console.log({
    //   name,
    //   nickname
    // });
    console.log('effect');
    console.log(name);
    return () =>{
      console.log('cleanup');
      console.log(name);
    };
  },[name])

  // 마운트될 때만 실행 => 한번 호출되고 그 다음부터는 호출되지 않음
  // useEffect(() =>{
  //   console.log('마운트될 때만 실행');
  // },[]);
  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  }
  
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName}/>
        <input value={nickname} onChange={onChangeNickname}/>
      </div>
      <div>
        <div>
          <b>이름: </b> {name}
        </div>
        <div>
          <b>닉네임: </b> {nickname}
        </div>
      </div>
    </div>

  );
};

export default Info;