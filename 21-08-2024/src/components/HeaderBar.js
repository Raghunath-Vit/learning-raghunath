import React from 'react';
import ReactDOM from 'react-dom';
import { CurrentUser, Notifications } from './Contexts';
const HeaderBar = () => {
    const user = React.useContext(CurrentUser);
    const notifications = React.useContext(Notifications);
  return (
    <div>
       <header>
        Welcome back, {user.name}!
        You have {notifications.length} notifications.
      </header>
    </div>
  )
}

export default HeaderBar
