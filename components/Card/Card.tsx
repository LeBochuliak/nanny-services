"use client";

import css from "./Card.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import AppointmentForm from "@/components/AppointmentForm/AppointmentForm";
import { useState } from "react";
import type { Nanny } from "@/types/types";
import ReviewsList from "@/components/ReviewsList/ReviewsList";

interface CardProps {
  nanny: Nanny;
}

const Card = ({ nanny }: CardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  function calculateAge(birthday: string): number {
    const birthDate = new Date(birthday);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }

  return (
    <div className={css.cardContainer}>
      <ul className={css.infoAddList}>
        <li className={css.infoAddListItem}>
          <svg width="16" height="16">
            <use href="/sprite.svg#icon-map-pin" />
          </svg>
          <p>{nanny.location}</p>
        </li>
        <li className={css.infoAddListItem}>
          <svg width="16" height="16">
            <use href="/sprite.svg#icon-star" />
          </svg>
          <p>{nanny.rating}</p>
        </li>
        <li className={css.infoAddListItem}>
          <p>
            Price / 1 hour: <span>{nanny.price_per_hour}$</span>
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
          src={nanny.avatar_url}
          alt="nanny"
          width={96}
          height={96}
          className={css.image}
        />
      </div>

      <div className={css.infoWrap}>
        <p className={css.nanny}>Nanny</p>
        <h3 className={css.name}>{nanny.name}</h3>
        <ul className={css.listInfo}>
          <li className={css.listInfoItem}>
            <p>
              Age: <span>{calculateAge(nanny.birthday)}</span>
            </p>
          </li>
          <li className={css.listInfoItem}>
            <p>
              Experience: <span>{nanny.experience}</span>
            </p>
          </li>
          <li className={css.listInfoItem}>
            <p>
              Kids Age: <span>{nanny.kids_age}</span>
            </p>
          </li>
          <li className={css.listInfoItem}>
            <p>
              Characters: <span>{nanny.characters?.join(", ")}</span>
            </p>
          </li>
          <li className={css.listInfoItem}>
            <p>
              Education: <span>{nanny.education}</span>
            </p>
          </li>
        </ul>
        <p className={css.description}>{nanny.about}</p>
        <button className={css.btnMore}>Read more</button>

        {nanny.reviews?.length > 0 ? (
          <ReviewsList nanny={nanny} />
        ) : (
          <p className={css.description}>There are no reviews yet</p>
        )}
        <Button type="button" style="secondary" onClick={openModal}>
          Make an appointment
        </Button>
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <AppointmentForm />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Card;
