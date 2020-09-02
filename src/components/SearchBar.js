import React from 'react';

export default class SearchBar extends React.Component {
    state = {
        term: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log("working")
        this.props.onSubmit(this.state.term)
    }
    
    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onSubmit}>
                    <div className='field'>
                        <label></label>
                        <input 
                        typeof='text' 
                        value={this.state.term} 
                        onChange={(e) => this.setState({ term: e.target.value })} 
                        placeholder='Cool Cars' />
                    </div>
                </form>
            </div>
        )
    }
}