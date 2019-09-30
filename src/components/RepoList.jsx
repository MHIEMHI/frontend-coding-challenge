import React, { Component } from 'react'
import Title from './Title';
import { connect } from 'react-redux'
import { Repo } from './Repo';
import { requestAPICall } from '../common/actions/jx_api_actions';
import Pagination from './Pagination';

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

    paginate = (number) =>
    {
        var { requestAPICall } = this.props;
        this.setState(() =>
        {
            return { page: number };
        });
        requestAPICall('Repos', {page : number});
    }

	render()
	{
        var { Repos } = this.props;
        var { page } = this.state;

        return (
            <main className="repo-page">
                <div className='container'>
                    <div className='row'>
                        <main className='col-sm-12'>
                        {
                           (!Repos || Repos.isFetching) && !Repos.data? 
                                <Title name='please' title='wait ...' />
                                    :
                                <React.Fragment>
                                    <Title name='our' title='Repos' />
                                        {
                                            Repos.data.items.map((repo, key) => (<Repo key={key} repo={repo} />))
                                        }
                                    <Pagination paginate={this.paginate} params={{ page, end : parseInt(Repos.data.total_count / 30) }}  />
                                </React.Fragment>
                        }
                        </main>
                    </div>
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
