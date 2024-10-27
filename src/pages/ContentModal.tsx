import React from "react";

interface ContentModalProps {
    title: string[];
    date: string[];
    i: number;
    content: string[];
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function ContentModal(props: ContentModalProps){
    return (
        <div className="contentModal">
            <h3>{props.title[props.i]}</h3>
            <p>{props.date[props.i]}</p>
            <p>{props.content[props.i]}</p>
            <button onClick={():void => props.setModal(false)}>
                닫기
            </button>
        </div>
    )
}
export default ContentModal;