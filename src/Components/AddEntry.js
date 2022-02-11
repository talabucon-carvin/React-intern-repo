import { useState } from "react"; 
import Button from './Button'; 

const AddEntry = ({onAdd}) => {
    
    const [text, setText]=useState('');
    
    const onSubmit = (e) => {
        e.preventDefault()
        onAdd ({text})
    }
 
    return (
        <form onSubmit = {onSubmit}>
            <div>
                <label>Entry</label>
                    <input 
                    type = "text"
                    value={text}
                    onChange = {(e)=> setText(e.target.value)}
                    placeholder = "add any"/>
            
            </div>
            <Button
            type="submit" value= "save" onSubmit={onSubmit}
            text="Add" color="red"
            />
        </form>
    )
}

export default AddEntry