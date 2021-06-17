import React, {useState} from 'react'

function LineUpsPlayer(props) {
    const [isChecked, setIsChecked] = useState(props.data.isChecked);


    function handleCheck(){
        if(isChecked === true){
            setIsChecked(false);
            props.unchecked(props.data.id);
        }
        else{
            setIsChecked(true);
            props.checked(props.data.id);
        }
    }
    return (
        <React.Fragment>
            <tr className={props.key % 2 === 0 ? "odd" : "even"}>
                          <td>
                            <input type="checkbox" checked={isChecked} onChange={handleCheck} />
                          </td>
                          <td style={{ textAlign: "left" }}>
                            <span>
                              <strong>{props.data.name}</strong>
                            </span>
                          </td>
                          <td>{props.data.Pos}</td>
                          <td>
                            <img className="mood-icon" src={props.data.team} alt="" />
                          </td>
                          <td>
                            <input
                              className="percent table-text-input"
                              type="text"
                              value={props.data.Fpts}
                            />
                          </td>
                          <td>{props.data.exp}</td>
                          <td>{props.data.projOwn}</td>
                          <td>
                            <input
                              className="percent table-text-input"
                              type="text"
                              value={props.data.min}
                            />
                          </td>
                          <td>
                            <input
                              className="percent table-text-input"
                              type="text"
                              value={props.data.max}
                            />
                          </td>
                        </tr>
        </React.Fragment>
    )
}

export default LineUpsPlayer
