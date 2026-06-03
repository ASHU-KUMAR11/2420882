const LOG_API_URL = "http://4.224.186.213/evaluation-service/logs"; // replace with actual endpoint

export async function Log(level, packageName, message) {

  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyNDAxMTAzMDEzQGNnY2poYW5qZXJpLmluIiwiZXhwIjoxNzgwNDgxMzEyLCJpYXQiOjE3ODA0ODA0MTIsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIxNmMwOGViMi0zZmNlLTQ5NGQtYjI3Yi1kNjRiZDI4ZTQ4ZTAiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJhc2hpc2gga3VtYXIiLCJzdWIiOiIwZWUxZjQ2YS1lMjQ3LTQ1NjItYTBmMi01YzgzNmQ3NTVlZjgifSwiZW1haWwiOiIyNDAxMTAzMDEzQGNnY2poYW5qZXJpLmluIiwibmFtZSI6ImFzaGlzaCBrdW1hciIsInJvbGxObyI6IjI0MjA4ODIiLCJhY2Nlc3NDb2RlIjoibnd3c0t4IiwiY2xpZW50SUQiOiIwZWUxZjQ2YS1lMjQ3LTQ1NjItYTBmMi01YzgzNmQ3NTVlZjgiLCJjbGllbnRTZWNyZXQiOiJabk5tTXNSQlVWVFd3VWVrIn0.ajI3qNYu_2Kz5irJ5iRoDbawacg4pNJgXi5Ya83XzuU"
  await fetch(LOG_API_URL, {

    method: "POST",

    headers: {

      "Content-Type": "application/json",

      "Authorization": `Bearer ${accessToken}`

    },

    body: JSON.stringify({

      stack: "frontend",

      level,

      package: packageName,

      message

    })

  });

}
