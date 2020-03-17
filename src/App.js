import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
        artistInput: '',
        songInput: '',
        lyrics: ''
    }
  }

  lyricsButton = () => {
    this.componentDidMount()
  }


  componentDidMount(){
    const {artistInput, songInput} = this.state
    fetch(`https://api.lyrics.ovh/v1/${artistInput}/${songInput}`)
    .then(res => res.json())
    .then(data => this.setState({lyrics: data}))
  }

  render(){
      console.log(this.state)
      return(
          <div className='container App-header'>
            <h1 className='mt-5'>Find Your Favorite Lyrics <i className="fas fa-music"></i></h1>
            <div className='mt-1 mb-1 d-sm-flex flex-sm-column justify-content-sm-center'>
              <input type='text' className='m-1 ' placeholder=" Artist" onChange={(e) => this.setState({artistInput: e.target.value})} />
              <input type='text' className='m-1' placeholder=" Song" onChange={(e) => this.setState({songInput: e.target.value})} />
            </div> 
              <button type='submit' className='btn btn-primary mb-5 mt-2' onClick={this.lyricsButton}>Search</button>
              <div className='mb-5 lyrics-font container'>
                {this.state.lyrics.lyrics}
              </div>       
          </div>
      )
  }
}

export default App;
