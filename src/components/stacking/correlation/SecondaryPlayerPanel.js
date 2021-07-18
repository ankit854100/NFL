import React, {useState } from 'react'

function SecondaryPlayerPanel(props) {

    const [fpts, setFpts] = useState(props.data.proj_pts_conservative);
    const [exp, setExp] = useState(100);

    function handleFptsChange(e){
        setFpts(e.target.value);
    }

    function handleExpChange(e){
        setExp(e.target.value);
    }

    return (
        <div>
            <div className="secondary_playerWrapper">
                <strong>{props.data.name}</strong>
                <div className="secondary_positionInput">
                    <strong>{props.data.position}</strong>
                    <div className="secondary_input">
                        <span>fpts</span>
                        <input
                            className="percent table-text-input"
                            type="text"
                            value={fpts}
                            onChange={handleFptsChange}
                        />
                    </div>
                    <div className="secondary_input">
                        <span>max(%)</span>
                        <input
                            className="percent table-text-input"
                            type="text"
                            value={exp}
                            onChange={handleExpChange}
                        />
                    </div>
                </div>
            </div>
            <style jsx>{`
                .secondary_playerWrapper{
                    display: flex;
                    width: 22rem !important;
                    justify-content: space-between;
                    background-color: #E9E8E8;
                    padding: 0.5rem;
                    align-items: center;
                    margin-right: 0.5rem;
                    margin-bottom: 0.5rem;
                    font-size: 14px;
                }

                .secondary_positionInput{
                    display: flex;
                    align-items: center;
                }

                .secondary_input{
                    display: flex;
                    flex-direction: column;
                    margin-left: 0.5rem;
                    align-items: center;
                }

                .secondary_input span{
                    font-size: 12px;
                }
            `}</style>
        </div>
    )
}

export default SecondaryPlayerPanel
