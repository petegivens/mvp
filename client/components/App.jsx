import React from 'react';
import ItemList from './ItemList.jsx';
import AddItem from './AddItem.jsx';

var sampleItem = {
  description: 'Tylenol',
  quantity: 10,
  drugType: 'pill',
  imageUrl: 'https://www.tylenol.com/sites/tylenol_us/files/styles/product_image/public/tylur_coldsorethroat_bty_liquid_ft.jpg',
  seller: 'Pete'
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [sampleItem]
    }
  }

  componentDidMount() {
    this.getAllItems();
  }

  getAllItems() {
    $.get('/items').then( (data) => {
      this.setState({items: data});
    });
  }

  handleSubmit(event) {
    event.preventDefault();


    var item = {
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      seller: Window.username,
      type: event.target.type.value,
      comments: event.target.comments.value
    }

    event.target.description.value = '';
    event.target.quantity.value = '';
    event.target.comments.value = '';

    $.ajax({
      type: "POST",
      url: "http://localhost:3000/items",
      data: JSON.stringify(item),
      contentType: "application/json",
      success: () => {
        this.getAllItems();
      }
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
            <h3>Items Available</h3>
        </div>
        <div className="row">
          <div className="col-xs-8">
            <ItemList items={this.state.items} name={this.props.name}/>
          </div>
          <div className="col-xs-4">
            <AddItem handleSubmit={this.handleSubmit.bind(this)}/>
          </div>
        </div>
      </div>
    )
  };
};

module.exports = App;
