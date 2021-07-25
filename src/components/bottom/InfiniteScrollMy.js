import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import PlayerListItem from './PlayerListItem';


function InfinteScrollMy(props) {

    const [expMin, setExpMin] = useState("0");
    const [expMax, setExpMax] = useState("100");
    const [count, setCount] = useState({
        prev: 0,
        next: 15
      });
    const [myArray, setMyArray] = useState([]);

    useEffect(() => {
        setCount((prevState) => ({ prev: 0, next: 15 }));
        let temp = [];
        if(props.my.length >= 15){
            for(let i = 0; i < 15; i++){
                temp.push(props.my[i])
            }
        }
        else if(props.my.length < 15){
            for(let i = 0; i < props.my.length; i++){
                temp.push(props.my[i])
            }
        }
        setMyArray(temp);
        setCount((prevState) => ({ prev: prevState.prev + 15, next: prevState.next + 15 }));
    },[props.my])

    const getMoreData = () => {
        // console.log("called");
        setTimeout(() => {
          for(let i = count.prev; i < count.next; i++ ){
            if(i > props.my.length - 1) break;
            // console.log("called",count);
            setMyArray((prev) => {
                return [...prev, props.my[i]];
            })
          }
        //   console.log(myArray.length, props.my.length, count);
        }, 1000)
        setCount((prevState) => ({ prev: prevState.prev + 15, next: prevState.next + 15 }))
      }

      const handleExpMin = (e) => {
        setExpMin(e.target.value);
      };
    
      const handleExpMax = (e) => {
        setExpMax(e.target.value);
      };

    return (
        <div>
            <InfiniteScroll
                dataLength={myArray.length}
                next={getMoreData}
                hasMore={props.position === "ALL" ? myArray.length !== props.my.length: false}
                loader={<h4>Loading...</h4>}
                scrollableTarget="table-container"
            >
                <table>
                    <thead>
                        <tr>
                            <th>
                            <input type="checkbox" checked={props.selectMyCheck} onChange={props.handleSelectMyCheck}/>
                            </th>
                            <th style={{ width: "80px" }}>
                            <span>
                                CS<i class="fa fa-info-circle"></i>
                            </span>
                            </th>
                            <th style={{ width: "242px" }}>Name</th>
                            <th>Pos</th>
                            <th>Team</th>
                            <th></th>
                            <th>Opp</th>
                            <th>DvP</th>
                            <th>Salary</th>
                            <th>Fpts/$</th>
                            <th>Projection</th>
                            <th>Final Fpts</th>
                            <th>Rating</th>
                            <th>Fpts</th>
                            <th>ProsOwn%</th>
                            <th style={{ width: "60px" }}>
                            Exp. min
                            <input
                                className="percent table-text-input"
                                type="text"
                                value={expMin}
                                onChange={handleExpMin}
                            />
                            </th>
                            <th style={{ width: "80px" }}>
                            Exp. max
                            <input
                                className="percent table-text-input"
                                type="text"
                                value={expMax}
                                onChange={handleExpMax}
                            />
                            </th>
                        </tr>
                    </thead>
                    {props.myPlayer ? (
                    <tbody>
                        {myArray && myArray.map((data, index) => {
                        return props.position === "ALL" ? (
                            <PlayerListItem
                            key={index}
                            index={index}
                            data={data}
                            changeDvpColor={props.changeDvpColor}
                            handleExpMin={props.setExpMin}
                            handleExpMax={props.setExpMax}
                            lockPlayer={props.lockPlayer}
                            checked={props.checked}
                            unChecked={props.unChecked}
                            unLockPlayer={props.unLockPlayer}
                            changeFPTS={props.changeFPTS}
                            excluded={false}
                            icons={props.icons}
                            games={props.games}
                            setCalculateCost={props.setCalculateCost}
                            />
                        ) : props.position === data.position ? (
                            <PlayerListItem
                            key={index}
                            index={index}
                            data={data}
                            changeDvpColor={props.changeDvpColor}
                            handleExpMin={props.setExpMin}
                            handleExpMax={props.setExpMax}
                            lockPlayer={props.lockPlayer}
                            checked={props.checked}
                            unChecked={props.unChecked}
                            unLockPlayer={props.unLockPlayer}
                            changeFPTS={props.changeFPTS}
                            excluded={false}
                            icons={props.icons}
                            games={props.games}
                            setCalculateCost={props.setCalculateCost}
                            />
                        ) : null;
                        })}
                    </tbody>
                    ) : null}
                </table>
            </InfiniteScroll>
        </div>
    )
}

export default InfinteScrollMy
