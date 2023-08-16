import React from 'react'

function Alert(props) {
    const Capitalize = (word)=>{
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        props.alertText && <div>
            <div className={`alert alert-${props.alertText.type} alert-dismissible fade show`} role="alert">
                <strong>{Capitalize(props.alertText.type)}:</strong> {props.alertText.msg}
            </div>
        </div>
    )
}

export default Alert