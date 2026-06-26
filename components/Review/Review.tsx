import css from "@/components/Review/Review.module.css";
import type { Review } from "@/types/types";

interface ReviewProps {
  review: Review;
}
const Review = ({ review }: ReviewProps) => {
  return (
    <ul className={css.commentsList}>
      <li className={css.commentsListItem}>
        <div className={css.commentAvatar}>
          <p>{review.reviewer.slice(0, 1)}</p>
        </div>
        <div className={css.commentNameWrap}>
          <p className={css.commentName}>{review.reviewer}</p>
          <p className={css.commentRate}>
            <svg width="16" height="16">
              <use href="/sprite.svg#icon-star" />
            </svg>
            {review.rating}
          </p>
        </div>
        <p className={css.commentDescription}>{review.comment}</p>
      </li>
    </ul>
  );
};

export default Review;
