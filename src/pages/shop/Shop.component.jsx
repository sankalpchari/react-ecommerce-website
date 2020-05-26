import React,{Component} from 'react';
import './shop.styles.scss';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/preview-collection/collection-preview.component.jsx'

class Shop extends Component{
 constructor(){
     super();

     this.state ={
         colllections:SHOP_DATA, 
     }
 }
  

  render(){
      return(
        <div className='shop-page'>
            {
                this.state.colllections.map(({id,...colllection})=>(
                     <CollectionPreview key={id} {...colllection}/>
                ))
            }
          
        </div>
      );
  }


}

export default Shop;