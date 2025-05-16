import { useState } from "react"

const Drawer = ({ children, buttonText }) => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    function handleClick() {
        setDrawerOpen(!drawerOpen)
        // if(drawerOpen){
        //     setDrawerOpen(false)
        // } else {
        //     setDrawerOpen(true)
        // }
    }

    return (
        <>
            <button onClick={handleClick}>
                {buttonText ? buttonText: "Open"}
            </button>
            {drawerOpen ? children: null}
        </>
    )
}

export default Drawer