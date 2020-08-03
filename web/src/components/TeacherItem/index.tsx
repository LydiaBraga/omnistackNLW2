import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/7767586?s=460&u=0cf602b4b911b31802d78210e9e1f4fcf6b89e13&v=4" alt="Lydia Braga"/>
                <div>
                    <strong>Lydia Braga</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ea sed distinctio illum optio omnis vitae, veniam sint doloremque saepe!
                <br /><br />
                Ea quas porro eveniet cupiditate? Voluptatibus blanditiis excepturi placeat quos.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 30,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;