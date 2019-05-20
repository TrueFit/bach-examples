import React from 'react';
import {compose, withRef, withCallback} from '@truefit/bach';

const Component = ({textBox1, textBox2, focus1, focus2}) => (
  <div>
    <h1>With Ref</h1>
    <div>
      <input ref={textBox1} />
      <button onClick={focus1}>Focus Me</button>
    </div>
    <div>
      <input ref={textBox2} />
      <button onClick={focus2}>Focus Me</button>
    </div>
  </div>
);

export default compose(
  withRef('textBox1', null),
  withRef('textBox2', null),

  withCallback('focus1', ({textBox1}) => {
    textBox1.current.focus();
  }),
  withCallback('focus2', ({textBox2}) => {
    textBox2.current.focus();
  }),
)(Component);
