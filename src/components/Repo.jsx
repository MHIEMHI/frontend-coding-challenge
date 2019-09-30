import React, { Component } from 'react'
import { diffDays } from '../common/lib/objectutils';

export class Repo extends Component
{
	render()
	{
		const { repo } = this.props;
		return (
			<article className='card card-product' itemScope >
				<div className='card-body'>
					<div className='row'>
						<aside className='col-sm-3'>
							<figure className='img-wrap'>
									<img src={repo.owner.avatar_url} alt='https://avatars1.githubusercontent.com/u/25491973?s=400&v=4' itemProp='image' />
							</figure>
						</aside>
						<article className='col-sm-9' itemScope >
							<h1 className='title' itemProp='brand'>{repo.name}</h1>
							<p className='repo__subtitle' itemProp='description'>{repo.description}</p>
							<footer className='card-footer bg-transparent border-top'>
								<div>
									<button className="btn mr-2 btn-primary"> Stars : {repo.stargazers_count}</button>
									<button className="btn mr-2 btn-danger"> Issues : {repo.open_issues_count || repo.open_issues}</button>
									<span className="align-middle card-text text-muted">
										<small>Submitted {diffDays(repo.created_at)} days ago by {repo.owner.login}</small>
									</span>
								</div>
							</footer>
						</article>
					</div>
				</div>
			</article>
		)
	}
}
