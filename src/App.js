import Router from './router';
import { SignUpProvider } from './Context/SignUpContext';
import { AuthProvider } from './Context/AuthContext';
import { LikeProvider } from './Context/LikeContext';

function App() {
  return (
    <LikeProvider>
      <AuthProvider>
        <SignUpProvider>
          <Router />
        </SignUpProvider>
      </AuthProvider>
    </LikeProvider>
  );
};

export default App;
