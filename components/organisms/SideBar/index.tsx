import React from 'react'
import Footer from './Footer'
import MenuItem from './MenuItem'
import Profile from './Profile'

interface SideBarProps {
    activeMenu: 'overview' | 'transactions' | 'settings'
}

export default function SideBar(props: SideBarProps) {

    const {activeMenu} = props;
    return (
      <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
              <Profile />
                <div className="menus">
                    <MenuItem href='/member' title="Overview" icon="ic-menu-overview" active={activeMenu === 'overview'}/>
                    <MenuItem href='/member/transaction' title="Transaction" icon="ic-menu-transaction" active={activeMenu === 'transactions'} />
                    <MenuItem href='/member' title="Messages" icon="ic-menu-messages"/>
                    <MenuItem href='/member' title="Card" icon="ic-menu-card"/>
                    <MenuItem href='/member' title="Reward" icon="ic-menu-reward"/>
                    <MenuItem href='/member/edit-profile' title="Settings" icon="ic-menu-settings" active={activeMenu === 'settings'}/>
                    <MenuItem href='/sign-in' title="Logout" icon="ic-menu-logout"/>

                </div>
                <Footer />
            </div>
        </section>
    )
}
