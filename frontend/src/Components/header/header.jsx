const Header = () => {
    return (
        <>
            <header>
                <div className="name">
                    Name of project
                </div>
                <div className="nav">
                    <ul>
                        <li id="nav-item1">Home</li>
                        <li id="nav-item2">About</li>
                        <li id="nav-item3">Contact</li>
                        {/* <li id="nav-item4"></li>
        <li id="nav-item5"></li> */}
                    </ul>
                </div>
            </header>
        </>
    )
}
export default Header;