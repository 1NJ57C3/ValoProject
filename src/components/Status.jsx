import { useState, Fragment } from "react";

function Status(){
    const [status, setStatus] = useState({});
    const [errors, setErrors] = useState({});

    const handleFetch = () => {
        fetch(`http://localhost:4000/status`)
        .then(r => {
            if (r.ok) {
                r.json()
                .then(setStatus);
            } else {
                r.json()
                .then(setErrors)
                throw new Error ('Error in fetch @ <Status />')
            };
        })
        .catch(error => console.error(error));
    };

    function mapObject(obj) {
        return Object.keys(obj).map((k,i) => {
            return <div key={i}>
                {k}: {
                    typeof obj[k] === 'array' ? obj[k].join(', ') : 
                        typeof obj[k] === 'string' || typeof obj[k] === 'number' ? obj[k] : 
                        typeof obj[k] === 'object' && mapObject(obj[k])
                }
            </div>
        });
    };
    
    function rawStatus() {
        if (!!Object.keys(status).length) {
            return mapObject(status)

            //// return Object.keys(status).map((k,i) => {
            ////     return (
            ////         <span key={i}>
            ////             {k}: { typeof status[k] !== 'string' ? status[k].join(', ') : status[k] }
            ////         </span>
            ////     );
            //// });
        };
    };

    function readableStatus(){
        if (!!Object.keys(status).length) {
            return !status.maintenances.length && !status.incidents.length ? `${status.name} [${status.id}] server is up!` : 
                status.maintenances.length > 1 ? `Down for Maintenance!` :
                status.incidents.length > 1 && `An incident has occured!`
        };
    };

    //// function renderErrors () {
    ////     if (!!Object.keys(errors).length) {
    ////         return Object.keys(errors).map((k,i) => {
    ////             return (
    ////                 <span key={i}>
    ////                     {k}: {errors[k] !== 'string' ? status[k].join(', ') : status[k]} <br />
    ////                 </span>
    ////             );
    ////         });
    ////     };
    //// };
    

    return (
        <div className="status">
            <button onClick={handleFetch}>
                Get Server Status
            </button> <br />
            {/* //// {!!Object.keys(status).length ? <Fragment>{readableStatus()} <br /><br /> {rawStatus()}</Fragment> : renderErrors()} */}
            {!!Object.keys(status).length && <Fragment>{readableStatus()} <br /><br /> {rawStatus()}</Fragment>}
        </div>
    )
}

export default Status;