import { Theme, useTheme } from "app";
import { classNames } from "shared";
import { ICON_THEME_DARK, ICON_THEME_LIGHT } from "shared";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <ICON_THEME_DARK /> : <ICON_THEME_LIGHT />}
    </button>
  );
};
