import React from 'react';
import Nav from './Menu/Nav';
import NavItem from './Menu/NavItem';

export default function Menu (props) {
    return (
        <div className="divide-y divide-gray-100">
            <Nav>
                <NavItem href="/home" isActive>Accueil</NavItem>
                <NavItem href="/quiz">Quiz</NavItem>
                <NavItem href="/visualnovel">Visual Novel</NavItem>
            </Nav>
        </div>
    )
}