import { Typography, Stack, IconButton, Box } from "@mui/material";
import { Offer as OfferType } from "../types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface Iprops {
  offer: OfferType;
  handleEditOffer: (offer: OfferType) => void;
  handleDeleteOffer: (offer: OfferType) => void;
}

const Offer = (props: Iprops) => {
  const { offer, handleEditOffer, handleDeleteOffer } = props;
  const { offerId, name, description, imgUrl } = offer;

  return (
    <Stack
      direction="column"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        minWidth: "300px",
        padding: "20px",
        borderRadius: "6px",
        border: "1px solid #ccc",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        sx={{
          width: "100%",
        }}
      >
        <Typography>{offerId}</Typography>
        <Box>
          <IconButton aria-label="edit" onClick={() => handleEditOffer(offer)}>
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            onClick={() => handleDeleteOffer(offer)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Stack>
      <Stack
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <img
          style={{
            width: "300px",
            height: "200px",
            objectFit: "contain",
            borderRadius: "6px",
            backgroundColor: "#ddd",
          }}
          src={imgUrl}
          alt={name}
        />
        <Typography>{name}</Typography>
        <Typography>{description}</Typography>
      </Stack>
    </Stack>
  );
};

export default Offer;
