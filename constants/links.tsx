import { BookText, CircleDollarSign, WandSparkles, Kanban } from "lucide-react";

type NavLink = {
  id?: string;
  name: string;
  link: string;
  icon?: JSX.Element;
};

const links: NavLink[] = [
  {
    id: "0",
    link: "#features",
    name: "FEATURES",
    icon: <WandSparkles />,
  },
  {
    id: "1",

    link: "#pricing",
    name: "PRICING",
    icon: <CircleDollarSign />,
  },
  {
    id: "2",

    link: "#how-to-use",
    name: "HOW TO USE",
    icon: <BookText />,
  },
  {
    id: "3",

    link: "#roadmap",
    name: "ROADMAP",
    icon: <Kanban />,
  },
];

export default links;
