import React from 'react';

export default function Nav() {
    return (
        <nav className="nav">
        <h2 className="nav__title">Ian Nguyen</h2>
        <div className="nav__container">
            <a className="nav__container__links" href="https://www.linkedin.com/in/qv-nguyen/">LinkedIn</a>
            <a className="nav__container__links" href="https://github.com/fineon">Github</a>
            <a className="nav__container__links" href="mailto: ian@heythereian.com">Email: ian@heythereian.com</a>
        </div>
    </nav>
    )
}
