import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Message from "../pages/Message";
import MessageDetail from "../pages/MessageDetail";
import News from "../pages/News";

// 路由映射表
const routes = [
  {
    path: "/home",
    element: <Home />,
    // children 选项，用于实现嵌套路由
    // 注意：子路由只需要写路径名称，不需要 "/"
    children: [
      { path: "news", element: <News /> },
      {
        path: "message",
        element: <Message />,
        children: [
          // useParams
          { path: "detail/:id/:title/:content", element: <MessageDetail /> },
          // useSearchParams
          { path: "detail", element: <MessageDetail /> },
        ],
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  // 路由重定向
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
];

export default routes;
