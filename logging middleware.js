const LOG_API_URL = "http://4.224.186.213/evaluation-service/logs"; // replace with actual endpoint

export async function Log(level, packageName, message) {
  try {
    await fetch(LOG_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stack: "frontend",
        level,
        package: packageName,
        message,
      }),
    });
  } catch (error) {
    console.error("Failed to send log:", error);
  }
}
