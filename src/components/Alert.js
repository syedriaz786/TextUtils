import React from 'react'

function Alert(props) {

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
  
      props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">      {/* yahan humne && ka istemal kia hai or && syntex me agar props.alert me condition true hoi ya value to wo && k bad ki statement ko run kare ga otherwise wo kch bhi run nhi kare ga  */}
        <strong>  { capitalize(props.alert.type)}</strong> :  {props.alert.msg}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
 
  )
}

export default Alert