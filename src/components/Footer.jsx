export default function Footer() {
    return(
        <footer className="w-full h-40 bg-white text-black flex justify-around items-center">
            <div>
                <h3 className="text-lg font-bold">Products</h3>
                <ul>
                    <li>
                        <Link to="/catalog/telescopes" className="text-sm">Telescopes</Link>
                    </li>
                    <li>
                        <Link to="/catalog/binoculars" className="text-sm">Binoculars</Link>
                    </li>
                    <li>
                        <Link to="/catalog/accessories" className="text-sm">Accessories</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-bold">Made by</h3>
                <ul>
                    <li>
                        <Link to="https://www.linkedin.com/in/luis-guzman-bautista/" target="_blank" rel="nonoreferrer noopener" className="text-sm">LinkedIn</Link>
                    </li>
                    <li>
                        <Link to="https://github.com/TimmyElTaco" className="text-sm" target="_blank" rel="nonoreferrer noopener">GitHub</Link>
                    </li>
                    <li>
                        <Link to="https://twitter.com/TimmyElTaco" className="text-sm" target="_blank" rel="nonoreferrer noopener">Twitter/X</Link>
                    </li>
                </ul>
            </div>
            <div></div> 
        </footer>
    )
}