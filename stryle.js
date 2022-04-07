:root{
    --red:#9B0000;
    --black:#121212;
    --blue:#185ADB;
    --white:#F7F7F7;

}

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #ffff;
    overflow-x: hidden;
    font-family: 'Raleway', sans-serif;
}

/** Menu de navegacion **/
#header{
    position: relative;
    width: 100%;
}
.menu{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: #ffff;

    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;
}

.menu .logo-box{
    margin-left: 20px;
}

.menu .logo-box{
    margin-left: 20px;
}
.menu .logo-box h1 a {
    text-decoration: none;
    font-size: 35px;
    font-weight: 400;
    color: var(--black);
}





/** Menu de navegacion **/
