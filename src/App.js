import Router from './router';
import { SignUpProvider } from './Context/SignUpContext';
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <SignUpProvider>
        <Router />
      </SignUpProvider>
    </AuthProvider>
  );
};

export default App;
