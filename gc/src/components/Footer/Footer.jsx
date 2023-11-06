import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <h1>Bas Bajna Chahiye Gaana</h1>
        <p className="p1">
          Gaana is the one-stop solution for all your music needs. Gaana offers
          you free, unlimited access to over{" "}
        </p>
        <p className="p2">
          30 million Hindi Songs, Bollywood Music, English MP3 songs, Regional
          Music & Mirchi Play.
        </p>
        <hr />
        <div className="ftlogo">
          <div className="foto">
            <Link to="https://www.facebook.com/gaana.com">
              <img
                src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png"
                height={60}
                width={60}
              />
            </Link>
            <Link>
              <img
                src="https://clipground.com/images/download-twitter-logo-transparent-clipart-4.png"
                height={50}
                width={50}
              />
            </Link>
          </div>
          <hr />
          <div className="f1">
            <ul>
              <Link>Advertise on Gaana.com</Link>
              <Link>Terms of Use</Link>

              <Link>Privacy Policy</Link>
              <Link>Partners</Link>
              <Link>Sitemap</Link>
              <Link>FAQ</Link>
            </ul>
            <hr />
          </div>
          <h2 className="aab">Quicklinks</h2>
          <div className="first">
            <div className="a">
              <h4>Albums</h4>
              <Link>English</Link>
              <br />
              <Link>Hindi</Link>
              <br />
              <Link>Punjabi</Link>
              <br />
              <Link>Tamil</Link>
              <br />
              <Link>Kannada</Link>
              <br />
              <Link>Bhojpuri</Link>
              <br />
              <Link>Marathi</Link>
              <br />
              <Link>Bengali</Link>
              <br />
              <Link>Gujarati Songs</Link>
              <br />
              <Link>Haryanvi</Link>
              <br />
              <button>View all</button>
            </div>
            <div className="a">
              <h4>Genres</h4>
              <Link>English</Link>
              <br />
              <Link>Hindi</Link>
              <br />
              <Link>Punjabi</Link>
              <br />
              <Link>Tamil</Link>
              <br />
              <Link>Kannada</Link>
              <br />
              <Link>Bhojpuri</Link>
              <br />
              <Link>Marathi</Link>
              <br />
              <Link>Bengali</Link>
              <br />
              <Link>Gujarati Songs</Link>
              <br />
              <Link>Haryanvi</Link>
              <br />
              <button>View all</button>
            </div>
            <div className="a">
              <h4>Artists</h4>
              <Link>English</Link>
              <br />
              <Link>Hindi</Link>
              <br />
              <Link>Punjabi</Link>
              <br />
              <Link>Tamil</Link>
              <br />
              <Link>Kannada</Link>
              <br />
              <Link>Bhojpuri</Link>
              <br />
              <Link>Marathi</Link>
              <br />
              <Link>Bengali</Link>
              <br />
              <Link>Gujarati Songs</Link>
              <br />
              <Link>Haryanvi</Link>
              <br />
              <button>View all</button>
            </div>
            <div className="a">
              <h4>New Release</h4>
              <Link>English</Link>
              <br />
              <Link>Hindi</Link>
              <br />
              <Link>Punjabi</Link>
              <br />
              <Link>Tamil</Link>
              <br />
              <Link>Kannada</Link>
              <br />
              <Link>Bhojpuri</Link>
              <br />
              <Link>Marathi</Link>
              <br />
              <Link>Bengali</Link>
              <br />
              <Link>Gujarati Songs</Link>
              <br />
              <Link>Haryanvi</Link>
              <br />
              <button>View all</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
