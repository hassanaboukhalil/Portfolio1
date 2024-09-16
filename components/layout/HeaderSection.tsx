import { ReactNode } from "react";

type IHeaderSectionProps = {
  className?: string;
  children: ReactNode;
};

const HeaderSection = (props: IHeaderSectionProps) => {
  return (
    <h2 className={`h2 h2-bold text-white md:text-center ${props.className}`}>
      {props.children}
    </h2>
  );
};
export default HeaderSection;
