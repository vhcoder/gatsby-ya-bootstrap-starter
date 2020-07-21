import React, { useState } from 'react';

export const routeContext = React.createContext();

const Provider = props => {
  const [activeKey, setActiveKey] = useState("/");

  const activePage=(ap)=>{
    console.log(ap);
    alert(ap);
    setActiveKey(ap);

  }

  return (
    <routeContext.Provider value={{
      activeKey,
      setKey:(props)=>{activePage(props)}
    }}>
      {props.children}
    </routeContext.Provider>
  )
};

export default ({ element }) => (
    <Provider>
      {element}
    </Provider>
  );

