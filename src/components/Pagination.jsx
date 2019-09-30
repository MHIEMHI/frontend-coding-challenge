import React, { Component } from 'react'

export default class Pagination extends Component
{
	setup()
	{
		const {page, end} = this.props.params;
		this.start = parseInt(page / 10) + page >= 5? page - 4 : 0; 
		//TODO Generalize This paginator has a limit of 10
		//this.start = 0 ;
		this.end = this.start + 10;
		if(end && this.end > end )
		{
			this.end = end;
		}
		this.pages = [];
		for (let i = this.start; i < this.end; i++)
		{
			this.pages.push(i);
		}
		this.cur = page; 
	}


	prev = () =>
	{
		const { paginate } = this.props;
		this.cur--;
		paginate(this.cur);
	}

	next = () =>
	{
		const { paginate } = this.props;
		this.cur++;
		paginate(this.cur);
	}

	curr  = (page) =>
	{
		const { paginate } = this.props;
		this.cur = page; 
		paginate(page);
	}

	render()
	{
		this.setup();
		return (
			<nav className="pagination">
				<ul className="pagination__list">
					<li id="first" className="pagination__item">
						<button onClick={() => { this.prev()}} disabled={this.cur === 0} className="pagination__link">
							<svg className="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
								<title>Arrow Left</title>
								<polygon id="Left-Icon" stroke="none" fillRule="evenodd" transform="translate(22.027061, 23.000000) scale(-1, 1) translate(-22.027061, -23.000000) " points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"></polygon>
							</svg>
						</button>
					</li>
					{
						this.pages.map((page, key) =>
							(<li key={key} className="pagination__item">
								<button onClick={() => { this.curr(page) }} className={`pagination__link ${this.cur === page ? 'font-weight-bold text-title' : ''}`}>
									{page + 1}
								</button>
							</li>)
						)
					}
					<li id="next" className="pagination__item">
						<button onClick={() => { this.next()}}  disabled={this.cur === this.end - 1} className="pagination__link">
							<svg className="icon" width="8px" height="10px" viewBox="18 18 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
								<title>Arrow Right</title>
								<polygon id="Left-Iocn" stroke="none" fillRule="evenodd" points="22.9427745 22.9999999 19 26.9458774 20.0541226 28 25.0541226 23 20.0541226 18 19 19.0541226"></polygon>
							</svg>
						</button>
					</li>
				</ul>
			</nav>
		)
	}
}
