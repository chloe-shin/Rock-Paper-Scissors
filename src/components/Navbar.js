import React from 'react'

export default function Navbar() {
    return (
        <nav className ="navbar transparent"> 
            <div className ="navbar-brand">
                <img src="/img/fist.svg" width="40" height="40" className="d-inline-block align-top" alt=""/>
                <p className ="logo">Rock Paper Scissor</p> 
            </div>
            <form className="form-inline">
                <input className="form-control mr-sm-2 search" type="search" placeholder="SEARCH" aria-label="Search"/>
                <button className="btn btn-light my-2 my-sm-0 login" type="submit">LOGIN</button>
            </form>
        </nav>

    )
}
