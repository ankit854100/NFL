import React, {useEffect, useState} from 'react'

function LineUpsPlayer(props) {
    const [isChecked, setIsChecked] = useState(props.data.isChecked);
    const [logo, setLogo] = useState("");
    
    useEffect(() => {
      setIsChecked(props.data.isChecked);

      for(let i = 0; i < props.icons.length; i++){
        if(props.icons[i].team_code === props.data.team){
          setLogo(props.icons[i].logo_standard);
          break;
        }
      }
    })


    function handleCheck(){
        if(isChecked === true){
            setIsChecked(false);
            props.unchecked(props.data.playerId);
        }
        else{
            setIsChecked(true);
            props.checked(props.data.playerId);
        }
    } 
    return (
        <React.Fragment>
            <tr className={props.index % 2 === 0 ? "even" : "odd"}>
                          <td>
                            <input type="checkbox" checked={isChecked} onChange={handleCheck} />
                          </td>
                          <td style={{ textAlign: "left" }}>
                            <span>
                              <strong>{props.data.name}</strong>
                            </span>
                          </td>
                          <td>{props.data.pos}</td>
                          <td>
                            <img className="mood-icon" src={logo} alt="" />
                          </td>
                          <td>
                            <input
                              className="percent table-text-input"
                              type="text"
                              value={props.data.fpts}
                            />
                          </td>
                          <td>{props.data.exp}</td>
                          <td>{props.data.ownership}</td>
                          <td>
                            <input
                              className="percent table-text-input"
                              type="text"
                              value={props.data.expMin}
                            />
                          </td>
                          <td>
                            <input
                              className="percent table-text-input"
                              type="text"
                              value={props.data.expMax}
                            />
                          </td>
                        </tr>
        </React.Fragment>
    )
}

export default LineUpsPlayer
