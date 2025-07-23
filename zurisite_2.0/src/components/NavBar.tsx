import {NavLink} from 'react-router-dom';
import type { JSX } from 'react';
function NavBar() : JSX.Element {
    return (
        <nav>
            <NavLink
                to="/Landing"
                className = {
                    ({isActive}) => (isActive ? 'active' : undefined)}>
                home
            </NavLink>
            <NavLink
                to="/About"
                className = {
                    ({isActive}) => (isActive ? 'active' : undefined)}>
                about
            </NavLink>
            <NavLink
                to="/Contact"
                className = {
                    ({isActive}) => (isActive ? 'active' : undefined)}>
                hmu
            </NavLink>
            <NavLink
                to="/Projects"
                className = {
                    ({isActive}) => (isActive ? 'active' : undefined)}>
                projects
            </NavLink>
            <NavLink
                to="/Blog"
                className = {
                    ({isActive}) => (isActive ? 'active' : undefined)}>
                site log
            </NavLink>
            <NavLink
                to="/Art"
                className = {
                    ({isActive}) => (isActive ? 'active' : undefined)}>
                art
            </NavLink>
            <NavLink
                to="/Random"
                className = {
                    ({isActive}) => (isActive ? 'active' : undefined)}>
                random
            </NavLink>
        </nav>
    )
}

export default NavBar;