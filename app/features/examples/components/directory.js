import React from 'react';
import {Link} from 'react-router-dom';

const ReactHooksExamples = () => (
  <>
    <h1>React Hooks</h1>
    <h2>Simple</h2>
    <ul>
      <li>
        <Link to="/withState">withState</Link>
      </li>
      <li>
        <Link to="/withHandlers">withHandlers</Link>
      </li>
      <li>
        <Link to="/withEffect">withEffect</Link>
      </li>
      <li>
        <Link to="/withLifecycle">withLifecycle</Link>
      </li>
      <li>
        <Link to="/withContext">withContext</Link>
      </li>
      <li>
        <Link to="/withReducer">withReducer</Link>
      </li>
      <li>
        <Link to="/withCallback">withCallback</Link>
      </li>
      <li>
        <Link to="/withMemo">withMemo</Link>
      </li>
    </ul>

    <h2>Combined</h2>
    <ul>
      <li>
        <Link to="/withStateAndHandlers">withStateAndHandlers</Link>
      </li>
      <li>
        <Link to="/withStateLifecycleAndHandlers">
          withStateLifecycleAndHandlers
        </Link>
      </li>
      <li>
        <Link to="/withEffectAndState">withEffectAndState</Link>
      </li>
      <li>
        <Link to="/withMemoAndState">withMemoAndState</Link>
      </li>
    </ul>
  </>
);

export default () => (
  <>
    <ReactHooksExamples />
  </>
);
