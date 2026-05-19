import Logo from '../../../assets/logo.png'

function Navbar() {
    return (
    <nav className="fixed w-full flex flex-row m-4">
        <img className='w-15' src={Logo} alt="logo du site" />
        <div className='flex flex-1 justify-center items-center'>
            <ul className='flex gap-4 rounded-full px-6 py-3 text-white backdrop-blur-md bg-white/5 border border-white/10'>
                <li><a href="">Accueil</a></li>
                <li><a href="">Projets</a></li>
                <li><a href="">Compétences</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar