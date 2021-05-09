import React from 'react'
import './directory.scss'
import MenuItem from "../../components/menu-item/menu-item";
import SECTIONS_DATA from "./sections.data";


function Directory() {
     const [ state , setState ] = React.useState( {
          sections : SECTIONS_DATA
     } )
    
     return (
          <div className = 'directory-menu' >
               { state.sections.map( ( { id , ...sectionProps } ) => {
                         return (
                              <MenuItem key = { id } { ...sectionProps }/>
                         )
                    }
               ) }
          </div >
     )
}

export default Directory;
