import css from "./ReviewsList.module.css";
import Review from "@/components/Review/Review";
import type { Nanny } from "@/types/types";

interface ReviewsListProps {
  nanny: Nanny;
}
const ReviewsList = ({ nanny }: ReviewsListProps) => {
  return (
    <ul className={css.commentsList}>
      {nanny.reviews?.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </ul>
  );
};

export default ReviewsList;
