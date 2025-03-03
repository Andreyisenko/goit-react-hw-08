import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'modern-normalize';
import App from './components/App';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <App />
      </BrowserRouter>
        </PersistGate>
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
