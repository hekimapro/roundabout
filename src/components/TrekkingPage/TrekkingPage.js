import { Container, Row } from "react-bootstrap";
import DestinationCard from "../DestinationCard/DestinationCard";
import kilimanjaro from "@/images/destination/3.png"
import meru from "@/images/destination/mt-meru.jpg"
import DestinationCardInverse from "../DestinationCard/DestinationCardInverse";
import React from "react";

const TrekkingPage = () => {
  return (
    <Container>
      <br />
      <div
        style={{
          margin: "auto",
          textAlign: "center",
        }}
      >
        <p className="section-title__tagline">Trekking Beyond Boundaries</p>
        <h2 className="section-title__title">
          Discover Majestic Peaks and Untamed Paths
        </h2>
      </div>
      <br />
      <p>
        Embark on a thrilling odyssey into the heart of nature with our
        Wanderlust Trails, where the allure of untouched landscapes and towering
        peaks awaits avid adventurers. Our Trekking page invites you to
        transcend the ordinary and delve into the extraordinary as you navigate
        through diverse terrains, from lush forests to rugged mountain paths.
        Whether you're a seasoned trekker seeking the challenge of alpine
        heights or a novice eager to explore accessible trails, our curated
        selection of journeys promises an immersive experience that awakens the
        spirit of exploration.
      </p>
      <p>
        Immerse yourself in the raw beauty of the great outdoors, forging
        unforgettable memories with each step. Our Trekking page is a gateway to
        landscapes that echo with the whispers of ancient trails and panoramic
        vistas that leave you breathless. As you traverse through nature's
        masterpiece, encounter the camaraderie of fellow trekkers, marvel at the
        diverse flora and fauna, and savor the triumph of reaching awe-inspiring
        summits. Wanderlust Trails beckon; it's time to lace up your boots and
        embrace the exhilarating call of the wild.
      </p>
      <br />
      <br />
      <h2 style={{ fontWeight: "bold" }}>Our Trekking Destinations</h2>
      <br />
      <div
        style={{
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <DestinationCard
          image={kilimanjaro}
          title={"Mount Kilimanjaro"}
          textOne={
            "Rising majestically from Tanzania's horizons, Kilimanjaro Mountain stands as an emblem of awe and aspiration. This iconic peak, Africa's highest, reaches an astounding 5,895 meters above sea level. Its snow-capped crown, visible even from afar, beckons adventurers with the promise of conquering its heights."
          }
          textTwo={""}
          link={`details?state={"detailImage":"","id":7,"image":"3.png","title":"Kilimanjaro","col":6,"discoverTitle":"Discover%20Kilimanjaro%20Mountain","texts":["Rising%20majestically%20from%20Tanzania%27s%20horizons,%20Kilimanjaro%20Mountain%20stands%20as%20an%20emblem%20of%20awe%20and%20aspiration.%20This%20iconic%20peak,%20Africa%27s%20highest,%20reaches%20an%20astounding%205,895%20meters%20above%20sea%20level.%20Its%20snow-capped%20crown,%20visible%20even%20from%20afar,%20beckons%20adventurers%20with%20the%20promise%20of%20conquering%20its%20heights.","Beyond%20its%20towering%20stature,%20Kilimanjaro%27s%20diverse%20ecological%20zones%20unfold%20like%20chapters%20of%20a%20grand%20tale.%20From%20lush%20rainforests%20that%20shelter%20enchanting%20flora%20and%20fauna%20to%20arid%20desert-like%20expanses,%20the%20mountain%27s%20landscapes%20paint%20a%20vivid%20tapestry%20of%20nature%27s%20resilience.","Scaling%20Kilimanjaro%20isn%27t%20just%20an%20ascent;%20it%27s%20a%20transformative%20journey.%20The%20path%20meanders%20through%20ecosystems,%20challenging%20your%20spirit%20as%20you%20adapt%20to%20varying%20terrains%20and%20altitudes.%20With%20determination,%20guided%20by%20experienced%20hands,%20you%27ll%20ascend%20towards%20the%20roof%20of%20Africa,%20marking%20a%20personal%20triumph%20against%20the%20backdrop%20of%20unparalleled%20vistas.%20Kilimanjaro%20isn%27t%20just%20a%20mountain;%20it%27s%20a%20symphony%20of%20endurance,%20exploration,%20and%20the%20ecstasy%20of%20reaching%20new%20heights."]}`}
        />
        <br />
        <br />
        <DestinationCardInverse
          image={meru}
          title={"Mount Meru"}
          textOne={
            "Embark on an exhilarating journey through the heart of Tanzania's natural wonders with the Mount Meru trek. The adventure begins in the enchanting embrace of Arusha National Park, where the majestic Mount Meru looms overhead."
          }
          textTwo={""}
          link={`details?state={"detailImage":"","id":7,"image":"mt-meru.jpg","title":"Mount%20Meru","col":6,"discoverTitle":"Discover%20Mount%20Meru","texts":["Embark%20on%20an%20exhilarating%20journey%20through%20the%20heart%20of%20Tanzania%27s%20natural%20wonders%20with%20the%20Mount%20Meru%20trek.%20The%20adventure%20begins%20in%20the%20enchanting%20embrace%20of%20Arusha%20National%20Park,%20where%20the%20majestic%20Mount%20Meru%20looms%20overhead.%20As%20trekkers%20delve%20into%20the%20initial%20stages,%20they%20wind%20through%20verdant%20montane%20forests,%20encountering%20a%20rich%20tapestry%20of%20wildlife%20and%20lush%20vegetation.%20The%20trek%20gradually%20unfolds%20to%20reveal%20expansive%20heath%20and%20moorland,%20showcasing%20panoramic%20views%20of%20iconic%20landscapes,%20including%20the%20silhouette%20of%20Kilimanjaro.%20Navigating%20challenging%20terrains,%20such%20as%20the%20famed%20%27Saddle%27,%20adds%20an%20element%20of%20thrill,%20and%20climbers%20are%20rewarded%20with%20stunning%20sunrise%20vistas%20as%20they%20approach%20the%20summit.","Culminating%20at%20Socialist%20Peak,%204,566%20meters%20above%20sea%20level,%20the%20summit%20offers%20an%20unparalleled%20spectacle.%20From%20this%20lofty%20vantage%20point,%20adventurers%20are%20treated%20to%20sweeping%20views%20of%20Arusha%20National%20Park,%20the%20Great%20Rift%20Valley,%20and%20the%20distant%20silhouette%20of%20Mount%20Kilimanjaro.%20The%20triumphant%20sense%20of%20accomplishment,%20coupled%20with%20the%20breathtaking%20scenery,%20makes%20the%20Mount%20Meru%20trek%20an%20unforgettable%20odyssey.%20As%20trekkers%20descend,%20they%20carry%20with%20them%20not%20just%20the%20memories%20of%20conquering%20this%20lesser-explored%20gem,%20but%20also%20a%20profound%20connection%20to%20the%20untamed%20beauty%20and%20rugged%20allure%20of%20Mount%20Meru."]}`}
        />
        <br />
        <br />
      </div>
      <br />
    </Container>
  );
};

export default TrekkingPage;
