import React, {Component} from 'react';

function Shopping (props) {

        // const grocery = props.shopping.items.map(item => {
        //     return(
        //     <div>
        //         <li>{item}</li>
        //     </div>
        //     )
        // })    
    
        return(
            <React.Fragment>
                <div>
                    {/* {grocery}                  */}
                  {props.shopping.shopping.map((shopping) => <div>{shopping.items}</div>)}
                </div>
            </React.Fragment>
        )
    }


export default Shopping;