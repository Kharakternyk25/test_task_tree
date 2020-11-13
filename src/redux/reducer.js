const initialTree = {
    nodes: [
        {
            id: "0",
            name: "branch 0",
            nodes: [
                {
                    id: "00",
                    name: "leaf 0-0",
                    nodes: [
                        {
                            id: "000",
                            name: "leaf 0-0-0",
                            nodes: []
                        },
                        {
                            id: "001",
                            name: "leaf 0-0-1",
                            nodes: [
                                {
                                    id: "0010",
                                    name: "leaf 0-0-1-0",
                                    nodes: []
                                }
                            ]
                        }
                    ]
                },
                {
                    id: "01",
                    name: "leaf 0-1",
                    nodes: []
                },
            ]
        },
        {
            id: "1",
            name: "branch 1",
            nodes: [
                {
                    id: "10",
                    name: "leaf 1-0",
                    nodes: []
                }
            ]
        },
    ]
}

const reducer = (state = initialTree, action) => {
    switch (action.type) {
        case 'ADD_LEAF': {
            let newState = JSON.parse(JSON.stringify(state))
            let currentNode = newState
            for (let i = 0; i < action.payload.length; i++) {
                currentNode = currentNode.nodes[action.payload[i]]
            }
            currentNode.nodes.push(
                {
                    id: currentNode.id + currentNode.nodes.length.toString(),
                    name: `leaf ${(currentNode.id + currentNode.nodes.length.toString()).split('').join('-')}`,
                    nodes: []
                }
            )
            return newState
        }

        case 'DELETE_LEAF': {
            let newState = JSON.parse(JSON.stringify(state))
            let currentNode = newState
            for (let i = 0; i < action.payload.length; i++) {
                if (i === action.payload.length - 1) {
                    currentNode.nodes.splice(action.payload[i], 1)
                    currentNode.nodes = currentNode.nodes.map((item, index) => {
                        return { ...item, id: item.id.slice(0, item.id.length - 1) + index }
                    })
                }
                else currentNode = currentNode.nodes[action.payload[i]]
            }
            return newState
        }

        case 'RENAME_LEAF': {
            let newState = JSON.parse(JSON.stringify(state))
            let currentNode = newState
            for (let i = 0; i < action.payload.id.length; i++) {
                currentNode = currentNode.nodes[action.payload.id[i]]
            }
            currentNode.name = action.payload.newName
            return newState
        }

        case 'ADD_NEW_BRANCH': {
            let newState = JSON.parse(JSON.stringify(state))
            newState.nodes.push(
                {
                    id: newState.nodes.length.toString(),
                    name: `branch ${newState.nodes.length.toString()}`,
                    nodes: []
                }
            )
            return newState
        }

        default: return state
    }
}

export default reducer