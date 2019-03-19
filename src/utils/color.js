export default {
  getColorsFromRarity(rarity) {
    const type = rarity.toLowerCase();
    const commonColor = { color: '#326B3D', background: '#74D386'};

    switch (type) {
      case 'common': return commonColor;
      case 'uncommon': return { color: '#897F12', background: '#F8E71C'};
      case 'rare': return { color: '#46335C', background: '#9F84BD'};
      case 'mythic rare': return { color: '#1E6256', background: '#55D6BE'};
      case 'special': return { color: '#733624', background: '#F47C59'};
      case 'basic land': return { color: '#771E1C', background: '#F86764'};
      default: return commonColor;
    }
  }
}
