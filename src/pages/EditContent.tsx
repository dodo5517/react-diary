import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface EditContentProps {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string[]>>;
    date: string;
    setDate: React.Dispatch<React.SetStateAction<string[]>>;
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string[]>>;
    select: number;
}

function EditContent(props: EditContentProps) {
    const navigate = useNavigate();
    const [editTitle, setEditTitle] = useState<string>(props.title);
    const [editDate, setEditDate] = useState<string>(props.date);
    const [editContent, setEditContent] = useState<string>(props.content);

    const saveEntry = () => {
        props.setTitle((prev: string[]): string[] => {
            const updatedTitles = [...prev];
            updatedTitles[props.select] = editTitle;
            return updatedTitles;
        });
        props.setDate((prev: string[]): string[] => {
            const updatedDates = [...prev];
            updatedDates[props.select] = editDate;
            return updatedDates;
        });
        props.setContent((prev: string[]): string[] => {
            const updatedContents = [...prev];
            updatedContents[props.select] = editContent;
            return updatedContents;
        });
        navigate('/'); // 수정 후 홈으로 이동
    };

    return (
        <div className="addModal">
            <h2>글 수정</h2>
            <input
                type="text"
                placeholder="제목 입력"
                value={editTitle}
                onChange={(e):void => setEditTitle(e.target.value)}
            />
            <input
                type="date"
                placeholder="날짜 입력"
                value={editDate}
                onChange={(e):void => setEditDate(e.target.value)}
            />
            <textarea
                placeholder="내용 입력"
                value={editContent}
                onChange={(e):void => setEditContent(e.target.value)}
            ></textarea>
            <button onClick={saveEntry}>저장</button>
            <button onClick={():void => navigate('/')}>취소</button>
        </div>
    );
}

export default EditContent;
