import Router from './router';
import { SignContext } from './Context/SignContext';

function App() {
  return (
    <SignContext>
      <Router />
    </SignContext>
  );
};

export default App;
