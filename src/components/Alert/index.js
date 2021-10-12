import React from 'react';
import './style.scss';
// Wyświetlenie komunikatu
class Alert extends React.Component{
  
    constructor(props){
        super(props);
        this.alertType = typeof this.props.type !== 'undefined'
                            ? this.props.type : 'success';
        
    }

    renderContent(){
        if(this.props.isVisible){
            return(
          
                <div className={`alert alert--${this.alertType}`}>
                    <span className="alert__title">{this.props.title}</span>
                    <span className="alert__content">{this.props.content}</span>
                    
                </div>
        
            );
        }else{
            return '';
        }
       
    }
    render(){
        
        return this.renderContent();
    }

}

export default Alert;