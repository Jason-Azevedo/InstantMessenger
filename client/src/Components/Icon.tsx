import React from "react";

const Icons: { [id: string]: string } = {
  cog: "Cog",
};

interface IconParams {
  iconName: string;
}

export default function Icon(props: IconParams) {
  const icon = "icon--" + Icons[props.iconName];
  return <span className={icon}></span>;
}
