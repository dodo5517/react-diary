import React, {useState} from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState<string[]>(['글1','글2','글3']);
  let [date, setDate] = useState<string[]>(['2024-10-24','2024-10-25','2024-10-26']);
  let [content, setContent] = useState<string[]>(['1','2','3']);
  let [modal, setModal] = useState<boolean>(false);
  let [select, setselect] = useState<number>(0);

  return (
      <div className="App">
          <h1 className="title">dodo's diary</h1>
          <div className="add_container">
              <button className="add_content" onClick={()=>{

              }}>
                  글 추가
              </button>
          </div>
          {
              title.map(function (a, i) {
                  return (
                      <div className="list" key={i}
                           onClick={(e) => { setselect(i); setModal(true); }
                      }>
                          <h2>{title[i]}</h2>
                          <h4>{date[i]}</h4>
                          <div>
                              <button>
                                  수정
                              </button>
                              <button onClick={(e)=>{
                                  e.stopPropagation();
                                  let copy = [...title];
                                  copy.splice(i,1);
                                  setTitle(copy);
                              }}>
                                  삭제
                              </button>
                          </div>
                      </div>
                  )
              })
          }
          {
              modal && <ContentModal title={title} date={date} i={select} content={content} setModal={setModal} />
          }
      </div>
  );
}
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
            <button onClick={() => props.setModal(false)}>
                닫기
            </button>
        </div>
    )
}

export default App;
