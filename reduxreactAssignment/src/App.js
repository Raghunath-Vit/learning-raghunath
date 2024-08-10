import React, { useState } from 'react';
// import Login from './Login';
// import Logout from './Logout';
// import UserMenu from './UserMenu';
import ReduxCounter from './ReduxCounter';
import ReduxTodo from './ReduxTodo';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => setIsLoggedIn(true);
  // const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
      {/* {isLoggedIn ? (
        <>
          <UserMenu isLoggedIn={isLoggedIn} />
          <Logout onLogout={handleLogout} />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )} */}
      {/* <ReduxCounter/> */}
      <ReduxTodo/>

    </div>
  );
}

export default App;
