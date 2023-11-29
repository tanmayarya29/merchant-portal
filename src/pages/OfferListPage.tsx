import { useState } from "react";
import { Offer as OfferType } from "../types";
import { Button, Dialog, Grid, Stack, Typography } from "@mui/material";
import Offer from "../components/Offer";
import OfferAddPage from "./OfferAddPage";

// const dummyOffers: OfferType[] = [
//   {
//     offerId: "1",
//     name: "Offer 1",
//     description: "Offer 1 Description",
//     imgUrl: "https://picsum.photos/200/300",
//   },
//   {
//     offerId: "2",
//     name: "Offer 2",
//     description: "Offer 2 Description",
//     imgUrl: "https://picsum.photos/200/300",
//   },
//   {
//     offerId: "3",
//     name: "Offer 3",
//     description: "Offer 3 Description",
//     imgUrl: "https://picsum.photos/200/300",
//   },
//   {
//     offerId: "4",
//     name: "Offer 4",
//     description: "Offer 4 Description",
//     imgUrl: "https://picsum.photos/200/300",
//   },
//   {
//     offerId: "5",
//     name: "Offer 5",
//     description: "Offer 5 Description",
//     imgUrl: "https://picsum.photos/200/300",
//   },
//   {
//     offerId: "6",
//     name: "Offer 6",
//     description: "Offer 6 Description",
//     imgUrl: "https://picsum.photos/200/300",
//   },
//   {
//     offerId: "7",
//     name: "Offer 7",
//     description: "Offer 7 Description",
//     imgUrl: "https://picsum.photos/200/300",
//   },
//   {
//     offerId: "8",
//     name: "Offer 8",
//     description: "Offer 8 Description",
//     imgUrl: "https://picsum.photos/200/300",
//   },
//   {
//     offerId: "9",
//     name: "Offer 9",
//     description: "Offer 9 Description",
//     imgUrl: "https://picsum.photos/200/300",
//   },
//   {
//     offerId: "10",
//     name: "Offer 10",
//     description: "Offer 10 Description",
//     imgUrl: "https://picsum.photos/200/300",
//   },
//   {
//     offerId: "11",
//     name: "Offer 11",
//     description: "Offer 11 Description",
//     imgUrl: "https://picsum.photos/200/300",
//   },
//   {
//     offerId: "12",
//     name: "Offer 12",
//     description: "Offer 12 Description",
//     imgUrl: "https://picsum.photos/200/300",
//   },
// ];

const dummyOffers: OfferType[] = [
  {
    offerId: "1",
    name: "Adidas Offer",
    description: "Sale Upto 50% Off",
    imgUrl:
      "https://dtbtob4osa700.cloudfront.net/OfferImages/27062022165854992_offer.jpg",
  },
  {
    offerId: "2",
    name: "Burger King ",
    description: "Buy 1 Get 1 Whopper Free",
    imgUrl:
      "https://scontent-pnq1-1.xx.fbcdn.net/v/t1.6435-9/69584269_2385573951491892_5358554872419450880_n.jpg?stp=dst-jpg_p180x540&_nc_cat=111&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=L8vokkgh-xYAX8U5qb1&_nc_ht=scontent-pnq1-1.xx&oh=00_AfAY2_pP2cOCX35SWLAhStQPOLNJWRj2-MWRLRD-468rLA&oe=658E39FE",
  },
  {
    offerId: "3",
    name: "StarBucks",
    description: "Buy One Get One Free Offer",
    imgUrl:
      "https://pbs.twimg.com/media/FvWKGiwXgAAOC2H?format=jpg&name=900x900",
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
