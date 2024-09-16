import { ReactNode } from "react";

type ISectionProps = {
  className?: string;
  id?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => {
  return (
    <section
      className={`my-container pt-36 md:pt-48 ${props.className}`}
      id={props.id}
    >
      {props.children}
    </section>
  );
};
export default Section;
