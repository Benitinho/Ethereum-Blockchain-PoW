import { Logo } from './Logo'
import Datos from '../datos.json'

export function Header() {
    return <div className='my-2 d-flex justify-content-between'>

             <div className='d-flex'>
             <Logo />
             <div className='mx-2'>
             <p className='fs-5'>{Datos.header.name}</p>
             </div>
             </div>

             <div>
                {
                    Datos.header.links.map((item, index) =>
                    <a key={index} className='mx-2 text-decoration-none' href={item.url}>{item.text}</a>
                    )
                }
             </div>
           </div>
}



