import React from 'react'
import ReactDom from 'react-dom'
import Index from '../index.css'

class SearchBar extends React.Component {
    state  = {term: 'Hi There!'}
    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                    <label className="ok">کجا می خواهید بروید</label>
                        <input type="text"
                        value={this.state.term}
                        onChange={e => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }
}
export default SearchBar;