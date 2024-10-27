import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Add from './pages/Add';
import List from './pages/List';
import ContentModal from "./pages/ContentModal";
import EditContent from './pages/EditContent';

function App() {
    let navigate = useNavigate();
  let [title, setTitle] = useState<string[]>(['글1','글2','글3']);
  let [date, setDate] = useState<string[]>(['2024-10-24','2024-10-25','2024-10-26']);
  let [content, setContent] = useState<string[]>(['1','2','3']);
  let [modal, setModal] = useState<boolean>(false);
  let [select, setSelect] = useState<number>(0);

  return (
      <div className="App">
          <h1 className="title">dodo's diary</h1>
          <Routes>
              <Route path="/" element={<List title={title} setTitle={setTitle} date={date} setSelect={setSelect} setModal={setModal} />} />
              <Route path="/add" element={<Add setTitle={setTitle} setDate={setDate} setContent={setContent} />} />
              <Route path="/edit" element={<EditContent title={title[select]} setTitle={setTitle} date={date[select]} setDate={setDate} content={content[select]} setContent={setContent} select={select}/> } />
          </Routes>
          {modal && <ContentModal title={title} date={date} i={select} content={content} setModal={setModal} />}  {/*상세내용보기*/}
      </div>
  );
}


export default App;
