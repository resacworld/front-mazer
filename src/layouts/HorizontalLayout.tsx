import React, { ComponentProps, createContext, ReactNode, useContext, useEffect, useState } from "react";
import logo from '../assets/images/logo/logo.png';
import PerfectScrollbar from 'react-perfect-scrollbar';
import '../assets/scss/app.scss';

const SideBarContext = createContext({
    selectedTitle: "Dashboard",
    setSelectedTitle: (selectedTitle: string) => {}
});

const SubMenuItem = ({ 
    title, 
    linkTo
}: React.PropsWithChildren<{
    title: string, 
    linkTo: string
}>) => {
    const { selectedTitle, setSelectedTitle } = useContext(SideBarContext);

    return <li className={`submenu-item ${selectedTitle == title?"active":""}`}>
        <a href={linkTo} 
        className="submenu-link"
        onClick={(e)=>{
            e.preventDefault();
            setSelectedTitle(title)
        }}
        >{title}</a>
    </li>
}

const SideBarItem = ({ 
    title, 
    href = "#",
    blank = false,
    iconClassName,
    subMenuItems = []
}: React.PropsWithChildren<{
    title: string, 
    href?: string,
    blank?: boolean,
    iconClassName: string,
    subMenuItems?: Array<ComponentProps<typeof SubMenuItem>>
}>) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ active, setActive ] = useState(false);
    const { selectedTitle, setSelectedTitle } = useContext(SideBarContext);

    useEffect(() => {
        if(subMenuItems.some((subMenuItem) => subMenuItem.title == selectedTitle)){
            setIsOpen(true);
            setActive(true);
        } else {
            if(selectedTitle == title){
                setActive(true);
            } else if(active) {
                setIsOpen(false)
                setActive(false);
            }
        }
    }, [selectedTitle]);

    return <li className={`sidebar-item ${active?"active":""} ${subMenuItems.length>0?"has-sub":""}`}>
        <a href={href} 
        target={blank?"_blank":"_self"}
        className="sidebar-link" 
        onClick={(e) => {
            if(blank) return;
            if(subMenuItems.length == 0){
                setSelectedTitle(title);
            }
            setIsOpen(!isOpen);
        }}>
            <i className={`bi ${iconClassName}`}></i>
            <span>{title}</span>
        </a>
        <ul className={`submenu ${isOpen?"submenu-open":"submenu-closed"}`} style={{"--submenu-height": 42.77 * subMenuItems.length} as React.CSSProperties}>
            {subMenuItems.map((subMenuItemProps) => {
                return <SubMenuItem key={subMenuItemProps.title} {...subMenuItemProps} />
            })}
        </ul>
    </li>
}

const SideBarTitle = ({ title }: React.PropsWithChildren<{ title: string }>) => {
    return <li className="sidebar-title">{title}</li>
}

const HorizontalLayout = ({ children }: React.PropsWithChildren<{}>): ReactNode => {
    const [ selectedTitle, setSelectedTitle ] = useState("Dashboard");
    const [ sidebarActive, setSidebarActive ] = useState(true);

    return (
        <SideBarContext.Provider value={{ selectedTitle, setSelectedTitle }}>
            <div id="sidebar" className={`sidebar-desktop ${sidebarActive?"active":"inactive"}`}>
                <div className="sidebar-wrapper active ps ps--active-y">
                    <PerfectScrollbar>
                        <div className="sidebar-header position-relative">
                            <div className="d-flex justify-content-between">
                                <div className="logo">
                                    <a href="index.html"><img src={logo} alt="Logo" /></a>
                                </div>
                                <div className="toggler">
                                    <a href="#" 
                                    className="sidebar-hide d-xl-none d-block"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSidebarActive(!sidebarActive);
                                    }}
                                    ><i className="bi bi-x bi-middle" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar-menu">
                            <ul className="menu">
                                <SideBarTitle title="First" />
                                <SideBarItem title="Dashboard" iconClassName="bi-house" />
                                <SideBarItem title="I Don't known" iconClassName="bi-house" />
                                <SideBarItem title="Pages" iconClassName="bi-file-earmark-text" subMenuItems={[
                                    {title:"Profile", linkTo:"/pages/profile"},
                                    {title:"Settings", linkTo:"/pages/settings"},
                                    {title:"Help", linkTo:"/pages/help"},
                                ]} />
                                <SideBarItem title="Components" iconClassName="bi-grid" subMenuItems={[
                                    {title:"Alert", linkTo:"/components/alert"},
                                    {title:"Avatar", linkTo:"/components/avatar"},
                                    {title:"Badge", linkTo:"/components/badge"},
                                    {title:"Button", linkTo:"/components/button"},
                                ]} />
                                <SideBarTitle title="Rapid Links" />
                                <SideBarItem title="Github" iconClassName="bi-github" href="https://github.com/resacworld" blank={true} />
                            </ul>
                        </div>
                    </PerfectScrollbar>
                </div>
            </div>
            <div id="main" className="layout-horizontal min-vh-100 bg-blue-100">
                <div className="content-wrapper container">
                    <a href="#" 
                    className="burger-btn d-block d-xl-none mb-3"
                    onClick={(e) => {
                        e.preventDefault();
                        setSidebarActive(!sidebarActive);
                    }}
                    >
                        <i className="bi bi-justify fs-3" />
                    </a>
                    {children}
                </div>

                <footer>
                    <div className="container mt-4">
                        <div className="footer clearfix mb-0 text-muted">
                            <div className="float-start">
                                <p>2021 &copy; Mazer</p>
                            </div>
                            <div className="float-end">
                                <p>Crafted with <span className="text-danger"><i className="bi bi-heart" /></span> by <a
                                    href="http://ahmadsaugi.com">A. Saugi</a></p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </SideBarContext.Provider>
    );
}

export default HorizontalLayout;