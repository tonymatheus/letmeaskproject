import illustrationImg from '../../assets/illustration.svg';
import {Link} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import login from '../../assets/login.svg';
import '../../styles/auth.scss';
import { Button } from '../../components/Button/Button';
import { useAuth } from '../../Hooks/useAuth';


export function NewRoom(){
//    const {user, signInWithGoogle} = useAuth();

    return(
        <div  id="page-auth" >
            <aside>
                <img src={illustrationImg} alt="ilustração que  simboliza perguntas  erespostas" />
                <strong>Criar sala de Q&amp; Ao vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className='main-content'>
                    <img src={logoImg} alt="Let me ask" />
                  
                  <h2>Criar uma nova sala</h2>
                   <form>
                       <input type="text"
                       placeholder="nome da sala"
                       />
                       <Button   className="enter-room" type="submit">
                       <img className="loginlogo" src={login} alt="criar sala" />
                           Criar Sala
                     </Button>
                   </form>
                   <p>Quer entrar em uma sala existente? <Link to="/" >Clique aqui</Link> </p>
                </div>
            </main>
        </div>
    );
}
