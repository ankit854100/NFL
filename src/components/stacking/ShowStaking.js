import React, { useEffect } from "react";

function ShowStacking(props){

    useEffect(() => {
        // console.log(props);
    })

    function handleCrossClick(){
        props.onDelete(props.text);
    }
    return(
        <div>
            <div className="advance-tag">
                <span>{props.text.text}</span>
                <span className="cross-icon" onClick={handleCrossClick}><i class="fa fa-times-circle"></i></span>
            </div>
        <style jsx>{`
            .advance-tag{
                display: inline-block;
                vertical-align: top;
                position: relative;
                color: #fff;
                border-radius: 4px;
                background: #9ba2b5;
                font-size: 15px;
                line-height: 20px;
                padding: 10px;
                margin: 0 15px 15px;
                margin-left: 0 !important;
                min-width: 359px;
                max-width: 100%;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }

            .cross-icon{
                float: right;
                margin-left: 10px;
                cursor: pointer ;
            }

            .cross-icon:hover{
                color: lightgrey;
            }
        `}</style>
        </div>
    )
}

export default ShowStacking;