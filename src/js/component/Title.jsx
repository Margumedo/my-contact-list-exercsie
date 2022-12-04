import React from "react";


const Title = (props)=>{
    return(<div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">{props.title}</h1>
                    </div>
                </div>
            </div>
);}

export default Title;