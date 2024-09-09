import { useRouter } from "next/router";
import React from "react";
import { Image } from "react-bootstrap";
import { object } from "fast-web-kit"

const DestinationsDetailsLeft = () => {
  const router = useRouter()
  const destination = router.query.state ? JSON.parse(decodeURIComponent(router.query.state)) : {}

  const renderData = React.useCallback(() => {
    try {
      if (object.isNotEmpty(destination))
        return (
          <Image
            src={require(`@/images/destination/${destination.detailImage ? destination.detailImage : destination.image}`).default.src}
            alt=""
          />
        )
      return null
    } catch (error) {
      console.log(error.message)
    }
  }, [destination])

  return (
    <div className="destinations-details__left">
      <div className="destinations-details__img">
        {renderData()}
      </div>
      <div className="destinations-details__discover">
        <h3 className="destinations-details__title">
          {destination?.discoverTitle}
        </h3>
        {destination?.texts?.map((text, index) => (
          <p
            key={index}
            className={`destinations-details__discover-text-${index + 1}`}
          >
            {text}
          </p>
        ))}
      </div>

    </div>
  );
};

export default DestinationsDetailsLeft;
