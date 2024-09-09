import { Container } from "react-bootstrap";
import React from "react";
import DestinationCardInverse from "../DestinationCard/DestinationCardInverse";
import DestinationCard from "../DestinationCard/DestinationCard";

import tarangire from "@/images/destination/tarangire-home.jpg";
import serengeti from "@/images/destination/arusha.png";
import ngorongoro from "@/images/destination/4.png";
import manyara from "@/images/destination/5.png";
import arushaPark from "@/images/destination/11.png";
import mkomazi from "@/images/destination/33.png";
import ruaha from "@/images/destination/ruaha.png";
import saadani from "@/images/destination/saadani.png";

const SafariPage = () => {
  return (
    <Container>
      <br />
      <div
        style={{
          margin: "auto",
          textAlign: "center",
        }}
      >
        <p className="section-title__tagline">Safari Adventures Unveild</p>
        <h2 className="section-title__title">
          Encounter the Majesty of the Wilderness
        </h2>
      </div>
      <br />
      <p>
        Embark on an unforgettable Safari Odyssey, where the rhythm of the
        untamed wilderness comes to life. Our Safaris page invites you to
        immerse yourself in the magic of nature's grand theater, where each
        expedition unveils a mesmerizing spectacle of wildlife wonders. Traverse
        through vast landscapes teeming with iconic creatures, from majestic
        lions prowling the savannah to graceful herds of elephants navigating
        ancient migration routes. Our curated safaris promise an intimate
        encounter with the untamed, providing a front-row seat to the intricate
        dance of predator and prey in their natural habitat.
      </p>
      <p>
        Safari Odyssey goes beyond the conventional, offering experiences that
        resonate with the pulse of the wild. Expert guides lead you through
        pristine reserves and national parks, sharing their wealth of knowledge
        about the diverse ecosystems and the fascinating behaviors of the animal
        kingdom. Whether you're capturing the sunrise over the Serengeti plains
        or witnessing a sunset safari in Tarangire, each moment is a snapshot of
        the untethered beauty that defines a true safari adventure. Join us on a
        journey where the call of the wild echoes in every rustle of leaves and
        every distant roar, creating memories that will linger long after your
        safari expedition comes to an end.
      </p>
      <br />
      <br />
      <h2 style={{ fontWeight: "bold" }}>Our Safari Destinations</h2>
      <br />
      <div
        style={{
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <DestinationCard
          image={serengeti}
          title={"Serengeti"}
          textOne={
            "Serengeti National Park stands as an awe-inspiring testament to the grandeur of nature. Encompassing an expansive 14,750 square kilometers, it ranks among the most extensive protected regions in Africa. This vast expanse is a sanctuary of diverse ecosystems, from sweeping plains to lush woodlands, creating an ever-changing backdrop for an extraordinary journey."
          }
          textTwo={""}
          link={`details?state={"detailImage":"","id":2,"image":"1.png","title":"Serengeti","col":6,"discoverTitle":"Discover%20Serengeti%20National%20Park","texts":["Serengeti%20National%20Park%20stands%20as%20an%20awe-inspiring%20testament%20to%20the%20grandeur%20of%20nature.%20Encompassing%20an%20expansive%2014,750%20square%20kilometers,%20it%20ranks%20among%20the%20most%20extensive%20protected%20regions%20in%20Africa.%20This%20vast%20expanse%20is%20a%20sanctuary%20of%20diverse%20ecosystems,%20from%20sweeping%20plains%20to%20lush%20woodlands,%20creating%20an%20ever-changing%20backdrop%20for%20an%20extraordinary%20journey.","However,%20it%27s%20not%20just%20the%20landscapes%20that%20make%20Serengeti%20truly%20remarkable;%20it%27s%20the%20vibrant%20pulse%20of%20life%20that%20inhabits%20these%20spaces.%20The%20world-renowned%20Great%20Migration%20is%20a%20spectacle%20that%20defies%20description,%20as%20millions%20of%20wildebeest%20and%20zebras%20traverse%20the%20plains%20in%20search%20of%20greener%20pastures,%20an%20awe-inducing%20testament%20to%20the%20rhythms%20of%20the%20natural%20world.%20Lions,%20elephants,%20cheetahs,%20and%20a%20tapestry%20of%20other%20wildlife%20call%20this%20land%20home,%20offering%20unparalleled%20opportunities%20to%20witness%20these%20creatures%20in%20their%20unscripted,%20untamed%20habitats.","Visiting%20Serengeti%20National%20Park%20is%20an%20invitation%20to%20step%20into%20a%20living,%20breathing%20story%20of%20nature%27s%20brilliance.%20Explore%20ancient%20landscapes,%20watch%20in%20wonder%20as%20the%20sun%20paints%20the%20sky%20with%20hues%20of%20gold%20and%20pink,%20and%20allow%20the%20symphony%20of%20wildlife%20sounds%20to%20envelop%20you.%20It%27s%20a%20once-in-a-lifetime%20experience%20that%20will%20etch%20memories%20of%20untamed%20beauty%20forever%20in%20your%20heart."]}`}
        />
        <br />
        <br />
        <DestinationCardInverse
          image={tarangire}
          title={"Tarangire"}
          textOne={
            "Located in the heart of northern Tanzania, Tarangire National Park beckons as an undiscovered treasure trove. Sprawling across 2,850 square kilometers, it claims its place among Tanzania's largest national parks, yet it remains a hidden gem awaiting exploration."
          }
          textTwo={""}
          link={`details?state={"id":3,"image":"22.png","title":"Tarangire","detailImage":"tarangire.png","col":3,"discoverTitle":"Discover%20Tarangire%20National%20Park","texts":["Located%20in%20the%20heart%20of%20northern%20Tanzania,%20Tarangire%20National%20Park%20beckons%20as%20an%20undiscovered%20treasure%20trove.%20Sprawling%20across%202,850%20square%20kilometers,%20it%20claims%20its%20place%20among%20Tanzania%27s%20largest%20national%20parks,%20yet%20it%20remains%20a%20hidden%20gem%20awaiting%20exploration.","Its%20distinctive%20charm%20lies%20in%20the%20majestic%20baobab%20trees%20and%20expansive%20savannah%20that%20define%20the%20landscape.%20Tarangire%20weaves%20a%20unique%20tapestry%20where%20nature%27s%20drama%20unfolds%20against%20a%20canvas%20of%20rugged%20beauty.%20A%20sanctuary%20to%20a%20captivating%20array%20of%20wildlife,%20this%20park%20boasts%20one%20of%20the%20most%20diverse%20gatherings%20of%20animals.%20From%20herds%20of%20majestic%20elephants%20to%20agile%20antelopes%20and%20stealthy%20predators,%20every%20inch%20of%20the%20park%20pulses%20with%20untamed%20vitality.","Embarking%20on%20a%20safari%20here%20is%20an%20immersion%20into%20a%20realm%20where%20life%20roams%20free%20and%20unfiltered.%20The%20sheer%20thrill%20of%20being%20in%20the%20presence%20of%20nature%27s%20most%20captivating%20spectacles%20is%20the%20essence%20of%20Tarangire.%20Whether%20you%27re%20a%20nature%20aficionado%20or%20an%20adventure%20enthusiast,%20Tarangire%20National%20Park%20promises%20a%20journey%20of%20wonder%20and%20awe%20that%20will%20resonate%20long%20after%20you%27ve%20left%20its%20wild%20embrace."]}`}
        />
        <br />
        <br />
        <DestinationCard
          image={ngorongoro}
          title={"Ngorongoro"}
          textOne={
            "Nestled in northern Tanzania, the Ngorongoro Conservation Area Authority presents an exceptional haven where nature and humanity coexist in astonishing harmony. Encompassing a vast expanse of 8,292 square kilometers, this area's crowning jewel is the Ngorongoro Crater – a colossal volcanic caldera and the world's largest of its kind."
          }
          textTwo={""}
          link={`details?state={"detailImage":"","id":4,"image":"4.png","title":"Ngorongoro","col":6,"discoverTitle":"Discover%20Ngorongoro%20National%20Park","texts":["Nestled%20in%20northern%20Tanzania,%20the%20Ngorongoro%20Conservation%20Area%20Authority%20presents%20an%20exceptional%20haven%20where%20nature%20and%20humanity%20coexist%20in%20astonishing%20harmony.%20Encompassing%20a%20vast%20expanse%20of%208,292%20square%20kilometers,%20this%20area%27s%20crowning%20jewel%20is%20the%20Ngorongoro%20Crater%20–%20a%20colossal%20volcanic%20caldera%20and%20the%20world%27s%20largest%20of%20its%20kind.","Diverse%20and%20spellbinding,%20the%20Ngorongoro%20Crater%27s%20awe-inspiring%20landscapes%20set%20the%20stage%20for%20an%20ecosystem%20teeming%20with%20life.%20The%20renowned%20Big%20Five%20animals%20–%20lions,%20elephants,%20buffalos,%20leopards,%20and%20rhinos%20–%20roam%20freely,%20offering%20an%20unrivaled%20wildlife%20experience.%20Yet,%20what%20truly%20sets%20this%20UNESCO%20World%20Heritage%20Site%20apart%20is%20its%20unique%20blend%20of%20conservation%20and%20culture.","Here,%20the%20Maasai%20people%20have%20gracefully%20shared%20their%20home%20with%20wildlife%20for%20generations.%20Witnessing%20their%20ancient%20traditions%20amidst%20the%20breathtaking%20backdrop%20of%20this%20natural%20wonder%20is%20an%20encounter%20that%20transcends%20time.%20The%20Ngorongoro%20Conservation%20Area%20is%20not%20merely%20a%20place;%20it%27s%20a%20symphony%20of%20nature%20and%20human%20heritage,%20an%20experience%20where%20every%20step%20unveils%20a%20new%20layer%20of%20wonder."]}`}
        />
        <br />
        <br />
        <DestinationCardInverse
          image={manyara}
          title={"Manyara"}
          textOne={
            "Located in northern Tanzania, the Manyara National Park awaits your discovery. Compact yet captivating, this gem spans around 325 square kilometers, revealing a world of diverse landscapes and vibrant wildlife."
          }
          textTwo={""}
          link={`details?state={"detailImage":"","id":5,"image":"5.png","title":"Manyara","col":6,"discoverTitle":"Discover%20Manyara%20National%20Park","texts":["Located%20in%20northern%20Tanzania,%20the%20Manyara%20National%20Park%20awaits%20your%20discovery.%20Compact%20yet%20captivating,%20this%20gem%20spans%20around%20325%20square%20kilometers,%20revealing%20a%20world%20of%20diverse%20landscapes%20and%20vibrant%20wildlife.","Here,%20the%20glistening%20expanse%20of%20Lake%20Manyara%20meets%20lush%20forests%20and%20expansive%20grasslands,%20forming%20a%20picturesque%20stage%20for%20your%20adventure.%20A%20haven%20for%20bird%20enthusiasts,%20the%20park%20hosts%20an%20enchanting%20symphony%20of%20winged%20wonders,%20including%20the%20elegant%20flamingos,%20stately%20pelicans,%20and%20an%20impressive%20roster%20of%20over%20400%20bird%20species.%20But%20the%20magic%20doesn%27t%20stop%20there.%20The%20park%27s%20charisma%20extends%20to%20the%20majestic%20African%20wildlife,%20where%20elephants%20roam,%20giraffes%20gracefully%20stretch%20for%20leaves,%20and%20zebras%20create%20a%20canvas%20of%20stripes%20against%20the%20green.%20And,%20of%20course,%20the%20famed%20tree-climbing%20lions%20add%20a%20touch%20of%20mystery%20to%20your%20journey.","With%20each%20step,%20you%27ll%20immerse%20yourself%20in%20a%20world%20that%20balances%20serenity%20and%20the%20untamed.%20Whether%20you%27re%20captivated%20by%20nature%27s%20intricacies%20or%20the%20thrill%20of%20a%20safari,%20Manyara%20National%20Park%20stands%20ready%20to%20unveil%20its%20treasures%20and%20create%20cherished%20memories%20in%20the%20heart%20of%20Tanzania."]}`}
        />
        <br />
        <br />
        <DestinationCard
          image={arushaPark}
          title={"Arusha Park"}
          textOne={
            "Tucked in Tanzania's northeast, Arusha National Park stands as a testament to natural wonder. In its embrace, an enchanting mosaic of beauty and biodiversity unfolds. Spanning approximately 552 square kilometers, this compact gem lies just a stone's throw from Arusha city."
          }
          textTwo={""}
          link={`details?state={"id":1,"image":"11.png","title":"Arusha%20Park","detailImage":"arusha.png","col":3,"discoverTitle":"Discover%20Arusha%20Park","texts":["Tucked%20in%20Tanzania%27s%20northeast,%20Arusha%20National%20Park%20stands%20as%20a%20testament%20to%20natural%20wonder.%20In%20its%20embrace,%20an%20enchanting%20mosaic%20of%20beauty%20and%20biodiversity%20unfolds.%20Spanning%20approximately%20552%20square%20kilometers,%20this%20compact%20gem%20lies%20just%20a%20stone%27s%20throw%20from%20Arusha%20city.","Iconic%20Mount%20Meru%20watches%20over%20the%20park,%20a%20regal%20backdrop%20to%20picturesque%20landscapes.%20Amidst%20its%20boundaries,%20a%20kaleidoscope%20of%20habitats%20awaits%20–%20from%20the%20vibrant%20forests%20to%20the%20glimmering%20lakes,%20each%20corner%20whispers%20tales%20of%20life%27s%20abundance.","Adventure%20knows%20no%20bounds%20here.%20Engage%20in%20exhilarating%20game%20drives,%20where%20the%20wilderness%20comes%20alive%20with%20each%20sighting.%20Or%20tread%20hiking%20trails%20that%20lead%20you%20to%20the%20heart%20of%20nature%27s%20symphony.%20Arusha%20National%20Park%20caters%20to%20explorers%20and%20thrill-seekers%20alike.%20With%20the%20company%20of%20abundant%20wildlife%20and%20vistas%20that%20steal%20breaths,%20Arusha%20National%20Park%20holds%20the%20promise%20of%20an%20unforgettable%20expedition.%20Proximity%20to%20the%20famed%20Serengeti%20and%20Kilimanjaro%20adds%20another%20layer%20of%20allure.%20For%20all%20who%20dare%20to%20venture,%20this%20haven%20offers%20an%20experience%20that%20etches%20its%20magic%20into%20your%20heart%20forever."]}`}
        />
        <br />
        <br />
        <DestinationCardInverse
          image={mkomazi}
          title={"Mkomazi"}
          textOne={
            "Found in the northeastern part of Tanzania, Mkomazi National Park is like a secret gem that shows off the beauty of the country. It's quite big, covering about 3,234 square kilometers, and it has different kinds of landscapes, from wide grasslands to tall mountains and forests with acacia trees."
          }
          textTwo={""}
          link={`details?state={"id":6,"image":"33.png","title":"Mkomazi","detailImage":"mkomazi.png","col":3,"discoverTitle":"Discover%20Mkomazi%20National%20Park","texts":["Found%20in%20the%20northeastern%20part%20of%20Tanzania,%20Mkomazi%20National%20Park%20is%20like%20a%20secret%20gem%20that%20shows%20off%20the%20beauty%20of%20the%20country.%20It%27s%20quite%20big,%20covering%20about%203,234%20square%20kilometers,%20and%20it%20has%20different%20kinds%20of%20landscapes,%20from%20wide%20grasslands%20to%20tall%20mountains%20and%20forests%20with%20acacia%20trees.","But%20there%27s%20more%20to%20Mkomazi%20than%20just%20pretty%20views.%20It%27s%20a%20safe%20place%20for%20animals%20that%20need%20help,%20like%20the%20black%20rhinoceros%20and%20African%20wild%20dog.%20And%20if%20you%20love%20birds,%20you%27ll%20find%20more%20than%20450%20kinds%20here!","You%20can%20have%20a%20lot%20of%20fun%20here,%20too.%20You%20can%20go%20on%20exciting%20drives%20to%20see%20animals,%20walk%20around%20with%20a%20guide,%20or%20even%20ride%20horses%20to%20explore.%20Mkomazi%20National%20Park%20is%20a%20special%20place%20where%20you%20can%20see%20nature%20at%20its%20best,%20and%20it%27s%20unlike%20anywhere%20else%20in%20Tanzania."]}`}
        />
        <br />
        <br />
        <DestinationCard
          image={saadani}
          title={"Saadani"}
          textOne={
            "Nestled along Tanzania's coast, Saadani National Park is a unique sanctuary where untamed nature merges with stunning shores. Spanning approximately 1,100 square kilometers, it's a realm where the wild and the ocean harmoniously coexist."
          }
          textTwo={""}
          link={`details?state={"id":10,"image":"55.png","title":"Saadani","detailImage":"saadani.png","col":3,"discoverTitle":"Discover%20Saadani","texts":["Nestled%20along%20Tanzania%27s%20coast,%20Saadani%20National%20Park%20is%20a%20unique%20sanctuary%20where%20untamed%20nature%20merges%20with%20stunning%20shores.%20Spanning%20approximately%201,100%20square%20kilometers,%20it%27s%20a%20realm%20where%20the%20wild%20and%20the%20ocean%20harmoniously%20coexist.","Here,%20the%20Savannah%20meets%20the%20Indian%20Ocean,%20creating%20a%20haven%20where%20elephants%20stroll%20along%20the%20sands%20and%20lions%20roam%20near%20the%20water%27s%20edge.%20Saadani%27s%20captivating%20landscape%20invites%20you%20to%20experience%20the%20quintessence%20of%20Africa%27s%20biodiversity,%20from%20grazing%20antelopes%20to%20dazzling%20birdlife.%20What%20sets%20Saadani%20apart%20is%20its%20seamless%20blend%20of%20terrestrial%20and%20marine%20beauty.%20As%20you%20explore%20the%20park%27s%20trails%20and%20riverbeds,%20you%27re%20greeted%20with%20encounters%20that%20span%20ecosystems.%20And%20then,%20just%20beyond,%20the%20turquoise%20waters%20invite%20you%20for%20a%20refreshing%20swim%20or%20a%20marine%20safari%20where%20dolphins%20frolic%20and%20humpback%20whales%20dance.","Saadani%20National%20Park%20isn%27t%20merely%20a%20destination;%20it%27s%20a%20testament%20to%20the%20enchantment%20that%20happens%20when%20land%20and%20sea%20unite.%20It%27s%20where%20the%20untamed%20echoes%20in%20the%20sea%20breeze%20and%20where%20wild%20wonders%20stretch%20from%20the%20shore%20to%20the%20horizon,%20creating%20a%20symphony%20of%20nature%27s%20grandeur."]}`}
        />
        <br />
        <br />
        <DestinationCardInverse
          image={ruaha}
          title={"Ruaha"}
          textOne={
            "In the heart of Tanzania, Ruaha National Park unveils a realm of untamed beauty. Encompassing around 20,226 square kilometers, it's a sanctuary where nature reigns supreme. As the country's largest national park, Ruaha's expansive landscapes embrace diverse ecosystems, from sprawling savannahs to rugged hills."
          }
          textTwo={""}
          link={`details?state={"id":8,"image":"33.png","title":"Ruaha","detailImage":"ruaha.png","col":3,"discoverTitle":"Discover%20Ruaha","texts":["In%20the%20heart%20of%20Tanzania,%20Ruaha%20National%20Park%20unveils%20a%20realm%20of%20untamed%20beauty.%20Encompassing%20around%2020,226%20square%20kilometers,%20it%27s%20a%20sanctuary%20where%20nature%20reigns%20supreme.%20As%20the%20country%27s%20largest%20national%20park,%20Ruaha%27s%20expansive%20landscapes%20embrace%20diverse%20ecosystems,%20from%20sprawling%20savannahs%20to%20rugged%20hills.","Here,%20the%20rhythm%20of%20life%20orchestrates%20the%20movements%20of%20countless%20species.%20Majestic%20elephants%20roam,%20lions%20stalk,%20and%20antelopes%20dart%20through%20the%20grasslands.%20The%20Great%20Ruaha%20River%20meanders%20gracefully,%20nurturing%20life%20along%20its%20banks%20and%20creating%20moments%20of%20intense%20wildlife%20drama.","Ruaha%20is%20more%20than%20just%20a%20park;%20it%27s%20a%20canvas%20of%20life%27s%20most%20profound%20expressions.%20Embark%20on%20game%20drives%20that%20unfold%20stories%20of%20survival,%20trek%20through%20pristine%20landscapes%20that%20whisper%20ancient%20tales,%20and%20experience%20a%20harmony%20between%20humanity%20and%20nature%20that%27s%20seamlessly%20interwoven.%20Ruaha%20National%20Park%20isn%27t%20merely%20a%20journey;%20it%27s%20an%20immersion%20into%20the%20wild%20pulse%20of%20Africa,%20where%20every%20heartbeat%20of%20nature%20resonates%20within%20you."]}`}
        />
        <br />
        <br />
      </div>
      
      <br />
    </Container>
  );
};

export default SafariPage;
