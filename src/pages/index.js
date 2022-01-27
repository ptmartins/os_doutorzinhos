import * as React from "react";
import {StaticImage} from 'gatsby-plugin-image';
import Layout from '../components/Layout/Layout';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import nini from '../images/antonieta.png';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <section className="section section--hero"></section>
      <section className="section section--about">
        <h1 className="section-title">Sobre nos</h1>
        <div className="section-innerWrapper">
          <div class="aboutUs-details">
            <div class="aboutUs-text">
              <p>O centro de estudo - Os doutorzinhos visa o sucesso imediato de cada 
                  aluno na sua progressão curricular, no entanto, tão importante quanto 
                  este, temos outros objetivos como:
              </p>
              <ul className="aboutUs-goals">
                  <li>Fomentar hábitos de estudo e autonomia</li>
                  <li>Compreensão dos conteúdos curriculares</li>
                  <li>Fomentar a curiosidade científica e consequentemente a vontade 
                      de aprender de cada aluno </li>
              </ul>
              <p>
                  Todos estes itens centram-se num método intensivo de análise e 
                  compreensão das dificuldades de cada aluno, proporcionando a 
                  sua superação através da execução de exercícios complementares 
                  e da preparação para os testes.
              </p>                          
            </div>
            <div class="aboutUs-infographics">
                <div class="abstract"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section--services">
        <h1 className="section-title">Servicos</h1>
        <div className="section-innerWrapper">
          <div class="service service--studyRoom">
            <StaticImage src="../images/textbooks.svg" alt="" className="service-icon" />
            <h2 class="service-title">Salas de Estudo</h2>
            <p class="service-text">Do 1 ciclo ao ensino secundario</p>                    
          </div>
          <div class="service service--tutoring">
            <StaticImage src="../images/white-board-pythagorean.svg" alt="" className="service-icon" />
            <h2 class="service-title">Explicacoes</h2>
            <p class="service-text">Individuais ou wem grupo do 2 ciclo ao ensino secundario</p>
          </div>
          <div class="service service--exams">
            <StaticImage src="../images/a-plus-test.svg" alt="" className="service-icon" />
            <h2 class="service-title">Preparacao para Exames</h2>
            <p class="service-text">Peparacao para as Provas de Afericao e Exames Nacionais</p>
          </div>
        </div>
      </section>
      <section className="section section--team">
        <h1 className="section-title">Equipa</h1>
        <div className="section-innerWrapper">
          <div class="team-member team-member--antonieta">
              <div class="member-image" style={{backgroundImage: `url(${nini})`}}></div>
              <h2 class="member-name">Maria Antonieta Figueiredo</h2>
              <h3 class="member-role">Coordenadora</h3>
              <p class="member-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quam accusantium nemo. </p>
          </div>
          <div class="team-member team-member--jane">
              <div class="member-image"></div>
              <h2 class="member-name">Jane Doe</h2>
              <h3 class="member-role">Professora</h3>
              <p class="member-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum quam accusantium nemo. </p>
          </div>
        </div>
      </section>
      <section className="section section--contacts">
        <h1 className="section-title">Contactos</h1>
        <div className="section-innerWrapper">
          <div className="contacts">
            <div className="contacts-info">
              <h2>Endereco</h2>
              <div className="address">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                <p class="contact-street"> Rua Dr. Manuel Pacheco Nobre, nº 61 A </p>
                <p class="contact-post">2830-080 Alto do Seixalinho - Barreiro</p>
                <p class="contact-country">PORTUGAL</p>
              </div>
              <div className="phone">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <a href="tel:+351 926949992" class="link contact-phone">+351 926 949 992</a>
              </div>
              <div className="email">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <a href="mailto:info@centroestudososdoutorzinhos.pt" class="link contact-email">info@centroestudososdoutorzinhos.pt</a>
              </div>
              <div className="opening-times">
                <p>Encontramo-nos abertos de 2a a 6a das 13h30 as 19h30</p>
              </div>
              <div id="map" className="map">

              </div>
            </div>
            <div className="contacts-form">
              <form action="" className="form">
                <div className="form-group">
                  <label for="name" class="label">Nome:</label>
                  <input type="text" id="name" name="name" class="input" placeholder="Nome" />
                </div>
                <div className="form-group">
                  <label for="email" class="label">Email:</label>
                  <input type="text" id="email" name="email" class="input" placeholder="Email" />
                </div>
                <div className="form-group">
                  <label for="subject" class="label">Assunto:</label>
                  <textarea name="subject" id="subject" cols="30" rows="10" class="textarea"></textarea>
                </div>
                <input type="submit" value="Enviar" className="btn btn--cta" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
