const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const STORAGE = {
  language: 'ba-language-v2',
  units: 'ba-units-v2',
  theme: 'ba-theme-v2',
  saved: 'ba-saved-v2',
  playlists: 'ba-playlists-v2',
  profile: 'ba-profile-v2',
  customRecipes: 'ba-custom-recipes-v2',
};

const I18N = {
  it: {
    hero_eyebrow: 'Atlante personale di mixology', hero_title: 'Trova il drink giusto.', hero_copy: 'Cerca tra classici, tiki, aperitivi, shot e analcolici. Tutto resta sul tuo dispositivo.',
    search_placeholder: 'Cerca un cocktail per nome…', filter_type: 'Tipo', filter_technique: 'Tecnica', filter_sort: 'Ordina', filter_all: 'Tutti',
    sort_name: 'Nome', sort_abv_asc: 'Gradazione crescente', sort_abv_desc: 'Gradazione decrescente', quick_all: 'Tutte', quick_saved: 'Salvate', quick_mocktail: 'Analcoliche',
    catalogue: 'Catalogo', recipes: 'Ricette', recipe: 'Ricetta', add_recipe: 'Aggiungi', load_more: 'Mostra altre', learn: 'Conoscere per miscelare', spirits: 'Distillati', spirits_intro: 'Una guida rapida alle principali basi da bar e ai loro profili aromatici.',
    organize: 'Organizza', lists: 'Liste', lists_intro: 'Raccogli ricette per serate, occasioni o ingredienti.', new_list: 'Nuova lista', back: 'Indietro', list_detail: 'Dettaglio lista', delete_list: 'Elimina lista', profile: 'Profilo',
    my_bar: 'Il mio bar', default_bio: 'Appassionato di mixology', edit: 'Modifica', saved: 'Salvate',
    preferences: 'Preferenze', app_settings: 'Impostazioni app', language: 'Lingua', units: 'Unità', dark_mode: 'Tema scuro', install_app: 'Installa app', install: 'Installa', data: 'Dati', backup: 'Backup e ripristino', backup_help: 'Esporta preferiti, liste, profilo e ricette personali.', export: 'Esporta dati', import: 'Importa dati', about: 'Informazioni', about_text: 'Le dosi sono indicazioni standard: ricette e gradazioni possono variare in base ai prodotti usati. Bevi responsabilmente.',
    ingredients: 'Ingredienti', preparation: 'Preparazione', garnish: 'Guarnizione', notes: 'Note', add_to_list: 'Aggiungi a lista', share: 'Condividi', delete: 'Elimina', history: 'Storia', aroma: 'Profilo aromatico', classic_cocktails: 'Cocktail classici',
    personal_recipe: 'Ricetta personale', name: 'Nome', type: 'Tipo', glass: 'Bicchiere', origin: 'Origine', abv: 'Gradazione %', technique: 'Tecnica', ingredients_lines: 'Ingredienti, uno per riga', cancel: 'Annulla', save_recipe: 'Salva ricetta', bio: 'Bio', banner_color: 'Colore banner', save: 'Salva', list_name: 'Nome lista', emoji: 'Emoji', create: 'Crea', create_new_list: 'Crea nuova lista',
    empty_title: 'Nessun risultato', empty_text: 'Prova a cambiare ricerca o filtri.', empty_lists: 'Non hai ancora creato liste.', empty_list: 'Questa lista è vuota.',
    saved_add: 'Salva', saved_remove: 'Rimuovi dai salvati', toast_saved: 'Ricetta salvata', toast_unsaved: 'Ricetta rimossa dai salvati', toast_list_added: 'Aggiunta alla lista', toast_list_removed: 'Rimossa dalla lista', toast_list_created: 'Lista creata', toast_list_deleted: 'Lista eliminata', toast_recipe_created: 'Ricetta personale salvata', toast_recipe_deleted: 'Ricetta personale eliminata', toast_profile: 'Profilo aggiornato', toast_export: 'Backup esportato', toast_import: 'Backup importato', toast_invalid_import: 'File di backup non valido', toast_shared: 'Link copiato', toast_install_unavailable: 'Apri il menu del browser e scegli “Aggiungi a schermata Home”.', confirm_delete_list: 'Eliminare questa lista?', confirm_delete_recipe: 'Eliminare questa ricetta personale?',
    online: 'Online', offline: 'Offline', custom: 'Personale', recipes_count: 'ricette', one_recipe: 'ricetta', no_garnish: 'Nessuna', optional: 'opzionale',
    types: { classic: 'Classico', cocktail: 'Cocktail', longdrink: 'Long drink', shot: 'Shot', mocktail: 'Analcolico', hot: 'Caldo' },
    techniques: { shaken: 'Shakerato', stirred: 'Mescolato', built: 'Diretto', blended: 'Frullato', muddled: 'Pestato', 'dry-shake': 'Dry shake', layered: 'A strati' },
    origins: { italy: 'Italia', usa: 'USA', uk: 'Regno Unito', france: 'Francia', cuba: 'Cuba', mexico: 'Messico', brazil: 'Brasile', spain: 'Spagna', germany: 'Germania', ireland: 'Irlanda', belgium: 'Belgio', canada: 'Canada', japan: 'Giappone', singapore: 'Singapore', malaysia: 'Malesia', jamaica: 'Giamaica', peru: 'Perù', bermuda: 'Bermuda', bahamas: 'Bahamas', 'puerto-rico': 'Porto Rico', 'british-virgin-islands': 'Isole Vergini Britanniche', argentina: 'Argentina', portugal: 'Portogallo', egypt: 'Egitto', asia: 'Asia', international: 'Internazionale' },
    unitsMap: { ml: 'ml', cl: 'cl', oz: 'oz', dash: 'dash', rinse: 'risciacquo', leaf: 'foglie', piece: 'pezzi', whole: 'intero', tsp: 'cucchiaini', pinch: 'pizzico', slice: 'fette', top: 'top' }
  },
  en: {
    hero_eyebrow: 'Your personal mixology atlas', hero_title: 'Find the right drink.', hero_copy: 'Browse classics, tiki drinks, aperitifs, shots and alcohol-free recipes. Your data stays on your device.',
    search_placeholder: 'Search cocktails by name…', filter_type: 'Type', filter_technique: 'Technique', filter_sort: 'Sort', filter_all: 'All',
    sort_name: 'Name', sort_abv_asc: 'ABV low to high', sort_abv_desc: 'ABV high to low', quick_all: 'All', quick_saved: 'Saved', quick_mocktail: 'Alcohol-free',
    catalogue: 'Catalogue', recipes: 'Recipes', recipe: 'Recipe', add_recipe: 'Add', load_more: 'Show more', learn: 'Know what you mix', spirits: 'Spirits', spirits_intro: 'A quick guide to the main bar bases and their flavor profiles.',
    organize: 'Organize', lists: 'Lists', lists_intro: 'Collect recipes for evenings, occasions or ingredients.', new_list: 'New list', back: 'Back', list_detail: 'List details', delete_list: 'Delete list', profile: 'Profile',
    my_bar: 'My bar', default_bio: 'Mixology enthusiast', edit: 'Edit', saved: 'Saved',
    preferences: 'Preferences', app_settings: 'App settings', language: 'Language', units: 'Units', dark_mode: 'Dark mode', install_app: 'Install app', install: 'Install', data: 'Data', backup: 'Backup and restore', backup_help: 'Export saved recipes, lists, profile and personal recipes.', export: 'Export data', import: 'Import data', about: 'About', about_text: 'Measures are standard guidelines: recipes and ABV may vary depending on the products used. Drink responsibly.',
    ingredients: 'Ingredients', preparation: 'Preparation', garnish: 'Garnish', notes: 'Notes', add_to_list: 'Add to list', share: 'Share', delete: 'Delete', history: 'History', aroma: 'Flavor profile', classic_cocktails: 'Classic cocktails',
    personal_recipe: 'Personal recipe', name: 'Name', type: 'Type', glass: 'Glass', origin: 'Origin', abv: 'ABV %', technique: 'Technique', ingredients_lines: 'Ingredients, one per line', cancel: 'Cancel', save_recipe: 'Save recipe', bio: 'Bio', banner_color: 'Banner color', save: 'Save', list_name: 'List name', emoji: 'Emoji', create: 'Create', create_new_list: 'Create new list',
    empty_title: 'No results', empty_text: 'Try changing your search or filters.', empty_lists: 'You have not created any lists yet.', empty_list: 'This list is empty.',
    saved_add: 'Save', saved_remove: 'Remove from saved', toast_saved: 'Recipe saved', toast_unsaved: 'Recipe removed from saved', toast_list_added: 'Added to list', toast_list_removed: 'Removed from list', toast_list_created: 'List created', toast_list_deleted: 'List deleted', toast_recipe_created: 'Personal recipe saved', toast_recipe_deleted: 'Personal recipe deleted', toast_profile: 'Profile updated', toast_export: 'Backup exported', toast_import: 'Backup imported', toast_invalid_import: 'Invalid backup file', toast_shared: 'Link copied', toast_install_unavailable: 'Open the browser menu and choose “Add to Home Screen”.', confirm_delete_list: 'Delete this list?', confirm_delete_recipe: 'Delete this personal recipe?',
    online: 'Online', offline: 'Offline', custom: 'Personal', recipes_count: 'recipes', one_recipe: 'recipe', no_garnish: 'None', optional: 'optional',
    types: { classic: 'Classic', cocktail: 'Cocktail', longdrink: 'Long drink', shot: 'Shot', mocktail: 'Alcohol-free', hot: 'Hot' },
    techniques: { shaken: 'Shaken', stirred: 'Stirred', built: 'Built', blended: 'Blended', muddled: 'Muddled', 'dry-shake': 'Dry shake', layered: 'Layered' },
    origins: { italy: 'Italy', usa: 'USA', uk: 'United Kingdom', france: 'France', cuba: 'Cuba', mexico: 'Mexico', brazil: 'Brazil', spain: 'Spain', germany: 'Germany', ireland: 'Ireland', belgium: 'Belgium', canada: 'Canada', japan: 'Japan', singapore: 'Singapore', malaysia: 'Malaysia', jamaica: 'Jamaica', peru: 'Peru', bermuda: 'Bermuda', bahamas: 'Bahamas', 'puerto-rico': 'Puerto Rico', 'british-virgin-islands': 'British Virgin Islands', argentina: 'Argentina', portugal: 'Portugal', egypt: 'Egypt', asia: 'Asia', international: 'International' },
    unitsMap: { ml: 'ml', cl: 'cl', oz: 'oz', dash: 'dash', rinse: 'rinse', leaf: 'leaves', piece: 'pieces', whole: 'whole', tsp: 'tsp', pinch: 'pinch', slice: 'slices', top: 'top' }
  }
};

const SPIRITS = [
  { id: 'gin', icon: '◌', name: { it: 'Gin', en: 'Gin' }, origin: { it: 'Paesi Bassi / Regno Unito', en: 'Netherlands / United Kingdom' }, abv: '37.5–47%', history: { it: 'Nato dall’evoluzione del genever, è un distillato aromatizzato in cui il ginepro deve essere protagonista. Stili diversi valorizzano agrumi, spezie, fiori ed erbe.', en: 'Born from the evolution of genever, gin is a flavored spirit in which juniper must lead. Different styles highlight citrus, spices, flowers and herbs.' }, taste: { it: ['Ginepro', 'Agrumi', 'Floreale', 'Erbaceo'], en: ['Juniper', 'Citrus', 'Floral', 'Herbal'] }, cocktails: 'Negroni, Martini, Tom Collins, Gin Fizz' },
  { id: 'rum', icon: '◒', name: { it: 'Rum', en: 'Rum' }, origin: { it: 'Caraibi e America Latina', en: 'Caribbean and Latin America' }, abv: '37.5–60%+', history: { it: 'Prodotto da melassa o succo di canna da zucchero. Può essere bianco, ambrato, scuro, agricolo o overproof, con profili molto diversi.', en: 'Made from molasses or fresh sugarcane juice. It may be white, amber, dark, agricole or overproof, with widely different profiles.' }, taste: { it: ['Canna da zucchero', 'Tropicale', 'Speziato', 'Legnoso'], en: ['Sugarcane', 'Tropical', 'Spiced', 'Woody'] }, cocktails: 'Daiquiri, Mojito, Mai Tai, Piña Colada' },
  { id: 'whiskey', icon: '◇', name: { it: 'Whisky e Whiskey', en: 'Whisky and Whiskey' }, origin: { it: 'Scozia, Irlanda, USA e oltre', en: 'Scotland, Ireland, USA and beyond' }, abv: '40–65%+', history: { it: 'Distillato di cereali maturato in legno. Scotch, bourbon, rye e Irish whiskey cambiano per materie prime, produzione e invecchiamento.', en: 'A grain spirit matured in wood. Scotch, bourbon, rye and Irish whiskey differ in raw materials, production and aging.' }, taste: { it: ['Cereali', 'Vaniglia', 'Spezie', 'Fumo'], en: ['Grain', 'Vanilla', 'Spice', 'Smoke'] }, cocktails: 'Old Fashioned, Manhattan, Whiskey Sour, Penicillin' },
  { id: 'vodka', icon: '○', name: { it: 'Vodka', en: 'Vodka' }, origin: { it: 'Europa orientale', en: 'Eastern Europe' }, abv: '37.5–50%', history: { it: 'Distillato generalmente neutro ottenuto da cereali, patate o altre materie fermentabili. La pulizia del gusto la rende estremamente versatile.', en: 'A generally neutral spirit made from grain, potatoes or other fermentable materials. Its clean profile makes it highly versatile.' }, taste: { it: ['Pulito', 'Cereale', 'Morbido', 'Neutro'], en: ['Clean', 'Grain', 'Smooth', 'Neutral'] }, cocktails: 'Moscow Mule, Cosmopolitan, Espresso Martini, Bloody Mary' },
  { id: 'tequila', icon: '✦', name: { it: 'Tequila e Mezcal', en: 'Tequila and Mezcal' }, origin: { it: 'Messico', en: 'Mexico' }, abv: '35–55%', history: { it: 'La tequila usa agave blu in zone protette; il mezcal può usare diverse agavi e spesso mostra note affumicate dovute alla cottura tradizionale.', en: 'Tequila uses blue agave in protected regions; mezcal can use multiple agave species and often shows smoky notes from traditional cooking.' }, taste: { it: ['Agave', 'Pepe', 'Vegetale', 'Fumo'], en: ['Agave', 'Pepper', 'Vegetal', 'Smoke'] }, cocktails: 'Margarita, Paloma, Naked and Famous, Division Bell' },
  { id: 'brandy', icon: '◈', name: { it: 'Brandy e Cognac', en: 'Brandy and Cognac' }, origin: { it: 'Europa e mondo', en: 'Europe and worldwide' }, abv: '36–50%', history: { it: 'Distillati ottenuti dal vino o da altra frutta. Il Cognac è una denominazione francese con regole precise di origine e maturazione.', en: 'Spirits distilled from wine or other fruit. Cognac is a French protected designation with precise origin and aging rules.' }, taste: { it: ['Uva', 'Frutta secca', 'Vaniglia', 'Legno'], en: ['Grape', 'Dried fruit', 'Vanilla', 'Wood'] }, cocktails: 'Sidecar, Vieux Carré, Brandy Alexander, Stinger' },
  { id: 'vermouth', icon: '◐', name: { it: 'Vermouth', en: 'Vermouth' }, origin: { it: 'Italia e Francia', en: 'Italy and France' }, abv: '14.5–22%', history: { it: 'Vino fortificato e aromatizzato con botaniche. Rosso, bianco e dry sono strumenti fondamentali nella miscelazione classica.', en: 'Fortified wine flavored with botanicals. Sweet, blanc and dry styles are foundational tools in classic cocktails.' }, taste: { it: ['Erbaceo', 'Vinoso', 'Speziato', 'Amaro-dolce'], en: ['Herbal', 'Vinous', 'Spiced', 'Bittersweet'] }, cocktails: 'Negroni, Manhattan, Martini, Americano' },
  { id: 'amaro', icon: '✧', name: { it: 'Amari e bitter', en: 'Amari and bitters' }, origin: { it: 'Italia e tradizioni europee', en: 'Italy and European traditions' }, abv: '11–40%', history: { it: 'Liquori ottenuti da infusioni di erbe, radici, cortecce e spezie. Possono essere aperitivi, digestivi o ingredienti aromatici molto concentrati.', en: 'Liqueurs made by infusing herbs, roots, bark and spices. They may be aperitifs, digestifs or highly concentrated flavoring ingredients.' }, taste: { it: ['Amaro', 'Erbaceo', 'Agrumato', 'Speziato'], en: ['Bitter', 'Herbal', 'Citrus', 'Spiced'] }, cocktails: 'Americano, Paper Plane, Black Manhattan, Trinidad Sour' }
];

const state = {
  language: readStorage(STORAGE.language, 'it'),
  units: readStorage(STORAGE.units, 'ml'),
  theme: readStorage(STORAGE.theme, matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  baseRecipes: [],
  customRecipes: readStorage(STORAGE.customRecipes, []),
  saved: new Set(readStorage(STORAGE.saved, [])),
  playlists: readStorage(STORAGE.playlists, [
    { id: crypto.randomUUID?.() || `list-${Date.now()}-1`, name: 'Preferiti', emoji: '⭐', slugs: [] },
    { id: crypto.randomUUID?.() || `list-${Date.now()}-2`, name: 'Aperitivo', emoji: '🍊', slugs: ['negroni', 'americano', 'aperol-spritz'] }
  ]),
  profile: readStorage(STORAGE.profile, { name: 'Barman', bio: '', color: '#5b3512' }),
  activeView: 'recipes',
  quickFilter: 'all',
  visibleCount: 24,
  activeRecipe: null,
  activeList: null,
  pendingRecipeForList: null,
  installPrompt: null,
};

function readStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    localStorage.removeItem(key);
    return fallback;
  }
}

function writeStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (error) { console.warn(`Storage error for ${key}`, error); }
}

function text(value, language = state.language) {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  return value[language] || value.it || value.en || '';
}

function tr(key) {
  return I18N[state.language]?.[key] ?? I18N.it[key] ?? key;
}

function normalize(value = '') {
  return String(value)
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[’']/g, '')
    .toLowerCase()
    .trim();
}

function slugify(value) {
  return normalize(value).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || `recipe-${Date.now()}`;
}

function allRecipes() {
  return [...state.customRecipes, ...state.baseRecipes];
}

function recipeBySlug(slug) {
  return allRecipes().find(recipe => recipe.slug === slug);
}

function ingredientName(ingredient) {
  return text(ingredient.name);
}

function formatNumber(number) {
  if (Number.isInteger(number)) return String(number);
  return number.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
}

function formatAmount(ingredient) {
  const { amount, unit } = ingredient;
  if (unit === 'top') return tr('unitsMap').top;
  if (amount == null || amount === '') return tr('unitsMap')[unit] || unit || '';
  if (unit === 'ml') {
    if (state.units === 'cl') return `${formatNumber(amount / 10)} cl`;
    if (state.units === 'oz') return `${formatNumber(amount / 29.5735)} oz`;
    return `${formatNumber(amount)} ml`;
  }
  return `${formatNumber(Number(amount))} ${tr('unitsMap')[unit] || unit}`;
}

function originLabel(origin) {
  return I18N[state.language].origins[origin] || origin.replaceAll('-', ' ');
}

function typeLabel(type) {
  return I18N[state.language].types[type] || type;
}

function techniqueLabel(technique) {
  return I18N[state.language].techniques[technique] || technique;
}

function recipeSearchText(recipe) {
  return normalize([
    text(recipe.name, 'it'),
    text(recipe.name, 'en'),
    ...(recipe.aliases || [])
  ].join(' '));
}

function getFilteredRecipes() {
  const query = normalize($('#search-input').value);
  const type = $('#filter-type').value;
  const technique = $('#filter-technique').value;
  const sort = $('#sort-recipes').value;
  let list = allRecipes().filter(recipe => {
    if (query && !recipeSearchText(recipe).includes(query)) return false;
    if (type && recipe.type !== type) return false;
    if (technique && recipe.technique !== technique) return false;
    if (state.quickFilter === 'saved' && !state.saved.has(recipe.slug)) return false;
    if (state.quickFilter === 'mocktail' && recipe.type !== 'mocktail') return false;
    return true;
  });
  list.sort((a, b) => {
    if (sort === 'abv-asc') return (a.abv || 0) - (b.abv || 0) || text(a.name).localeCompare(text(b.name), state.language);
    if (sort === 'abv-desc') return (b.abv || 0) - (a.abv || 0) || text(a.name).localeCompare(text(b.name), state.language);
    return text(a.name).localeCompare(text(b.name), state.language);
  });
  return list;
}

function makeElement(tag, options = {}, children = []) {
  const element = document.createElement(tag);
  for (const [key, value] of Object.entries(options)) {
    if (key === 'class') element.className = value;
    else if (key === 'text') element.textContent = value;
    else if (key === 'dataset') Object.assign(element.dataset, value);
    else if (key === 'attrs') Object.entries(value).forEach(([name, val]) => element.setAttribute(name, val));
    else if (key.startsWith('on') && typeof value === 'function') element.addEventListener(key.slice(2).toLowerCase(), value);
    else element[key] = value;
  }
  const items = Array.isArray(children) ? children : [children];
  for (const child of items) {
    if (child == null) continue;
    element.append(child instanceof Node ? child : document.createTextNode(String(child)));
  }
  return element;
}

function applyLanguage() {
  document.documentElement.lang = state.language;
  $$('[data-i18n]').forEach(element => {
    const value = tr(element.dataset.i18n);
    if (typeof value === 'string') element.textContent = value;
  });
  $$('[data-i18n-placeholder]').forEach(element => {
    const value = tr(element.dataset.i18nPlaceholder);
    if (typeof value === 'string') element.placeholder = value;
  });
  $('#language-quick').textContent = state.language.toUpperCase();
  $('#setting-language').value = state.language;
  populateFilters();
  renderAll();
}

function applyTheme() {
  document.documentElement.classList.toggle('dark', state.theme === 'dark');
  $('#setting-theme').checked = state.theme === 'dark';
  $('#theme-quick').setAttribute('aria-label', state.theme === 'dark' ? 'Attiva tema chiaro' : 'Attiva tema scuro');
  const themeMeta = $('meta[name="theme-color"]');
  if (themeMeta) themeMeta.content = state.theme === 'dark' ? '#0a0806' : '#171109';
}

function populateFilters() {
  const typeSelect = $('#filter-type');
  const techniqueSelect = $('#filter-technique');
  const customType = $('#custom-type');
  const customTechnique = $('#custom-technique');
  const currentType = typeSelect.value;
  const currentTechnique = techniqueSelect.value;
  [typeSelect, customType].forEach(select => { select.replaceChildren(); });
  [techniqueSelect, customTechnique].forEach(select => { select.replaceChildren(); });
  typeSelect.append(makeElement('option', { value: '', text: tr('filter_all') }));
  techniqueSelect.append(makeElement('option', { value: '', text: tr('filter_all') }));
  Object.entries(I18N[state.language].types).forEach(([value, label]) => {
    typeSelect.append(makeElement('option', { value, text: label }));
    customType.append(makeElement('option', { value, text: label }));
  });
  Object.entries(I18N[state.language].techniques).forEach(([value, label]) => {
    techniqueSelect.append(makeElement('option', { value, text: label }));
    customTechnique.append(makeElement('option', { value, text: label }));
  });
  typeSelect.value = currentType;
  techniqueSelect.value = currentTechnique;
}

function renderRecipes() {
  const recipes = getFilteredRecipes();
  const visible = recipes.slice(0, state.visibleCount);
  const grid = $('#recipe-grid');
  grid.replaceChildren();
  const countText = `${recipes.length} ${recipes.length === 1 ? tr('one_recipe') : tr('recipes_count')}`;
  $('#recipe-count').textContent = countText;
  if (!visible.length) {
    const empty = makeElement('div', { class: 'empty-state' }, [
      makeElement('strong', { text: tr('empty_title') }),
      makeElement('span', { text: tr('empty_text') })
    ]);
    grid.append(empty);
  } else {
    visible.forEach(recipe => grid.append(createRecipeCard(recipe)));
  }
  $('#load-more').classList.toggle('hidden', visible.length >= recipes.length);
}

function createRecipeCard(recipe, listContext = null) {
  const saved = state.saved.has(recipe.slug);
  const main = makeElement('button', {
    class: 'recipe-card-main', type: 'button',
    attrs: { 'aria-label': `${tr('recipe')}: ${text(recipe.name)}` },
    onclick: () => openRecipe(recipe.slug)
  });
  const top = makeElement('div', { class: 'recipe-card-top' }, [
    makeElement('span', { class: `type-pill ${recipe.type}`, text: recipe.custom ? tr('custom') : typeLabel(recipe.type) }),
    makeElement('span', { class: 'card-abv', text: `${Number(recipe.abv || 0)}% ABV` })
  ]);
  main.append(
    top,
    makeElement('h3', { text: text(recipe.name) }),
    makeElement('div', { class: 'card-origin', text: `${originLabel(recipe.origin)} · ${text(recipe.glass)}` }),
    makeElement('p', { class: 'card-ingredients', text: recipe.ingredients.map(ingredientName).join(', ') })
  );
  const bookmark = makeElement('button', {
    class: `card-icon-btn${saved ? ' active' : ''}`, type: 'button', text: saved ? '◆' : '◇',
    attrs: { 'aria-label': saved ? tr('saved_remove') : tr('saved_add'), title: saved ? tr('saved_remove') : tr('saved_add') },
    onclick: () => toggleSaved(recipe.slug)
  });
  const listButton = listContext
    ? makeElement('button', { class: 'card-icon-btn', type: 'button', text: '×', attrs: { 'aria-label': tr('toast_list_removed') }, onclick: () => removeRecipeFromList(listContext, recipe.slug) })
    : makeElement('button', { class: 'card-icon-btn', type: 'button', text: '+', attrs: { 'aria-label': tr('add_to_list') }, onclick: () => openListPicker(recipe.slug) });
  const footer = makeElement('div', { class: 'card-footer' }, [
    makeElement('span', { class: 'card-technique', text: techniqueLabel(recipe.technique) }),
    makeElement('div', { class: 'card-buttons' }, [bookmark, listButton])
  ]);
  return makeElement('article', { class: 'recipe-card' }, [main, footer]);
}

function openRecipe(slug, updateHash = true) {
  const recipe = recipeBySlug(slug);
  if (!recipe) return;
  state.activeRecipe = slug;
  $('#detail-type').textContent = recipe.custom ? tr('custom') : typeLabel(recipe.type);
  $('#detail-name').textContent = text(recipe.name);
  const meta = $('#detail-meta');
  meta.replaceChildren(
    makeElement('span', { class: 'status-pill', text: originLabel(recipe.origin) }),
    makeElement('span', { class: 'status-pill', text: text(recipe.glass) }),
    makeElement('span', { class: 'status-pill', text: `${Number(recipe.abv || 0)}% ABV` })
  );
  const ingredients = $('#detail-ingredients');
  ingredients.replaceChildren();
  recipe.ingredients.forEach(item => {
    ingredients.append(makeElement('div', { class: 'ingredient-row' }, [
      makeElement('span', { class: 'ingredient-amount', text: formatAmount(item) }),
      makeElement('span', { text: ingredientName(item) })
    ]));
  });
  $('#detail-technique').textContent = techniqueLabel(recipe.technique);
  $('#detail-garnish').textContent = text(recipe.garnish) || tr('no_garnish');
  $('#detail-notes').textContent = text(recipe.notes);
  updateDetailSaveButton();
  $('#detail-delete-custom').classList.toggle('hidden', !recipe.custom);
  const dialog = $('#recipe-dialog');
  if (!dialog.open) dialog.showModal();
  document.body.classList.add('modal-open');
  if (updateHash) history.replaceState(null, '', `${location.pathname}${location.search}#recipe=${encodeURIComponent(slug)}`);
}

function updateDetailSaveButton() {
  const button = $('#detail-save');
  const saved = state.saved.has(state.activeRecipe);
  button.textContent = saved ? `◆ ${tr('saved_remove')}` : `◇ ${tr('saved_add')}`;
}

function toggleSaved(slug) {
  if (state.saved.has(slug)) {
    state.saved.delete(slug);
    showToast(tr('toast_unsaved'));
  } else {
    state.saved.add(slug);
    showToast(tr('toast_saved'));
  }
  writeStorage(STORAGE.saved, [...state.saved]);
  renderRecipes();
  renderLists();
  renderStats();
  if (state.activeRecipe === slug) updateDetailSaveButton();
}

function renderSpirits() {
  const grid = $('#spirit-grid');
  grid.replaceChildren();
  SPIRITS.forEach(spirit => {
    const tags = makeElement('div', { class: 'tag-list' }, spirit.taste[state.language].slice(0, 3).map(item => makeElement('span', { class: 'tag', text: item })));
    grid.append(makeElement('button', { class: 'spirit-card', type: 'button', onclick: () => openSpirit(spirit.id) }, [
      makeElement('span', { class: 'spirit-icon', text: spirit.icon, attrs: { 'aria-hidden': 'true' } }),
      makeElement('h2', { text: text(spirit.name) }),
      makeElement('p', { text: `${text(spirit.origin)} · ${spirit.abv}` }),
      tags
    ]));
  });
}

function openSpirit(id) {
  const spirit = SPIRITS.find(item => item.id === id);
  if (!spirit) return;
  $('#spirit-detail-icon').textContent = spirit.icon;
  $('#spirit-detail-name').textContent = text(spirit.name);
  $('#spirit-detail-origin').textContent = `${text(spirit.origin)} · ${spirit.abv}`;
  $('#spirit-detail-history').textContent = text(spirit.history);
  $('#spirit-detail-cocktails').textContent = spirit.cocktails;
  const taste = $('#spirit-detail-taste');
  taste.replaceChildren(...spirit.taste[state.language].map(item => makeElement('span', { class: 'tag', text: item })));
  $('#spirit-dialog').showModal();
  document.body.classList.add('modal-open');
}

function renderLists() {
  const grid = $('#playlist-grid');
  grid.replaceChildren();
  if (!state.playlists.length) {
    grid.append(makeElement('div', { class: 'empty-state' }, [makeElement('strong', { text: tr('empty_title') }), makeElement('span', { text: tr('empty_lists') })]));
    return;
  }
  state.playlists.forEach(list => {
    const recipes = list.slugs.map(recipeBySlug).filter(Boolean);
    const preview = recipes.slice(0, 3).map(recipe => text(recipe.name)).join(', ') || '—';
    const main = makeElement('button', { class: 'playlist-main', type: 'button', onclick: () => openListDetail(list.id) }, [
      makeElement('span', { class: 'playlist-emoji', text: list.emoji || '🍸', attrs: { 'aria-hidden': 'true' } }),
      makeElement('h2', { text: list.name }),
      makeElement('p', { text: `${recipes.length} ${recipes.length === 1 ? tr('one_recipe') : tr('recipes_count')}` })
    ]);
    grid.append(makeElement('article', { class: 'playlist-card' }, [main, makeElement('div', { class: 'playlist-preview', text: preview })]));
  });
}

function openListDetail(id) {
  const list = state.playlists.find(item => item.id === id);
  if (!list) return;
  state.activeList = id;
  $('#lists-overview').hidden = true;
  $('#list-detail').hidden = false;
  $('#list-detail-title').textContent = `${list.emoji || '🍸'} ${list.name}`;
  const grid = $('#list-detail-grid');
  grid.replaceChildren();
  const recipes = list.slugs.map(recipeBySlug).filter(Boolean);
  if (!recipes.length) {
    grid.append(makeElement('div', { class: 'empty-state' }, [makeElement('strong', { text: tr('empty_title') }), makeElement('span', { text: tr('empty_list') })]));
  } else {
    recipes.forEach(recipe => grid.append(createRecipeCard(recipe, list.id)));
  }
}

function closeListDetail() {
  state.activeList = null;
  $('#lists-overview').hidden = false;
  $('#list-detail').hidden = true;
  renderLists();
}

function createList(name, emoji = '🍸') {
  const list = { id: crypto.randomUUID?.() || `list-${Date.now()}`, name: name.trim(), emoji: emoji.trim() || '🍸', slugs: [] };
  if (state.pendingRecipeForList) list.slugs.push(state.pendingRecipeForList);
  state.playlists.push(list);
  writeStorage(STORAGE.playlists, state.playlists);
  showToast(tr('toast_list_created'));
  renderLists();
  renderStats();
  return list;
}

function deleteActiveList() {
  if (!state.activeList || !confirm(tr('confirm_delete_list'))) return;
  state.playlists = state.playlists.filter(list => list.id !== state.activeList);
  writeStorage(STORAGE.playlists, state.playlists);
  showToast(tr('toast_list_deleted'));
  closeListDetail();
  renderStats();
}

function removeRecipeFromList(listId, slug) {
  const list = state.playlists.find(item => item.id === listId);
  if (!list) return;
  list.slugs = list.slugs.filter(item => item !== slug);
  writeStorage(STORAGE.playlists, state.playlists);
  showToast(tr('toast_list_removed'));
  openListDetail(listId);
  renderLists();
}

function openListPicker(slug) {
  state.pendingRecipeForList = slug;
  const options = $('#list-picker-options');
  options.replaceChildren();
  if (!state.playlists.length) {
    options.append(makeElement('div', { class: 'empty-state' }, [makeElement('span', { text: tr('empty_lists') })]));
  } else {
    state.playlists.forEach(list => {
      const included = list.slugs.includes(slug);
      options.append(makeElement('button', { class: 'list-picker-option', type: 'button', onclick: () => addRecipeToList(list.id, slug) }, [
        makeElement('span', { text: list.emoji || '🍸' }),
        makeElement('span', { text: list.name }),
        included ? makeElement('strong', { text: '✓' }) : null
      ]));
    });
  }
  $('#list-picker-dialog').showModal();
  document.body.classList.add('modal-open');
}

function addRecipeToList(listId, slug) {
  const list = state.playlists.find(item => item.id === listId);
  if (!list) return;
  if (!list.slugs.includes(slug)) list.slugs.push(slug);
  writeStorage(STORAGE.playlists, state.playlists);
  showToast(tr('toast_list_added'));
  closeDialog($('#list-picker-dialog'));
  renderLists();
}

function renderProfile() {
  $('#profile-name').textContent = state.profile.name || 'Barman';
  $('#profile-bio').textContent = state.profile.bio || tr('default_bio');
  $('#profile-banner').style.setProperty('--profile-color', state.profile.color || '#5b3512');
  $('#setting-language').value = state.language;
  $('#setting-units').value = state.units;
  $('#setting-theme').checked = state.theme === 'dark';
  renderStats();
}

function renderStats() {
  $('#stat-recipes').textContent = allRecipes().length;
  $('#stat-saved').textContent = state.saved.size;
  $('#stat-lists').textContent = state.playlists.length;
  $('#data-version').textContent = state.baseRecipes.length;
}

function parseIngredientLine(line) {
  const cleaned = line.trim();
  const match = cleaned.match(/^(?:(\d+(?:[.,]\d+)?)\s*)?(ml|cl|oz|dash|tsp|foglie|foglia|leaf|leaves|pezzi|pezzo|piece|pieces|fette|fetta|slice|slices|pizzico|pinch|top|risciacquo|rinse)?\s*(.+)$/i);
  if (!match) return { amount: null, unit: '', name: { it: cleaned, en: cleaned } };
  let amount = match[1] ? Number(match[1].replace(',', '.')) : null;
  let unit = (match[2] || '').toLowerCase();
  const name = match[3].trim();
  const unitMap = { cl: 'ml', oz: 'ml', foglie: 'leaf', foglia: 'leaf', leaves: 'leaf', pezzi: 'piece', pezzo: 'piece', pieces: 'piece', fette: 'slice', fetta: 'slice', slices: 'slice', pizzico: 'pinch', risciacquo: 'rinse' };
  if (unit === 'cl' && amount != null) amount *= 10;
  if (unit === 'oz' && amount != null) amount *= 29.5735;
  unit = unitMap[unit] || unit || '';
  return { amount, unit, name: { it: name, en: name } };
}

function saveCustomRecipe(form) {
  const data = new FormData(form);
  const name = String(data.get('name')).trim();
  const baseSlug = `custom-${slugify(name)}`;
  let slug = baseSlug;
  let counter = 2;
  while (recipeBySlug(slug)) slug = `${baseSlug}-${counter++}`;
  const ingredientLines = String(data.get('ingredients')).split('\n').map(line => line.trim()).filter(Boolean);
  const recipe = {
    slug, custom: true, status: 'custom', type: String(data.get('type')), name: { it: name, en: name },
    origin: slugify(String(data.get('origin') || 'international')),
    glass: { it: String(data.get('glass')).trim(), en: String(data.get('glass')).trim() },
    abv: Math.max(0, Math.min(80, Number(data.get('abv')) || 0)),
    technique: String(data.get('technique')),
    ingredients: ingredientLines.map(parseIngredientLine),
    garnish: { it: String(data.get('garnish')).trim(), en: String(data.get('garnish')).trim() },
    notes: { it: String(data.get('notes')).trim(), en: String(data.get('notes')).trim() },
    tags: ['custom']
  };
  state.customRecipes.unshift(recipe);
  writeStorage(STORAGE.customRecipes, state.customRecipes);
  form.reset();
  closeDialog($('#add-recipe-dialog'));
  showToast(tr('toast_recipe_created'));
  renderAll();
  openRecipe(recipe.slug);
}

function deleteActiveCustomRecipe() {
  const recipe = recipeBySlug(state.activeRecipe);
  if (!recipe?.custom || !confirm(tr('confirm_delete_recipe'))) return;
  state.customRecipes = state.customRecipes.filter(item => item.slug !== recipe.slug);
  state.saved.delete(recipe.slug);
  state.playlists.forEach(list => { list.slugs = list.slugs.filter(slug => slug !== recipe.slug); });
  writeStorage(STORAGE.customRecipes, state.customRecipes);
  writeStorage(STORAGE.saved, [...state.saved]);
  writeStorage(STORAGE.playlists, state.playlists);
  closeDialog($('#recipe-dialog'));
  showToast(tr('toast_recipe_deleted'));
  renderAll();
}

function shareActiveRecipe() {
  const recipe = recipeBySlug(state.activeRecipe);
  if (!recipe) return;
  const url = `${location.origin}${location.pathname}#recipe=${encodeURIComponent(recipe.slug)}`;
  const shareData = { title: `${text(recipe.name)} · Bar Atlas`, text: `${text(recipe.name)} — ${recipe.ingredients.map(item => `${formatAmount(item)} ${ingredientName(item)}`).join(', ')}`, url };
  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    navigator.clipboard?.writeText(url).then(() => showToast(tr('toast_shared'))).catch(() => prompt('Link', url));
  }
}

function exportData() {
  const payload = {
    app: 'Bar Atlas', version: 2, exportedAt: new Date().toISOString(),
    saved: [...state.saved], playlists: state.playlists, profile: state.profile,
    customRecipes: state.customRecipes, language: state.language, units: state.units, theme: state.theme
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = makeElement('a', { href: url, download: `bar-atlas-backup-${new Date().toISOString().slice(0, 10)}.json` });
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  showToast(tr('toast_export'));
}

async function importData(file) {
  try {
    const payload = JSON.parse(await file.text());
    if (payload.app !== 'Bar Atlas' || !Array.isArray(payload.playlists) || !Array.isArray(payload.saved)) throw new Error('Invalid backup');
    state.saved = new Set(payload.saved.filter(value => typeof value === 'string'));
    state.playlists = payload.playlists;
    state.profile = payload.profile || state.profile;
    state.customRecipes = Array.isArray(payload.customRecipes) ? payload.customRecipes : [];
    if (['it', 'en'].includes(payload.language)) state.language = payload.language;
    if (['ml', 'cl', 'oz'].includes(payload.units)) state.units = payload.units;
    if (['light', 'dark'].includes(payload.theme)) state.theme = payload.theme;
    persistAll();
    applyTheme();
    applyLanguage();
    showToast(tr('toast_import'));
  } catch (error) {
    console.warn(error);
    showToast(tr('toast_invalid_import'));
  } finally {
    $('#import-data').value = '';
  }
}

function persistAll() {
  writeStorage(STORAGE.language, state.language);
  writeStorage(STORAGE.units, state.units);
  writeStorage(STORAGE.theme, state.theme);
  writeStorage(STORAGE.saved, [...state.saved]);
  writeStorage(STORAGE.playlists, state.playlists);
  writeStorage(STORAGE.profile, state.profile);
  writeStorage(STORAGE.customRecipes, state.customRecipes);
}

function migrateLegacyData() {
  if (!localStorage.getItem(STORAGE.language)) {
    const legacyLanguage = localStorage.getItem('ba-lang');
    if (legacyLanguage === 'it' || legacyLanguage === 'en') state.language = legacyLanguage;
  }
  if (!localStorage.getItem(STORAGE.theme) && localStorage.getItem('ba-dark') === '1') state.theme = 'dark';
  if (!localStorage.getItem(STORAGE.saved)) {
    const legacySaved = readStorage('ba-saved', []);
    if (Array.isArray(legacySaved)) state.saved = new Set(legacySaved.filter(value => typeof value === 'string' && value));
  }
  if (!localStorage.getItem(STORAGE.playlists)) {
    const legacyLists = readStorage('ba-pl', []);
    if (Array.isArray(legacyLists) && legacyLists.length) {
      state.playlists = legacyLists.map(list => ({
        id: String(list.id || crypto.randomUUID?.() || `list-${Date.now()}`),
        name: String(list.name || 'Lista'),
        emoji: String(list.emoji || '🍸'),
        slugs: Array.isArray(list.slugs) ? list.slugs : Array.isArray(list.ids) ? list.ids.filter(value => typeof value === 'string' && value) : []
      }));
    }
  }
  if (!localStorage.getItem(STORAGE.profile)) {
    const legacyProfile = readStorage('ba-profile', null);
    if (legacyProfile && typeof legacyProfile === 'object') state.profile = legacyProfile;
  }

  if (!localStorage.getItem(STORAGE.customRecipes)) {
    const legacyRecipes = readStorage('ba-recipes', []);
    if (!Array.isArray(legacyRecipes)) {
      persistAll();
      return;
    }
    const custom = legacyRecipes.filter(recipe => recipe?._custom || String(recipe?.id || '').startsWith('custom-')).map(recipe => ({
    slug: recipe.slug || recipe.id || `custom-${Date.now()}`,
    custom: true,
    status: 'custom',
    type: recipe.type || 'cocktail',
    name: typeof recipe.name === 'object' ? recipe.name : { it: recipe.name || 'Ricetta', en: recipe.name || 'Recipe' },
    origin: recipe.origin || 'international',
    glass: typeof recipe.glass === 'object' ? recipe.glass : { it: recipe.glass || '', en: recipe.glass || '' },
    abv: Number(recipe.abv) || 0,
    technique: recipe.technique || 'built',
    ingredients: (recipe.ingredients || []).map(item => {
      if ('amount' in item) return item;
      const parsed = parseIngredientLine(`${item.a || ''} ${typeof item.n === 'object' ? item.n.it || item.n.en : item.n || ''}`);
      if (typeof item.n === 'object') parsed.name = item.n;
      return parsed;
    }),
    garnish: typeof recipe.garnish === 'object' ? recipe.garnish : { it: recipe.garnish || '', en: recipe.garnish || '' },
    notes: typeof recipe.notes === 'object' ? recipe.notes : { it: recipe.notes || '', en: recipe.notes || '' },
    tags: ['custom']
  }));
    if (custom.length) state.customRecipes = custom;
  }
  persistAll();
}

function showView(name) {
  state.activeView = name;
  $$('.view').forEach(view => {
    const active = view.dataset.view === name;
    view.hidden = !active;
    view.classList.toggle('active', active);
  });
  $$('.nav-item').forEach(button => {
    const active = button.dataset.target === name;
    button.classList.toggle('active', active);
    if (active) button.setAttribute('aria-current', 'page'); else button.removeAttribute('aria-current');
  });
  if (name === 'recipes') renderRecipes();
  if (name === 'spirits') renderSpirits();
  if (name === 'lists') renderLists();
  if (name === 'profile') renderProfile();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeDialog(dialog) {
  if (dialog.open) dialog.close();
  if (!$$('dialog[open]').length) document.body.classList.remove('modal-open');
}

let toastTimer;
function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

function updateOnlineStatus() {
  const online = navigator.onLine;
  $('#connection-status').classList.toggle('offline', !online);
  $('#connection-label').textContent = online ? tr('online') : tr('offline');
}

function renderAll() {
  renderRecipes();
  renderSpirits();
  renderLists();
  renderProfile();
}

function bindEvents() {
  $$('.nav-item').forEach(button => button.addEventListener('click', () => showView(button.dataset.target)));
  $('#brand-home').addEventListener('click', () => showView('recipes'));
  $('#search-input').addEventListener('input', () => { state.visibleCount = 24; renderRecipes(); });
  $('#clear-search').addEventListener('click', () => { $('#search-input').value = ''; $('#search-input').focus(); renderRecipes(); });
  ['filter-type', 'filter-technique', 'sort-recipes'].forEach(id => $(`#${id}`).addEventListener('change', () => { state.visibleCount = 24; renderRecipes(); }));
  $$('#quick-filters .chip').forEach(button => button.addEventListener('click', () => {
    state.quickFilter = button.dataset.quick;
    $$('#quick-filters .chip').forEach(item => item.classList.toggle('active', item === button));
    state.visibleCount = 24;
    renderRecipes();
  }));
  $('#load-more').addEventListener('click', () => { state.visibleCount += 24; renderRecipes(); });
  $('#open-add-recipe').addEventListener('click', () => { $('#add-recipe-dialog').showModal(); document.body.classList.add('modal-open'); });
  $('#add-recipe-form').addEventListener('submit', event => { event.preventDefault(); saveCustomRecipe(event.currentTarget); });
  $('#detail-save').addEventListener('click', () => toggleSaved(state.activeRecipe));
  $('#detail-list').addEventListener('click', () => openListPicker(state.activeRecipe));
  $('#detail-share').addEventListener('click', shareActiveRecipe);
  $('#detail-delete-custom').addEventListener('click', deleteActiveCustomRecipe);
  $('#new-list-button').addEventListener('click', () => { state.pendingRecipeForList = null; $('#list-dialog').showModal(); document.body.classList.add('modal-open'); });
  $('#list-form').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    createList(String(data.get('name')), String(data.get('emoji')));
    event.currentTarget.reset();
    closeDialog($('#list-dialog'));
    if ($('#list-picker-dialog').open) closeDialog($('#list-picker-dialog'));
  });
  $('#picker-create-list').addEventListener('click', () => { closeDialog($('#list-picker-dialog')); $('#list-dialog').showModal(); document.body.classList.add('modal-open'); });
  $('#list-back').addEventListener('click', closeListDetail);
  $('#delete-list').addEventListener('click', deleteActiveList);
  $('#edit-profile').addEventListener('click', () => {
    const form = $('#profile-form');
    form.elements.name.value = state.profile.name || '';
    form.elements.bio.value = state.profile.bio || '';
    form.elements.color.value = state.profile.color || '#5b3512';
    $('#profile-dialog').showModal();
    document.body.classList.add('modal-open');
  });
  $('#profile-form').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    state.profile = { name: String(data.get('name')).trim() || 'Barman', bio: String(data.get('bio')).trim(), color: String(data.get('color')) };
    writeStorage(STORAGE.profile, state.profile);
    closeDialog($('#profile-dialog'));
    renderProfile();
    showToast(tr('toast_profile'));
  });
  $('#setting-language').addEventListener('change', event => { state.language = event.target.value; writeStorage(STORAGE.language, state.language); applyLanguage(); });
  $('#language-quick').addEventListener('click', () => { state.language = state.language === 'it' ? 'en' : 'it'; writeStorage(STORAGE.language, state.language); applyLanguage(); });
  $('#setting-units').addEventListener('change', event => { state.units = event.target.value; writeStorage(STORAGE.units, state.units); if ($('#recipe-dialog').open && state.activeRecipe) openRecipe(state.activeRecipe, false); });
  $('#setting-theme').addEventListener('change', event => { state.theme = event.target.checked ? 'dark' : 'light'; writeStorage(STORAGE.theme, state.theme); applyTheme(); });
  $('#theme-quick').addEventListener('click', () => { state.theme = state.theme === 'dark' ? 'light' : 'dark'; writeStorage(STORAGE.theme, state.theme); applyTheme(); });
  $('#export-data').addEventListener('click', exportData);
  $('#import-data').addEventListener('change', event => { const [file] = event.target.files; if (file) importData(file); });
  $('#install-app').addEventListener('click', async () => {
    if (!state.installPrompt) { showToast(tr('toast_install_unavailable')); return; }
    state.installPrompt.prompt();
    await state.installPrompt.userChoice;
    state.installPrompt = null;
  });
  $$('[data-close]').forEach(button => button.addEventListener('click', () => closeDialog($(`#${button.dataset.close}`))));
  $$('dialog').forEach(dialog => {
    dialog.addEventListener('click', event => {
      const rect = dialog.getBoundingClientRect();
      const outside = event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom;
      if (outside) closeDialog(dialog);
    });
    dialog.addEventListener('close', () => {
      if (dialog.id === 'recipe-dialog' && location.hash.startsWith('#recipe=')) history.replaceState(null, '', `${location.pathname}${location.search}`);
      if (!$$('dialog[open]').length) document.body.classList.remove('modal-open');
    });
  });
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); state.installPrompt = event; });
  window.addEventListener('hashchange', openRecipeFromHash);
}

function openRecipeFromHash() {
  const match = location.hash.match(/^#recipe=(.+)$/);
  if (!match) return;
  const slug = decodeURIComponent(match[1]);
  if (recipeBySlug(slug)) openRecipe(slug, false);
}

async function loadRecipes() {
  const response = await fetch('./recipes.json', { cache: 'no-store' });
  if (!response.ok) throw new Error(`recipes.json: HTTP ${response.status}`);
  const data = await response.json();
  state.baseRecipes = data.filter(recipe => recipe.status === 'verified');
}

async function init() {
  migrateLegacyData();
  applyTheme();
  bindEvents();
  try {
    await loadRecipes();
  } catch (error) {
    console.error(error);
    $('#recipe-grid').replaceChildren(makeElement('div', { class: 'empty-state' }, [
      makeElement('strong', { text: 'recipes.json non disponibile' }),
      makeElement('span', { text: 'Avvia il progetto tramite un server locale o GitHub Pages.' })
    ]));
  }
  applyLanguage();
  updateOnlineStatus();
  openRecipeFromHash();
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    navigator.serviceWorker.register('./service-worker.js').catch(error => console.warn('Service worker', error));
  }
}

init();
