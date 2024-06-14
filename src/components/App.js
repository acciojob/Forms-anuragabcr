import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Form from './Form';
import FormRef from './FormRef';
import FormState from './FormState';
// Import your form components

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link id="form-link" to="/form">Form</Link>
          </li>
          <li>
            <Link id="form-ref-link" to="/form-ref">Form Ref</Link>
          </li>
          <li>
            <Link id="form-state-link" to="/form-state">Form State</Link>
          </li>
        </ul>
      </nav>
      <p>
        Now I can render any React component on any DOM node I want using
        ReactDOM.render
      </p>
      <Routes>
      <Route path="/form" element={<Form />} />
      <Route path="/form-ref" element={<FormRef />} />
      <Route path="/form-state" element={<FormState />} />
      </Routes>
    </Router>
  );
}

export default App;