import React, { useEffect } from 'react'
// rest of the code
import ReduxDataFlowDiagram from './ReduxDataFlowDiagram.gif'
import './GridComponent.css';


// useSelector TO  reads a value from the store state and subscribes to updates
// import { useSelector } from "react-redux";
// // useDispatch returns the store's dispatch method to let you dispatch actions.
// import { useDispatch } from "react-redux";

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, logIn, logOUt } from './Store/actions/action';
import { CodeBlock } from "react-code-blocks";

function ReduxeApp() {


  const count = useSelector((state) => state.reducer);
  const loginState = useSelector((state) => state.LoginReducer);

  const test = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(test);


  }, [count, test, dispatch])
  return (
    <div>


      <div>

        <div>
          <p>This example will demonstrate how to set up Redux for state management in a React application to create a counter Simply  .</p>
          <h2 id="requirements">Requirements</h2>
          <p>: You must have knowledge of react js</p>
          <h2 id="step1">step1</h2>
          <p>make sure you have Redux installed in your project. You can install it using npm or yarn:</p>
          <pre><code className="language-bash">npm install redux react-redux{"\n"}</code></pre>
          <p>Here's a step-by-step example:</p>
          <ol>
            <li><strong>Create Redux Actions and Reducer</strong></li>
          </ol>
          <blockquote>
            <p>I know very well that everyone who explained this example before was dividing it into three files
              Action.js &amp;  Reducer.js &amp; Store.js
              But here I will put them in one file just for simplicity and so that you do not get dizzy
              its just redux not NASA </p>
          </blockquote>

          <p>   Create a file for your Redux actions and reducers. Let's call it <code>counter.js</code>. Define your actions and a reducer function.</p>






          <CodeBlock
            text={`   // counter.js
            const INCREMENT = 'INCREMENT';
            const DECREMENT = 'DECREMENT';
         
            // Action creators
            export const increment = () => ({ type: INCREMENT });
            export const decrement = () => ({ type: DECREMENT });
         
            // Reducer
            const initialState = { count: 0 };
         
            export default function counterReducer(state = initialState, action) {
              switch (action.type) {
                case INCREMENT:
                  return { count: state.count + 1 };
                case DECREMENT:
                  return { count: state.count - 1 };
                default:
                  return state;
              }
            }`}
            language='javascript'
            showLineNumbers={true}
          />



          <ol start={2}>
            <li><p><strong>Configure Redux Store</strong></p>
              <p>In your main application file, configure the Redux store and connect it to your React app using the <code>Provider</code> component.</p>
              <pre><code className="language-javascript">// index.js or App.js{"\n"}import React from 'react';{"\n"}import ReactDOM from 'react-dom';{"\n"}import {"{"} createStore {"}"} from 'redux';{"\n"}import {"{"} Provider {"}"} from 'react-redux';{"\n"}import counterReducer from './counter';{"\n"}import App from './App';{"\n"}{"\n"}const store = createStore(counterReducer);{"\n"}{"\n"}ReactDOM.render({"\n"}{"  "}&lt;Provider store={"{"}store{"}"}&gt;{"\n"}{"    "}&lt;App /&gt;{"\n"}{"  "}&lt;/Provider&gt;,{"\n"}{"  "}document.getElementById('root'){"\n"});{"\n"}</code></pre>
            </li>
            <li><p><strong>Create the React Component</strong></p>
              <p>Now, create a React component that will display the counter and handle the actions.</p>
              <pre><code className="language-javascript">// App.js{"\n"}import React from 'react';{"\n"}import {"{"} useSelector, useDispatch {"}"} from 'react-redux';{"\n"}import {"{"} increment, decrement {"}"} from './counter';{"\n"}{"\n"}function App() {"{"}{"\n"}{"  "}const count = useSelector((state) =&gt; state.count);{"\n"}{"  "}const dispatch = useDispatch();{"\n"}{"\n"}{"  "}return ({"\n"}{"    "}&lt;div&gt;{"\n"}{"      "}&lt;h1&gt;Redux Counter&lt;/h1&gt;{"\n"}{"      "}&lt;p&gt;Count: {"{"}count{"}"}&lt;/p&gt;{"\n"}{"      "}&lt;button onClick={"{"}() =&gt; dispatch(increment()){"}"}&gt;Increment&lt;/button&gt;{"\n"}{"      "}&lt;button onClick={"{"}() =&gt; dispatch(decrement()){"}"}&gt;Decrement&lt;/button&gt;{"\n"}{"    "}&lt;/div&gt;{"\n"}{"  "});{"\n"}{"}"}{"\n"}{"\n"}export default App;{"\n"}</code></pre>
            </li>
            <li><p><strong>Run the Application</strong></p>
            </li>
          </ol>
          <p>   Start your React application using
            <CodeBlock
              text='npm start'
              language='javascript'
              showLineNumbers={true}
            />

            or your preferred method.</p>
          <CodeBlock
            text='npm install redux react-redux'
            language='javascript'
            showLineNumbers={true}
          />

          <p>This example demonstrates a simple Redux counter in a React application. When you click the "Increment" or "Decrement" buttons, the Redux store will manage the state, and the UI will update accordingly.</p>
        </div>

      </div>

      <div className="grid-container">
        <div className="item1">Header</div>
        <div className="item2">Menu</div>
        <div className="item3">
          <img style={{ height: '400px' }} src={ReduxDataFlowDiagram} />

        </div>

        <div className="item4">Right</div>

        <div className="item5"><h2>Heloo redux</h2> <div >
          <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
          </div>
        </div>

          <div className="item5"><h2>Heloo redux</h2> <div >
            <div>
              <p>Count: {loginState ? 'true' : 'false'}</p>
              <button onClick={() => dispatch(logIn())}>Loigin</button>
              <button onClick={() => dispatch(logOUt())}>logOUt</button>
            </div>
          </div>




          </div>
        </div>



      </div>
    </div>
  )
}

export default ReduxeApp
