import React from 'react'
import './menu.item.scss'
import { withRouter } from 'react-router-dom'

function MenuItem( { title , imageUrl , size , history , linkUrl , match } ) {
     
     return (
          <div className = { `menu-item ${ size }` } onClick = { () => (
               history.push( `${ match.url }${ linkUrl }` )
          
          ) } >
               <div className = 'background-image'
                    style = { { backgroundImage : `url(${ imageUrl })` } } >
               </div >
               <div className = 'content' >
                    <h1 className = 'title' >
                         { title.toUpperCase() }
                         <span className = 'subtitle' >
                                   SHOP NOW
                                   </span >
                    </h1 >
               </div >
          </div >
     )
}

export default withRouter( MenuItem );
