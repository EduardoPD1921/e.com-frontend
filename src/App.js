import Router from './router';
import { SignUpContext } from './Context/SignUpContext';

function App() {
  return (
    <SignUpContext>
      <Router />
    </SignUpContext>
  );
};

export default App;
