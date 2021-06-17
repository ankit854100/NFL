import React, { useState } from 'react';
import faker from 'faker'
import InfiniteScroll from 'react-infinite-scroll-component';

function App() {
  const data = new Array(50).fill().map((value, id) => (({
    id: id,
    title: "this is title",
    body: "this is body"
  })))

  const [count, setCount] = useState({
    prev: 0,
    next: 30
  })
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(data.slice(count.prev, count.next))
  const getMoreData = () => {
    console.log("getMoreData called!!!!!!!!");
    if (current.length === data.length) {
      console.log("data is finished!!!!!!");
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(current.concat(data.slice(count.prev + 30, count.next + 30)))
    }, 2000)
    setCount((prevState) => ({ prev: prevState.prev + 30, next: prevState.next + 30}))
  }

  return (
    <div className="topS">
      <div id="infinite-top-wrapper">
      <InfiniteScroll
      dataLength={current.length}
      next={getMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      scrollableTarget="infinite-top-wrapper"
      >
        <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {current && current.map(((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          )))
          }
        </tbody>
        
      </table>
      </InfiniteScroll>
      </div>
      <style jsx>{`
          .topS{
            position: relative;
          }
          #infinite-top-wrapper{
            height: 200px !important;
            overflow-y: scroll !important;
          }
      `}</style>
      
    </div>
  );
}
export default App;