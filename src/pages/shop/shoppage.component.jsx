import React from 'react';
import SHOP_DATA from './shopdata';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component{
constructor(){
    super();

    this.state={
        collections:SHOP_DATA
    }
}
render(){
    return(
        <div>
            {this.state.collections.map(({id,...otherCollectionItems})=>(
                <CollectionPreview key={id} {...otherCollectionItems}/>
            ))}
        </div>
    )
}


}

export default ShopPage;