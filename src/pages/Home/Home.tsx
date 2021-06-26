import React from 'react';
import illustrationImg from '../../assets/illustration.svg';
import logoImg from '../../assets/logo.svg';
import googleIconImg from '../../assets/google-icon.svg';

export function Home(){
    return(
        <div>
            <aside>
                <img src={illustrationImg} alt="ilustração que  simboliza perguntas  erespostas" />
                <strong>Criar sala de Q&amp; Ao vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div>
                    <img src={logoImg} alt="Let me ask" />
                    <button>
                    <img src={googleIconImg} alt="criar sala com google" />
                        crie sua sala com o Google
                    </button>
                    <div>ou entre numa sala</div>
                   <form>
                       <input type="text"
                       placeholder="digite o código da sala"
                       />
                       <button type="submit">entrar na sala</button>
                   </form>
                </div>
            </main>
        </div>
    );
}
