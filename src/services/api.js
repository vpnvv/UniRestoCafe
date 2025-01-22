export const fetchData = async () => {
    try {
      // https://zartek-task.vercel.app/api/resto-cafe
      
      const response = await fetch('./data.json');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  };

  //please note: faced network CORS error to direct fetch API response. because - A CORS error occurs when a web application tries to access data from another domain without the correct permissions. This is a security feature that prevents malicious websites from accessing sensitive data on a server. 
  //now iam using local json file. i think this issue maybe not affect in production.
  