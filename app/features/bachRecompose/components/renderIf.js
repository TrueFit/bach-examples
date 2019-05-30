import React from 'react';
import {compose, withEffect, withState} from '@truefit/bach';
import {renderIf} from '@truefit/bach-recompose';

const Loading = () => <div>Loading</div>;

const Content = () => <div>Content</div>;

export default compose(
  withState('loading', 'setLoading', true),
  withEffect(({setLoading}) => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []),
  renderIf(({loading}) => loading, Loading),
)(Content);
