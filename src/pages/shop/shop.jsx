import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from "react-redux";
import { fetchCollectionsStart  } from "../../redux/shop/shop-actions";
import CollectionsOverviewContainer
     from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";


  function ShopPage ( { fetchCollectionsStart ,match } ) {
     React.useEffect(()=>{
          fetchCollectionsStart();
     },[])
       
          return (
               < >
                    <Route exact path = { `${ match.path }` }
                         component = { CollectionsOverviewContainer } />
                    <Route path = { `${ match.path }/:collectionId` }
                         component = { CollectionPageContainer } />
               </ >
          )
     
}


const mapDispatchToProps = dispatch => ({
     fetchCollectionsStart : () => dispatch( fetchCollectionsStart() )
});


export default connect( null , mapDispatchToProps )( ShopPage );
