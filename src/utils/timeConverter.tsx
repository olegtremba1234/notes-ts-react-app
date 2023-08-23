import React from "react";

interface FormattedDateProps {
  date: string | undefined;
}

const FormattedDate: React.FC<FormattedDateProps> = ({ date }) => {
  if (!date) {
    return null;
  }

  const formattedDate = new Date(date).toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return <span>{formattedDate}</span>;
};

export default FormattedDate;
