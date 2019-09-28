import React, { Component } from 'react'
import Title from './Title';
import { Pagination } from './Pagination';
import { Repo } from './Repo';

export default class RepoList extends Component
{
	render()
	{
        var { Repos } = this.props;

        return (
            <main className="repo-page">
                {
                    !Repos || Repos.isFetching ? 
                        <Title name='please' title='wait ...' />
                            :
                        <div className='container'>
                            <Title name='our' title='Repos' />
                            <ul className='repo-list'>
                                {
                                    Repo.data.map((repo, key) => (<Repo key={key} repo={repo} />))
                                }
                            </ul>
                            <Pagination />
                        </div>
                }
            </main>)
	}
}
