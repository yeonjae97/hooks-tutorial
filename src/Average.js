import React, { useCallback, useMemo, useRef, useState } from 'react';

// 평균 getter에 대한 기능 정의
const getAverage = numbers => {
  console.log("평균값 계산 중..");
  if(numbers.length === 0) return 0;
  const sum = numbers.reduce((a,b) => (a + b));
  return sum/numbers.length;
}

const Average = () => {

  // useState를 활용하여 빈 list 초기화
  const [list, setList] = useState([]);

  // 숫자 상태값 초기화
  const [number,setNumber] = useState('');
  const inputE1 = useRef(null);

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  },[]);
  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
    inputE1.current.focus();
  }, [number, list]);

  const avg = useMemo(() =>  getAverage(list),[list]);
  return (
    <div>
      <input value={number} onChange={onChange} ref={inputE1}/>
      <button onClick={onInsert}>등록</button>
      <ul>
        {/* 입력 값은 숫자값이고 반환 값은 JSX 형태의 li 문자열이 출력*/}
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
          <p>평균값:</p> {avg}
      </div>
    </div>
  );
};

export default Average;