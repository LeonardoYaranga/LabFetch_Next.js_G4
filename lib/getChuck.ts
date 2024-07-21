export async function getChuck() {
    const headers = new Headers({ 
      "Content-Type": "application/json"
    });
  
    const requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow' as RequestRedirect
    };
  
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random?category=food", requestOptions);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return [{ id: data.id, value: data.value }];
    } catch (error) {
      console.error('Failed to fetch Chuck:', error);
      return [];
    }
  }

  