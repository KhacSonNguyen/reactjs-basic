import "./index.css";
import Search from "../Search";

function Header(props) {
    const menuList = [
        {
            name: 'Home',
            href: '',
            subMenu: [
                {
                    name: 'Spotlight',
                    href: '',
                },
                {
                    name: 'Trending',
                    href: '',
                },
                {
                    name: 'Most view of week',
                    href: '',
                }
            ]
        },
        {
            name: 'News',
            href: '',
            subMenu: [
                {
                    name: 'Sports',
                    href: '',       
                },
                {
                    name: 'Games',
                    href: '',       
                },
                {
                    name: 'Life',
                    href: '',       
                }
            ]
        },
        {
            name: 'Contact',
            href: '',
        },
        {
            name: 'Help',
            href: '',
        },
    ];
    const listItems = menuList.map((item) => {
        if (item.subMenu) {
            const subMenu = item.subMenu.map((subItem) => {
                return <li><a href={subItem.href}>{subItem.name}</a></li>
            });
            return <li className="subMenu"><a href={item.href}>{item.name}<ul>{subMenu}</ul></a></li>
        } else {
            return <li><a href={item.href}>{item.name}</a></li>
        }
    });
    return (
        <>
            <ul className="menu">
                {listItems}

            </ul>
            <Search/>
        </>
    );
}

export default Header;