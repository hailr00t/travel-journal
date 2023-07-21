import fuji from "./images/fuji.png";
import sydney from "./images/sydney.png";
import norway from "./images/norway.png";
import pin from "./images/pin.png";

/* eslint-disable import/no-anonymous-default-export */
export default [
  {
    key: 1,
    title: "Mount Fuji",
    location: "Japan",
    googleMapsUrl:
      "https://www.google.com/maps/d/u/0/viewer?mid=1qzIqwLbfa1WLiZyXDflPj9yrf00&hl=en&ll=35.49267219399415%2C139.60294449999998&z=11",
    startDate: "21 Jan, 2021",
    endDate: "24 Jan, 2021",
    description:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    imageUrl: fuji,
  },
  {
    key: 2,
    title: "Sydney Opera House",
    location: "Australia",
    googleMapsUrl:
      "https://www.google.com/maps/d/u/0/viewer?mid=1UxdzXLS6TMMQ5uBHdgOKslg2ofE&hl=en&ll=-27.67763471431611%2C143.02604150000002&z=6",
    startDate: "27 May, 2021",
    endDate: "8 Jun, 2021",
    description:
      "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings.",
    imageUrl: sydney,
  },
  {
    key: 3,
    title: "Geirangerfjord",
    location: "Norway",
    googleMapsUrl:
      "https://www.google.com/maps/d/u/0/viewer?mid=1L3vyNB_8aM6mS_UA4V3L1L594d4&hl=en&ll=61.25966925609244%2C8.020019999999999&z=7",
    startDate: "01 Oct, 2021",
    endDate: "18 Nov, 2021",
    description:
      "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
    imageUrl: norway,
  },
];
