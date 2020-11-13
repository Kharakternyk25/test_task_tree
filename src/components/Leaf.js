import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addLeaf, deleteLeaf, renameLeaf } from '../redux/actions'

function Leaf({ leaf }) {
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)

    function toggleLeafHandler() {
        setToggle(!toggle)
    }

    function addLeafHandler(id) {
        dispatch(addLeaf(id))
        setToggle(true)
    }

    function deleteLeafHandler(id) {
        dispatch(deleteLeaf(id))
    }

    function renameLeafHandler(id, newName) {
        dispatch(renameLeaf(id, newName))
    }

    return (
        <li>
            <input type="text"
                defaultValue={leaf.name}
                onChange={e => renameLeafHandler(leaf.id, e.target.value)}
            />
            <button onClick={() => toggleLeafHandler(leaf.id)} disabled={(!toggle && !leaf.nodes.length) ? true : false}>{toggle ? "collapse" : "expand"}</button>
            <button onClick={() => addLeafHandler(leaf.id)}>add leaf</button>
            <button onClick={() => deleteLeafHandler(leaf.id)}>delete leaf</button>
            {toggle && <ul>{leaf.nodes.map(item => <Leaf key={item.id} leaf={item} />)}</ul>}
        </li>
    );
}

export default Leaf