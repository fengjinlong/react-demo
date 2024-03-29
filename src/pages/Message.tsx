import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Message() {
  const [message] = useState([
    { id: 1, title: "message1", content: "努力学习" },
    { id: 2, title: "message2", content: "学习React" },
    { id: 3, title: "message3", content: "前端工程师" },
  ]);
  return (
    <div>
      <ul>
        {message.map((m) => {
          return (
            // <li key={m.id}>
            //   {/* 1. 传递 params 参数，在路径后面用 / 进行拼接  获取 useParams*/}
            // {/* 2. 在路由表中定义接收路由参数 path: 'detail/:id/:title/:content' */}
            //   <Link to={`detail/${m.id}/${m.title}/${m.content}`}>
            //     {m.title}
            //   </Link>
            // </li>
            <li key={m.id}>
              {/* 1. 传递 search 参数，在路径后面用 ? 进行拼接 用 useSearchParams 获取*/}
              {/* 2. 不需要在路由表中定义接收路由参数 */}
              <Link
                to={`detail?id=${m.id}&title=${m.title}&content=${m.content}`}
              >
                {m.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <hr />

      {/* 3. 路由占位符 */}
      <Outlet />
    </div>
  );
}
