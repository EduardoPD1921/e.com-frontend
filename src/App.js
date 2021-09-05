import Router from './router';
import { SignUpProvider } from './Context/SignUpContext';
import { AuthProvider } from './Context/AuthContext';
import { LikeProvider } from './Context/LikeContext';
import { CartProvider } from './Context/CartContext';

function App() {
  return (
    <CartProvider>
      <LikeProvider>
        <AuthProvider>
          <SignUpProvider>
            <Router />
          </SignUpProvider>
        </AuthProvider>
      </LikeProvider>
    </CartProvider>
  );
};

export default App;
