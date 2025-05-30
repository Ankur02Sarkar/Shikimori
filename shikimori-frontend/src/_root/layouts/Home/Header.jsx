import { Typography } from "@material-tailwind/react";
import Wrapper from "../../components/Wrapper";
import { RiLoginCircleLine } from "react-icons/ri";
import { PrimaryBtn } from "../../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { RouterData } from "../../../router/RouterData";
import Lottie from "lottie-react";
import loader from "../../../data/animation/loader2.json";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <Wrapper>
        <div className="flex flex-row items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Link to={"/"} className="flex flex-row items-center gap-1">
              <Lottie
                animationData={loader}
                loop={true}
                className="size-[60px] relative z-10"
              />
              <Typography
                variant="h3"
                className="font-primary text-white font-normal"
              >
                Shikimori
              </Typography>
            </Link>
          </div>
          <div className="flex flex-row items-center gap-4">
            <PrimaryBtn
              className={"gap-2"}
              onClick={() => {
                navigate(RouterData.auth.signup);
              }}
            >
              <RiLoginCircleLine className="text-lg" />
              <span className="text-sm">Join Now</span>
            </PrimaryBtn>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
