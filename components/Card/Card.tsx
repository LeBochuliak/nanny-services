import css from "./Card.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const Card = () => {
  return (
    <div className={css.cardContainer}>
      <ul className={css.infoAddList}>
        <li className={css.infoAddListItem}>
          <svg width="16" height="16">
            <use href="/sprite.svg#icon-map-pin" />
          </svg>
          <p>Kyiv, Ukraine</p>
        </li>
        <li className={css.infoAddListItem}>
          <svg width="16" height="16">
            <use href="/sprite.svg#icon-star" />
          </svg>
          <p>Rating: 4.5</p>
        </li>
        <li className={css.infoAddListItem}>
          <p>
            Price / 1 hour: <span>15$</span>
          </p>
        </li>
      </ul>
      <button className={css.likeBtn}>
        <svg width="26" height="26" className={css.heart}>
          <use href="/sprite.svg#icon-heart" />
        </svg>
      </button>

      <div className={css.imageWrap}>
        <Image
          src="/heroImage.jpg"
          alt="nanny"
          width={96}
          height={96}
          className={css.image}
        />
      </div>

      <div className={css.infoWrap}>
        <p className={css.nanny}>Nanny</p>
        <h3 className={css.name}>Anna Shevchenko</h3>
        <ul className={css.listInfo}>
          <li className={css.listInfoItem}>
            <p>
              Age: <span>27</span>
            </p>
          </li>
          <li className={css.listInfoItem}>
            <p>
              Experience: <span>5 years</span>
            </p>
          </li>
          <li className={css.listInfoItem}>
            <p>
              Kids Age: <span>1 to 6 years old</span>
            </p>
          </li>
          <li className={css.listInfoItem}>
            <p>
              Characters: <span>Patient, Energetic, Creative, Punctual</span>
            </p>
          </li>
          <li className={css.listInfoItem}>
            <p>
              Education:{" "}
              <span>
                Bachelor in Early Childhood Education, First Aid Certified
              </span>
            </p>
          </li>
        </ul>
        <p className={css.description}>
          I love children and have been working with them for over 5 years. I
          believe in creating a positive and nurturing environment for kids. I
          also love outdoor activities and crafts.
        </p>
        <button className={css.btnMore}>Read more</button>
        <ul className={css.commentsList}>
          <li className={css.commentsListItem}>
            <div className={css.commentAvatar}>
              <p>O</p>
            </div>
            <div className={css.commentNameWrap}>
              <p className={css.commentName}>Olga K.</p>
              <p className={css.commentRate}>
                <svg width="16" height="16">
                  <use href="/sprite.svg#icon-star" />
                </svg>
                5.0
              </p>
            </div>
            <p className={css.commentDescription}>
              Anna is wonderful! My kids loved her and she was always punctual.
            </p>
          </li>
          <li className={css.commentsListItem}>
            <div className={css.commentAvatar}>
              <p>O</p>
            </div>
            <div className={css.commentNameWrap}>
              <p className={css.commentName}>Olga K.</p>

              <p className={css.commentRate}>
                <svg width="16" height="16">
                  <use href="/sprite.svg#icon-star" />
                </svg>
                5.0
              </p>
            </div>

            <p className={css.commentDescription}>
              Anna is wonderful! My kids loved her and she was always punctual.
            </p>
          </li>
        </ul>
        <Button style="secondary">Make an appointment</Button>
      </div>
    </div>
  );
};

export default Card;
