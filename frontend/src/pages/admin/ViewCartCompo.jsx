import React from 'react'

function ViewCartCompo(props) {
    return (
        <div>
            <div>{props.orderBy}</div>
            <div>
                <div>Food Name</div>
                <div>x Quantity</div>
            </div>
        </div>
    )
}

export default ViewCartCompo