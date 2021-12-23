import React from 'react'
import Footer from './Footer'
import MenuItem from './MenuItem'
import Profile from './Profile'

export default function SideBar() {
    return (
      <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
              <Profile />
                <div className="menus">
                    <MenuItem title="Overview" icon="ic-menu-overview" active/>
                    <MenuItem title="Transaction" icon="ic-menu-transaction"/>
                    <MenuItem title="Messages" icon="ic-menu-messages"/>
                    <MenuItem title="Card" icon="ic-menu-card"/>
                    <MenuItem title="Reward" icon="ic-menu-reward"/>
                    <MenuItem title="Settings" icon="ic-menu-settings"/>
                    <MenuItem title="Logout" icon="ic-menu-logout"/>

                </div>
                <Footer />
            </div>
        </section>
    )
}
