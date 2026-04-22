
import ActiveMarkerIcon from "./components/src\components\icon\components\ActiveMarkerIcon";
import BookmarkIcon from "./components/src\components\icon\components\BookmarkIcon";
import ClockIcon from "./components/src\components\icon\components\ClockIcon";
import DefaultMarkerIcon from "./components/src\components\icon\components\DefaultMarkerIcon";
import EditIcon from "./components/src\components\icon\components\EditIcon";
import FavoriteMarkerIcon from "./components/src\components\icon\components\FavoriteMarkerIcon";
import FilterIcon from "./components/src\components\icon\components\FilterIcon";
import KakaoIcon from "./components/src\components\icon\components\KakaoIcon";
import LeftArrowIcon from "./components/src\components\icon\components\LeftArrowIcon";
import LocationResetIcon from "./components/src\components\icon\components\LocationResetIcon";
import MenuIcon from "./components/src\components\icon\components\MenuIcon";
import ReloadIcon from "./components/src\components\icon\components\ReloadIcon";
import SearchIcon from "./components/src\components\icon\components\SearchIcon";
import UserMarkerIcon from "./components/src\components\icon\components\UserMarkerIcon";
import XIcon from "./components/src\components\icon\components\XIcon";

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
