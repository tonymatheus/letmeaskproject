
import {useHistory} from 'react-router-dom';
import illustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';
import googleIconImg from '../../assets/google-icon.svg';
import login from '../../assets/login.svg';
import '../../styles/auth.scss';
import { Button } from '../../components/Button/Button';
import { useAuth } from '../../Hooks/useAuth';

export function Home(){
    const history = useHistory();
    const {user, signInWithGoogle} = useAuth();
     
    const handleCreateRoom = async ()=>{ 
        if(!user){
            await signInWithGoogle();
        }
        history.push("/rooms/new");
    }
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
                    <button className="create-room" onClick={handleCreateRoom}>
                    <img src={googleIconImg} alt="criar sala com google" />
                        crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre numa sala</div>
                   <form>
                       <input type="text"
                       placeholder="digite o código da sala"
                       />
                       <Button   className="enter-room" type="submit"  >
                       <img className="loginlogo" src={login} alt="criar sala com google" />
                           Entrar na sala
                     </Button>
                   </form>
                </div>
            </main>
        </div>
    );
}
