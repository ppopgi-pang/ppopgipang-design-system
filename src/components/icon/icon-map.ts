
import ActiveMarkerIcon from "./components/ActiveMarkerIcon";
import BookmarkIcon from "./components/BookmarkIcon";
import ClockIcon from "./components/ClockIcon";
import DefaultMarkerIcon from "./components/DefaultMarkerIcon";
import EditIcon from "./components/EditIcon";
import FavoriteMarkerIcon from "./components/FavoriteMarkerIcon";
import FilterIcon from "./components/FilterIcon";
import KakaoIcon from "./components/KakaoIcon";
import LeftArrowIcon from "./components/LeftArrowIcon";
import LocationResetIcon from "./components/LocationResetIcon";
import MenuIcon from "./components/MenuIcon";
import ReloadIcon from "./components/ReloadIcon";
import SearchIcon from "./components/SearchIcon";
import UserMarkerIcon from "./components/UserMarkerIcon";
import XIcon from "./components/XIcon";

export const ICON_MAP = {
ActiveMarkerIcon,
BookmarkIcon,
ClockIcon,
DefaultMarkerIcon,
EditIcon,
FavoriteMarkerIcon,
FilterIcon,
KakaoIcon,
LeftArrowIcon,
LocationResetIcon,
MenuIcon,
ReloadIcon,
SearchIcon,
UserMarkerIcon,
XIcon,
} as const;

export type IconName = keyof typeof ICON_MAP;
