import React from 'react';

class ProductMedia extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      media: this.props.media,
      index: 0,
      // photos: this.props.media
      count: this.props.media.media_count
    }
  }

  render(){
    const {media} = this.state;
    const { sizes } = media[this.state.index]
    console.log('sizes[0].url',sizes[0].url);
    return (
      <div>
        <img src={sizes && sizes.length > 0 && sizes[0].url}
             className="media"/>
      </div>
    );
  }
}

export default ProductMedia;
