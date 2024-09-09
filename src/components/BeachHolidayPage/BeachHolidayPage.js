import { Container, Row } from "react-bootstrap";
import DestinationCard from "../DestinationCard/DestinationCard";
import zanzibar from "@/images/destination/7.png";
import pangani from "@/images/destination/pangani.webp";
import DestinationCardInverse from "../DestinationCard/DestinationCardInverse";
import React from "react";

const BeachHolidayPage = () => {
  return (
    <Container>
      <br />
      <div
        style={{
          margin: "auto",
          textAlign: "center",
        }}
      >
        <p className="section-title__tagline">
          Sunny Escapes and Coastal Bliss
        </p>
        <h2 className="section-title__title">
          Relax on Picture Perfect Beaches
        </h2>
      </div>
      <br />
      <p>
        Indulge in the ultimate seaside getaway with our Beach Holidays page,
        where sun-kissed shores and gentle waves beckon you to a world of
        relaxation and adventure. Immerse yourself in the allure of pristine
        coastlines and golden sands as you explore a curated selection of
        idyllic beach destinations. From secluded coves perfect for intimate
        moments to vibrant shores teeming with water sports and vibrant
        nightlife, our Beach Holidays collection offers a diverse range of
        experiences for every kind of traveler.
      </p>
      <p>
        Discover a harmonious blend of luxury and natural beauty as our
        meticulously crafted itineraries guide you to hidden gems and popular
        havens alike. Whether you seek tranquil moments by the water's edge,
        thrilling aquatic adventures, or simply the joy of building sandcastles
        with loved ones, our Beach Holidays page is your passport to coastal
        bliss. Unwind in style, bask in the warmth of the sun, and let the
        soothing rhythm of the waves create unforgettable memories on your dream
        beach vacation.
      </p>
      <br />
      <br />
      <h2 style={{ fontWeight: "bold" }}>Our Beach Holiday Destinations</h2>
      <br />
      <div
        style={{
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <DestinationCard
          image={zanzibar}
          title={"Zanzibar"}
          textOne={
            "A jewel in the Indian Ocean, Zanzibar beckons with paradisiacal allure. Nestled off Tanzania's coast, this archipelago weaves a tapestry of enchantment. From its dazzling white sands to the azure expanse of the ocean, Zanzibar exudes a timeless beauty that captures hearts."
          }
          textTwo={""}
          link={`details?state={"detailImage":"","id":9,"image":"7.png","title":"Zanzibar","col":6,"discoverTitle":"Discover%20Zanzibar","texts":["A%20jewel%20in%20the%20Indian%20Ocean,%20Zanzibar%20beckons%20with%20paradisiacal%20allure.%20Nestled%20off%20Tanzania%27s%20coast,%20this%20archipelago%20weaves%20a%20tapestry%20of%20enchantment.%20From%20its%20dazzling%20white%20sands%20to%20the%20azure%20expanse%20of%20the%20ocean,%20Zanzibar%20exudes%20a%20timeless%20beauty%20that%20captures%20hearts.","Each%20corner%20tells%20a%20tale%20–%20the%20labyrinthine%20streets%20of%20Stone%20Town%20whisper%20history%27s%20secrets,%20while%20aromatic%20spice%20plantations%20invite%20you%20to%20indulge%20your%20senses.%20Zanzibar%27s%20cultural%20mosaic%20comes%20to%20life%20through%20vibrant%20markets%20and%20warm%20smiles,%20inviting%20you%20to%20experience%20the%20fusion%20of%20Swahili,%20Arab,%20and%20Indian%20influences.%20Yet,%20it%27s%20the%20beaches%20that%20truly%20steal%20the%20show.%20Here,%20you%20can%20sink%20your%20toes%20into%20soft%20sands%20and%20immerse%20yourself%20in%20the%20crystal-clear%20waters.%20Whether%20you%20seek%20water%20sports%27%20thrill%20or%20tranquil%20sunsets,%20Zanzibar%27s%20shores%20hold%20the%20promise%20of%20unforgettable%20moments.","Zanzibar%20isn%27t%20just%20an%20island;%20it%27s%20a%20symphony%20of%20experiences%20that%20resonate%20with%20every%20traveler.%20Whether%20you%27re%20chasing%20adventure,%20seeking%20serenity,%20or%20yearning%20to%20immerse%20in%20rich%20cultures,%20Zanzibar%20welcomes%20you%20with%20open%20arms."]}`}
        />
        <br />
        <br />
        <DestinationCardInverse
          image={pangani}
          title={"Pangani"}
          textOne={
            "Pangani Beach, nestled along the picturesque coastline of Tanzania, is a hidden gem waiting to be discovered by avid travelers seeking tranquility and natural beauty. This coastal haven is renowned for its pristine white sands, gently caressed by the crystal-clear waters of the Indian Ocean."
          }
          textTwo={""}
          link={`details?state={"detailImage":"pangani.webp","id":11,"image":"pangani.webp","title":"Pangani","col":3,"discoverTitle":"Discover%20Pangani","texts":["Pangani%20Beach,%20nestled%20along%20the%20picturesque%20coastline%20of%20Tanzania,%20is%20a%20hidden%20gem%20waiting%20to%20be%20discovered%20by%20avid%20travelers%20seeking%20tranquility%20and%20natural%20beauty.%20This%20coastal%20haven%20is%20renowned%20for%20its%20pristine%20white%20sands,%20gently%20caressed%20by%20the%20crystal-clear%20waters%20of%20the%20Indian%20Ocean.%20The%20beach%27s%20serene%20ambiance%20is%20complemented%20by%20lush%20palm%20trees%20swaying%20in%20the%20breeze,%20creating%20a%20perfect%20backdrop%20for%20those%20seeking%20a%20peaceful%20escape%20from%20the%20hustle%20and%20bustle%20of%20everyday%20life.","As%20you%20explore%20Pangani%20Beach,%20you%27ll%20encounter%20a%20rich%20blend%20of%20cultural%20heritage%20and%20historical%20significance.%20The%20town%20of%20Pangani,%20adjacent%20to%20the%20beach,%20boasts%20well-preserved%20architecture%20from%20the%2019th%20century,%20reflecting%20its%20past%20as%20a%20thriving%20trading%20port.%20Visitors%20can%20embark%20on%20guided%20tours%20to%20explore%20ancient%20ruins,%20colonial%20buildings,%20and%20vibrant%20local%20markets,%20immersing%20themselves%20in%20the%20fascinating%20history%20that%20shaped%20this%20coastal%20community.","For%20adventure%20enthusiasts,%20Pangani%20Beach%20offers%20an%20array%20of%20water%20activities,%20including%20snorkeling,%20diving,%20and%20boat%20excursions%20to%20nearby%20coral%20reefs%20teeming%20with%20marine%20life.%20Whether%20you%20seek%20relaxation%20on%20the%20sun-drenched%20shores,%20cultural%20exploration%20in%20the%20historic%20town,%20or%20aquatic%20adventures%20beneath%20the%20waves,%20Pangani%20Beach%20stands%20as%20a%20versatile%20destination%20that%20captivates%20the%20senses%20and%20invites%20visitors%20to%20experience%20the%20beauty%20of%20Tanzania%27s%20coastal%C2%A0treasures."]}`}
        />
        <br />
        <br />
      </div>
      <br />
    </Container>
  );
};

export default BeachHolidayPage;
