import React from "react";
import './style.scss';

class BeerDetails extends React.Component{


    render(){
        return(
            <div className="beer-details">
                <h3 className="beer-details__title">Informacje o piwie:</h3>
                <ul className="beer-details__list">
                    <li className="beer-details__list__item"><b>Nazwa</b> {this.props.data.name}</li>
                    <li className="beer-details__list__item"><b>Abv</b> {this.props.data.abv}</li>
                    <li className="beer-details__list__item"><b>Ibu</b> {this.props.data.ibu}</li>
                    <li className="beer-details__list__item"><b>Ph</b> {this.props.data.ph}</li>
                    <li className="beer-details__list__item"><b>Srm</b> {this.props.data.srm}</li>
                </ul>
            </div>
        );
    }
}

export default BeerDetails;