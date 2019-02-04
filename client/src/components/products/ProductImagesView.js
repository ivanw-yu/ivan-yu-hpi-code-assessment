import React from 'react';

import ProductImage from './ProductImage';
import ProductImagesScrollBar from './ProductImagesScrollBar';

// media pictures gets passed to this component as props.
class ProductImagesView extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        media: this.props.media,
        images: null,
        index: 0,
        count: null
      };

      this.onImageChange = this.onImageChange.bind(this);
    }

    componentDidMount(){
      const {media} = this.props;
      const imagesNestedArrays = media.map(m => [...m.sizes]);
      let images = [];
      imagesNestedArrays.forEach(imagesArray => {
        images = [...images, ...imagesArray];
      });

      console.log('images', images);
      this.setState({images, count: images.length});
    }

    onImageChange(index){
        this.setState({index:index-1});
    }

    render(){
      const {images,index,media} = this.state;

      return images && (
        <div className = "product-media">
            <ProductImage imageUrl={images[index].url} />
            <ProductImagesScrollBar media={media}
                                   index={index}
                                   count ={images.length}
                                   onImageChange={this.onImageChange}/>
        </div>
      );
    }
}

export default ProductImagesView;
