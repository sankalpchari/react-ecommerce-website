import React from 'react'
import './Collection-items.styles.scss'
import CollectionPreview from '../preview-collection/collection-preview.component'

const CollectionItem = ({price,id,name,imageUrl}) =>(
   <div className='collection-item'>
       <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
       <div className="collection-footer">
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
       </div>
   </div>
)

export default CollectionItem;
