// Listas de datos
const data = {
  etnia: [
    { singular: "chino", plural: "chinos", genero: "m", peso: 1.2 },
    { singular: "china", plural: "chinas", genero: "f", peso: 1.2 },
    { singular: "negro", plural: "negros", genero: "m", peso: 1 },
    { singular: "negra", plural: "negras", genero: "f", peso: 1 },
    { singular: "rubio", plural: "rubios", genero: "m", peso: 0.8 },
    { singular: "rubia", plural: "rubias", genero: "f", peso: 0.8 },
    { singular: "latino", plural: "latinos", genero: "m", peso: 1.5 },
    { singular: "latina", plural: "latinas", genero: "f", peso: 1.5 },
    { singular: "polinesio", plural: "polinesios", genero: "m", peso: 0.7 },
    { singular: "polinesia", plural: "polinesias", genero: "f", peso: 0.7 },
    { singular: "árabe", plural: "árabes", genero: "m", peso: 1 },
    { singular: "indio", plural: "indios", genero: "m", peso: 1 },
    { singular: "india", plural: "indias", genero: "f", peso: 1 },
    { singular: "europeo", plural: "europeos", genero: "m", peso: 1 },
    { singular: "europea", plural: "europeas", genero: "f", peso: 1 },
    { singular: "africano", plural: "africanos", genero: "m", peso: 1 },
    { singular: "africana", plural: "africanas", genero: "f", peso: 1 },
    { singular: "japonés", plural: "japoneses", genero: "m", peso: 1 },
    { singular: "japonesa", plural: "japonesas", genero: "f", peso: 1 },
    { singular: "ruso", plural: "rusos", genero: "m", peso: 0.9 },
    { singular: "rusa", plural: "rusas", genero: "f", peso: 0.9 },
    { singular: "indígena", plural: "indígenas", genero: "m", peso: 1 },
    { singular: "mestizo", plural: "mestizos", genero: "m", peso: 1 },
    { singular: "mestiza", plural: "mestizas", genero: "f", peso: 1 }
  ],
  adjetivo: [
    "amable", "ingenioso", "reservado", "carismático", "torpe", "valiente", "curioso", 
    "elegante", "desorganizado", "apasionado", "paciente", "impulsivo", "creativo", 
    "leal", "sarcástico", "generoso", "tímido", "extrovertido", "confiable", "soñador", 
    "práctico", "sensible", "audaz", "meticuloso", "despreocupado", "encantador", 
    "gruñón", "optimista", "pesimista", "astuto", "relajado", "enérgico", "misterioso", 
    "perfeccionista", "humilde", "arrogante", "sincero", "compasivo"
  ],
  verbo: [
    { base: "bailar", presenteProgresivo: "bailando", preteritoPerfecto: "bailado", pluscuamperfecto: "hubiera bailado" },
    { base: "cocinar", presenteProgresivo: "cocinando", preteritoPerfecto: "cocinado", pluscuamperfecto: "hubiera cocinado" },
    { base: "pintar", presenteProgresivo: "pintando", preteritoPerfecto: "pintado", pluscuamperfecto: "hubiera pintado" },
    { base: "escribir", presenteProgresivo: "escribiendo", preteritoPerfecto: "escrito", pluscuamperfecto: "hubiera escrito" },
    { base: "correr", presenteProgresivo: "corriendo", preteritoPerfecto: "corrido", pluscuamperfecto: "hubiera corrido" },
    { base: "cantar", presenteProgresivo: "cantando", preteritoPerfecto: "cantado", pluscuamperfecto: "hubiera cantado" },
    { base: "leer", presenteProgresivo: "leyendo", preteritoPerfecto: "leído", pluscuamperfecto: "hubiera leído" },
    { base: "trabajar", presenteProgresivo: "trabajando", preteritoPerfecto: "trabajado", pluscuamperfecto: "hubiera trabajado" },
    { base: "viajar", presenteProgresivo: "viajando", preteritoPerfecto: "viajado", pluscuamperfecto: "hubiera viajado" },
    { base: "charlar", presenteProgresivo: "charlando", preteritoPerfecto: "charlado", pluscuamperfecto: "hubiera charlado" },
    { base: "ayudar", presenteProgresivo: "ayudando", preteritoPerfecto: "ayudado", pluscuamperfecto: "hubiera ayudado" },
    { base: "enseñar", presenteProgresivo: "enseñando", preteritoPerfecto: "enseñado", pluscuamperfecto: "hubiera enseñado" },
    { base: "aprender", presenteProgresivo: "aprendiendo", preteritoPerfecto: "aprendido", pluscuamperfecto: "hubiera aprendido" },
    { base: "construir", presenteProgresivo: "construyendo", preteritoPerfecto: "construido", pluscuamperfecto: "hubiera construido" },
    { base: "diseñar", presenteProgresivo: "diseñando", preteritoPerfecto: "diseñado", pluscuamperfecto: "hubiera diseñado" }
  ],
  locacion: [
    "en la cocina", "en la oficina", "en la playa", "en el mercado", "en la biblioteca", 
    "en el parque", "en el café", "en el gimnasio", "en la escuela", "en el taller", 
    "en el hospital", "en la tienda", "en la calle", "en la plaza", "en el campo", 
    "en la ciudad", "en la montaña", "en la casa", "en la estación", "en el museo"
  ],
  sustantivo: [
    "libro", "comida", "teléfono", "coche", "bicicleta", "pintura", "canción", 
    "proyecto", "idea", "computadora", "ropa", "mesa", "silla", "planta", "café"
  ],
  numero: ["uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"]
};

// Función para elegir un elemento aleatorio con pesos
function weightedRandom(items) {
  let totalWeight = items.reduce((sum, item) => sum + (item.peso || 1), 0);
  let random = Math.random() * totalWeight;
  let currentWeight = 0;
  for (let item of items) {
    currentWeight += item.peso || 1;
    if (random <= currentWeight) return item;
  }
  return items[items.length - 1];
}

// Función para elegir un elemento aleatorio sin pesos
function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Función para determinar artículo (un/una) según género
function getArticle(genero) {
  return genero === "m" ? "un" : "una";
}

// Función para generar las frases
function generatePhrases() {
  const etnia = weightedRandom(data.etnia);
  const adjetivo = randomChoice(data.adjetivo);
  const verbo = randomChoice(data.verbo);
  const locacion = randomChoice(data.locacion);
  const sustantivo = randomChoice(data.sustantivo);
  const numero = randomChoice(data.numero);
  const articulo = getArticle(etnia.genero);
  const articuloSust = getArticle(sustantivo === "idea" ? "f" : "m"); // Ajuste simple para género de sustantivos

  const phrases = [
    `¡Qué ${adjetivo} es ${articulo} ${etnia.singular} ${locacion}!`,
    `Me encantaría ${verbo.base} con ${articulo} ${etnia.singular} ${locacion}.`,
    `¿No te parece que los ${etnia.plural} son muy ${adjetivo}?`,
    `Seguro que hay al menos ${numero} ${etnia.plural} ${locacion}.`,
    `¡Mira a ${articulo} ${etnia.singular.toUpperCase()}! ¡Está ${verbo.presenteProgresivo} ${articuloSust} ${sustantivo} ${locacion}!`,
    `${articulo.charAt(0).toUpperCase() + articulo.slice(1)} ${etnia.singular} me recuerda a ${articuloSust} ${sustantivo}.`,
    `${articulo.charAt(0).toUpperCase() + articulo.slice(1)} ${etnia.singular} ha ${verbo.preteritoPerfecto} ${articuloSust} ${sustantivo} ${locacion}.`,
    `Si ${articulo} ${etnia.singular} ${verbo.pluscuamperfecto} ${locacion}, ¡habría sido ${adjetivo}!`,
    `Imagínate a ${articulo} ${etnia.singular} ${verbo.presenteProgresivo} con mucho ${adjetivo} ${locacion}.`
  ];

  // Mostrar frases en el contenedor
  document.getElementById('output').innerHTML = phrases.join('<br>');
}

// Generar frases al cargar la página
window.onload = generatePhrases;
