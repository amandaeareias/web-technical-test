import { schema } from 'normalizr';
import Color from '@/utils/color';

export const card = new schema.Entity('cards', {}, {
  processStrategy: (entity) => {
    return {
      ...entity,
      rarityColors: Color.getColorsFromRarity(entity.rarity)
    }
  }
});
export const cards = [card];
