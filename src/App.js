import './App.css'
import { useSelector } from 'react-redux'
import Leaf from './components/Leaf'
import { useDispatch } from 'react-redux'
import { addNewBranch } from './redux/actions'

function App() {
  const dispatch = useDispatch()
  const tree = useSelector(state => state.nodes)
  return (
    <>
      <input type="button" value="add new branch" onClick={() => dispatch(addNewBranch())} />
      <ul>
        {tree.map(item => <Leaf key={item.id} leaf={item} />)}
      </ul>
    </>
  );
}

export default App