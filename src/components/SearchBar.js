import React from 'react'
import Index from '../index.css'

class SearchBar extends React.Component {
    state  = {term: ''}

    onFormSubmit = (event)  => {

     event.preventDefault(); 
     console.log(this.state.term);
     this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
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