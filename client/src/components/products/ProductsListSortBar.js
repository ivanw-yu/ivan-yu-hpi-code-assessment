import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchProducts} from '../../actions';

const choices = [
  {name: 'Date', value: 'created_at'},
  {name: 'Price', value: 'price'},
  {name: 'Title', value: 'title'}
];
class ProductsListSortBar extends React.Component{

  constructor(){
    super();
    this.state = {
      sort: "created_at",
      ascending: false
    }
  }

  componentDidUpdate(prevProps, prevStates){
    const {sort, ascending} = this.state,
          {fetchProducts} = this.props;
    if(sort !== prevStates.sort || prevStates.ascending !== ascending){
      fetchProducts(`sort=${sort}&ascending=${ascending}`);
      this.props.history.push(`/products?sort=${sort}&ascending=${ascending}`);
    }
  }

  changeSort(sort){
    this.setState({sort});
  }

  renderChoices(){
    const {sort} = this.state;
    return choices.map( choice => (
        <button onClick={(e) => this.changeSort(choice.value)}
                className={"sort-button " + (sort===choice.value ? " sort-button-active" : "")}
                id = {choices.name}>
          {choice.name}
        </button>
      )
    );
  }
  render(){
    return <div className = "sort-bar">
      Sort By:
      {this.renderChoices()}
      <br />
      <input type="checkbox" onChange={() => this.setState((prevState, props) => ({ascending: !prevState.ascending}))} />ascending
    </div>
  }
}

export default withRouter(connect(null,{fetchProducts})(ProductsListSortBar));
