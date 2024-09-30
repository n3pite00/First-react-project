import './Header.css'

function Header({ LogoImg }){

    return(
        <header>
            <img src={LogoImg} alt="Logo" className="logo"/>
            <h1>Welcome to product page!</h1>
        </header>
    );
}

export default Header