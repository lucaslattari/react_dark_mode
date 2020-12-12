import React from 'react';
import './search_box.css';

class SearchBox extends React.Component{
  constructor(props){
    super(props);

    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    //console.log(event.target.value);
    this.setState({value: event.target.value});

    this.props.passInputText(event.target.value);
  }

  render(){
    return(
      <input className="search-box-style"
             placeholder="Procure por um canal..."
             value={this.state.value}
             onChange={this.handleChange} />
    );
  }
}

export default SearchBox;
