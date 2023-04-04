export const regName = /^[a-zA-Z]{2,}( [a-zA-Z]{2,})+$/; // Check for at least 2 words, 2 characters and more each word

export const request = async (url: string) => {
  try {
    const res = await fetch(url);
    if (res.ok) {
      const json = await res.json();
      return json;
    }
    throw new Error(res.statusText);
  } catch (error) {
    return error;
  }
};
