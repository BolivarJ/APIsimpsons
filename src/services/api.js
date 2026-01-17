const BASE_URL = 'https://thesimpsonsapi.com/api';

/**
 * Función genérica para obtener datos paginados de cualquier endpoint
 * @param {string} endpoint - El endpoint a consumir (ej: 'characters', 'episodes', 'locations')
 * @param {number} page - Número de página (default: 1)
 * @returns {Promise<Object>} Datos con estructura: { result: [], info: { pages, next, prev, count } }
 */
export const fetchData = async (endpoint, page = 1) => {
  try {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    url.searchParams.append('page', page);
    
    const response = await fetch(url.toString());
    if (!response.ok) throw new Error(`Error fetching ${endpoint}`);
    
    return await response.json();
  } catch (error) {
    console.error(`API Error (${endpoint}):`, error);
    throw error;
  }
};

//  personajes 
export const getCharacters = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/characters?page=${page}`);
    if (!response.ok) throw new Error('Error fetching characters');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// personaje por ID
export const getCharacterById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/characters/${id}`);
    if (!response.ok) throw new Error('Character not found');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

//  personajes por nombre
export const getCharactersByName = async (name) => {
  try {
    const response = await fetch(`${BASE_URL}/characters?name=${encodeURIComponent(name)}`);
    if (!response.ok) throw new Error('No characters found');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// episodios
export const getEpisodes = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/episodes?page=${page}`);
    if (!response.ok) throw new Error('Error fetching episodes');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

//  episodio por ID
export const getEpisodeById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/episodes/${id}`);
    if (!response.ok) throw new Error('Episode not found');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

//  lugares
export const getLocations = async (page = 1) => {
  try {
    const response = await fetch(`${BASE_URL}/locations?page=${page}`);
    if (!response.ok) throw new Error('Error fetching locations');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

//  lugares por ID
export const getLocationById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/locations/${id}`);
    if (!response.ok) throw new Error('Location not found');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};