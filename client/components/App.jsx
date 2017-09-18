import React from 'react';
import ItemList from './ItemList.jsx';
import AddItem from './AddItem.jsx';

// Functional Component Syntax:
// const App = (props) => {
//   return (
//     <h1>hratx29-list!</h1>
//   )
// }

var sampleItem = {
  description: 'Tylenol',
  quantity: 10,
  imageUrl: 'https://www.tylenol.com/sites/tylenol_us/files/styles/product_image/public/tylur_coldsorethroat_bty_liquid_ft.jpg'
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [sampleItem]
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    var item = {
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      imageUrl: event.target.imageUrl.value
    }

    //TODO: submit item function
    console.log(JSON.stringify(item));
  }
  render() {
    // this.state.something
    // this.props.something
    // this.setState()
    return (
      <div className="row">
        <div className="col-xs-9">
          <ItemList items={this.state.items}/>
        </div>
        <div className="col-xs-3">
          <AddItem handleSubmit={this.handleSubmit.bind(this)}/>
        </div>
      </div>
    )
  };
};

module.exports = App;
