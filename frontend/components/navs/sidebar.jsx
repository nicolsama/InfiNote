import React from 'react';
import NodeList from '../nodes/node_list';
import SidebarItem from './sidebar_item';
import { Link, NavLink } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }
   

    render() {

        if (!this.props.parentNodeIds) return null; 
        let SidebarLis = this.props.parentNodeIds.map( id => {
            let node = this.props.allNodes[id];
            return (<SidebarItem 
                        key={id}
                        node={node}
                        allNodes={this.props.allNodes}
                        />)
        })

        // let transform = (this.props.transformArrow) ? "transformArrow" : null; 

        return (<>
            
            <svg 
                viewBox="0 0 448 512" className="sidebarArrow" onClick={this.props.handleMenuClick} onMouseOut={this.props.handleMenuMouseLeave}>
                <path d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"
                    rotate="135"></path>
            </svg>

            <ul className='SidebarUl'>
                <li><Link to="/" >HOME</Link></li>
                <ul>
                    {SidebarLis}
                </ul>
            </ul>
            </>)
    }
}

export default Sidebar;