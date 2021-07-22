import React from 'react'
import './directory.scss'
import MenuItem from "../../components/menu-item/menu-item";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { connect , useSelector } from "react-redux";



function Directory({sections}) {
     // const sections = useSelector( state => state.directory.sections )
     
     return (
          <div className = 'directory-menu' >
               {sections.map( ( { id , ...sectionProps } ) => {
                         return (
                              <MenuItem key = { id } { ...sectionProps }/>
                         )
                    }
               ) }
          </div >
     )
}

const mapStateToProps=createStructuredSelector({
     sections:selectDirectorySections
})

export default connect(mapStateToProps) (Directory);
