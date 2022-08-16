import React from 'react';

export class ErrorBoundary extends React.Component {
   constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
   }

   static getDerivedStateFromError(error) {
      console.log('Something went wrong', { error });

      return { error: error };
   }

   componentDidCatch(error, errorInfo) {
      console.log('componentDidCatch', { error, errorInfo });

      this.setState({
         error: error,
         errorInfo: errorInfo
      });
   }

   render() {
      if (this.state.error) {
         return (
            <div>
               <h2>Something went wrong.</h2>
               <details style={{ whiteSpace: 'pre-wrap' }}>
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo && this.state.errorInfo.componentStack}
               </details>
            </div>)
      }

      return this.props.children;
   }
}