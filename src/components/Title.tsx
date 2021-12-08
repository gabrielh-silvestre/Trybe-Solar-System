import React from 'react';

type TitleProps = {
  headline: string;
  className: string;
};

export default function Title({ className, headline }: TitleProps) {
  return <h2 className={className}>{headline}</h2>;
}
