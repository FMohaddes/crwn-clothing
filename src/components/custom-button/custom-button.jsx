import React from 'react'
import { CustomButtonContainer } from "./custom-button.styles";

function CustomButton( { children , ...otherProps } ) {
     
     return (
          // ! Space => } custom-button`
          <CustomButtonContainer { ...otherProps }>
               { children }
          </CustomButtonContainer>
     );
}

export default CustomButton;
