import './App.css';
import {Route, Routes} from "react-router-dom";
import {Mypage} from "./component/mypage.tsx";
import {Main} from "./component/main.tsx";
import {Detail} from "./component/detail.tsx";

function App() {
    console.log("test");
    return (
        <Routes>
            <Route path="/" element={<Main/>} handle={{scrollMode: "pathname" }}/>
            <Route path="/mypage/:id" element={<Mypage/>} handle={{scrollMode: "pathname" }}/>
            <Route path="/detail/:id" element={<Detail/>} handle={{scrollMode: "pathname" }}/>
        </Routes>
    );
}

export default App;
