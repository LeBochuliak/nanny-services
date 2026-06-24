"use client";

import Button from "../Button/Button";
import css from "./AppointmentForm.module.css";
import Image from "next/image";
import "@/app/globals.css";
import { useState, useMemo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentForm = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [phone, setPhone] = useState("");

  const minTime = useMemo(() => {
    const date = new Date();
    date.setHours(7, 45, 0, 0);
    return date;
  }, []);

  const maxTime = useMemo(() => {
    const date = new Date();
    date.setHours(21, 0, 0, 0);
    return date;
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhone(value);
  };

  return (
    <form className={css.form}>
      <h3 className={css.title}>
        Make an appointment
        <br /> with a babysitter
      </h3>
      <p className={css.description}>
        Arranging a meeting with a caregiver for your child is the first step to
        creating a safe and comfortable environment. Fill out the form below so
        we can match you with the perfect care partner.
      </p>
      <div className={css.nannyInfo}>
        <Image
          src="/heroImage.jpg"
          alt="nanny"
          width={44}
          height={44}
          className={css.nannyImage}
        />
        <div className={css.nannyInfoWrap}>
          <p className={css.nannyLabel}>Your nanny</p>
          <p className={css.nannyName}>Anna Shevchenko</p>
        </div>
      </div>
      <label htmlFor="address" className="visuallyHidden">
        Address
      </label>
      <input
        id="address"
        type="text"
        name="address"
        placeholder="Address"
        required
        minLength={3}
        className={`${css.input} ${css.inputShort}`}
      />
      <label htmlFor="phone" className="visuallyHidden">
        Phone
      </label>
      <input
        id="phone"
        type="tel"
        name="phone"
        value={phone}
        onChange={handlePhoneChange}
        placeholder="+380"
        required
        inputMode="numeric"
        className={`${css.input} ${css.inputShort}`}
      />
      <label htmlFor="childsAge" className="visuallyHidden">
        Child`&apos;`s age
      </label>
      <input
        id="childsAge"
        type="number"
        min="0"
        name="childsAge"
        placeholder="Child's age"
        required
        className={`${css.input} ${css.inputShort}`}
      />
      <label htmlFor="time" className="visuallyHidden">
        Time
      </label>
      <DatePicker
        selected={date}
        onChange={setDate}
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm aa"
        timeIntervals={15}
        minTime={minTime}
        maxTime={maxTime}
        minDate={new Date()}
        className={`${css.input} ${css.inputShort}`}
      />
      <label htmlFor="email" className="visuallyHidden">
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        autoComplete="email"
        placeholder="Email"
        required
        minLength={3}
        className={css.input}
      />
      <label htmlFor="name" className="visuallyHidden">
        Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Father's or mother's name"
        required
        minLength={3}
        className={css.input}
      />
      <label htmlFor="comment" className="visuallyHidden">
        Comment
      </label>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comment"
        className={`${css.input} ${css.commentInput}`}
      />
      <Button type="submit" style="auth">
        Send
      </Button>
    </form>
  );
};

export default AppointmentForm;
