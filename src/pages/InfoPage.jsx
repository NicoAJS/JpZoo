import { useEffect, useState } from "react";
import Harmonika from "../components/Harmonika";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase-config';
import map from '../assets/kort.jpg';
import show from '../assets/show.jpg';
import spise from '../assets/spise.jpg';
import PopupButton from '../components/Popup';

export default function InfoPage() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();


  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/fejl");
  }, [user, loading, navigate]);





  return (
    <div className="harmonikaSide">
      <Harmonika title="Billet / Sæsonkort">
        <div>
          <h4>Billetpriser:</h4>
          <p>Voksne - 200kr.</p>
          <p>Børn (2-11 år) - 130kr.</p>
          <p>Børn (0-1 år) - Gratis</p>
          <p>Seniorer (+65 år.) - 180 kr.</p>
        </div>
        <div>
          <h4>Sæsonkort:</h4>
          <p>Voksne - 385kr.</p>
          <p>Børn (2-11 år) - 250kr.</p>
          <p>Børn (0-1 år) - Gratis</p>
          <p>Seniorer(+65 år.) - 365kr.</p>
        </div>

        <div className="popUp">
          <PopupButton
          buttonText="Køb"
          popupMessage="Vi beklager, men denne funktion er i øjeblikket utilgængelig."
        />
        </div>

        
      </Harmonika>

      <Harmonika title="Aktiviteter">
        <img className="showImg" src={show} alt="Jyllands Park Zoo dyre show" />
        <h4>Fordring og præsentation af dyrene</h4>
        <p>Søbjøne kl. 11 og 14.30</p>
        <p>Pingviner kl. 15.30</p>
        <p>Slanger kl. 11.30</p>

        <h4>Dyrepasser for en dag</h4>
        <p>Drømmer du om at være dyrepasser for en dag eller vil du se, hvad der sker bag kulisserne i Jyllands Park Zoo?</p>
        <p>Deltag i programmet fra kl. 8-12, hvor du følger en dyrepasser. Pris: 595 kr. pr. person.</p>
        <p>To personer kan deltage sammen (hvis de kender hinanden), men prisen er pr. person. </p>
        <p>Årskortholdere betaler samme pris. For voksne og børn fra 6 år.</p>
        <p>DU FÅR EN DAG FYLDT MED GODE OPLEVELSER Programmet besluttes på dagen. Vi garanterer mange nye oplevelser.
          Du hjælper med foder, rengøring og fodring af dyrene. Husk praktisk tøj og sko.</p>
        <p>Medbring kamera - vi tager billeder undervejs.</p>

        <div className="popUp">
          <PopupButton
          buttonText="Book"
          popupMessage="Vi beklager, men denne funktion er i øjeblikket utilgængelig."
        />
        </div>

        <h4>Rundvisning</h4>
        <p>Søger du en spændende oplevelse for familie, venner, kunder eller kollegaer? Tag på rundvisning med en dyrepasser i Jyllands Park Zoo!</p>
        <p>Få et indblik i zooens hverdag og hør sjove og lærerige historier om dyrene.</p>
        <p>Rundvisning: ca. 1 time, pris: 350 kr. (ekskl. entré) Tilbydes alle dage fra uge 15-37, undtagen uge 28-31.</p>
        <p>For booking, kontakt os på booking@jyllandsparkzoo.dk eller tlf. 23 90 60 24.</p>
        <p>Book i god tid og angiv gerne, hvilke dyr I ønsker at se.</p>
        <p>Vi anbefaler en gruppestørrelse på op til 30 personer pr. guide.</p>

      </Harmonika>

      <Harmonika title="Spisesteder">
        <h4>Spisesteder</h4>
        <h5>Medbringe mad</h5>
        <p>Du er mere end velkommen til at medbringe din egen mad og drikke til parken. Vi tilbyder 850 hyggelige siddepladser, hvor du kan nyde din mad i afslappende omgivelser.</p>
        <h5>Gril selv</h5>
        <p>I Jyllands Park Zoo er det tilladt at medbringe dine egne mad- og drikkevarer. Vi tilbyder også en grill til fri benyttelse ved legepladsen og Sø-kiosken.</p>
        <h5>Cafeteria</h5>
        <p>I Jyllands Park Zoo finder du også et hyggeligt cafeteria, hvor der er noget for enhver smag, uanset om du er stor eller lille.</p>
        <div className="popUp">
          <PopupButton
          buttonText="Se menu"
          popupMessage="Vi beklager, men denne funktion er i øjeblikket utilgængelig."
        />
        </div>
        <br />
        <img className="showImg" src={spise} alt="Jyllands Park Zoo spise steder" />
      </Harmonika>

      <Harmonika title="Familie Information">
        <h4>Familie Information</h4>
        <p>James Doe (far)
          <br />
          tlf: 12 34 56 78
          <br />
          Nødinformation
        </p>
        <p>Jane Doe (mor)
          <br />
          tlf: 11 22 33 44
          <br />
          Nødinformation
        </p>
        <p>Jamie Doe (barn)
          <br />
          Alder: 10 år.
          <br />
          Nødinformation: Bi-allergi.
        </p>
        <p>Janie Doe (barn)
          <br />
          Alder: 6 år.
          <br />
          Nødinformation:
        </p>

        <div className="popUp">
          <PopupButton
          buttonText="Rediger"
          popupMessage="Vi beklager, men denne funktion er i øjeblikket utilgængelig."
        />
        </div>
      </Harmonika>

      <Harmonika title="Kort">
      <div className="popUp">
          <PopupButton
          buttonText="GPS"
          popupMessage="Vi beklager, men denne funktion er i øjeblikket utilgængelig."
        />
        </div>
        <img className='map' src={map} alt="Jyllands Park Zoo Kort" />
      </Harmonika>

      <Harmonika title="Betalings oversigt">
        <table className="text-table">
          <tbody>
            <tr>
              <td className="name-cell">James Doe</td>
              <td className="currency-cell">kr.</td>
            </tr>
            <tr>
              <td className="name-cell">Jane Doe</td>
              <td className="currency-cell">kr.</td>
            </tr>
            <tr>
              <td className="name-cell">Jamie Doe</td>
              <td className="currency-cell">kr.</td>
            </tr>
            <tr>
              <td className="name-cell">Janie Doe</td>
              <td className="currency-cell">kr.</td>
            </tr>
          </tbody>
        </table>
        <div className="container">
          <h4>Vælg konto</h4>
          <div className="form-section">
            <div className="radio-group">
              <label>
                <input type="radio" name="person" value="james-doe" />
                <span className="radio-label">James Doe</span>
              </label>
              <br />
              <label>
                <input type="radio" name="person" value="jane-doe" />
                <span className="radio-label">Jane Doe</span>
              </label>
            </div>
            <div className="radio-group">
              <label>
                <input type="radio" name="person" value="jamie-doe" />
                <span className="radio-label">Jamie Doe</span>
              </label>
              <br />
              <label>
                <input type="radio" name="person" value="janie-doe" />
                <span className="radio-label">Janie Doe</span>
                </label>
            </div>
          </div>
          <p>Beløb</p>
          <div className="input-group">
            <input type="text" className="amount-input" />
            <span className="currency-label">kr.</span>
          </div>
          <br />
          <div className="popUp">
          <PopupButton
          buttonText="Betal med mobilpay"
          popupMessage="Vi beklager, men denne funktion er i øjeblikket utilgængelig."
        />
        </div>
        </div>
      </Harmonika>

      
    </div>
  );
}

