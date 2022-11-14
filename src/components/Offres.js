const Offres = () => {
  return (
    <div className="page-offres">
      {/* A CHANGER !!!  */}
      <img src="images/home/img-background-01.png" className="img-background" alt="lac"/> 
      
      <div className="empty-first-container"></div>

      <h1 class="uppercase white">retrouvez ici des formules adaptées à chacun, pour une expérience unique.</h1>
    
      <h2 className="text-center white">découvrez <strong>nos offres</strong></h2>
      <h3 className="text-center white bold uppercase">du 01/03 au 31/10</h3>

      <div class="cards flex">
        <div class="card bg-blur w1/4">
          <h3 class="uppercase">Cette formule comprend :</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
          <p><small>Service de charge de téléphone inclus.<br/>Semaine complète.</small></p>
        </div>
        <div class="card bg-blur w1/4">
          <h3 class="uppercase">Cette formule comprend :</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
          <p><small>Ne comprends pas les détecteurs, les moulinets et le petit matériel.<br/>Semaine complète.</small></p>
        </div>
        <div class="card bg-blur w1/4">
          <h3 class="uppercase">Cette formule comprend :</h3>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
          <p><small>Service de charge de téléphone inclus.<br/>Semaine complète.</small></p>
        </div>
      </div>
    </div>
  )
}

export default Offres;