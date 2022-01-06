import React from 'react'
import {Link} from 'react-router-dom'
import './dropdown.css'
import { useState } from 'react'

export default function DropDown() {
    
    return (
        <ul className='servicesSubMenu'>
            <li className='subMenuItems' >SWIMMING</li>
            <li className='subMenuItems' >MOUNTAINEERING</li>
            <li className='subMenuItems' >KAYAKING</li>
            <li className='subMenuItems' >PARA GLIDING</li>
        </ul>
    )
}
