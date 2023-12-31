import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../../components";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { baseUrl } from "../../utils/constants";
import { useAuth } from "../../contexts/auth-context";

const HomeBannerStyles = styled.div`
  width: 100%;
  /* background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  ); */
  background-image: url("/bg-img.png");
  background-size: cover;
  padding: 20px 20px;
  margin-bottom: 50px;
  .banner {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .banner-left {
    width: 100%;
    max-width: 400px;
    height: 100%;
    color: black;
    line-height: 27px;
  }
  .title-banner {
    font-size: 42px;
    font-weight: 700;
    line-height: 58px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.primary};
  }
  .content-banner {
    font-size: 22px;
    font-weight: 500;
    line-height: 27px;
    margin-bottom: 40px;
    white-space: nowrap;
    padding-right: 10px;
  }
  .button-banner {
    max-width: 210px;
    height: 45px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 1280px) {
    margin-bottom: 30px;
    padding: 0;
    .banner {
      padding: 20px 20px;
    }
    .title-banner {
      font-size: 30px;
      font-weight: 700;
      line-height: 58px;
      margin-bottom: 10px;
      white-space: nowrap;
    }
    .content-banner {
      font-size: 18px;
      font-weight: 500;
      white-space: pre-wrap;
      margin-bottom: 20px;
    }
    .button-banner {
      max-width: 110px;
      padding: 0 5px;
      height: 40px;
      margin-bottom: 40px;
      font-weight: 500;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 650px) {
    margin-bottom: 30px;
    .container {
      height: 250px;
      display: grid;
      place-items: center;
    }
    .banner {
      padding: 10px 0;
    }
    .title-banner {
      font-size: 26px;
    }
    .content-banner {
      display: none;
    }
  }
`;

const HomeBanner = () => {
  const { userInfo } = useAuth();
  const { t } = useTranslation();
  const [banner, setBanner] = useState();
  const itemLng = localStorage.getItem("lng");
  // 65006457d3e9342858cc9dba
  useEffect(() => {
    async function fetchData() {
      axios
        .get(baseUrl.getBanner + "65006457d3e9342858cc9dba")
        .then((result) => setBanner(result.data))
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);
  return (
    <HomeBannerStyles>
      <div className="container">
        <div className="banner">
          <div className="banner-left">
            <h2 className="title-banner">Blogging</h2>
            <p className="content-banner">
              {itemLng === "vn" ? banner?.title : banner?.titleEN}
              <br></br>
              <br></br>
              {t("slogan2")}
            </p>
            <Button
              type="button"
              to={userInfo?.role === 1 ? "/dashboard" : "/sign-up-author"}
              // to="/sign-up-author"
              className="button-banner"
            >
              {t("getStarted")}
            </Button>
          </div>
          <div className="banner-right">
            <img src={banner?.image} className="image-banner" alt="" />
          </div>
        </div>
      </div>
    </HomeBannerStyles>
  );
};

export default HomeBanner;
