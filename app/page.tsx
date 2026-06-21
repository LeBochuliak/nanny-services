import css from "@/components/Home/Home.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const Home = () => {
  return (
    <div className={css.heroContainer}>
      <div className={css.titleContainer}>
        <h1 className={css.title}>
          Make Life Easier for the Family: <br />
          <span className={css.titleSpan}>
            Find Babysitters Online for All Occasions
          </span>
        </h1>
        <Button type={"primary"} home>
          Get started
        </Button>
      </div>
      <div className={css.imageContainer}>
        <Image src="/heroImage.jpg" alt="baby" fill className={css.image} />
      </div>
      <div className={css.ads}>
        <div className={css.adsIcon}></div>
        <p>
          Experienced nannies
          <br />
          <span>15,000</span>
        </p>
      </div>
    </div>
  );
};

export default Home;
