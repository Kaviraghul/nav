import React from 'react'
import {Link} from 'react-router-dom'
import './dropdown.css'

export default function DropDown() {
    return (
        <ul className='servicesSubMenu'>
            <li>SWIMMING</li>
            <li>MOUNTAIN CLIMBING</li>
            <li>KAYAKING</li>
            <li>PARA GLIDING</li>
        </ul>
    )
}
