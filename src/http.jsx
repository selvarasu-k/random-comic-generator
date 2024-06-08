
export async function getRequest(randomNum) {
    const response = await fetch(randomNum);
  
    if (!response.ok) {
      throw new Error("Failed to fetch users data");
    }
  
    const resData = await response.json();
    return resData;
  }