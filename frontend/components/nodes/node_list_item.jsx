import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NodeListContainer from './nodes_list_container';
import Tooltip from '../navs/tooltip'; 


class NodeListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, 
            this.props.node, 
            {show_tooltip: false})
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.updateNode = this.updateNode.bind(this);
        this.showChildren = this.showChildren.bind(this);
        this.textInput = React.createRef();
        this.lastCreated = React.createRef();
        this.handleBlur = this.handleBlur.bind(this);
        this.showTooltip = this.showTooltip.bind(this);
        // this.handleFocus = this.handleFocus.bind(this);
    }

    componentDidMount() {
        this.textInput.current.focus();
    }

    updateNode() {
        this.props.updateNode(this.state)
            // .then(() => this.props.history.push(`nodes/${this.state.id}`));
    }

    
    handleBlur(e) {
        this.setState({ body: e.currentTarget.textContent }, this.updateNode)
            // .then(() => this.props.history.push(`/${this.state.id}`));
    }

    // handleFocus(e) {
    // }

    handleKeyDown(e) {
        // debugger;

        if ((this.state.id) && e.key === 'Enter') {
            e.preventDefault();
            this.setState({ body: e.currentTarget.textContent }, this.updateNode);
    
            const newNode = {
                id: null,
                body: "",
                completed: false,
                ord: null,
                parent_node_id: this.props.node.parent_node_id,
                ord_bookmark: this.props.node.ord,
            }

            this.props.createNode(newNode);
        } else if (e.keyCode === 8 && (e.currentTarget.innerHTML.length === 0)) {
            // debugger; 
            this.props.deleteNode(this.state.id);
        }
    }

    showChildren() {
        const show_children = this.state.show_children; 
        this.setState({ show_children: !show_children })
            .then(() => this.props.history.push(`nodes/${this.props.currentNodeId}`));
    }

    showTooltip() {
        // debugger; 
        const show_tooltip = this.state.show_tooltip;
        this.setState({ show_tooltip: !show_tooltip });
    }

    render() { 
        const allNodes = this.props.allNodes; 
        const childNodeIds = this.props.node.child_ids.sort((a,b) => ( allNodes[a].ord - allNodes[b].ord) );
            debugger
        const nestedNodes = childNodeIds.map( id => { 
            const node = allNodes[id];
 
            return (<NodeListItem
                key={id}
                node={node}
                allNodes={this.props.allNodes}
                fetchNode={this.props.fetchNode}
                updateNode={this.props.updateNode}
                createNode={this.props.createNode}
                deleteNode={this.props.deleteNode}
                lastCreated={this.props.lastCreated}
                currentNodeId={this.props.currentNodeId}
                type="child" />)
        });

        const tooltip = (<div>
            <div className="tooltip-arrow" />
            <div className="tooltip-label"><Tooltip 
                    node={this.state}
                    className="tooltipDiv"
                    />
                </div>
        </div>);

        // debugger;
        let showLink = (this.props.currentNodeId) ? `#/nodes/${this.props.currentNodeId}` : "#";
        return (
            <>
            <li className="NodeListItem">
                <div className="svgContainer">

                        <a href="#" onClick={this.showTooltip}>
                            <svg viewBox="0 0 24 24" className="tooltipCircles">
                                <circle cx="6" cy="12" r="2" className="ttcircle"></circle>
                                <circle cx="12" cy="12" r="2" className="ttcircle"></circle>
                                <circle cx="18" cy="12" r="2" className="ttcircle"></circle>
                            </svg>
                        </a>

                            { this.state.show_tooltip ? tooltip : null }
                        
                        <a href={showLink} onClick={this.showChildren}>
                            <svg transform={this.state.show_children && this.state.child_ids.length ? "rotate(90)" : ""}>
                            { (this.state.child_ids.length) ? 
                            <path d="M13.75 9.56879C14.0833 9.76124 14.0833 10.2424 13.75 10.4348L8.5 13.4659C8.16667 13.6584 7.75 13.4178 7.75 13.0329L7.75 6.97072C7.75 6.58582 8.16667 6.34525 8.5 6.5377L13.75 9.56879Z"
                            /> : null }
                            </svg>
                        </a>

                        <Link to={`/nodes/${this.state.id}`}>
                            <div>
                                <svg className="bullet">
                                    <circle cx="9" cy="9" r="3.5" />
                                </svg>
                            </div>
                        </Link>

                        <div
                            class='editable'
                            contentEditable="true"
                            onKeyDown={(e) => this.handleKeyDown(e)}                            
                            ref={this.textInput}
                            onBlur={this.handleBlur}
                            >
        
                            {this.state.body}
                    
                        </div>
                    </div>
                <ul className='sublist' >
                    { this.state.show_children
                        ? nestedNodes
                        : null
                    }
                </ul>
            </li>
            </>
        );
    }

}

export default NodeListItem;