import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from "redux";

import { selectIsCollectionFetching } from '../../redux/shop/shop-selectors';
import WithSpinner from '../with-spinner/with-spinner';
import CollectionOverview from './collections-overview';

const mapStateToProps = createStructuredSelector({
     isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
             connect(mapStateToProps), WithSpinner )(CollectionOverview);

export default CollectionsOverviewContainer;