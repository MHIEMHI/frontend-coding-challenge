import React, { Component } from 'react'
import logo from '../logo.svg';

export class Header extends Component
{
	render()
	{
		return (
			<header className="header container">
				<img src={logo} alt='BRAND' className='navbar-brand logo' />
                <aside className="header-repos">
                    {/* <div className="header-repos__item header-repos__count">
                        <ButtonContainer onClick={() => { openCart() }}>
                            <div className="header-repos__price">
                                {getTotal()}
                            </div>
                            <svg className="icon" style={{ width: "20px", heigth: "20px" }} viewBox="36 8 17 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                <title>repos Icon</title>
                                <path d="M52.997701,12.8571429 L49.3553365,12.8571429 L49.3553365,8 L39.6423645,8 L39.6423645,12.8571429 L36,12.8571429 L36,25 L52.997701,25 L52.997701,12.8571429 Z M42.0706075,10.4285714 L46.9270935,10.4285714 L46.9270935,12.8571429 L42.0706075,12.8571429 L42.0706075,10.4285714 Z" id="repos-Icon" stroke="none" fillRule="evenodd"></path>
                            </svg>
                            <span className="repos__item-counter">{cartCount()}</span>
                        </ButtonContainer>
                    </div> */}
                </aside>
            </header>
		)
	}
}