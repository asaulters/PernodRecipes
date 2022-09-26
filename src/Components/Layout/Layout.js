import React, {useState} from 'react';

import classes from './Layout.module.css';

const Layout = ({children}) => {
    const [extend, setExtend] = useState(false);

    const LinkExtend = ()=>{
        setExtend((curr) => !curr)
    }

  return (
    <div className={classes.layoutWrapper}>
        <header>
            <div className={classes.logoDiv}>Drinks!</div>
            <nav>
                <div className={classes.navFull}>
                    <div className={classes.links}>
                        <a href='/' className={classes.links_a}>Home</a>
                        <a href='/' className={classes.links_a}>About</a>
                        <a href='/' className={classes.links_a}>Submit</a>
                    </div>
                    <h1 
                        className={classes.burger}
                        onClick={LinkExtend}
                        >&equiv;</h1>
                </div>
                <div className={classes.extendedLinks}>
                    {extend &&  (
                        <div className={classes.nav_extended}>
                            <a href='/' className={classes.links_b}>Home</a>
                            <a href='/' className={classes.links_b}>About</a>
                            <a href='/' className={classes.links_b}>Submit</a>
                        </div>
                    )}
                </div>



            </nav>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <h1>Footer!</h1>
        </footer>
    </div>
  )
}

export default Layout