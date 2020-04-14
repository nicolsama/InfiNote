import React from 'react';
import NodeListItem from './node_list_item';

class NodeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allNodes: this.props.allNodes, 
            parentNodeIds: this.props.parentNodeIds, 
        }
        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (!Boolean(this.props.currentNodeId)) {
            this.props.fetchAllNodes();
        }
    }

    // MOVED TO NODE_LIST_ADD
    
    // handleClick(e) {
        // debugger; // when i try to replace these value I get a recursive component creating
        // let body = (this.props.currentNodeId) ? e.currentTarget.value : "";
        // let parent_node_id = (this.props.currentNodeId) ? this.props.currentNodeId : null; 
    //     const newNode = {
    //         id: null,
    //         body: "",
    //         completed: false,
    //         ord: null,
    //         parent_node_id: null,
    //     }

    //     this.props.createNode(newNode);
    // }

    
    render() {
        if (!this.props.parentNodeIds) return null; 
 
            const nodeLis = this.props.parentNodeIds.map(id => {

                let node = this.props.allNodes[id];
    
                return (<NodeListItem
                    key={node.id}
                    node={node}
                    allNodes={this.props.allNodes}
                    fetchNode={this.props.fetchNode}
                    updateNode={this.props.updateNode}
                    createNode={this.props.createNode}
                    deleteNode={this.props.deleteNode}
                    lastCreated={this.props.lastCreated}
                />)
            })

        

        return (<>

            <div className="NodeListDiv">
                <ul className="NodeListUl">
                <h2 className="focusTitle"> {this.props.allNodes[this.props.currentNodeId] ? this.props.allNodes[this.props.currentNodeId].body : ""} </h2>
                    {nodeLis}
                </ul>
                {/* <input
                    type='submit'
                    value='+'
                    id="addNode"
                    onClick={(e) => this.handleClick}
                /> */}
            </div>
        </>
        )
    }

}

export default NodeList; 