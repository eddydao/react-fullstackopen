import react from "react";

const Alert = ({errId, message}) => {
    const successAlert = {
        color: 'green',
        backgroundColor: '#dddddd',
        borderColor: 'green',
        border: '3px solid',
        borderRadius: '5px',
        padding: '5px'

    }

    const errorAlert = {
        color: 'red',
        backgroundColor: '#dddddd',
        borderColor: 'red',
        border: '3px solid',
        borderRadius: '5px',
        padding: '5px'

    }

    if(message === null || message === '' || message === undefined){
        console.log("Null");
        return null;
    }

    if(errId === '-1'){
        return (
            <>
                <div style={errorAlert}>
                    {message}
                </div>
            </>
        )
    }
    return (
        <>
            <div style={successAlert}>
                {message}
            </div>
        </>
    )
}

export default Alert;