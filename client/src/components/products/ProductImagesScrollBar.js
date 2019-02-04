import React from 'react';


// media pictures gets passed to this component as props.
class ProductImagesScrollBar extends React.Component{
    // constructor(props){
    //   // super(props);
    //   // this.state = {
    //   //   media: this.props.media,
    //   //   images: null,
    //   //   index: 0,
    //   //   count: null
    //   // };
    // }

    // componentDidMount(){
    //   // const {media} = this.props;
    //   // const imagesNestedArrays = media.map(m => [...m.sizes]);
    //   // console.log("MEDIA", media)
    //   // let images = [];
    //   // imagesNestedArrays.forEach(imagesArray => {
    //   //   images = [...images, ...imagesArray];
    //   // });
    //   //
    //   // console.log('images', images);
    //   // this.setState({images, count: images.length});
    // }

    // renderImageList(){
    //   const {images} = this.state;
    //   return images && images.map(image => (
    //       <div className="scroll-image"
    //            id = {image.url}>
    //         <img src = {image.url}
    //             className="media"/>
    //         <div onClick = {()=>{}}
    //              className = "image-clicker" />
    //       </div>
    //     )
    //   );
    // }
    renderButtons(){
      const {index} = this.props,
            {onImageChange} = this.props,
            lastButton = this.getLastButton(),
            startButton = this.getStartButton(),
            buttons = [];

      for(let i = startButton; i <= lastButton; i++ )
        buttons.push(i);
      console.log("renderButtons", index);
      return buttons.map( b => {
        return ( <button onClick = {() => onImageChange(b)}
                        key = {b}
                        className = { 'pagination-button ' + (b === index+1 ? 'active-button' : '')} >
                        {b}
                </button> );
        }
      );

    }

    getStartButton(){
      const { index, count } = this.props,
            button = index+1;

      // if the current page is page 1 or 2, the first button is for page 1.
      if(button <= 2){
        return 1;
      }

      if(button - 2 > 0 && button + 2 <= count){
        return button - 2;
      }

      if(button + 1 === count){
        return count > 5 ? button - 3 : 1;
      }

      if(button === count){
        return count>5 ? button - 4 : 1;
      }
    }

    // gets the last page in ther range of pagination buttons.
    getLastButton(){
      // the last page is either 2 more than the current page or the maximum number of page.
      const { count, index } = this.props,
            button = index+1,
            lastButton = button > 2 ? Math.min(count, button + 2)
                                       : Math.min(count, button + (5 - button) )
      return lastButton;

    }

    render(){
      const {images} = this.props;

      return (
        <div className = "images-scroll-bar">
          {this.renderButtons()}
        </div>
      );
    }
}

export default ProductImagesScrollBar;
