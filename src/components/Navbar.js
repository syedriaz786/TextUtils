import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';   //  <-- 3. yahan humne propstype ko define krty han or proptype me hum props ki types ko define krain ge  example string , number or boolean

// 1. yahan humne aik component banaya hai Navbar k naam se

// --> PROPS Means (properties), props aik component k under aik variable ko kehty hai

// 2. yahan hum ne aik props ko pass karaya hai props k naam se or us props k under title or about  me value di hai app.js page k under se
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={{transition: "ease 0.5s all"}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/textUtils">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/textUtils">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/abouts">{props.aboutText}</Link>
                        </li>
                    </ul>
                    {/* <div className={`form-check form-switch text-${props.mode === 'light'? 'dark' :'light' }`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Enable Blue Mode &nbsp; &nbsp;  </label>
                    </div>

                    <div className={`form-check form-switch text-${props.mode === 'light'? 'dark' :'light' }`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Enable Green Mode &nbsp; &nbsp;  </label>
                    </div>

                    <div className={`form-check form-switch text-${props.mode === 'light'? 'dark' :'light' }`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Enable Yellow Mode &nbsp; &nbsp;  </label>
                    </div>

                    <div className={`form-check form-switch text-${props.mode === 'light'? 'dark' :'light' }`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Enable Red Mode &nbsp; &nbsp;  </label>
                    </div> */}

                    <div className={`form-check form-switch text-${props.mode === 'light'? 'dark' :'light' }`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Enable Dark Mode</label>
                    </div>

                   

                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>
    )
}

// 3. yahan humne propstype ko declare kia hai or bataya hai title or about string hona chahia

Navbar.propTypes = {
    title: PropTypes.string.isRequired,   // <-- ab yahan humne is required ka istemal kr rhe han agar title me koi value nhi to wo console me error dega
    aboutText: PropTypes.string
}



// 4. yahan humne default props ka istemal kia hai agar humne app.js k under props ki value pass nhi ki to defaultprops se default value pass ho jaye gi 

Navbar.defaultProps = {

    title: "Set Title Here",
    aboutText: "About Text Here"
}