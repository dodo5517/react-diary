import React from "react";
import { useNavigate } from 'react-router-dom';

interface ListProps {
    title: string[];
    setTitle: React.Dispatch<React.SetStateAction<string[]>>
    date: string[];
    setSelect: React.Dispatch<React.SetStateAction<number>>;
    setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function List(props: ListProps){
    let navigate = useNavigate();
    return(
        <>
            <div className="add_container">
                <button className="add_content" onClick={():void => {
                    navigate('/add');
                }}>
                    글 추가
                </button>
            </div>
            {props.title.map(function (a: string, i: number) {
                return (
                    <div className="list" key={i}
                         onClick={(e): void => {
                             props.setSelect(i);
                             props.setModal(true);
                         }
                         }>
                        <h2>{props.title[i]}</h2>
                        <h4>{props.date[i]}</h4>
                        <div>
                            <button onClick={(e):void=>{
                                e.stopPropagation();
                                props.setSelect(i);
                                navigate('/edit');
                            }}>
                                수정
                            </button>
                            <button onClick={(e): void => {
                                e.stopPropagation();
                                let copy:string[] = [...props.title];
                                copy.splice(i, 1);
                                props.setTitle(copy);
                            }}>
                                삭제
                            </button>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}

export default List;