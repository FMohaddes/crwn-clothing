import React from 'react'
import styled from 'styled-components';


class ErrorBoundary extends React.Component {
     state = { hasError : false }
     
     static getDerivedStateFromError( error ) {
          return { hasError : true }
     }
     
     componentDidCatch( error , errorInfo ) {
          console.log( error )
     }
     
     render() {
          if ( this.state.hasError ) {
               return <ErrorImageOverlay >
                    <ErrorImageContainer imageUrl="https://i.imgur.com/oCkEbrA.png" />
                    <ErrorImageText >Sorry this page is broken</ErrorImageText >
               </ErrorImageOverlay >
          }
          return this.props.children
          
     }
}

export default ErrorBoundary;


export const ErrorImageOverlay = styled.div`
     height          : 60vh;
     width           : 100%;
     display         : flex;
     flex-direction  : column;
     justify-content : center;
     align-items     : center;
`;

export const ErrorImageContainer = styled.div`
     display             : inline-block;
     background-image    : ${ ( { imageUrl } ) => `url(${ imageUrl })` };
     background-size     : cover;
     background-position : center;
     width               : 40vh;
     height              : 40vh;
`;

export const ErrorImageText = styled.h2`
     font-size : 28px;
     color     : #2f8e89;
`;
