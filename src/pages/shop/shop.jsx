import React from 'react'
import SHOP_DATA from "./shop-data";
import CollectionPreview from "../../components/collection-preview/collection-preview";

function ShopPage() {
     const [ collection , setCollection ] = React.useState( {
          
          collections : SHOP_DATA
     } )
     return (
          <div className='shop-page'>
               {
                    collection.collections.map(({id , ...collectionProp}) => {
                         return(
                              <CollectionPreview key={collection.id} {...collectionProp}/>
                         )
                    })
               }
          </div >
     );
}

export default ShopPage;
