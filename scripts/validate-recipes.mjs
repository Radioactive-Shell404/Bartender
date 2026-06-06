import { access, readFile } from 'node:fs/promises';

const recipes = JSON.parse(await readFile(new URL('../recipes.json', import.meta.url), 'utf8'));
const errors = [];
const slugs = new Set();
let imageCount = 0;
const validTypes = new Set(['classic', 'cocktail', 'longdrink', 'shot', 'mocktail', 'hot']);
const validTechniques = new Set(['shaken', 'stirred', 'built', 'blended', 'muddled', 'dry-shake', 'layered']);

if (!Array.isArray(recipes) || recipes.length < 100) errors.push('recipes.json deve contenere almeno 100 ricette.');

for (const [index, recipe] of recipes.entries()) {
  const at = `Ricetta #${index + 1}`;
  if (!recipe.slug || typeof recipe.slug !== 'string') errors.push(`${at}: slug mancante.`);
  else if (!/^[a-z0-9-]+$/.test(recipe.slug)) errors.push(`${at}: slug non valido (${recipe.slug}).`);
  else if (slugs.has(recipe.slug)) errors.push(`${at}: slug duplicato (${recipe.slug}).`);
  else slugs.add(recipe.slug);

  if (!recipe.name?.it || !recipe.name?.en) errors.push(`${at}: nome IT/EN mancante.`);
  if (!validTypes.has(recipe.type)) errors.push(`${at}: type non valido (${recipe.type}).`);
  if (!validTechniques.has(recipe.technique)) errors.push(`${at}: technique non valida (${recipe.technique}).`);
  if (!recipe.glass?.it || !recipe.glass?.en) errors.push(`${at}: bicchiere IT/EN mancante.`);
  if (!recipe.garnish?.it || !recipe.garnish?.en) errors.push(`${at}: guarnizione IT/EN mancante.`);
  if (!recipe.notes?.it || !recipe.notes?.en) errors.push(`${at}: note IT/EN mancanti.`);
  if (recipe.status !== 'verified') errors.push(`${at}: status deve essere verified.`);
  if (recipe.image !== undefined) {
    if (typeof recipe.image !== 'string' || !/^images\/drinks\/[a-z0-9-]+\.webp$/.test(recipe.image)) {
      errors.push(`${at}: percorso immagine non valido (${recipe.image}).`);
    } else {
      imageCount += 1;
      try { await access(new URL(`../${recipe.image}`, import.meta.url)); }
      catch { errors.push(`${at}: file immagine mancante (${recipe.image}).`); }
    }
  }
  if (!Number.isFinite(recipe.abv) || recipe.abv < 0 || recipe.abv > 80) errors.push(`${at}: ABV non valido.`);
  if (!Array.isArray(recipe.ingredients) || recipe.ingredients.length === 0) errors.push(`${at}: ingredienti mancanti.`);

  for (const [ingredientIndex, ingredient] of (recipe.ingredients || []).entries()) {
    if (!ingredient.name?.it || !ingredient.name?.en) errors.push(`${at}, ingrediente #${ingredientIndex + 1}: nome IT/EN mancante.`);
    if (ingredient.amount !== null && ingredient.amount !== undefined && !Number.isFinite(ingredient.amount)) errors.push(`${at}, ingrediente #${ingredientIndex + 1}: quantità non numerica.`);
    if (typeof ingredient.unit !== 'string') errors.push(`${at}, ingrediente #${ingredientIndex + 1}: unità mancante.`);
  }

  const serialized = JSON.stringify(recipe).toLowerCase();
  if (serialized.includes('da completare') || serialized.includes('base spirit') || serialized.includes('distillato base')) errors.push(`${at}: contiene testo segnaposto.`);
  if (serialized.includes('sciroppo semplice')) errors.push(`${at}: usa "Sciroppo di zucchero" invece di "Sciroppo semplice".`);

  if (recipe.type === 'shot') {
    const measuredMl = (recipe.ingredients || []).reduce((total, ingredient) => {
      if (ingredient.unit === 'ml' && Number.isFinite(ingredient.amount)) return total + ingredient.amount;
      if (ingredient.unit === 'cl' && Number.isFinite(ingredient.amount)) return total + ingredient.amount * 10;
      if (ingredient.unit === 'oz' && Number.isFinite(ingredient.amount)) return total + ingredient.amount * 29.5735;
      return total;
    }, 0);
    if (measuredMl > 75) errors.push(`${at}: uno shot non dovrebbe superare 75 ml complessivi (${measuredMl.toFixed(1)} ml).`);
  }
}

if (errors.length) {
  console.error(`Validazione fallita con ${errors.length} errore/i:\n- ${errors.join('\n- ')}`);
  process.exit(1);
}

console.log(`✓ recipes.json valido: ${recipes.length} ricette, ${slugs.size} slug univoci, ${imageCount} immagini collegate.`);
