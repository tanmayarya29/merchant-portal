import { useState } from "react";
import { Offer as OfferType } from "../types";
import { Button, Dialog, Grid, Stack, Typography } from "@mui/material";
import Offer from "../components/Offer";
import OfferAddPage from "./OfferAddPage";

const dummyOffers: OfferType[] = [
  {
    offerId: "1",
    name: "Offer 1",
    description: "Offer 1 Description",
    imgUrl: "https://picsum.photos/200/300",
  },
  {
    offerId: "2",
    name: "Offer 2",
    description: "Offer 2 Description",
    imgUrl: "https://picsum.photos/200/300",
  },
  {
    offerId: "3",
    name: "Offer 3",
    description: "Offer 3 Description",
    imgUrl: "https://picsum.photos/200/300",
  },
  {
    offerId: "4",
    name: "Offer 4",
    description: "Offer 4 Description",
    imgUrl: "https://picsum.photos/200/300",
  },
  {
    offerId: "5",
    name: "Offer 5",
    description: "Offer 5 Description",
    imgUrl: "https://picsum.photos/200/300",
  },
  {
    offerId: "6",
    name: "Offer 6",
    description: "Offer 6 Description",
    imgUrl: "https://picsum.photos/200/300",
  },
  {
    offerId: "7",
    name: "Offer 7",
    description: "Offer 7 Description",
    imgUrl: "https://picsum.photos/200/300",
  },
  {
    offerId: "8",
    name: "Offer 8",
    description: "Offer 8 Description",
    imgUrl: "https://picsum.photos/200/300",
  },
  {
    offerId: "9",
    name: "Offer 9",
    description: "Offer 9 Description",
    imgUrl: "https://picsum.photos/200/300",
  },
  {
    offerId: "10",
    name: "Offer 10",
    description: "Offer 10 Description",
    imgUrl: "https://picsum.photos/200/300",
  },
  {
    offerId: "11",
    name: "Offer 11",
    description: "Offer 11 Description",
    imgUrl: "https://picsum.photos/200/300",
  },
  {
    offerId: "12",
    name: "Offer 12",
    description: "Offer 12 Description",
    imgUrl: "https://picsum.photos/200/300",
  },
];

const OfferListPage = () => {
  const [offers, setOffers] = useState<OfferType[]>([...dummyOffers]);
  const [open, setOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<OfferType | null>(null);

  const handleAddOffer = () => {
    setOpen(true);
  };

  const handleEditOffer = (offer: OfferType) => {
    setSelectedOffer(offer);
    setOpen(true);
  };

  const handleDeleteOffer = (offer: OfferType) => {
    setOffers((prevOffers) =>
      prevOffers.filter((o) => o.offerId !== offer.offerId)
    );
  };

  return (
    <Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: "20px",
          }}
        >
          Offer List
        </Typography>
        <Button variant="contained" color="primary" onClick={handleAddOffer}>
          Add Offer
        </Button>
      </Stack>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          marginBottom: "20px",
        }}
      >
        {offers?.map((offer) => (
          <Grid item key={offer.offerId}>
            <Offer
              offer={offer}
              handleEditOffer={handleEditOffer}
              handleDeleteOffer={handleDeleteOffer}
            />
          </Grid>
        ))}
      </Grid>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <OfferAddPage
          offer={selectedOffer}
          handleClose={() => setOpen(false)}
          offers={offers}
          setOffers={setOffers}
        />
      </Dialog>
    </Stack>
  );
};

export default OfferListPage;
