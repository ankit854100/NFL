import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import PlayerListItem from './PlayerListItem';


function InfinteScrollComp(props) {

    const [expMin, setExpMin] = useState("0");
    const [expMax, setExpMax] = useState("100");
    const [count, setCount] = useState({
        prev: 0,
        next: 15
      });

    useEffect(() => {
        // console.log("rendering");
        props.setClearALLPlayer();
        setCount((prevState) => ({ prev: 0, next: 15 }));
        if(props.total.length >= 15){
            for(let i = 0; i < 15; i++){
                props.setAllPlayer(props.total[i]);
            }
        }
        else if(props.total.length < 15){
            for(let i = 0; i < props.total.length; i++){
                props.setAllPlayer(props.total[i]);
            }
        }
        setCount((prevState) => ({ prev: prevState.prev + 15, next: prevState.next + 15 }));
    },[props.total])

    const getMoreData = () => {
        // console.log("called",count);
        setTimeout(() => {
          for(let i = count.prev; i < count.next; i++ ){
            if(i > props.total.length - 1) break;
            props.setAllPlayer(props.total[i]);
          }
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
                dataLength={props.all.length}
                next={getMoreData}
                // hasMore={props.all.length !== props.total.length}
                hasMore={props.position === "ALL" ? props.all.length !== props.total.length: false}
                loader={<h4>Loading...</h4>}
                scrollableTarget="table-container"
            >
                <table>
                    <thead>
                        <tr>
                            <th>
                            <input type="checkbox" checked={props.selectAllCheckbox} onChange={props.handleSelectAllCheckbox}/>
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
                    {props.allPLayer ? (
                    <tbody>
                        {props.all && props.all.map((data, index) => {
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

export default InfinteScrollComp
