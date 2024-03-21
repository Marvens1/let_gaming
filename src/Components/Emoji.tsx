import fleche from "../assets/fleche.jpg";
import like from "../assets/like.jpg";
import meh from "../assets/meh.png";
import { ImageProps, Image } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: like, alt: "recommended", boxSize: "25px" },
    5: { src: fleche, alt: "execeptional", boxSize: "35px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;