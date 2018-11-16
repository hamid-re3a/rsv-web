
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            items: Items,
        };
        this.renderItems = this.renderItems.bind(this);
    }
    renderItems(key) {
        return <AccordionItem key={key} index={key} items={this.state.items[key]} />
    }
    render() {
        return (<aside className="menu-sidebar d-none d-lg-block">

            <div className="logo">

                <Link to={'/'}><img src="imgs/logo.png" alt="Aja Salary Bill" /></Link>
                فیش حقوقی
            </div>
            <div className="menu-sidebar__content js-scrollbar1">
                <nav className="navbar-sidebar">
                    <ul className="list-unstyled navbar__list">
                        {Object.keys(this.state.items).map(this.renderItems)}
                    </ul>
                </nav>
            </div>
        </aside>);
    }
}

const Items = {
    item1: {
        title: 'معرفی', link: 'introduction', subMenu: {
            subitem1: { title: 'درباره محصول', link: '', subMenu: {} },
            subitem2: { title: 'اخبار اطلاعیه ها', link: '', subMenu: {} },
            subitem3: { title: 'راهنمای محصول', link: '', subMenu: {} },
            subitem4: { title: 'حقوق دسترسی', link: '', subMenu: {} }
        }
    },
    item2: { title: 'فیش حقوقی', link: '', subMenu: {} },
    item3: { title: 'فیش گروهی', link: '', subMenu: {} },
    item4: { title: 'فیش کارکنان پایور', link: '', subMenu: {} },
    item5: { title: 'فیش وظیفه‌ها', link: '', subMenu: {} },
    item6: {
        title: 'امنیت', link: '', subMenu: {
            subitem1: { title: 'گزارش ورود و خروج', link: '', subMenu: {} },
            subitem2: { title: 'گزارش مشاهده چاپ', link: '', subMenu: {} },
            subitem3: { title: 'گزارش ورود ناموفق', link: '', subMenu: {} },
            subitem4: { title: 'گزارش مدیریت', link: '', subMenu: {} },
        }
    },
    item7: { title: 'مدیریت سیستم', link: '', subMenu: {} },
    item8: {
        title: 'راهنما', link: '', subMenu: {
            subitem1: { title: 'راهنمای تهیه فیش', link: '', subMenu: {} },
            subitem2: { title: 'راهنمای چاپ فیش', link: '', subMenu: {} },
            subitem3: { title: 'راهنمای تغییر رمز عبور', link: '', subMenu: {} },
            subitem4: { title: 'چاپ فیش گروهی', link: '', subMenu: {} },
        }
    },
};


class AccordionItem extends Component {
    constructor() {
        super();
        this.state = {
            active: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            active: !this.state.active,
            className: "active"
        });
    }

    renderItems(key) {
        return <AccordionItem key={key} index={key} items={this.props.items.subMenu[key]} />

    }

    render() {
        const activeClass = this.state.active ? "active" : "";
        const openClass = this.state.active ? "display-block" : "";
        const { title, link, subMenu } = this.props.items;
        var menuIcon = '';
        menuIcon = 'fa-window-minimize';
        var acaranim = '';
        if (Object.keys(subMenu).length > 0) {
            menuIcon = 'fa-less-than';
            if (activeClass === "active")
                acaranim = 'acaranim-open';
            else
                acaranim = 'acaranim-close';

        } else {
            menuIcon = 'fa-window-minimize';
        }

        return (
            <li className={activeClass + " pointer"}  >
                    <Link onClick={this.toggle} to={link}>
                        <i className={"fas fa-xs " + menuIcon}></i>{title}
                    </Link>
                <ul className={"list-unstyled navbar__sub-list js-sub-list " + openClass + " " + acaranim}>
                    {Object.keys(subMenu).map(this.renderItems.bind(this))}

                </ul>
            </li>
        );
    }
}


