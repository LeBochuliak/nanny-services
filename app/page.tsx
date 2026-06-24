"use client";

import css from "@/components/Home/Home.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <div className={css.heroContainer}>
      <div className={css.titleContainer}>
        <h1 className={css.title}>
          Make Life Easier for the Family: <br />
          <span className={css.titleSpan}>
            Find Babysitters Online for All Occasions
          </span>
        </h1>
        <Button
          style="primary"
          type="button"
          onClick={() => router.push("/nannies")}
          home
        >
          Get started{" "}
          <svg width="16" height="16" className={css.arrow}>
            <use href="/sprite.svg#icon-arrow" />
          </svg>
        </Button>
      </div>
      <div className={css.imageContainer}>
        <Image src="/heroImage.jpg" alt="baby" fill className={css.image} />
      </div>
      <div className={css.ads}>
        <div className={css.adsIcon}>
          <svg width="30" height="30" className={css.check}>
            <use href="/sprite.svg#icon-check" />
          </svg>
        </div>
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
