import classnames from "classnames";

export type TextWeight = "bold" | "semiBold" | "regular";

export type TextType = "small" | "regular" | "big";

import styles from "./Text.module.scss";

interface TextProps {
  children: React.ReactNode;
  className?: string;
  tag?: Element;
  type?: TextType;
  weight?: TextWeight;
}

const Text: React.FC<TextProps> = ({children, className, type, weight, tag: Tag = "div" as Element}) => (
  <Tag className={classnames(styles.root, styles[type], styles[weight], className)}>{children}</Tag>
);

export default Text;

Text.displayName = "Text";
