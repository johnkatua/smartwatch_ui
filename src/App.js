import React, {Component, state, onColorOptionClick, onFeatureItemClick} from 'react';
import classes from './App.module.css';
import ProductData from './utils/ProductData';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductPreview from './ProductPreview/ProductPreview';
import TopBar from './TopBar/TopBar';

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    showHeartbeatSection: false   
  } 

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos: pos});
  };

  onFeatureItemClick = (pos) => {
    let updatedState = false;
    if (pos === 1) {
      updatedState = true;
    }
    this.setState({showHeartbeatSection: updatedState});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopBar  />
        </header>
  
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview 
              currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
              showHeartbeatSection={this.state.showHeartbeatSection}
            />
          </div>
  
          <div className={classes.ProductData}>
            <ProductDetails 
              data={this.state.productData} 
              onColorOptionClick={this.onColorOptionClick}
              currentPreviewImagePos={this.state.currentPreviewImagePos}
              onFeatureItemClick={this.onFeatureItemClick}
              showHeartbeatSection={this.state.showHeartbeatSection}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
