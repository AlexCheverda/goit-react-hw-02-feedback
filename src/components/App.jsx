import React from "react";
import { components } from "react";
import Counter from "./Counter/Counter";

const App = () => (
  <>
    <h1>Стан компонента</h1>
    <Counter initialValue={10} />
  </>
);

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };

  
// }
export default App;
