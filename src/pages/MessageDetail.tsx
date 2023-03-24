// import React from "react";
// import { useMatch, useParams } from "react-router-dom";

// export default function Detail() {
//   // 1. 调用 useParams() hooks，获取传递过来的 params 参数，返回一个参数对象，可以通过解构得出数据
//   const { id, title, content } = useParams();

//   // 2. 调用 useMatch() hooks，传入完成路径，也可以获取到 params 参数，但是不常用
//   const data = useMatch("/home/message/detail/:id/:title/:content");
//   console.log(data);
//   return (
//     <div>
//       <ul>
//         <li>消息编号：{id}</li>
//         <li>消息标题：{title}</li>
//         <li>消息内容：{content}</li>
//       </ul>
//     </div>
//   );
// }

import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";

export default function Detail() {
  // 1. 调用 useSearchParams() hooks，获取传递过来的 search 参数
  // 通过数组解构的方法，获取 search(URLSearchParams) 对象
  const [search, setSearch] = useSearchParams();

  // 通过 get('search') 方法，获取 search 参数
  const id = search.get("id");
  const title = search.get("title");
  const content = search.get("content");

  console.log(search.get("id"));
  // 使用 useLocation() hooks，得到一个location对象，也可以获取 search参数，但是比较麻烦，不常用
  // const location = useLocation();
  // console.log("location", location);

  return (
    <div>
      <ul>
        {/* 调用 setSearch() 方法，可以改变传递过来的 search */}
        <button onClick={() => setSearch("id=004&title=测试&content=测试")}>
          点击更新收到的search参数
        </button>
        <li>消息编号：{id}</li>
        <li>消息标题：{title}</li>
        <li>消息内容：{content}</li>
      </ul>
    </div>
  );
}
