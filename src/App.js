import React from "react";
import axios from 'axios';
import BeerDetails from './components/BeerDetails';
import Alert from "./components/Alert";
import Preloader from "./components/Preloader";
import './app.scss';

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {isFetchedData: false, data: [], alertVisible: false, isLoading: false, disableSendingForm: false, };
  }
  
  onSubmitForm(e){
    let value = e.target.id_beer.value;
    if(value.length){
      this.getBeer(value);
    }
  }
  async getBeer(id){
    this.setState({isFetchedData: false, alertVisible: false, isLoading: true, disableSendingForm: true, });
   await axios.get(`https://api.punkapi.com/v2/beers/${id}`)
      .then( (response) => {
        this.setState({isFetchedData: true, data: response.data[0], isLoading: false,disableSendingForm: false});
      })
      .catch((error) =>{
        this.setState({alertVisible: true, isLoading: false,disableSendingForm: false});
      })
    
  }
  render(){
   
    return (
      <div className="App">
       

        <form className="App__form" onSubmit={e => {e.preventDefault(); this.onSubmitForm(e)}}>
          <label className="App__form__label" htmlFor="id_beer">Podaj identyfikator piwa</label>
          <input className="App__form__input" type="text" name="id_beer" id="id_beer" />
          <button className="App__form__submit-button" disabled={this.state.disableSendingForm} type="submit">Wyszukaj</button>
        </form>
        {this.state.isLoading ?  <Preloader />: ''}
        
        {this.state.isFetchedData ? <BeerDetails data={this.state.data}/> : 
                    <Alert 
                    isVisible={this.state.alertVisible} 
                    type="error" title="Wystąpił błąd" 
                    content="Nie znaleziono takiego piwa"/>}
            
      </div>
    );
  }
}


export default App;
