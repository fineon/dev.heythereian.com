import React from 'react'

export default function Header() {
    return (
        <header className="header">
        <div className="header__container">
            <a className="header__container__unit__link" href="#webdev">
                <div className="header__container__unit">
                    <h1 className="header__container__unit__heading">
                        Web Developer
                    </h1>
                </div>
            </a>
            <a className="header__container__unit__link" href="#design">
                <div className="header__container__unit">
                    <h1 className="header__container__unit__heading">
                        Web Designer
                    </h1>
                </div>
            </a>
            <a className="header__container__unit__link" href="#shopify">
                <div className="header__container__unit">
                    <h1 className="header__container__unit__heading">
                        Shopify Partner
                    </h1>
                </div>
            </a>
        </div>
    </header>
    )
}
