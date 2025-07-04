export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className="logo">Petshop La Huella</h1>
          <nav>
            <ul className="nav">
              <li><a href="#productos">Productos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <h2 className="title">Todo para tu mascota en un solo lugar</h2>
          <p className="description">
            Cuidamos a tus mascotas con productos de calidad y atención personalizada. Hacé tu pedido online o escribinos por WhatsApp.
          </p>
          <a
            href="https://wa.me/5491121558328"
            target="_blank"
            rel="noopener noreferrer"
            className="cta"
          >
            Hacer pedido por WhatsApp
          </a>
        </section>

        <section className="cards">
          <div className="card">
            <h2>Alimentos</h2>
            <p>Balanceado para perros, gatos y mascotas especiales.</p>
          </div>
          <div className="card">
            <h2>Accesorios</h2>
            <p>Collares, juguetes, ropa, comederos y más.</p>
          </div>
          <div className="card">
            <h2>Atención personalizada</h2>
            <p>Consultanos por stock, precios y recomendaciones.</p>
          </div>
        </section>

        <section id="productos" className="productos">
          <h2 className="subtitle">Productos destacados</h2>

          <div className="producto">
            <div className="producto-info">
              <h3>Alimento Royal Canin Adulto 15kg</h3>
              <p className="precio">$25.000</p>
              <span className="stock disponible">En stock</span>
              <a href="https://wa.me/5491121558328?text=Hola%2C%20tienen%20disponible%20Royal%20Canin%2015kg%3F" target="_blank" className="btn-wpp">
                Consultar por WhatsApp
              </a>
            </div>
            <img src="/images/royal-canin.png" alt="Royal Canin 15kg" className="producto-img" />
          </div>

          <div className="producto">
            <div className="producto-info">
              <h3>Collar reforzado talla M</h3>
              <p className="precio">$3.500</p>
              <span className="stock disponible">En stock</span>
              <a href="https://wa.me/5491121558328?text=Hola%2C%20tienen%20el%20collar%20reforzado%20talla%20M%3F" target="_blank" className="btn-wpp">
                Consultar por WhatsApp
              </a>
            </div>
            <img src="/images/collar-m.jpg" alt="Collar reforzado talla M" className="producto-img" />
          </div>

          <div className="producto">
            <div className="producto-info">
              <h3>Shampoo hipoalergénico para perros</h3>
              <p className="precio">$3.800</p>
              <span className="stock agotado">Sin stock</span>
              <a className="btn-wpp disabled">Consultar</a>
            </div>
            <img src="/images/shampoo.jpg" alt="Shampoo hipoalergénico para perros" className="producto-img" />
          </div>
        </section>
        <section className="mapa">
  <h2 className="subtitle">¿Dónde estamos?</h2>
  <div className="mapa-contenedor">
    <iframe
      title="Ubicación Petshop La Huella"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13130.015974785162!2d-58.4836346!3d-34.5743947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb61cfb1b52a7%3A0xb7a97ddfa798e7a0!2sVilla%20Urquiza%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1720090000000!5m2!1ses-419!2sar"
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</section>

      </main>

      <footer id="contacto" className="footer">
        <div className="container">
          <p>© 2025 Petshop La Huella</p>
          <p>Zona Villa Urquiza, CABA</p>
          <p>Seguinos en Instagram: <a href="https://instagram.com/petshoplahuella">@petshoplahuella</a></p>
        </div>
      </footer>
    </>
  );
}
