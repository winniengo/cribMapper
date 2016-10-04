import { connect } from 'react-redux';

import { allListings } from '../../reducers/selectors';
import { requestListings } from '../../actions/listings';
import { updateBounds } from '../../actions/filters';

import Search from './search';

const mapStateToProps = state => ({
  listings: allListings(state)
});

const mapDispatchToProps = dispatch => ({
  requestListings: () => dispatch(requestListings()),
  updateBounds: bounds => dispatch(updateBounds(bounds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);