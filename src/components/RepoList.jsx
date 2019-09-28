import React, { Component } from 'react'
import Title from './Title';
import { connect } from 'react-redux'
import { Pagination } from './Pagination';
import { Repo } from './Repo';
import { requestAPICall } from '../common/actions/jx_api_actions';

class RepoList extends Component
{
    
    constructor()
    {
        super();
        this.state = {
            page: 0
        }
    }

    componentDidMount()
    {
        var { requestAPICall } = this.props;
        requestAPICall('Repos');
    }

	render()
	{
        var { Repos } = this.props;

        return (
            <main className="repo-page">
                <div className='container'>
                    {
                        !Repos || Repos.isFetching ? 
                            <Title name='please' title='wait ...' />
                                :
                            <React.Fragment>
                                <Title name='our' title='Repos' />
                                <ul className='repo-list'>
                                    {
                                        Repos.data.items.map((repo, key) => (<Repo key={key} repo={repo} />))
                                    }
                                </ul>
                                <Pagination />
                            </React.Fragment>
                    }
                </div>
            </main>)
	}
}

const mapStateToProps = (state) => ({
    Repos: state.rdAPI.apidata.Repos || { isFetching: true }
})

const mapDispatchToProps = {
    requestAPICall
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoList)
