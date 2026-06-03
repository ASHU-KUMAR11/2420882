const LOG_API_URL = "http://4.224.186.213/evaluation-service/logs"; // replace with actual endpoint

export async function Log(level, packageName, message) {

  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyNDAxMTAzMDEzQGNnY2poYW5qZXJpLmluIiwiZXhwIjoxNzgwNDc5NzIzLCJpYXQiOjE3ODA0Nzg4MjMsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI4ZjY5YjkwMS1lYzEyLTRjYzgtYTE0ZC0yM2Y5ZDg4NWViNzgiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJhc2hpc2gga3VtYXIiLCJzdWIiOiIwZWUxZjQ2YS1lMjQ3LTQ1NjItYTBmMi01YzgzNmQ3NTVlZjgifSwiZW1haWwiOiIyNDAxMTAzMDEzQGNnY2poYW5qZXJpLmluIiwibmFtZSI6ImFzaGlzaCBrdW1hciIsInJvbGxObyI6IjI0MjA4ODIiLCJhY2Nlc3NDb2RlIjoibnd3c0t4IiwiY2xpZW50SUQiOiIwZWUxZjQ2YS1lMjQ3LTQ1NjItYTBmMi01YzgzNmQ3NTVlZjgiLCJjbGllbnRTZWNyZXQiOiJabk5tTXNSQlVWVFd3VWVrIn0.7648R7oZDL8md0h8JAjsC7KuGX1HjwAV26hywTaoEgA";

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
