import { connect } from 'react-redux';
import NodeList from './nodes_list'; 
import { fetchAllNodes, fetchNode, createNode, updateNode, deleteNode } from '../../actions/node_actions';



const mapStateToProps = (state) => { 
    debugger;
    return ({
        allNodes: state.entities.nodes.allNodes,
        parentNodeIds: state.entities.nodes.parentNodeIds,
    })
}; 

const mapDispatchToProps = (dispatch) => ({
    fetchAllNodes: () => dispatch(fetchAllNodes()), 
    fetchNode: nodeId => dispatch(fetchNode(nodeId)), 
    createNode: node => dispatch(createNode(node)), 
    updateNode: node => dispatch(updateNode(node)), 
    deleteNode: nodeId => dispatch(deleteNode(nodeId)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(NodeList);
