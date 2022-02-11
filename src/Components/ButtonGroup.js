import Button from '../Components/Button'

const ButtonGroup = () => {
    let groupArr = []
    for(let i = 0; i< 20; i++){
        groupArr.push(
            <Button color="cyan" text="View"/>
        )

        groupArr.push(
            <Button color="red" text="Edit"/>
        )
        
        groupArr.push(
            <Button color="gold" text ="Delete"/>
        )
        groupArr.push(
            <br/>
        )
    }   

        let rows = groupArr.map((item, index)=> {
            return <span key={index}>{item}</span>
        })

    return (
        <>
        {rows}
        </>
        
        
    )
}

export default ButtonGroup