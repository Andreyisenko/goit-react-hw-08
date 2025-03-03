import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'modern-normalize';
import App from './components/App';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { store } from './redux/store';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />

      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 1500,
        }}
      />
    </Provider>
  </StrictMode>
);
