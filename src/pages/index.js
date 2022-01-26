import * as React from "react";
import Layout from '../components/Layout/Layout';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <section className="section section--hero"></section>
      <section className="section section--about">
        <h1 className="section-title">Sobre nos</h1>
      </section>
      <section className="section section--services">
        <h1 className="section-title">Servicos</h1>
      </section>
      <section className="section section--team">
        <h1 className="section-title">Equipa</h1>
      </section>
      <section className="section section--contacts">
        <h1 className="section-title">Contactos</h1>
        <div className="contacts">
          <div className="contacts-info">
            <h2>Endereco</h2>
            <div className="address">
              <i class="contact-icon fas fa-map-marker-alt" aria-hidden="true"></i>
              <p class="contact-street"> Rua Dr. Manuel Pacheco Nobre, nº 61 A </p>
              <p class="contact-post">2830-080 Alto do Seixalinho - Barreiro</p>
              <p class="contact-country">PORTUGAL</p>
            </div>
            <div className="phone">
              <i class="contact-icon fas fa-phone" aria-hidden="true"></i>
              <a href="tel:+351 926949992" class="link contact-phone">+351 926 949 992</a>
            </div>
            <div className="email">
              <i class="contact-icon fas fa-at" aria-hidden="true"></i>
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
      </section>
    </Layout>
  )
}

export default IndexPage
