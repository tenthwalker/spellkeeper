import ErrorPage from '../Errors/Errors.js';
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(error) {
    super(error);
    this.state = {
      hasError: false,
      errorMessage: '',
    };
  }
 
  static getDerivedStateFromError(error) {
    if (error.message === 'Network response was not ok') {
      return { hasError: true, errorMessage: 'Network error' };
    } 
    if(error.message === 'Error fetching spells:') {
      return{ hasError: true, errorMessage: 'Cannot fetch spells'}
    }
    return { hasError: true, errorMessage: error.toString() };
  }

  componentsDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    return this.state.hasError ? <ErrorPage errorMessage={"An Error has Occurred"} /> : this.props.children;
  }
}

export default ErrorBoundary;