import React from 'react';

//1. mostrar styled component
//2. mostrar o uso de props nele
//3. mostrar o themeprovider
//https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/

function Channel(props){
  return(
    <div className = "grid-item">
      <h3>{props.name}</h3>
      <img src={props.avatar} alt={props.description} style={{
        maxWidth: '150px',
      }}/>
    </div>
  );
}

class ChannelList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      channels: this.props.channels
    };
  }

  deleteChannel = (index_channel) => {
    const temp_list_channels = this.state.channels.slice();
    temp_list_channels.splice(index_channel, 1);
    this.setState({channels: temp_list_channels});
  }

  render(){
    let inputText = this.props.inputText.toLowerCase();
    let filtered = this.state.channels.filter(channel => channel.name.toLowerCase().includes(inputText));

    if (filtered.length === 0) {
      return (
        <div className="grid-container">
          <h1> Nenhum canal encontrado para "{inputText}" :( </h1>
        </div>
      );
    }

    return(
        <div className="grid-container">
        {
          filtered.map((c, index) => {
            return(
                <div key={index}>
                  <Channel name={c.name} avatar={c.avatar} description={c.description} />
                  <button type="button" onClick={() => this.deleteChannel(index)}>
                    DELETAR CANAL
                  </button>
                </div>
            );
          })
        }
        </div>
    );
  }
}

export default ChannelList;
