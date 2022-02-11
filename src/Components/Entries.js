import Entry from './Entry'

const Entries = ({ entries, onDelete}) => {
    
    return (
    
        <div>
            {entries.map((entry)=> (
               <Entry key = {entry.id} entry={entry} onDelete={onDelete}/>
            ))}
           
        </div>

    )
}
export default Entries