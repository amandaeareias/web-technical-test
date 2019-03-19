import React from 'react';
import { connect } from 'react-redux';
import Header from '@/components/Layout/Header/Header';
import * as selectors from '@/store/selectors';
import * as operations from '@/store/operations';

const header = ({options, onSelectOption}) => {
  return <Header title="Collection" options={options} onSelectOption={onSelectOption} />;
};

const mapStateToProps = state => {
  return {
    options: selectors.getFeedOptions(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectOption: (id) => dispatch(operations.feedChangeOption(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(header);
