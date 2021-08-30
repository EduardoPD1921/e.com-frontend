import Router from './router';
import { SignUpProvider } from './Context/SignUpContext';

function App() {
  return (
    <SignUpProvider>
      <Router />
    </SignUpProvider>
  );
};

export default App;
