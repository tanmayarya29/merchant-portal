import { useState, useEffect } from "react";
import axios from "axios";
import { Notificaitons as NotificationType } from "../types";
import { Stack, Typography } from "@mui/material";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

// Use MUI create a dummy mobile and show notification in formatted way with basic animation. Use axios to get the notificaiton on first render.
const dummyNotifications: NotificationType[] = [
  {
    offerid: 105,
    merchantname: "Dunkin Donuts",
    offertitle: "Dunkin 40% Off",
    merchantid: 5,
    description: "With Zero Delivery Charge",
    image:
      "https://s3-ap-southeast-1.amazonaws.com/assets.limetray.com/assets/user_images/content_images/original/2364523748543657.jpg",
  },
  {
    offerid: 106,
    merchantname: "Krispy Kreme",
    offertitle: "Flat 20% Discount for Students In Store",
    merchantid: 6,
    description: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHyT3B2MccBKBXRfMNnYXSNvZHL2A5tn2Cgg&usqp=CAU",
  },
  {
    offerid: 107,
    merchantname: "Taco Bell",
    offertitle: "Taco Tuesday",
    merchantid: 7,
    description: "2 Tacos for 129",
    image:
      "https://www.adgully.com/img/800/202307/untitled-design-2023-07-04t172924-604.png.jpg",
  },
  {
    offerid: 109,
    merchantname: "Wendy's",
    offertitle: "Buy 1 Get 1 For $1",
    merchantid: 9,
    description: "",
    image:
      "https://www.pennlive.com/resizer/wDR-J50CsO5k1LALAqOQaXsVx1A=/arc-anglerfish-arc2-prod-advancelocal/public/AJUTSBJQAJGCDBFUO63V562TQI.jpg",
  },
  {
    offerid: 110,
    merchantname: "Adidas",
    offertitle: "Sale Upto 50% Off",
    merchantid: 10,
    description: "",
    image:
      "https://dtbtob4osa700.cloudfront.net/OfferImages/27062022165854992_offer.jpg",
  },
];

const NotificationPage = () => {
  const [notifications, setNotifications] =
    useState<NotificationType[]>(dummyNotifications);
  // useEffect(() => {
  //   axios.get("/api/notifications").then((res) => {
  //     setNotifications(res.data);
  //   });
  // }, []);

  const location = "Water Tower Place, Chicago";

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={1}
      sx={{
        width: "240px",
        height: "500px",
        border: "1px solid black",
        borderRadius: "10px",
        padding: "5px",
        backgroundColor: "#4DB1E2",
      }}
    >
      <Stack
        sx={{
          width: "80px",
          height: "7px",
          borderRadius: "500px",
          backgroundColor: "black",
          border: "1px solid black",
        }}
      ></Stack>
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          overflowY: "scroll",
          overflowX: "hidden",
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-track": {
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "grey",
            borderRadius: "10px",
          },
          border: "1px solid black",
          backgroundColor: "#fff",
          borderRadius: "10px",
        }}
      >
        <Stack
          sx={{
            width: "100%",
            height: "50px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "10px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "5px",
            }}
          >
            <FmdGoodIcon sx={{ color: "red" }} />
            {location}
          </Typography>
        </Stack>
        {notifications.map((notification: NotificationType) => {
          const distance = Math.floor(Math.random() * 500 + 10);
          return (
            <Stack
              key={notification.offerid}
              sx={{
                padding: "10px",
                border: "1px solid #afafaf",
                borderRadius: "10px",
                margin: "10px",
                "&:hover": {
                  boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.35)",
                  // rotate logo class childeren infinitely slowly
                  "& .logo": {
                    animation: "spin 3s linear infinite",
                    "@keyframes spin": {
                      from: {
                        transform: "rotate(0deg)",
                      },
                      to: {
                        transform: "rotate(360deg)",
                      },
                    },
                  },
                },
              }}
            >
              <Stack
                // circle first letter of merchant name with light gradient background
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  color: "black",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  left: "calc(50% - 20px)",
                  border: "3px solid grey",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "30px",
                  }}
                  className="logo"
                >
                  {notification.merchantname[0]}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="h5">
                  {notification.merchantname}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <FmdGoodIcon sx={{ color: "grey", fontSize: "15px" }} />
                <Typography
                  sx={{
                    color: "grey",
                    fontSize: "12px",
                  }}
                >
                  {distance} m
                </Typography>
              </Stack>
              <Stack>
                <img
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "contain",
                    borderRadius: "10px",
                  }}
                  src={notification.image}
                  alt={notification.offertitle}
                />
              </Stack>
              <Stack>
                <Typography variant="h6">{notification.offertitle}</Typography>
                <Typography variant="body1">
                  {notification.description}
                </Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default NotificationPage;
