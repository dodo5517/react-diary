import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AddProps {
    setTitle: React.Dispatch<React.SetStateAction<string[]>>;
    setDate: React.Dispatch<React.SetStateAction<string[]>>;
    setContent: React.Dispatch<React.SetStateAction<string[]>>;
}

function Add(props: AddProps) {
    const navigate = useNavigate();
    const [newTitle, setNewTitle] = useState<string>('');
    const [newDate, setNewDate] = useState<string>('');
    const [newContent, setNewContent] = useState<string>('');

    const addEntry = () => {
        props.setTitle((prev:string[]):string[] => [...prev, newTitle]);
        props.setDate((prev:string[]):string[] => [...prev, newDate]);
        props.setContent((prev:string[]):string[] => [...prev, newContent]);
        navigate('/');
    };

    return (
        <div className="addModal">
            <h2>새 글 추가</h2>
            <input
                type="text"
                placeholder="제목 입력"
                value={newTitle}
                onChange={(e):void => setNewTitle(e.target.value)}
            />
            <input
                type="date"
                placeholder="날짜 입력"
                value={newDate}
                onChange={(e):void => setNewDate(e.target.value)}
            />
            <textarea
                placeholder="내용 입력"
                value={newContent}
                onChange={(e):void => setNewContent(e.target.value)}
            ></textarea>
            <button onClick={addEntry}>추가</button>
            <button onClick={():void => navigate('/')}>닫기</button>
        </div>
    );
}

export default Add;
