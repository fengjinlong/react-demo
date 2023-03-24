import React from "react";
// 导入 React 内置组件
import {
  Link,
  Routes,
  Route,
  Navigate,
  NavLink,
  useRoutes,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import routes from "./routes";

export default function App() {
  return (
    // <div>
    //   {/* 设置路由链接 */}
    //   {/* className 接收一个函数，可以改变激活的类名 */}
    //   <Link className="list-group-item" to="/about">
    //     About
    //   </Link>
    //   <p>----</p>
    //   <Link className="list-group-item" to="/home">
    //     Home
    //   </Link>
    //   <p>****</p>
    //   {/* 设置路由链接 */}
    //   <NavLink to="/about">About</NavLink>
    //   <p>----</p>
    //   <NavLink to="/home">Home</NavLink>

    //   {/* 注册路由 */}
    //   {/* 必须用 Routes 组件进行包裹*/}
    //   {/* Route 组件的 element 属性值为对应的组件*/}
    //   {/* caseSensitive 严格区分大小写*/}
    //   <Routes>
    //     <Route path="/about" caseSensitive element={<About />}></Route>
    //     <Route path="/home" element={<Home />}></Route>
    //     {/* Navigate 组件，页面一渲染就显示对应组件，可实现重定向效果 */}
    //     <Route path="/" element={<Navigate to="/about " />}></Route>
    //   </Routes>
    // </div>

    <div>
      <div className="list-group">
        {/* 设置路由链接 */}
        <NavLink className="list-group-item" to="/about">
          About
        </NavLink>
        <p>***</p>
        <NavLink className="list-group-item" to="/home">
          Home
        </NavLink>
      </div>
      <div className="panel-body">
        {/* 注册路由 */}
        {/* 调用 useRoutes() hooks，嵌入路由映射表 */}
        {useRoutes(routes)}
      </div>
    </div>
  );
}
