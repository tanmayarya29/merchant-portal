import React, { useState } from "react";
import { TextField, Button, Stack, Typography } from "@mui/material";
import { Offer } from "../types";

interface Iprops {
  offer: Offer | null;
  offers: Offer[];
  setOffers: React.Dispatch<React.SetStateAction<Offer[]>>;
  handleClose: () => void;
}

const OfferAddPage = (props: Iprops) => {
  const { offer, setOffers } = props;

  const [tempOffer, setTempOffer] = useState<Offer>({
    offerId: offer?.offerId || "",
    name: offer?.name || "",
    description: offer?.description || "",
    imgUrl: offer?.imgUrl || "",
  });

  const { offerId, name, description, imgUrl } = tempOffer;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTempOffer({ ...tempOffer, [name]: value });
  };

  const handleSubmit = () => {
    if (offer) {
      const updatedOffers = props.offers.map((o) =>
        o.offerId === offer.offerId ? tempOffer : o
      );
      setOffers(updatedOffers);
    } else {
      const newOffer: Offer = {
        offerId: offerId,
        name: name,
        description: description,
        imgUrl: imgUrl,
      };
      setOffers([...props.offers, newOffer]);
    }
    props.handleClose();
  };

  return (
    <Stack
      direction="column"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        maxWidth: "500px",
        padding: "20px",
        boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.4)",
        borderRadius: "6px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          marginBottom: "20px",
        }}
      >
        {offer ? "Edit Offer" : "Add Offer"}
      </Typography>
      <TextField
        name="offerId"
        label="Offer ID"
        value={offerId}
        onChange={handleInputChange}
      />
      <TextField
        name="name"
        label="Name"
        value={name}
        onChange={handleInputChange}
      />
      <TextField
        name="description"
        label="Description"
        value={description}
        onChange={handleInputChange}
      />
      <TextField
        name="imgUrl"
        label="Image URL"
        value={imgUrl}
        onChange={handleInputChange}
      />
      <Button
        type="submit"
        variant="outlined"
        color="primary"
        onClick={handleSubmit}
      >
        {offer ? "Save Changes" : "Add Offer"}
      </Button>
    </Stack>
  );
};

export default OfferAddPage;
