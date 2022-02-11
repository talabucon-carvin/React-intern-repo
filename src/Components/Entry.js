
import {FaTimes} from 'react-icons/fa'
const Entry = ({entry, onDelete}) => {
    return (
        <div>
            <span><h3>{entry.text}</h3>
<FaTimes onClick={() => onDelete(entry.id)}/> </span>
        </div>
    )
}
export default Entry