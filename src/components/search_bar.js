import React, {Component} from 'react';



class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  render() {
    return (
        <div>
          <input type="text"
                 value={this.state.term}
                 className="form-control search-bar"
                 onChange={event => this.onInputChange(event.target.value)} />
        </div>


      );
    
  }

  onInputChange(term){
    this.setState({ term });

    this.props.onSearchTermChange(term);
  }

 
}

export default SearchBar;