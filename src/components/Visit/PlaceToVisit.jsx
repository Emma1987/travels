import React from 'react';
import '../../assets/card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartReg } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSol } from '@fortawesome/free-solid-svg-icons';

class PlaceToVisit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFav: false
    };

    this.manageFav = this.manageFav.bind(this);
  }

  manageFav = function() {
    this.setState(prevState => ({
      isFav: !prevState.isFav
    }));
  }

  render() {
    const { title, imageName, description, location } = this.props;

    return (
      <>
      <div className='place-container'>
        <div className="card">
          <div className="fav-icon">
            {!this.state.isFav 
              ? <FontAwesomeIcon icon={faHeartReg} onClick={this.manageFav} />
              : <FontAwesomeIcon icon={faHeartSol} onClick={this.manageFav} />
            }
          </div>
          <img className="card-img-top" src={require('../../assets/images/' + imageName)} alt="Card image cap" />

          <div className="card-body">
            <h2 className="card-title h5">{title}</h2>
            <h3 className="card-subtitle h6">{location}</h3>
            <p className="card-text">{description}</p>
            {/*<a href="#" className="card-link"></a>*/}
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
      </>
    );
  }
}

export default PlaceToVisit;
