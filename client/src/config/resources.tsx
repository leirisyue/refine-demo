import { UserOutlined } from "@ant-design/icons";

export const resources =[
  {
    name: "property",
    list: "/property",
    meta: {
      canDelete: true,
      label: "Property",
      icon:<UserOutlined />,
    },
  },
  {
    name: "agent",
    list: "/agent",
    meta: {
      canDelete: true,
      label: "Agent",
      icon:<UserOutlined />,
    },
  },
  {
    name: "review",
    list: "/review",
    meta: {
      canDelete: true,
      label: "Review",
      icon:<UserOutlined />,
    },
  },
  {
    name: "message",
    list: "/message",
    meta: {
      canDelete: true,
      label: "Message",
      icon:<UserOutlined />,
    },
  },
  {
    name: "my-pofile",
    list: "/my-pofile",
    meta: {
      canDelete: true,
      label: "My Pofile",
      icon:<UserOutlined />,
    },
  },
]