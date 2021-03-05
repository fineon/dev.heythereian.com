import React from 'react';
import '../components/asset-import';
import jsTools from '../components/asset-import';


export default function Skill() {
    return (
        // nested map for all the skill section?
        <>
            <section className="skill">
                <div className="skill__container">
                    <div className="skill__container__unit">
                        <hr className="skill__divider" />
                        <h2 id="webdev" className="skill__container__unit__title">Web Developer</h2>    
                        <ul className="skill__container__unit__list">
                        <li className="skill__container__unit__list__item">
                        Fully responsive layout development for mobile-first, tablet and desktop layouts
                    </li>
                    <li className="skill__container__unit__list__item">
                        Web hosting management: CNAME record, Cpanel admin dashboard, domain name management
                    </li>
                    <li className="skill__container__unit__list__item">
                        Tools: HTML, CSS, Javascript, Node.js, WordPress
                    </li>
                            </ul>                
                    </div>

                    <div className='skill__container--2'>
                    {jsTools.map(item => {
                            return (
                               <div 
                               key={item.id}
                               className="skill__container--2__square">
                                   <img src={item.img} alt="icon" className="skill__container--2__img"/>
                                   <p className="skill__container--2__text">
                                       {item.desc}
                                   </p>
                               </div>
                            )
                        })}
                    </div>
                </div>
            </section>


        </>
    )
}
