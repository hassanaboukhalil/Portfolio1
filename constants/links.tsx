import {
  BookText,
  CircleDollarSign,
  WandSparkles,
  Kanban,
  UserSearch,
  FolderKanban,
  Users,
  Mail,
} from "lucide-react";

type NavLink = {
  id?: string;
  name: string;
  link: string;
  icon?: JSX.Element;
};

const links: NavLink[] = [
  {
    id: "0",
    link: "#about",
    name: "about",
    icon: <UserSearch />,
  },
  {
    id: "1",
    link: "#skills",
    name: "skills",
    icon: <WandSparkles />,
  },
  {
    id: "2",
    link: "#work",
    name: "work",
    icon: <FolderKanban />,
  },
  {
    id: "3",
    link: "#testimonails",
    name: "testimaonials",
    icon: <Users />,
  },
  {
    id: "4",
    link: "#contact",
    name: "contact",
    icon: <Mail />,
  },
];

export default links;
