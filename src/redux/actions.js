export function addLeaf(id) {
    return {
        type: "ADD_LEAF",
        payload: id
    }
}

export function deleteLeaf(id) {
    return {
        type: "DELETE_LEAF",
        payload: id
    }
}

export function renameLeaf(id, newName) {
    return {
        type: "RENAME_LEAF",
        payload: { id, newName }
    }
}

export function addNewBranch() {
    return {
        type: "ADD_NEW_BRANCH"
    }
}