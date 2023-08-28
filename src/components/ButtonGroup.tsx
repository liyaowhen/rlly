import './ButtonGroup.css'

export default function ButtonGroup(
{
    buttons,
    active,
    setActive,
    previous,
    setPrevious,
    ...props
}: object & {
    buttons: string[],
    active: number,
    setActive: (val: number) => void,
    previous: number,
    setPrevious: (val: number) => void
}) {
    

    return (
        <div className="button-group">
            {
                buttons.map((val, i) => 
                    <button 
                        onClick = {
                            () => {
                                if (i == active) 
                                    return; 
                                setPrevious(active); 
                                setActive(i)
                            }
                        }
                        className = {
                            "button " + 
                            (i == active ? "active" : "") + 
                            (i == previous ? "previous" : "")
                        }
                        key = {i}
                    >
                        {val}
                    </button>
                )
            }
        </div>
    )
}