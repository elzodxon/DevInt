import React, { useState } from "react";

import createPersistedState from "use-persisted-state";
import Category from "../ui/Category/Category";
const useItemsState = createPersistedState("items");
const useHideState = createPersistedState("hideCompleted");

const Home = () => {

  return (
    <main className="container">

        <Category link={'/css'} title={'CSS'} subtitle={'Interview questions'}/>
        <Category link={'/javascript'} title={'JavaScript'} subtitle={'Interview questions'}/>
        <Category title={'Python'} subtitle={'Interview questions'}/>
        <Category title={'PHP'} subtitle={'Interview questions'}/>

    </main>
  );
};

export default Home;
