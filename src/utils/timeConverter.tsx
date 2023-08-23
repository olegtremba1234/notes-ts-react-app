import React from "react";

interface FormattedDateProps {
  date: string | undefined;
}

const FormattedDate: React.FC<FormattedDateProps> = ({ date }) => {
  if (!date) {
    return null;
  }

  const now = new Date();
  const formattedDate = new Date(date);

  const isToday =
    formattedDate.getDate() === now.getDate() &&
    formattedDate.getMonth() === now.getMonth() &&
    formattedDate.getFullYear() === now.getFullYear();

  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  if (!isToday) {
    options.year = "numeric";
    options.month = "short";
    options.day = "numeric";
  }

  const formattedDateString = formattedDate.toLocaleString(undefined, options);

  return <span>{formattedDateString}</span>;
};

export default FormattedDate;
