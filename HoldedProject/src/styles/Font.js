/**
 * Created by abisi on 2019-06-26
 */

import { Platform } from 'react-native';

export const FONT_BASE_FAMILY = Platform.select({
    ios: 'Roboto-Regular',
    android: 'Roboto-Regular',
});

export const FONT_EXTRABOLD_FAMILY = Platform.select({

    ios: 'Roboto-Black',
    android: 'Roboto-Black',
});

export const FONT_BOLD_FAMILY = 'Roboto-Bold';
export const FONT_BASE_SIZE = 16;
export const FONT_BASE_WEIGHT = 'normal';

export const FONT_SMALL_SIZE = 14;
export const FONT_TITLE_SIZE = 22;
export const FONT_CURRENCY = 35;
export const FONT_TITLE_WEIGHT = 'bold';

export const FONT_BIG_TITLE_SIZE = 88;
export const FONT_BIG_TITLE_WEIGHT = 'normal';

export const FONT_CARD_TITLE_SIZE = 18;