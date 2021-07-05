import React from 'react'
import './collections-overview.scss'
import { createStructuredSelector } from "reselect";
import {  selectCollectionsForPreview } from "../../redux/shop/shop-selectors";
import { connect } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview";

function CollectionOverview ({collections}) {
  
  return (
       <div className='collections-overview'>
         {
           collections.map( ( { id , ...collectionProp } ) => {
             return (
                  <CollectionPreview key = { id } { ...collectionProp }/>
             )
           } )
         }
       </div >
  );
}


const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);
