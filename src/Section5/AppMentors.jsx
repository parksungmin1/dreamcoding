import React, { useState , useReducer } from 'react';
export default function AppMentors() {
    const [person, setPerson] = useState(initialPerson);
    const handleUpdate = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        setPerson(({
            ...person,
            mentors: person.mentors.map((person) => {
                if(person.name === prev){
                  return{ ...person , name: current};
                }
                return person;
            })
         }))
    };

    const handleAdd = () => {
            const name = prompt(`멘토의 이름은?`);
            const title = prompt(`멘토의 직함은?`);
            setPerson(({
             ...person,
             mentors:[...person.mentors , {name , title}]
            }));
    };

    const handleDelete = () => {
            const name = prompt(`어떤 멘토를 삭제하실건가요??`);
            setPerson(({...person, mentors: person.mentors.filter((mentor) => mentor.name !== name)}));
    };
    
    return (
        <div>
            <h1>
                {person.name}은 {person.title}
            </h1>
            <p>
                {person.name} 의 멘토는 
            </p>
            <ul>
                {person.mentors.map((person, index) => (
                  <li key={index}>{person.name} ({person.title})</li>  
                ))}
            </ul>
            <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
            <button onClick={handleAdd}>멘토 추가하기</button>
            <button onClick={handleDelete}>멘토 삭제하기</button>
              
        </div>
    );

 
}

const initialPerson = {
    name:'성민',
    title: '개발자',
    mentors:[
        { name: '엘리' , title:'시니어 개발자',},
        { name: '밥' , title: '주니어 개발자'},
    ],
}

