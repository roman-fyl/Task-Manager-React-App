
export const getProfileData = async (userId, request) => {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}/${request}`
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data
    } catch (error) {
      console.error(`Error fetching ${request}:`, error);
    }
  };