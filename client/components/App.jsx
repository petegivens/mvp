import React from 'react';
import ItemList from './ItemList.jsx';
import AddItem from './AddItem.jsx';
import Navbar from './Navbar.jsx';
import Registration from './Registration.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [],
      user: {
        name: 'Guest',
        isLoggedIn: false
      },
      showRegistration: false
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
      seller: this.state.user.name,
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

  handleRegister() {
    this.setState({showRegistration: !this.state.showRegistration})
  }

  handleSignout() {
    this.setState({user: {isLoggedIn: false}})
  }
  handleSubmitRegistration(event) {
    event.preventDefault();

    var user = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value
    }

    console.log('user:', user)

    $.ajax({
      type: "POST",
      url: "http://localhost:3000/register",
      contentType: "application/json",
      data: JSON.stringify(user),
      success: (newUser) => {
        newUser.isLoggedIn = true;
        this.setState({user: newUser});
        this.setState({showRegistration: false});
      }
    })
  }

  render() {
    return (
      <div>
        <Navbar user={this.state.user} handleRegister={this.handleRegister.bind(this)} handleSignout={this.handleSignout.bind(this)}/>
        <h1>Silk Road v29</h1>
        {this.state.showRegistration ? <Registration handleSubmitRegistration={this.handleSubmitRegistration.bind(this)}/> : null}
        <div className="container-fluid">
          <div className="row">
              <h3>Items Available</h3>
          </div>
          <div className="row">
            <div className="col-xs-8">
              <ItemList items={this.state.items} name={this.props.name}/>
            </div>
            <div className="col-xs-4">
              <AddItem signedIn={this.state.user.isLoggedIn} handleSubmit={this.handleSubmit.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    )
  };
};

module.exports = App;
