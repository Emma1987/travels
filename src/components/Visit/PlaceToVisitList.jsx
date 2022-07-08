import React from 'react';
import PlaceToVisit from './PlaceToVisit';

class PlaceToVisitList extends React.Component {
  render() {
    const { places } = this.props;

    return (
      <div className="places-to-stay-container">
        {
          places.map((place) => {
            return <PlaceToVisit 
              key={place.id} 
              title={place.title} 
              imageName={place.imageName} 
              description={place.description} 
              location={place.location}
            />
          })
        }
      </div>
    )
  }
}

export default PlaceToVisitList;
