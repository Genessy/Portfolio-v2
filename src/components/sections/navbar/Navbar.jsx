import Logo from '../../../assets/logo.png'

function Navbar() {
    return (
    <nav className="w-full flex flex-row mt-4 fixed">
        <img className='w-15 absolute left-4' src={Logo} alt="logo du site" />
        <div className='flex justify-center items-center w-full'>
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